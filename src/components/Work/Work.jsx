'use client'
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
      image: '/musicapp.png',
      category: 'Frontend',
      name: 'App Music',
      description: 'NextJS',
      link: '/',
      github: 'https://github.com/Bryan-Urrutia/musicwebsite',
  },
  {
      image: '/carswebsite.png',
      category: 'Frontend',
      name: 'Tienda de Autos',
      description: 'Astro',
      link: '/',
      github: 'https://github.com/Bryan-Urrutia/carwebsite',
  },
  {
      image: '/ecommerce.png',
      category: 'Frontend',
      name: 'Tienda de ropa',
      description: 'NextJS',
      link: '/',
      github: 'https://github.com/Bryan-Urrutia/ecommerce',
  },
]

const uniqueCategories = ['Todos', ...new Set(projectData.map((item) => item.category))];

const Work = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('Todos');

  const filteredProjects = projectData.filter((project) => {
      return category === 'Todos'
          ? project
          : project.category === category
  });
  return (
    <div className="mb-6 lg:mb-0 mx-auto rounded-xl px-5 sm:px-0 h-fit bg-background">
      <div className="pt-12 pb-4 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-semibold text-2xl text-primary">Trabajos</h2>
      </div>
      <Tabs defaultValue={category} className="w-full px-10 pb-8">
        <TabsList className='grid h-full grid-cols-3 md:grid-cols-5 gap-2 mx-auto px-4'>
            {categories.map((category, index) => {
                return <TabsTrigger
                    onClick={() => { setCategory(category) }}
                    value={category}
                    key={index}
                    className='capitalize w-[162px] md:w-auto'>
                    {category}
                </TabsTrigger>
            })}
        </TabsList>
        <div className='text-lg grid grid-cols-1 lg:grid-cols-2 gap-4 px-5'>
            {filteredProjects.map((project, index) => {
                return <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                </TabsContent>
            })}
        </div>
    </Tabs>
    </div>
  );
};

export default Work;
