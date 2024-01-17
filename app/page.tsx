import InteractiveTimeGrid from "@/components/interactive-time-grid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5">
      <h1>
        This is where I am going to try to develop my own interactive time grid!
      </h1>
      <p>I'm going to add the component in below:</p>
      <InteractiveTimeGrid />
    </main>
  );
}
