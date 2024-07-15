import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Clients from "./Clients";

const About = () => {
  return (
    <div className="mb-6 lg:mb-0 mx-auto rounded-xl px-5 sm:px-0 h-fit bg-background">
      <div className="pt-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="font-semibold text-2xl text-primary">Acerca de mí</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-1 items-center ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-primary text-lg leading-7 text-justify">
                Soy un Ingeniero Civil en informática de la Universidad Autónoma de chile, 
                y he trabajado tanto cómo desarrollador hasta analista de datos. Mi objetivo es encontrar un lugar en el cúal aprender nuevas experiencias y técnicas de desarrollo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-12 py-4 px-2 sm:px-5 md:px-10 lg:px-14 ">
        <h3 className="text-2xl text-primary font-medium pb-2">
          ¡Lo que hago!
        </h3>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center px-1">Desarrollador Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Algunos de los lenguajes de programación que he utilizado son Python, Java y JavaScript.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Desarrollador Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                He utilizado frameworks cómo Bootstrap , ReactJS, NextJS y un poco de Angular.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Desarrollador Fullstack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                He realizado api's tanto en Django cómo en Express para el backend y he integrado cómo frontend React.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* <Clients /> */}
    </div>
  );
};

export default About;
