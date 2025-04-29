import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import {  ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <div className="bg-custombg">
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-start ml-12 mt-20">
          <h1 className="text-5xl font-bold text-custom">
            &quot;Banking. Reimagined <br /> For You&quot;
          </h1>
          <p className="text-lg font-bold text-custom mt-4">
            Swift Bank helps you save, spend and invest smarter
            <br /> with a zero hidden fees and full
            <br /> transparency.
          </p>
          <p className="text-sm text-custom mt-4 italic">
            Simple, Secure and Seamless
          </p>
          <span className="flex items-center space-x-4 mt-4">
            <button className="bg-custom border text-white px-4 py-2 rounded-2xl hover:bg-blue-400">
              Open an Account
            </button>
            <Link href="/login" className="text-custom hover:text-blue-500">
              <span className="flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRightIcon className="h-5 w-5" />
              </span>
            </Link>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center ml-auto mr-auto mt-20">
          <Image
            src="/pictureframe.png"
            alt="Hero Image"
            width={800}
            height={799}
          />
        </div>
      </div>
      {/* <hr className="bg-custom border-1 mb-6"/> */}
    </div>
  );
}
