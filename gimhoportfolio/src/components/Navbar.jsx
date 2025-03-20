import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-900 text-white fixed top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left Side - Brand Name */}
        <h1 className="text-2xl font-bold">Gim Ho</h1>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About Me</Link></li>
          <li><Link href="/tech-projects" className="hover:text-gray-400">Tech Projects</Link></li>
          <li><Link href="/beyond-code" className="hover:text-gray-400">Projects Beyond Code</Link></li>
        </ul>

        {/* Right Side - Contact Me Button */}
        <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
