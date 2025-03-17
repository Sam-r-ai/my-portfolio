import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-white text-black">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </main>
    </>
  );
}
