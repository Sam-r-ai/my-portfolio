export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-600">Feel free to reach out to me!</p>
  
        <form className="mt-6 w-full max-w-md">
          <label className="block text-left">
            <span className="text-gray-700">Your Email</span>
            <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="example@email.com" />
          </label>
  
          <label className="block text-left mt-4">
            <span className="text-gray-700">Message</span>
            <textarea className="mt-1 p-2 w-full border rounded-md" placeholder="Write your message here..." rows="4"></textarea>
          </label>
  
          <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  