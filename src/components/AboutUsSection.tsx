import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-custombg py-16 px-6 mb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/Frame18.png"
            alt="About Us Image"
            width={300}
            height={300}
            className="rounded-xl object-cover"
          />
          <div className="absolute bottom-0 right-0 -translate-x-1/4 translate-y-45">
            <Image
              src="/Frame23.png"
              alt="About Us Image"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <Image src="/swiftlogo.png" alt="Logo" width={50} height={50} />
            <span className="ml-2 text-xl font-bold text-custom">Swift Bank</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-custom mb-4">
            Banking You Can Trust,
            <br />
            Speed You Can Count On.
          </h2>
          <p className="text-custom mb-6 font-semibold">
            Swift Bank is a forward-thinking financial institution <br />
            committed to delivering fast, secure, and intelligent <br />
            banking solutions.
          </p>
          <div className="border-l-4 border-custombg2 font-semibold pl-4 ml-10 mb-6 text-custom">
            Our mission is to empower clients with seamless <br />
            banking experiences tailored to modern needs. At <br />
            Swift Bank, we move money—and progress—swiftly.
          </div>
          <div className="flex gap-8 flex-wrap text-center ml-10">
            <div>
              <p className="text-custombg2 text-3xl font-bold">250K</p>
              <p className="text-custom text-xl font-extralight">Customers</p>
            </div>
            <div>
              <p className="text-custombg2 text-3xl font-bold">$400K</p>
              <p className="text-custom text-xl font-extralight">FDIC Insured</p>
            </div>
            <div>
              <p className="text-custombg2 text-3xl font-bold">4.8/5</p>
              <p className="text-custom text-xl font-extralight">App Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
