"use client";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen border-r shadow-sm sticky top-0">
      <nav className="h-full w-[200px] flex flex-col justify-between">
        <div className="p-4 pb-4 border-b">
          <Link
            className="text-lg"
            href={
              "https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1"
            }
            target="_blank"
          >
            {" "}
            Ejercicios
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
