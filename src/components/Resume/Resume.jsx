import { BookText, Briefcase, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Experience from "./Experience";

const experience = [
  { title: "Backend", color: "bg-red", percentage: 70 },
  { title: "Frontend", color: "bg-primary", percentage: 75 },
  { title: "FullStack", color: "bg-yellow", percentage: 70 },
  { title: "Diseño Web", color: "bg-red", percentage: 72 },
  { title: "Base de datos", color: "bg-primary", percentage: 65 },
  { title: "Análisis de datos", color: "bg-yellow", percentage: 65 },
];

const knowledges = [
  { name: "Python" },
  { name: "Django" },
  { name: "JavaScript" },
  { name: "Express" },
  { name: "React" },
  { name: "Angular" },
  { name: "Astro" },
  { name: "NextJs" },
  { name: "Vue" },
  { name: "Dart" },
  { name: "Flutter" },
  { name: "PostgreSQL" },
  { name: "PMySQL" },
  { name: "SQL Server" },
  { name: "MongoDB" },
  { name: "Hadoop" },
  { name: "Spark" },
  { name: "DataBricks" },
  { name: "BigQuery" },
  { name: "Docker" },
];

const Resume = () => {
  return (
    <div className="mb-6 pb-8 lg:mb-0 mx-auto rounded-xl px-5 sm:px-0 h-fit bg-background">
      <div className="pt-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="text-primary" size={40} />
              <h4 className="text-2xl dark:text-white font-medium">Eduación</h4>
            </div>
            <Card className="bg-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-md text-right">
                  2019-2024
                </CardTitle>
                <CardDescription className="flex flex-col">
                  <span className="text-xl text-primary">Ingeniería civil en Informática</span>
                  <span className="text-base text-muted-foreground">
                    Universidad Autónoma de Chile
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-md text-right">
                  2017
                </CardTitle>
                <CardDescription className="flex flex-col">
                  <span className="text-xl text-primary">Técnico en Telecomunicaciones</span>
                  <span className="text-base text-muted-foreground">
                    Colegio Juan Luis Undurraga Aninat
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-md text-right">
                  2012-2016
                </CardTitle>
                <CardDescription className="flex flex-col">
                  <span className="text-xl text-primary">Enseñanza Media</span>
                  <span className="text-base text-muted-foreground">
                    Colegio Juan Luis Undurraga Aninat
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="text-primary" size={40} />
              <h4 className="text-2xl dark:text-white font-medium">
                Experiencia
              </h4>
            </div>
            <Experience />
          </div>
        </div>
      </div>
      <div className="pt-6 px-2 sm:px-5 md:px-10 lg:px-14 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 h-full">
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="text-primary" size={40} />
              <h4 className="text-2xl dark:text-white font-medium">
                Habilidades
              </h4>
            </div>
            <Card className="bg-secondary shadow-lg p-4 pt-0 flex-grow flex flex-col">
              {experience.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex justify-between py-3">
                      <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                        {item.title}
                      </span>
                      <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="bg-primary-foreground w-full h-2 rounded-lg">
                      <div
                        className={`${item.color} h-2 rounded-lg`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-2 mb-4">
              <BookText className="text-primary" size={38} />
              <h4 className="text-2xl dark:text-white font-medium">
                Conocimientos
              </h4>
            </div>
            <Card className="bg-secondary shadow-lg p-4 pt-0 flex-grow flex flex-col">
              <CardDescription className="flex gap-x-3 p-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                {knowledges.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="text-lg bg-primary-foreground dark:bg-primary dark:font-semibold text-primary dark:text-secondary p-2 rounded-lg"
                    >
                      {item.name}
                    </span>
                  );
                })}
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
