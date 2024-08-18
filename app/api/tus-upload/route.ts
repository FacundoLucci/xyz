// Usage: POST /api/tus-upload/route.js
import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_API_TOKEN) {
    console.error('Environment variables are not defined');
    throw new Error('Environment variables are not defined');
  }

  const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = process.env;

  const headersList = headers();

  const expiry = new Date(Date.now() + 432000 * 1000).toISOString();

  console.log(headersList.get('upload-metadata'))

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream?direct_user=true`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
          'Tus-Resumable': '1.0.0',
          'Upload-Length': headersList.get('upload-length') || '0',
          'Upload-Metadata': headersList.get('upload-metadata') || `maxDurationSeconds NjAw,expiry ${Buffer.from(expiry).toString('base64')}`,
          'Upload-Creator': headersList.get('upload-creator') || 'no-user',
        },
      }
    );

    const destination = response.headers.get('Location') || '';
    const videoId = response.headers.get('stream-media-id') || '';

    const res = new Response

    res.headers.set('Access-Control-Expose-Headers', '*');
    res.headers.set('Access-Control-Allow-Headers', '*');
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', '*');
    res.headers.set('Location', destination);
  
    return res
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}
