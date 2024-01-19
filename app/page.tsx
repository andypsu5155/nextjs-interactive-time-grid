import BasicDragDropList from "@/components/basic-drag-drop-list";
import InteractiveTimeGrid from "@/components/interactive-time-grid";
import ReactBeautifulDnd from "@/components/react-beautiful-dnd";
import SchedulerComponent from "@/components/scheduler-component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5">
      <h1>
        This is where I am going to try to develop my own interactive time grid!
      </h1>
      <p>I'm going to add the component in below:</p>
      <ReactBeautifulDnd />
    </main>
  );
}
