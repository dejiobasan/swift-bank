import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-custombg text-custom">
      <div className="flex items-center ml-12">
        <Image src="/swiftlogo.png" alt="Logo" width={50} height={50} />
        <span className="ml-1 text-xl font-bold">Swift Bank</span>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500">
            | Features
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-500">
            | About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            | Support
          </a>
        </li>
        <li>
          <a href="#login" className="hover:text-blue-500">
            | Login
          </a>
        </li>
      </ul>

      <button className="bg-inherit border text-custom px-4 py-2 rounded-2xl hover:bg-blue-200 mr-12">
        Get Started
      </button>
    </nav>
  );
}
