import ThemeToggler from "@/components/Header/ThemeToggler";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoHomeOutline } from "react-icons/io5";
import Socials from "@/components/Sidebar/Socials";
import Info from "@/components/Sidebar/Info";
import { DownloadIcon } from "lucide-react";
import About from "@/components/About/About";
import Resume from "@/components/Resume/Resume";
import Work from "@/components/Work/Work";

const sidebar = [
  { icon: <IoHomeOutline size={22}/>, title: 'Inicio', value: 'about' },
  { icon: <IoHomeOutline size={22}/>, title: 'Resumen', value: 'resume' },
  { icon: <IoHomeOutline size={22}/>, title: 'Trabajos', value: 'works' },
  // { icon: <IoHomeOutline size={25}/>, title: 'Blog', value: 'blogs' },
  // { icon: <IoHomeOutline size={25}/>, title: 'Contacto', value: 'contact' },
]

const page = () => {
  return (
    <section className="bg-light dark:bg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div className="container bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
        <div className="w-full flex justify-end px-8">
          <ThemeToggler />
        </div>
      </div>
      <Tabs defaultValue="about">
        <div className="container grid md:flex md:gap-10 justify-between lg:mt-[50px]">
          <div className="col-span-12 lg:col-span-4 flex h-fit lg:sticky top-32">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-background text-center px-6 rounded-[20px] mt-[100px] md:mt-[100px] lg:mt-0 ">
              <img
                src="/foto.jpg"
                className="w-[150px] absolute left-[50%] transform -translate-x-[50%] h-[150px] drop-shadow-xl mx-auto rounded-[20px] -mt-[90px]"
              />
              <div className="pt-[50px] pb-8">
                <h1 className="mt-6 mb-1 text-xl font-semibold text-primary">
                  Bryan Urrutia Urzúa
                </h1>
                <h3 className="mb-4 text-primary bg-secondary shadow-lg inline-block px-5 py-1.5 text-base rounded-lg">
                  Desarrollador FullStack
                </h3>
                <Socials containerStyles={'flex justify-center gap-x-4'} iconsStyles={'shadow-lg bg-secondary rounded-lg transition-all duration-300 hover:bg-primary text-primary hover:text-primary-foreground dark:hover:text-secondary'}/>
                <Info containerStyles={'bg-secondary mt-5 rounded-lg py-2 px-4'} iconsStyles={'flex-shrink-0 flex justify-center items-center h-9 w-9 rounded-lg bg-accent shadow-md hover:bg-primary hover:text-primary-foreground dark:hover:text-foreground duration-300'}/>
                <a href="/CV_BRYAN_ALEXIS_URRUTIA_URZUA.pdf" download="/CV_BRYAN_ALEXIS_URRUTIA_URZUA.pdf" className="inline-flex items-center mx-auto duration-300 transition-all px-8 py-3 text-lg text-primary rounded-[35px] mt-4 bg-secondary hover:bg-primary hover:text-primary-foreground dark:hover:text-secondary">
                  <DownloadIcon className="mr-2"/>
                  Descargar
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:flex-1">
            <div className="w-full h-fit mt-4 lg:block p-[20px] rounded-[16px] bg-background">
              <TabsList>
                {sidebar.map((item, index) => {
                  return <TabsTrigger
                  key={index}
                  value={item.value}
                  className="w-full flex flex-col gap-y-1 justify-center items-center"
                >
                  {item.icon}
                  <span className="font-serif text-base px-4">
                    {item.title}
                  </span>
                </TabsTrigger>
                })}
              </TabsList>
            </div>
            <TabsContent value="about">
              <About />
            </TabsContent>
            <TabsContent value="resume">
              <Resume />
            </TabsContent>
            <TabsContent value="works">
              <Work />
            </TabsContent>
            <TabsContent value="blogs">
              <div className="mb-6 lg:mb-0 mx-auto lg:rounded-2xl h-[500px] bg-white dark:bg-[#111111]">
                Blogs
              </div>
            </TabsContent>
            <TabsContent value="contact">
              <div className="mb-6 lg:mb-0 mx-auto lg:rounded-2xl h-[500px] bg-white dark:bg-[#111111]">
                Contacto
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default page;
