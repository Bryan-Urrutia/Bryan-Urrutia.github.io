"use client";
import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ThemeToggler from "../Header/ThemeToggler";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-secondary disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary dark:text-foreground data-[state=active]:dark:text-primary-foreground duration-200 data-[state=active]:shadow-sm">
              PYTHON
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute left-[8.1rem] -top-10">
              <DropdownMenuLabel>Lenguaje Python</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <TabsTrigger value="about-python" className="w-full">
                  ¿Qué es?
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TabsTrigger value="code-python" className="w-full">
                  Algoritmos
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TabsTrigger value="django" className="w-full">
                  Framework Django
                </TabsTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-secondary disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary dark:text-foreground data-[state=active]:dark:text-primary-foreground duration-200 data-[state=active]:shadow-sm">
              FORMATOS DE SERIALIZACIÓN
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute left-[8.1rem] -top-10">
              <DropdownMenuLabel>Formatos</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <TabsTrigger value="csv" className="w-full">
                  CSV
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TabsTrigger value="json" className="w-full">
                  JSON
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TabsTrigger value="xml" className="w-full">
                  XML
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TabsTrigger value="yaml" className="w-full">
                  YAML
                </TabsTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TabsTrigger value="javascript" className="w-full">
            JAVASCRIPT
          </TabsTrigger>
          <TabsTrigger value="react" className="w-full">
            REACT
          </TabsTrigger>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-secondary disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary dark:text-foreground data-[state=active]:dark:text-primary-foreground duration-200 data-[state=active]:shadow-sm">
              SQL
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute left-[8.1rem] -top-10">
              <DropdownMenuLabel>CONSULTAS SQL</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <TabsTrigger value="select" className="w-full">
                  SELECT AND SELECT DISTINCT
                </TabsTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TabsTrigger value="order&where" className="w-full">
                  ORDER BY AND WHERE
                </TabsTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
