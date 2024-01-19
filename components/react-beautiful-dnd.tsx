"use client";

import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { lunches as employeeLunches } from "@/data/test-data";

export default function ReactBeautifulDnd() {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  const [lunches, setLunches] = useState(employeeLunches);

  function handleOnDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    const items = Array.from(lunches);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update the state with the new order of items
    // You can use setState or any state management library here
    setLunches(items);

    return;
  }

  return (
    <>
      {winReady ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="lunches">
            {(provided) => (
              <ul
                className="lunches"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lunches.map((lunch, index) => (
                  <Draggable
                    key={lunch.id.toString()}
                    draggableId={lunch.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="text-2xl"
                      >
                        {lunch.name}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : null}
    </>
  );
}
