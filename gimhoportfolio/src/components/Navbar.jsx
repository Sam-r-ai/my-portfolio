export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-900 text-white fixed top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left Side - Brand Name */}
        <h1 className="text-2xl font-bold">Gim Ho</h1>

        {/* Center - Navigation Links with Extra Spacing */}
        <ul className="hidden md:flex space-x-12 text-lg">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li className="mx-6"><a href="/about" className="hover:text-gray-400">About Me</a></li>
          <li className="mx-6"><a href="/tech-projects" className="hover:text-gray-400">Tech Projects</a></li>
          <li className="mx-6"><a href="/beyond-code" className="hover:text-gray-400">Projects Beyond Code</a></li>
        </ul>

        {/* Right Side - Contact Me Button */}
        <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg">
          Contact Me
        </a>
      </div>
    </nav>
  );
}
