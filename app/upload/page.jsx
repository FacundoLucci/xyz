'use client'

import { useRef, useState, useEffect, use } from 'react'
import * as tus from 'tus-js-client'

export default function Page() {
  const fileInput = useRef(null)
  const [upload, setUpload] = useState(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (upload) {
      upload.start()
    }
  }, [upload])

  const handleUpload = () => {
    let curDuration = 3600
    const file = fileInput.current.files[0]
    const expiry = new Date(new Date().getTime() + (1800) * 1000).toISOString()
    const scheduledDeletion = new Date(new Date().getTime() + (30 * 86400) * 1000).toISOString()
    const upload = new tus.Upload(file, {
      endpoint: 'http://localhost:3000/api/tus-upload',
      chunkSize: 256 * 1024 * 800,
      retryDelays: [0, 1000, 3000, 5000],
      overridePatchMethod: false,
      metadata: {
        name: file instanceof File ? file.name : '',
        maxDurationSeconds: (Math.ceil(curDuration) + 100).toString(),
        scheduledDeletion: scheduledDeletion,
        //allowedOrigins: 'watchl.ink',
        expiry: expiry
      },
      headers: {},
      //removeFingerprintOnSuccess: true,
      onError: error => {
        console.log('Failed because: ' + error)
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
        setProgress(percentage)
      },
      onSuccess: () => {
        console.log('Download %s from %s', upload.file.name, upload.url)
      }
    })

    upload.findPreviousUploads().then(previousUploads => {
      if (previousUploads.length > 0) {
        console.log('Found previous uploads')
        upload.resumeFromPreviousUpload(previousUploads[0])
      }
    })

    setUpload(upload)
  }

  return (
    <div>
      <input type="file" accept="video/*" ref={fileInput} />
      <button onClick={handleUpload}>Upload</button>
      <div>{progress}%</div>
    </div>
  )
}