import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          Facundo Lucci
        </h1>
        <p className={`m-0 max-w-[30ch] text-sm text-stone-300 text-balance`}>
          Current work in progress. 
          <br />
          Find me at <a className={'underline text-blue-200 hover:text-blue-300 visited:text-stone-500'} href="https://x.com/facundolucci">x.com/facundolucci</a>.
        </p>
      </div>
    </main>
  );
}