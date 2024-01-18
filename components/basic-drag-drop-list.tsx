"use client";

import React, { useRef, useState } from "react";

export default function BasicDragDropList() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Learn JavaScript",
      content: "It is time to learn javascript!",
    },
    { id: 2, name: "Learn React", content: "It is time to learn react!" },
    {
      id: 3,
      name: "Build a cool app",
      content: "It is time to build a cool app!",
    },
    { id: 4, name: "Ship it!", content: "It is time to ship it!" },
  ]);

  const dragPerson = useRef<number>(0);
  const draggedOverPerson = useRef<number>(0);

  function handleSort() {
    const peopleClone = [...people];

    const temp = peopleClone[dragPerson.current];
    peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
    peopleClone[draggedOverPerson.current] = temp;

    setPeople(peopleClone);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        {people.map((person, index) => (
          <div
            className="relative flex space-x-3 border rounded p-2 bg-gray-100 text-gray-900"
            draggable
            onDragStart={() => (dragPerson.current = index)}
            onDragEnter={() => (draggedOverPerson.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
