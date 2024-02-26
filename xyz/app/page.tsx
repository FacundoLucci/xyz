import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          Facundo Lucci
        </h1>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          Current work in progress 🚧. Find me at x.com/facundolucci.
        </p>
      </div>
    </main>
  );
}
