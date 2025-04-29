import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function AppDemo() {
  const features = [
    {
      title: "Built-In Security",
      description: "Military-grade encryption protects every transaction.",
      image: <Image src="/Vector.png" alt="Security" width={30} height={30} />,
    },
    {
      title: "Instant Transfers",
      description: "Move money in real time across town or across borders.",
      image: (
        <Image src="/Vector(1).png" alt="Transfers" width={30} height={30} />
      ),
    },
    {
      title: "100% mobile banking",
      description:
        "Use your mobile phone to perform transactions anytime of the day.",
      image: (
        <Image
          src="/Vector(2).png"
          alt="Mobile Banking"
          width={30}
          height={30}
        />
      ),
    },
    {
      title: "Earn while you save",
      description: "Competitive interests on saving, no strings attached.",
      image: <Image src="/piggy.png" alt="Earn" width={30} height={30} />,
    },
    {
      title: "Real human support",
      description: "Talk to an expert 24/7 via chat, email or phone.",
      image: (
        <Image src="/Vector(3).png" alt="Support" width={30} height={30} />
      ),
    },
    {
      title: "No monthly fees",
      description: "Enjoy banking with zero hidden charges.",
      image: <Image src="/Vector(4).png" alt="Fees" width={30} height={30} />,
    },
  ];
  return (
    <div className="bg-custombg">
      <div className="flex flex-col items-center mt-20">
        <button className="bg-custombg2 text-custom font-semibold px-8 py-1 rounded-3xl hover:bg-yellow-200">
            What we offer
        </button>
        <h1 className="pt-2 text-3xl font-bold text-custom mt-4">
          Everything you need. <br /> Nothing you don&apos;t.
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 justify-center items-center mt-10 mx-auto max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-4 p-4 w-64"
          >
            {feature.image}
            <h2 className="text-xl font-bold text-custom mt-2">
              {feature.title}
            </h2>
            <p className="text-sm text-custom text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <button className="bg-custombg2 border text-custom font-semibold px-4 py-2 rounded-2xl hover:bg-blue-400 flex items-center space-x-2">
          <span>App Demo</span>
          <PlayCircleIcon className="h-10 w-10 text-white" />
        </button>
      </div>
    </div>
  );
}
