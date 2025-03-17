export default function Navbar() {
    return (
      <nav className="w-full p-4 bg-gray-900 text-white fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  