"use client";
import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ThemeToggler from "../Header/ThemeToggler";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen border-r shadow-sm sticky top-0">
      <nav className="h-full w-[270px] flex flex-col justify-between">
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
        <TabsList className="flex-1 py-2 px-2 flex flex-col gap-y-3 justify-start my-2 overflow-y-auto no-scrollbar">
          <TabsTrigger value="python" className="w-full">
            PYTHON
          </TabsTrigger>
          <TabsTrigger value="json" className="w-full">
            JSON
          </TabsTrigger>
          <TabsTrigger value="javascript" className="w-full">
            JAVASCRIPT
          </TabsTrigger>
          <TabsTrigger value="react" className="w-full">
            REACT
          </TabsTrigger>
          <TabsTrigger value="select" className="w-full">
            SELECT AND SELECT DISTINCT
          </TabsTrigger>
          <TabsTrigger value="order&where" className="w-full">
            ORDER BY AND WHERE
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Password
          </TabsTrigger>
        </TabsList>
        <div className="border-t flex p-3 items-center justify-between">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CNa</AvatarFallback>
          </Avatar>
          <h4 className="font-semibold">Bryan Urrutia</h4>
          <ThemeToggler />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
