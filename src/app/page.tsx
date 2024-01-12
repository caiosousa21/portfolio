import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(129,145,170)]">
      <Header />
      <About />
    </main>
  );
}
