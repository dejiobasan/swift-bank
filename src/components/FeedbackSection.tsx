import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function FeedbackSection() {
  const feedback = [
    {
      name: "Amanda Lisandro",
      title: "Business Owner",
      comment:
        "Swift Bank has completely changed the way I manage my finances. Fast, reliable and genuinely easy to use.",
      rating: 3,
      image: (
        <Image
          src="/Ellipse16.png"
          alt="feedback image"
          width={150}
          height={150}
        />
      ),
    },
    {
      name: "Blessing Favor",
      title: "Graduate Student",
      comment:
        "Everything from opening my account to tracking expenses is so smooth with swift bank. It's the kind of trust you build after just one experience.",
      rating: 3,
      image: (
        <Image
          src="/Ellipse17.png"
          alt="feedback image"
          width={150}
          height={150}
        />
      ),
    },
    {
      name: "George Steph",
      title: "Photographer",
      comment:
        "With swift bank, I finally found a bank tha puts customers first. No hidden charges, no stress, just reliable service everyday",
      rating: 3,
      image: (
        <Image
          src="/Ellipse15.png"
          alt="feedback image"
          width={150}
          height={150}
        />
      ),
    },
    {
      name: "Emeka",
      title: "Freelance Designer",
      comment:
        "What I appreciate most about swift bank is the honesty. They tell you exactly what you're getting - no surprises. Just great service.",
      rating: 3,
      image: (
        <Image
          src="/Ellipse14.png"
          alt="feedback image"
          width={150}
          height={150}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-custombg3 py-16 mt-32 mb-16">
      <h2 className="text-3xl font-bold mb-2 text-center text-custom">
        Built on Trust. <br /> Driven by Integrity
      </h2>
      <p className="text-custom font-light text-xl">
        Your trust is our most valued asset.
      </p>
      <div className="grid grid-cols-2 gap-8 mt-10 mx-auto max-w-6xl">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="bg-inherit border border-white rounded-lg p-6"
          >
            <div className="flex items-center mb-4">
              {item.image}
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-custom">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-500 font-semibold">
                  {item.title}
                </p>
                <div className="flex items-center mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${i < item.rating ? "text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                </div>
              </div>
            </div>
            <p className="text-custom font-light mb-4">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
