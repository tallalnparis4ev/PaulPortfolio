import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-[#dcdcdc] text-center">
      <div className="container mx-auto">
        <Image
          src="/paul.svg?height=150&width=150"
          alt="Paul Charlton"
          width={150}
          height={150}
          className="mx-auto rounded-full border-4 border-[#333]"
        />
        <h1 className="text-4xl font-bold mt-4">Paul Charlton</h1>
        {/* <p className="text-xl mt-2">Creator of QuickTime Player</p> */}
        <div className="mt-4 inline-block bg-[#333] text-[#f0ead6] px-4 py-2 rounded">
          Engineering Solutions Since 1987
        </div>
      </div>
    </section>
  );
}
