// pages/wiki.js o pages/wiki.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TabsContent } from "@/components/ui/tabs";
import React from "react";

const customers = [
  {
    CustomerID: 1,
    CustomerName: "Alfreds Futterkiste",
    ContactName: "Maria Anders",
    Address: "Obere Str. 57",
    City: "Berlin",
    PostalCode: "12209",
    Country: "Germany",
  },
  {
    CustomerID: 2,
    CustomerName: "Ana Trujillo Emparedados y helados",
    ContactName: "Ana Trujillo",
    Address: "Avda. de la Constitución 2222",
    City: "México D.F.",
    PostalCode: "05021",
    Country: "Mexico",
  },
  {
    CustomerID: 3,
    CustomerName: "Antonio Moreno Taquería",
    ContactName: "Antonio Moreno",
    Address: "Mataderos 2312",
    City: "México D.F.",
    PostalCode: "05023",
    Country: "Mexico",
  },
  {
    CustomerID: 4,
    CustomerName: "Around the Horn",
    ContactName: "Thomas Hardy",
    Address: "120 Hanover Sq.",
    City: "London",
    PostalCode: "WA1 1DP",
    Country: "UK",
  },
  {
    CustomerID: 5,
    CustomerName: "Berglunds snabbköp",
    ContactName: "Christina Berglund",
    Address: "Berguvsvägen 8",
    City: "Luleå",
    PostalCode: "S-958 22",
    Country: "Sweden",
  },
  {
    CustomerID: 6,
    CustomerName: "Blauer See Delikatessen",
    ContactName: "Hanna Moos",
    Address: "Forsterstr. 57",
    City: "Mannheim",
    PostalCode: "68306",
    Country: "Germany",
  },
  {
    CustomerID: 7,
    CustomerName: "Blondel père et fils",
    ContactName: "Frédérique Citeaux",
    Address: "24, place Kléber",
    City: "Strasbourg",
    PostalCode: "67000",
    Country: "France",
  },
  {
    CustomerID: 8,
    CustomerName: "Bólido Comidas preparadas",
    ContactName: "Martín Sommer",
    Address: "C/ Araquil, 67",
    City: "Madrid",
    PostalCode: "28023",
    Country: "Spain",
  },
  {
    CustomerID: 9,
    CustomerName: "Bon app'",
    ContactName: "Laurence Lebihans",
    Address: "12, rue des Bouchers",
    City: "Marseille",
    PostalCode: "13008",
    Country: "France",
  },
  {
    CustomerID: 10,
    CustomerName: "Bottom-Dollar Marketse",
    ContactName: "Elizabeth Lincoln",
    Address: "23 Tsawassen Blvd.",
    City: "Tsawassen",
    PostalCode: "T2F 8M4",
    Country: "Canada",
  },
  {
    CustomerID: 11,
    CustomerName: "B's Beverages",
    ContactName: "Victoria Ashworth",
    Address: "Fauntleroy Circus",
    City: "London",
    PostalCode: "EC2 5NT",
    Country: "UK",
  },
  {
    CustomerID: 12,
    CustomerName: "Cactus Comidas para llevar",
    ContactName: "Patricio Simpson",
    Address: "Cerrito 333",
    City: "Buenos Aires",
    PostalCode: "1010",
    Country: "Argentina",
  },
  {
    CustomerID: 13,
    CustomerName: "Centro comercial Moctezuma",
    ContactName: "Francisco Chang",
    Address: "Sierras de Granada 9993",
    City: "México D.F.",
    PostalCode: "05022",
    Country: "Mexico",
  },
  {
    CustomerID: 14,
    CustomerName: "Chop-suey Chinese",
    ContactName: "Yang Wang",
    Address: "Hauptstr. 29",
    City: "Bern",
    PostalCode: "3012",
    Country: "Switzerland",
  },
  {
    CustomerID: 15,
    CustomerName: "Comércio Mineiro",
    ContactName: "Pedro Afonso",
    Address: "Av. dos Lusíadas, 23",
    City: "São Paulo",
    PostalCode: "05432-043",
    Country: "Brazil",
  },
  {
    CustomerID: 16,
    CustomerName: "Consolidated Holdings",
    ContactName: "Elizabeth Brown",
    Address: "Berkeley Gardens 12 Brewery",
    City: "London",
    PostalCode: "WX1 6LT",
    Country: "UK",
  },
  {
    CustomerID: 17,
    CustomerName: "Drachenblut Delikatessend",
    ContactName: "Sven Ottlieb",
    Address: "Walserweg 21",
    City: "Aachen",
    PostalCode: "52066",
    Country: "Germany",
  },
  {
    CustomerID: 18,
    CustomerName: "Du monde entier",
    ContactName: "Janine Labrune",
    Address: "67, rue des Cinquante Otages",
    City: "Nantes",
    PostalCode: "44000",
    Country: "France",
  },
  {
    CustomerID: 19,
    CustomerName: "Eastern Connection",
    ContactName: "Ann Devon",
    Address: "35 King George",
    City: "London",
    PostalCode: "WX3 6FW",
    Country: "UK",
  },
  {
    CustomerID: 20,
    CustomerName: "Ernst Handel",
    ContactName: "Roland Mendel",
    Address: "Kirchgasse 6",
    City: "Graz",
    PostalCode: "8010",
    Country: "Austria",
  },
  {
    CustomerID: 21,
    CustomerName: "Familia Arquibaldo",
    ContactName: "Aria Cruz",
    Address: "Rua Orós, 92",
    City: "São Paulo",
    PostalCode: "05442-030",
    Country: "Brazil",
  },
  {
    CustomerID: 22,
    CustomerName: "FISSA Fabrica Inter. Salchichas S.A.",
    ContactName: "Diego Roel",
    Address: "C/ Moralzarzal, 86",
    City: "Madrid",
    PostalCode: "28034",
    Country: "Spain",
  },
  {
    CustomerID: 23,
    CustomerName: "Folies gourmandes",
    ContactName: "Martine Rancé",
    Address: "184, chaussée de Tournai",
    City: "Lille",
    PostalCode: "59000",
    Country: "France",
  },
  {
    CustomerID: 24,
    CustomerName: "Folk och fä HB",
    ContactName: "Maria Larsson",
    Address: "Åkergatan 24",
    City: "Bräcke",
    PostalCode: "S-844 67",
    Country: "Sweden",
  },
  {
    CustomerID: 25,
    CustomerName: "Frankenversand",
    ContactName: "Peter Franken",
    Address: "Berliner Platz 43",
    City: "München",
    PostalCode: "80805",
    Country: "Germany",
  },
  {
    CustomerID: 26,
    CustomerName: "France restauration",
    ContactName: "Carine Schmitt",
    Address: "54, rue Royale",
    City: "Nantes",
    PostalCode: "44000",
    Country: "France",
  },
  {
    CustomerID: 27,
    CustomerName: "Franchi S.p.A.",
    ContactName: "Paolo Accorti",
    Address: "Via Monte Bianco 34",
    City: "Torino",
    PostalCode: "10100",
    Country: "Italy",
  },
  {
    CustomerID: 28,
    CustomerName: "Furia Bacalhau e Frutos do Mar",
    ContactName: "Lino Rodriguez",
    Address: "Jardim das rosas n. 32",
    City: "Lisboa",
    PostalCode: "1675",
    Country: "Portugal",
  },
  {
    CustomerID: 29,
    CustomerName: "Galería del gastrónomo",
    ContactName: "Eduardo Saavedra",
    Address: "Rambla de Cataluña, 23",
    City: "Barcelona",
    PostalCode: "08022",
    Country: "Spain",
  },
  {
    CustomerID: 30,
    CustomerName: "Godos Cocina Típica",
    ContactName: "José Pedro Freyre",
    Address: "C/ Romero, 33",
    City: "Sevilla",
    PostalCode: "41101",
    Country: "Spain",
  },
  {
    CustomerID: 31,
    CustomerName: "Gourmet Lanchonetes",
    ContactName: "André Fonseca",
    Address: "Av. Brasil, 442",
    City: "Campinas",
    PostalCode: "04876-786",
    Country: "Brazil",
  },
  {
    CustomerID: 32,
    CustomerName: "Great Lakes Food Market",
    ContactName: "Howard Snyder",
    Address: "2732 Baker Blvd.",
    City: "Eugene",
    PostalCode: "97403",
    Country: "USA",
  },
  {
    CustomerID: 33,
    CustomerName: "GROSELLA-Restaurante",
    ContactName: "Manuel Pereira",
    Address: "5ª Ave. Los Palos Grandes",
    City: "Caracas",
    PostalCode: "1081",
    Country: "Venezuela",
  },
  {
    CustomerID: 34,
    CustomerName: "Hanari Carnes",
    ContactName: "Mario Pontes",
    Address: "Rua do Paço, 67",
    City: "Rio de Janeiro",
    PostalCode: "05454-876",
    Country: "Brazil",
  },
  {
    CustomerID: 35,
    CustomerName: "HILARIÓN-Abastos",
    ContactName: "Carlos Hernández",
    Address: "Carrera 22 con Ave. Carlos Soublette #8-35",
    City: "San Cristóbal",
    PostalCode: "5022",
    Country: "Venezuela",
  },
  {
    CustomerID: 36,
    CustomerName: "Hungry Coyote Import Store",
    ContactName: "Yoshi Latimer",
    Address: "City Center Plaza 516 Main St.",
    City: "Elgin",
    PostalCode: "97827",
    Country: "USA",
  },
  {
    CustomerID: 37,
    CustomerName: "Hungry Owl All-Night Grocers",
    ContactName: "Patricia McKenna",
    Address: "8 Johnstown Road",
    City: "Cork",
    PostalCode: "",
    Country: "Ireland",
  },
  {
    CustomerID: 38,
    CustomerName: "Island Trading",
    ContactName: "Helen Bennett",
    Address: "Garden House Crowther Way",
    City: "Cowes",
    PostalCode: "PO31 7PJ",
    Country: "UK",
  },
  {
    CustomerID: 39,
    CustomerName: "Königlich Essen",
    ContactName: "Philip Cramer",
    Address: "Maubelstr. 90",
    City: "Brandenburg",
    PostalCode: "14776",
    Country: "Germany",
  },
  {
    CustomerID: 40,
    CustomerName: "La corne d'abondance",
    ContactName: "Daniel Tonini",
    Address: "67, avenue de l'Europe",
    City: "Versailles",
    PostalCode: "78000",
    Country: "France",
  },
  {
    CustomerID: 41,
    CustomerName: "La maison d'Asie",
    ContactName: "Annette Roulet",
    Address: "1 rue Alsace-Lorraine",
    City: "Toulouse",
    PostalCode: "31000",
    Country: "France",
  },
  {
    CustomerID: 42,
    CustomerName: "Laughing Bacchus Wine Cellars",
    ContactName: "Yoshi Tannamuri",
    Address: "1900 Oak St.",
    City: "Vancouver",
    PostalCode: "V3F 2K1",
    Country: "Canada",
  },
  {
    CustomerID: 43,
    CustomerName: "Lazy K Kountry Store",
    ContactName: "John Steel",
    Address: "12 Orchestra Terrace",
    City: "Walla Walla",
    PostalCode: "99362",
    Country: "USA",
  },
  {
    CustomerID: 44,
    CustomerName: "Lehmanns Marktstand",
    ContactName: "Renate Messner",
    Address: "Magazinweg 7",
    City: "Frankfurt a.M.",
    PostalCode: "60528",
    Country: "Germany",
  },
  {
    CustomerID: 45,
    CustomerName: "Let's Stop N Shop",
    ContactName: "Jaime Yorres",
    Address: "87 Polk St. Suite 5",
    City: "San Francisco",
    PostalCode: "94117",
    Country: "USA",
  },
  {
    CustomerID: 46,
    CustomerName: "LILA-Supermercado",
    ContactName: "Carlos González",
    Address: "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
    City: "Barquisimeto",
    PostalCode: "3508",
    Country: "Venezuela",
  },
  {
    CustomerID: 47,
    CustomerName: "LINO-Delicateses",
    ContactName: "Felipe Izquierdo",
    Address: "Ave. 5 de Mayo Porlamar",
    City: "I. de Margarita",
    PostalCode: "4980",
    Country: "Venezuela",
  },
  {
    CustomerID: 48,
    CustomerName: "Lonesome Pine Restaurant",
    ContactName: "Fran Wilson",
    Address: "89 Chiaroscuro Rd.",
    City: "Portland",
    PostalCode: "97219",
    Country: "USA",
  },
  {
    CustomerID: 49,
    CustomerName: "Magazzini Alimentari Riuniti",
    ContactName: "Giovanni Rovelli",
    Address: "Via Ludovico il Moro 22",
    City: "Bergamo",
    PostalCode: "24100",
    Country: "Italy",
  },
  {
    CustomerID: 50,
    CustomerName: "Maison Dewey",
    ContactName: "Catherine Dewey",
    Address: "Rue Joseph-Bens 532",
    City: "Bruxelles",
    PostalCode: "B-1180",
    Country: "Belgium",
  },
  {
    CustomerID: 51,
    CustomerName: "Mère Paillarde",
    ContactName: "Jean Fresnière",
    Address: "43 rue St. Laurent",
    City: "Montréal",
    PostalCode: "H1J 1C3",
    Country: "Canada",
  },
  {
    CustomerID: 52,
    CustomerName: "Morgenstern Gesundkost",
    ContactName: "Alexander Feuer",
    Address: "Heerstr. 22",
    City: "Leipzig",
    PostalCode: "04179",
    Country: "Germany",
  },
  {
    CustomerID: 53,
    CustomerName: "North/South",
    ContactName: "Simon Crowther",
    Address: "South House 300 Queensbridge",
    City: "London",
    PostalCode: "SW7 1RZ",
    Country: "UK",
  },
  {
    CustomerID: 54,
    CustomerName: "Océano Atlántico Ltda.",
    ContactName: "Yvonne Moncada",
    Address: "Ing. Gustavo Moncada 8585 Piso 20-A",
    City: "Buenos Aires",
    PostalCode: "1010",
    Country: "Argentina",
  },
  {
    CustomerID: 55,
    CustomerName: "Old World Delicatessen",
    ContactName: "Rene Phillips",
    Address: "2743 Bering St.",
    City: "Anchorage",
    PostalCode: "99508",
    Country: "USA",
  },
  {
    CustomerID: 56,
    CustomerName: "Ottilies Käseladen",
    ContactName: "Henriette Pfalzheim",
    Address: "Mehrheimerstr. 369",
    City: "Köln",
    PostalCode: "50739",
    Country: "Germany",
  },
  {
    CustomerID: 57,
    CustomerName: "Paris spécialités",
    ContactName: "Marie Bertrand",
    Address: "265, boulevard Charonne",
    City: "Paris",
    PostalCode: "75012",
    Country: "France",
  },
  {
    CustomerID: 58,
    CustomerName: "Pericles Comidas clásicas",
    ContactName: "Guillermo Fernández",
    Address: "Calle Dr. Jorge Cash 321",
    City: "México D.F.",
    PostalCode: "05033",
    Country: "Mexico",
  },
  {
    CustomerID: 59,
    CustomerName: "Piccolo und mehr",
    ContactName: "Georg Pipps",
    Address: "Geislweg 14",
    City: "Salzburg",
    PostalCode: "5020",
    Country: "Austria",
  },
  {
    CustomerID: 60,
    CustomerName: "Princesa Isabel Vinhoss",
    ContactName: "Isabel de Castro",
    Address: "Estrada da saúde n. 58",
    City: "Lisboa",
    PostalCode: "1756",
    Country: "Portugal",
  },
  {
    CustomerID: 61,
    CustomerName: "Que Delícia",
    ContactName: "Bernardo Batista",
    Address: "Rua da Panificadora, 12",
    City: "Rio de Janeiro",
    PostalCode: "02389-673",
    Country: "Brazil",
  },
  {
    CustomerID: 62,
    CustomerName: "Queen Cozinha",
    ContactName: "Lúcia Carvalho",
    Address: "Alameda dos Canàrios, 891",
    City: "São Paulo",
    PostalCode: "05487-020",
    Country: "Brazil",
  },
  {
    CustomerID: 63,
    CustomerName: "QUICK-Stop",
    ContactName: "Horst Kloss",
    Address: "Taucherstraße 10",
    City: "Cunewalde",
    PostalCode: "01307",
    Country: "Germany",
  },
  {
    CustomerID: 64,
    CustomerName: "Rancho grande",
    ContactName: "Sergio Gutiérrez",
    Address: "Av. del Libertador 900",
    City: "Buenos Aires",
    PostalCode: "1010",
    Country: "Argentina",
  },
  {
    CustomerID: 65,
    CustomerName: "Rattlesnake Canyon Grocery",
    ContactName: "Paula Wilson",
    Address: "2817 Milton Dr.",
    City: "Albuquerque",
    PostalCode: "87110",
    Country: "USA",
  },
  {
    CustomerID: 66,
    CustomerName: "Reggiani Caseifici",
    ContactName: "Maurizio Moroni",
    Address: "Strada Provinciale 124",
    City: "Reggio Emilia",
    PostalCode: "42100",
    Country: "Italy",
  },
  {
    CustomerID: 67,
    CustomerName: "Ricardo Adocicados",
    ContactName: "Janete Limeira",
    Address: "Av. Copacabana, 267",
    City: "Rio de Janeiro",
    PostalCode: "02389-890",
    Country: "Brazil",
  },
  {
    CustomerID: 68,
    CustomerName: "Richter Supermarkt",
    ContactName: "Michael Holz",
    Address: "Grenzacherweg 237",
    City: "Genève",
    PostalCode: "1203",
    Country: "Switzerland",
  },
  {
    CustomerID: 69,
    CustomerName: "Romero y tomillo",
    ContactName: "Alejandra Camino",
    Address: "Gran Vía, 1",
    City: "Madrid",
    PostalCode: "28001",
    Country: "Spain",
  },
  {
    CustomerID: 70,
    CustomerName: "Santé Gourmet",
    ContactName: "Jonas Bergulfsen",
    Address: "Erling Skakkes gate 78",
    City: "Stavern",
    PostalCode: "4110",
    Country: "Norway",
  },
  {
    CustomerID: 71,
    CustomerName: "Save-a-lot Markets",
    ContactName: "Jose Pavarotti",
    Address: "187 Suffolk Ln.",
    City: "Boise",
    PostalCode: "83720",
    Country: "USA",
  },
  {
    CustomerID: 72,
    CustomerName: "Seven Seas Imports",
    ContactName: "Hari Kumar",
    Address: "90 Wadhurst Rd.",
    City: "London",
    PostalCode: "OX15 4NB",
    Country: "UK",
  },
  {
    CustomerID: 73,
    CustomerName: "Simons bistro",
    ContactName: "Jytte Petersen",
    Address: "Vinbæltet 34",
    City: "København",
    PostalCode: "1734",
    Country: "Denmark",
  },
  {
    CustomerID: 74,
    CustomerName: "Spécialités du monde",
    ContactName: "Dominique Perrier",
    Address: "25, rue Lauriston",
    City: "Paris",
    PostalCode: "75016",
    Country: "France",
  },
  {
    CustomerID: 75,
    CustomerName: "Split Rail Beer & Ale",
    ContactName: "Art Braunschweiger",
    Address: "P.O. Box 555",
    City: "Lander",
    PostalCode: "82520",
    Country: "USA",
  },
  {
    CustomerID: 76,
    CustomerName: "Suprêmes délices",
    ContactName: "Pascale Cartrain",
    Address: "Boulevard Tirou, 255",
    City: "Charleroi",
    PostalCode: "B-6000",
    Country: "Belgium",
  },
  {
    CustomerID: 77,
    CustomerName: "The Big Cheese",
    ContactName: "Liz Nixon",
    Address: "89 Jefferson Way Suite 2",
    City: "Portland",
    PostalCode: "97201",
    Country: "USA",
  },
  {
    CustomerID: 78,
    CustomerName: "The Cracker Box",
    ContactName: "Liu Wong",
    Address: "55 Grizzly Peak Rd.",
    City: "Butte",
    PostalCode: "59801",
    Country: "USA",
  },
  {
    CustomerID: 79,
    CustomerName: "Toms Spezialitäten",
    ContactName: "Karin Josephs",
    Address: "Luisenstr. 48",
    City: "Münster",
    PostalCode: "44087",
    Country: "Germany",
  },
  {
    CustomerID: 80,
    CustomerName: "Tortuga Restaurante",
    ContactName: "Miguel Angel Paolino",
    Address: "Avda. Azteca 123",
    City: "México D.F.",
    PostalCode: "05033",
    Country: "Mexico",
  },
  {
    CustomerID: 81,
    CustomerName: "Tradição Hipermercados",
    ContactName: "Anabela Domingues",
    Address: "Av. Inês de Castro, 414",
    City: "São Paulo",
    PostalCode: "05634-030",
    Country: "Brazil",
  },
  {
    CustomerID: 82,
    CustomerName: "Trail's Head Gourmet Provisioners",
    ContactName: "Helvetius Nagy",
    Address: "722 DaVinci Blvd.",
    City: "Kirkland",
    PostalCode: "98034",
    Country: "USA",
  },
  {
    CustomerID: 83,
    CustomerName: "Vaffeljernet",
    ContactName: "Palle Ibsen",
    Address: "Smagsløget 45",
    City: "Århus",
    PostalCode: "8200",
    Country: "Denmark",
  },
  {
    CustomerID: 84,
    CustomerName: "Victuailles en stock",
    ContactName: "Mary Saveley",
    Address: "2, rue du Commerce",
    City: "Lyon",
    PostalCode: "69004",
    Country: "France",
  },
  {
    CustomerID: 85,
    CustomerName: "Vins et alcools Chevalier",
    ContactName: "Paul Henriot",
    Address: "59 rue de l'Abbaye",
    City: "Reims",
    PostalCode: "51100",
    Country: "France",
  },
  {
    CustomerID: 86,
    CustomerName: "Die Wandernde Kuh",
    ContactName: "Rita Müller",
    Address: "Adenauerallee 900",
    City: "Stuttgart",
    PostalCode: "70563",
    Country: "Germany",
  },
  {
    CustomerID: 87,
    CustomerName: "Wartian Herkku",
    ContactName: "Pirkko Koskitalo",
    Address: "Torikatu 38",
    City: "Oulu",
    PostalCode: "90110",
    Country: "Finland",
  },
  {
    CustomerID: 88,
    CustomerName: "Wellington Importadora",
    ContactName: "Paula Parente",
    Address: "Rua do Mercado, 12",
    City: "Resende",
    PostalCode: "08737-363",
    Country: "Brazil",
  },
  {
    CustomerID: 89,
    CustomerName: "White Clover Markets",
    ContactName: "Karl Jablonski",
    Address: "305 - 14th Ave. S. Suite 3B",
    City: "Seattle",
    PostalCode: "98128",
    Country: "USA",
  },
  {
    CustomerID: 90,
    CustomerName: "Wilman Kala",
    ContactName: "Matti Karttunen",
    Address: "Keskuskatu 45",
    City: "Helsinki",
    PostalCode: "21240",
    Country: "Finland",
  },
  {
    CustomerID: 91,
    CustomerName: "Wolski",
    ContactName: "Zbyszek",
    Address: "ul. Filtrowa 68",
    City: "Walla",
    PostalCode: "01-012",
    Country: "Poland",
  },
];

const countrys = [
  { country: "Germany" },
  { country: "Mexico" },
  { country: "UK" },
  { country: "Sweden" },
];

const products = [
  {
    ProductID: 1,
    ProductName: "Chais",
    SupplierID: 1,
    CategoryID: 1,
    Unit: "10 boxes x 20 bags",
    Price: 18,
  },
  {
    ProductID: 2,
    ProductName: "Chang",
    SupplierID: 1,
    CategoryID: 1,
    Unit: "24 - 12 oz bottles",
    Price: 19,
  },
  {
    ProductID: 3,
    ProductName: "Aniseed Syrup",
    SupplierID: 1,
    CategoryID: 2,
    Unit: "12 - 550 ml bottles",
    Price: 10,
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    SupplierID: 2,
    CategoryID: 2,
    Unit: "48 - 6 oz jars",
    Price: 22,
  },
  {
    ProductID: 5,
    ProductName: "Chef Anton's Gumbo Mix",
    SupplierID: 2,
    CategoryID: 2,
    Unit: "36 boxes",
    Price: 21.35,
  },
  {
    ProductID: 6,
    ProductName: "Grandma's Boysenberry Spread",
    SupplierID: 3,
    CategoryID: 2,
    Unit: "12 - 8 oz jars",
    Price: 25,
  },
  {
    ProductID: 7,
    ProductName: "Uncle Bob's Organic Dried Pears",
    SupplierID: 3,
    CategoryID: 7,
    Unit: "12 - 1 lb pkgs.",
    Price: 30,
  },
  {
    ProductID: 8,
    ProductName: "Northwoods Cranberry Sauce",
    SupplierID: 3,
    CategoryID: 2,
    Unit: "12 - 12 oz jars",
    Price: 40,
  },
  {
    ProductID: 9,
    ProductName: "Mishi Kobe Niku",
    SupplierID: 4,
    CategoryID: 6,
    Unit: "18 - 500 g pkgs.",
    Price: 97,
  },
  {
    ProductID: 10,
    ProductName: "Ikura",
    SupplierID: 4,
    CategoryID: 8,
    Unit: "12 - 200 ml jars",
    Price: 31,
  },
  {
    ProductID: 11,
    ProductName: "Queso Cabrales",
    SupplierID: 5,
    CategoryID: 4,
    Unit: "1 kg pkg.",
    Price: 21,
  },
  {
    ProductID: 12,
    ProductName: "Queso Manchego La Pastora",
    SupplierID: 5,
    CategoryID: 4,
    Unit: "10 - 500 g pkgs.",
    Price: 38,
  },
  {
    ProductID: 13,
    ProductName: "Konbu",
    SupplierID: 6,
    CategoryID: 8,
    Unit: "2 kg box",
    Price: 6,
  },
  {
    ProductID: 14,
    ProductName: "Tofu",
    SupplierID: 6,
    CategoryID: 7,
    Unit: "40 - 100 g pkgs.",
    Price: 23.25,
  },
  {
    ProductID: 15,
    ProductName: "Genen Shouyu",
    SupplierID: 6,
    CategoryID: 2,
    Unit: "24 - 250 ml bottles",
    Price: 15.5,
  },
  {
    ProductID: 16,
    ProductName: "Pavlova",
    SupplierID: 7,
    CategoryID: 3,
    Unit: "32 - 500 g boxes",
    Price: 17.45,
  },
  {
    ProductID: 17,
    ProductName: "Alice Mutton",
    SupplierID: 7,
    CategoryID: 6,
    Unit: "20 - 1 kg tins",
    Price: 39,
  },
  {
    ProductID: 18,
    ProductName: "Carnarvon Tigers",
    SupplierID: 7,
    CategoryID: 8,
    Unit: "16 kg pkg.",
    Price: 62.5,
  },
  {
    ProductID: 19,
    ProductName: "Teatime Chocolate Biscuits",
    SupplierID: 8,
    CategoryID: 3,
    Unit: "10 boxes x 12 pieces",
    Price: 9.2,
  },
  {
    ProductID: 20,
    ProductName: "Sir Rodney's Marmalade",
    SupplierID: 8,
    CategoryID: 3,
    Unit: "30 gift boxes",
    Price: 81,
  },
  {
    ProductID: 21,
    ProductName: "Sir Rodney's Scones",
    SupplierID: 8,
    CategoryID: 3,
    Unit: "24 pkgs. x 4 pieces",
    Price: 10,
  },
  {
    ProductID: 22,
    ProductName: "Gustaf's Knäckebröd",
    SupplierID: 9,
    CategoryID: 5,
    Unit: "24 - 500 g pkgs.",
    Price: 21,
  },
  {
    ProductID: 23,
    ProductName: "Tunnbröd",
    SupplierID: 9,
    CategoryID: 5,
    Unit: "12 - 250 g pkgs.",
    Price: 9,
  },
  {
    ProductID: 24,
    ProductName: "Guaraná Fantástica",
    SupplierID: 10,
    CategoryID: 1,
    Unit: "12 - 355 ml cans",
    Price: 4.5,
  },
  {
    ProductID: 25,
    ProductName: "NuNuCa Nuß-Nougat-Creme",
    SupplierID: 11,
    CategoryID: 3,
    Unit: "20 - 450 g glasses",
    Price: 14,
  },
  {
    ProductID: 26,
    ProductName: "Gumbär Gummibärchen",
    SupplierID: 11,
    CategoryID: 3,
    Unit: "100 - 250 g bags",
    Price: 31.23,
  },
  {
    ProductID: 27,
    ProductName: "Schoggi Schokolade",
    SupplierID: 11,
    CategoryID: 3,
    Unit: "100 - 100 g pieces",
    Price: 43.9,
  },
  {
    ProductID: 28,
    ProductName: "Rössle Sauerkraut",
    SupplierID: 12,
    CategoryID: 7,
    Unit: "25 - 825 g cans",
    Price: 45.6,
  },
  {
    ProductID: 29,
    ProductName: "Thüringer Rostbratwurst",
    SupplierID: 12,
    CategoryID: 6,
    Unit: "50 bags x 30 sausgs.",
    Price: 123.79,
  },
  {
    ProductID: 30,
    ProductName: "Nord-Ost Matjeshering",
    SupplierID: 13,
    CategoryID: 8,
    Unit: "10 - 200 g glasses",
    Price: 25.89,
  },
  {
    ProductID: 31,
    ProductName: "Gorgonzola Telino",
    SupplierID: 14,
    CategoryID: 4,
    Unit: "12 - 100 g pkgs",
    Price: 12.5,
  },
  {
    ProductID: 32,
    ProductName: "Mascarpone Fabioli",
    SupplierID: 14,
    CategoryID: 4,
    Unit: "24 - 200 g pkgs.",
    Price: 32,
  },
  {
    ProductID: 33,
    ProductName: "Geitost",
    SupplierID: 15,
    CategoryID: 4,
    Unit: "500 g",
    Price: 2.5,
  },
  {
    ProductID: 34,
    ProductName: "Sasquatch Ale",
    SupplierID: 16,
    CategoryID: 1,
    Unit: "24 - 12 oz bottles",
    Price: 14,
  },
  {
    ProductID: 35,
    ProductName: "Steeleye Stout",
    SupplierID: 16,
    CategoryID: 1,
    Unit: "24 - 12 oz bottles",
    Price: 18,
  },
  {
    ProductID: 36,
    ProductName: "Inlagd Sill",
    SupplierID: 17,
    CategoryID: 8,
    Unit: "24 - 250 g jars",
    Price: 19,
  },
  {
    ProductID: 37,
    ProductName: "Gravad lax",
    SupplierID: 17,
    CategoryID: 8,
    Unit: "12 - 500 g pkgs.",
    Price: 26,
  },
  {
    ProductID: 38,
    ProductName: "Côte de Blaye",
    SupplierID: 18,
    CategoryID: 1,
    Unit: "12 - 75 cl bottles",
    Price: 263.5,
  },
  {
    ProductID: 39,
    ProductName: "Chartreuse verte",
    SupplierID: 18,
    CategoryID: 1,
    Unit: "750 cc per bottle",
    Price: 18,
  },
  {
    ProductID: 40,
    ProductName: "Boston Crab Meat",
    SupplierID: 19,
    CategoryID: 8,
    Unit: "24 - 4 oz tins",
    Price: 18.4,
  },
  {
    ProductID: 41,
    ProductName: "Jack's New England Clam Chowder",
    SupplierID: 19,
    CategoryID: 8,
    Unit: "12 - 12 oz cans",
    Price: 9.65,
  },
  {
    ProductID: 42,
    ProductName: "Singaporean Hokkien Fried Mee",
    SupplierID: 20,
    CategoryID: 5,
    Unit: "32 - 1 kg pkgs.",
    Price: 14,
  },
  {
    ProductID: 43,
    ProductName: "Ipoh Coffee",
    SupplierID: 20,
    CategoryID: 1,
    Unit: "16 - 500 g tins",
    Price: 46,
  },
  {
    ProductID: 44,
    ProductName: "Gula Malacca",
    SupplierID: 20,
    CategoryID: 2,
    Unit: "20 - 2 kg bags",
    Price: 19.45,
  },
  {
    ProductID: 45,
    ProductName: "Røgede sild",
    SupplierID: 21,
    CategoryID: 8,
    Unit: "1k pkg.",
    Price: 9.5,
  },
  {
    ProductID: 46,
    ProductName: "Spegesild",
    SupplierID: 21,
    CategoryID: 8,
    Unit: "4 - 450 g glasses",
    Price: 12,
  },
  {
    ProductID: 47,
    ProductName: "Zaanse koeken",
    SupplierID: 22,
    CategoryID: 3,
    Unit: "10 - 4 oz boxes",
    Price: 9.5,
  },
  {
    ProductID: 48,
    ProductName: "Chocolade",
    SupplierID: 22,
    CategoryID: 3,
    Unit: "10 pkgs.",
    Price: 12.75,
  },
  {
    ProductID: 49,
    ProductName: "Maxilaku",
    SupplierID: 23,
    CategoryID: 3,
    Unit: "24 - 50 g pkgs.",
    Price: 20,
  },
  {
    ProductID: 50,
    ProductName: "Valkoinen suklaa",
    SupplierID: 23,
    CategoryID: 3,
    Unit: "12 - 100 g bars",
    Price: 16.25,
  },
  {
    ProductID: 51,
    ProductName: "Manjimup Dried Apples",
    SupplierID: 24,
    CategoryID: 7,
    Unit: "50 - 300 g pkgs.",
    Price: 53,
  },
  {
    ProductID: 52,
    ProductName: "Filo Mix",
    SupplierID: 24,
    CategoryID: 5,
    Unit: "16 - 2 kg boxes",
    Price: 7,
  },
  {
    ProductID: 53,
    ProductName: "Perth Pasties",
    SupplierID: 24,
    CategoryID: 6,
    Unit: "48 pieces",
    Price: 32.8,
  },
  {
    ProductID: 54,
    ProductName: "Tourtière",
    SupplierID: 25,
    CategoryID: 6,
    Unit: "16 pies",
    Price: 7.45,
  },
  {
    ProductID: 55,
    ProductName: "Pâté chinois",
    SupplierID: 25,
    CategoryID: 6,
    Unit: "24 boxes x 2 pies",
    Price: 24,
  },
  {
    ProductID: 56,
    ProductName: "Gnocchi di nonna Alice",
    SupplierID: 26,
    CategoryID: 5,
    Unit: "24 - 250 g pkgs.",
    Price: 38,
  },
  {
    ProductID: 57,
    ProductName: "Ravioli Angelo",
    SupplierID: 26,
    CategoryID: 5,
    Unit: "24 - 250 g pkgs.",
    Price: 19.5,
  },
  {
    ProductID: 58,
    ProductName: "Escargots de Bourgogne",
    SupplierID: 27,
    CategoryID: 8,
    Unit: "24 pieces",
    Price: 13.25,
  },
  {
    ProductID: 59,
    ProductName: "Raclette Courdavault",
    SupplierID: 28,
    CategoryID: 4,
    Unit: "5 kg pkg.",
    Price: 55,
  },
  {
    ProductID: 60,
    ProductName: "Camembert Pierrot",
    SupplierID: 28,
    CategoryID: 4,
    Unit: "15 - 300 g rounds",
    Price: 34,
  },
  {
    ProductID: 61,
    ProductName: "Sirop d'érable",
    SupplierID: 29,
    CategoryID: 2,
    Unit: "24 - 500 ml bottles",
    Price: 28.5,
  },
  {
    ProductID: 62,
    ProductName: "Tarte au sucre",
    SupplierID: 29,
    CategoryID: 3,
    Unit: "48 pies",
    Price: 49.3,
  },
  {
    ProductID: 63,
    ProductName: "Vegie-spread",
    SupplierID: 7,
    CategoryID: 2,
    Unit: "15 - 625 g jars",
    Price: 43.9,
  },
  {
    ProductID: 64,
    ProductName: "Wimmers gute Semmelknödel",
    SupplierID: 12,
    CategoryID: 5,
    Unit: "20 bags x 4 pieces",
    Price: 33.25,
  },
  {
    ProductID: 65,
    ProductName: "Louisiana Fiery Hot Pepper Sauce",
    SupplierID: 2,
    CategoryID: 2,
    Unit: "32 - 8 oz bottles",
    Price: 21.05,
  },
  {
    ProductID: 66,
    ProductName: "Louisiana Hot Spiced Okra",
    SupplierID: 2,
    CategoryID: 2,
    Unit: "24 - 8 oz jars",
    Price: 17,
  },
  {
    ProductID: 67,
    ProductName: "Laughing Lumberjack Lager",
    SupplierID: 16,
    CategoryID: 1,
    Unit: "24 - 12 oz bottles",
    Price: 14,
  },
  {
    ProductID: 68,
    ProductName: "Scottish Longbreads",
    SupplierID: 8,
    CategoryID: 3,
    Unit: "10 boxes x 8 pieces",
    Price: 12.5,
  },
  {
    ProductID: 69,
    ProductName: "Gudbrandsdalsost",
    SupplierID: 15,
    CategoryID: 4,
    Unit: "10 kg pkg.",
    Price: 36,
  },
  {
    ProductID: 70,
    ProductName: "Outback Lager",
    SupplierID: 7,
    CategoryID: 1,
    Unit: "24 - 355 ml bottles",
    Price: 15,
  },
  {
    ProductID: 71,
    ProductName: "Fløtemysost",
    SupplierID: 15,
    CategoryID: 4,
    Unit: "10 - 500 g pkgs.",
    Price: 21.5,
  },
  {
    ProductID: 72,
    ProductName: "Mozzarella di Giovanni",
    SupplierID: 14,
    CategoryID: 4,
    Unit: "24 - 200 g pkgs.",
    Price: 34.8,
  },
  {
    ProductID: 73,
    ProductName: "Röd Kaviar",
    SupplierID: 17,
    CategoryID: 8,
    Unit: "24 - 150 g jars",
    Price: 15,
  },
  {
    ProductID: 74,
    ProductName: "Longlife Tofu",
    SupplierID: 4,
    CategoryID: 7,
    Unit: "5 kg pkg.",
    Price: 10,
  },
  {
    ProductID: 75,
    ProductName: "Rhönbräu Klosterbier",
    SupplierID: 12,
    CategoryID: 1,
    Unit: "24 - 0.5 l bottles",
    Price: 7.75,
  },
  {
    ProductID: 76,
    ProductName: "Lakkalikööri",
    SupplierID: 23,
    CategoryID: 1,
    Unit: "500 ml",
    Price: 18,
  },
  {
    ProductID: 77,
    ProductName: "Original Frankfurter grüne Soße",
    SupplierID: 12,
    CategoryID: 2,
    Unit: "12 boxes",
    Price: 13,
  },
];

const WikiPage = () => {
  function getUniqueCountries(customers) {
    return [...new Set(customers.map((customer) => customer.Country))];
  }
  const uniqueCountries = getUniqueCountries(customers);
  return (
    <div className="flex-1">
      <TabsContent value="select" className="flex flex-col gap-y-3">
        <h1 className="text-center text-2xl font-bold">
          Declaración SELECT de SQL
        </h1>
        <h3 className="text-justify">
          La declaración SELECT se utiliza para seleccionar datos de una base de
          datos.
        </h3>
        <div className="flex justify-center items-center">
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center px-1">Sintaxis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">SELECT</span>{" "}
                column1, column2, ...{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                table_name;
              </p>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-justify">
          La siguiente declaración SQL devuelve todos los registros de una tabla
          denominada "Customers":
        </h3>
        <div className="flex justify-center items-center">
          <Card className="bg-secondary py-2">
            <CardContent className="pb-0">
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">SELECT</span> *{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                CUSTOMERS;
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>CustomerID</TableHead>
                <TableHead>CustomerName</TableHead>
                <TableHead>ContactName</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>City</TableHead>
                <TableHead>PostCode</TableHead>
                <TableHead>Country</TableHead>
              </TableRow>
            </TableHeader>
            {customers.slice(0, 4).map((item, index) => (
              <TableBody key={index}>
                <TableRow>
                  <TableCell>{item.CustomerID}</TableCell>
                  <TableCell>{item.CustomerName}</TableCell>
                  <TableCell>{item.ContactName}</TableCell>
                  <TableCell>{item.Address}</TableCell>
                  <TableCell>{item.City}</TableCell>
                  <TableCell>{item.PostalCode}</TableCell>
                  <TableCell>{item.Country}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </div>
        <hr className="my-2" />
        <h1 className="text-center text-2xl font-bold">
          Declaración SELECT DISTINCT de SQL
        </h1>
        <h3 className="text-justify">
          La instrucción SELECT DISTINCT se utiliza para devolver solo valores
          distintos.
        </h3>
        <div className="flex justify-center items-center">
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center px-1">Sintaxis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">
                  SELECT DISTINCT
                </span>{" "}
                column1, column2, ...{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                table_name;
              </p>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-justify">
          La siguiente declaración SQL selecciona todos los valores distintos
          del campo "Country" de la tabla "Customers".
        </h3>
        <div className="flex justify-center items-center">
          <Card className="bg-secondary py-2">
            <CardContent className="pb-0">
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">
                  SELECT DISTINCT
                </span>{" "}
                country{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                CUSTOMERS;
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-fit border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                </TableRow>
              </TableHeader>
              {uniqueCountries.slice(0, 4).map((item, index) => (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="order&where">
        <h1 className="text-center text-2xl font-bold">ORDER BY de SQL</h1>
        <h3 className="text-justify">
          La palabra clave ORDER BY se utiliza para ordenar el conjunto de
          resultados en orden ascendente o descendente.
        </h3>
        <div className="flex justify-center items-center">
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center px-1">Sintaxis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">SELECT</span>{" "}
                column1, column2, ...{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                table_name;
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">
                  ORDER BY{" "}
                </span>{" "}
                column1, column2, ...{" "}
                <span className="text-blue not-italic font-bold">ASC|DESC</span>{" "}
                ;
              </p>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-justify my-3">
          La siguiente declaración SQL devuelve todos los registros de la tabla
          "Products" y los ordena de menor a mayor por el valor de la columna
          "PRICE"
        </h3>
        <div className="flex justify-center items-center my-3">
          <Card className="bg-secondary py-2">
            <CardContent className="pb-0">
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">SELECT</span> *{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                PRODUCTS
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">
                  ORDER BY{" "}
                </span>{" "}
                PRICE{" "}
                <span className="text-blue not-italic font-bold">ASC</span>;
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ProductID</TableHead>
                <TableHead>ProductName</TableHead>
                <TableHead>SupplierID</TableHead>
                <TableHead>CategoryID</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            {products.slice(0, 3).map((item, index) => (
              <TableBody key={index}>
                <TableRow>
                  <TableCell>{item.ProductID}</TableCell>
                  <TableCell>{item.ProductName}</TableCell>
                  <TableCell>{item.SupplierID}</TableCell>
                  <TableCell>{item.CategoryID}</TableCell>
                  <TableCell>{item.Unit}</TableCell>
                  <TableCell>{item.Price}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </div>
        <hr className="my-2" />
        <h1 className="text-center text-2xl font-bold my-2">WHERE de SQL</h1>
        <h3 className="text-justify">
          La cláusula WHERE se utiliza para filtrar registros. Se utiliza para
          extraer únicamente aquellos registros que cumplen una condición
          específica.
        </h3>
        <div className="flex justify-center items-center">
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="text-center px-1">Sintaxis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">SELECT</span>{" "}
                column1, column2, ...{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                table_name;
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">WHERE </span>{" "}
                condition;
              </p>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-justify my-3">
          La siguiente declaración SQL devuelve todos los registros de una tabla
          denominada "Customers" donde la columna "Country" tiene el valor
          'Mexico':
        </h3>
        <div className="flex justify-center items-center my-3">
          <Card className="bg-secondary py-2">
            <CardContent className="pb-0">
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">SELECT</span> *{" "}
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">FROM</span>{" "}
                CUSTOMERS
              </p>
              <p className="italic font-medium">
                <span className="text-blue not-italic font-bold">WHERE </span>{" "}
                COUNTRY = "MEXICO";
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center border rounded-lg my-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ProductID</TableHead>
                <TableHead>ProductName</TableHead>
                <TableHead>SupplierID</TableHead>
                <TableHead>CategoryID</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            {customers
              .filter((item) => item.Country === "Mexico")
              .slice(0, 3)
              .map((item, index) => (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell>{item.CustomerID}</TableCell>
                    <TableCell>{item.CustomerName}</TableCell>
                    <TableCell>{item.ContactName}</TableCell>
                    <TableCell>{item.Address}</TableCell>
                    <TableCell>{item.City}</TableCell>
                    <TableCell>{item.PostalCode}</TableCell>
                    <TableCell>{item.Country}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </div>
        <h3>
          Los siguientes operadores se pueden utilizar en la cláusula WHERE:
        </h3>
        <div className="w-full h-full flex flex-row gap-x-4 my-3 justify-center items-center">
          <div className="flex-1 h-full border rounded-lg">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Operador</TableHead>
                  <TableHead className="text-left">Descripción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{"="}</TableCell>
                  <TableCell>Igual</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{">"}</TableCell>
                  <TableCell>Mayor que</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{"<"}</TableCell>
                  <TableCell>Menor que</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{">="}</TableCell>
                  <TableCell>Mayor o igual que</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{"<="}</TableCell>
                  <TableCell>Menor o igual que</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex-1 h-full border rounded-lg">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Operador</TableHead>
                  <TableHead className="text-left">Descripción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{"<>"}</TableCell>
                  <TableCell>No igual. En algunas versiones de SQL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{"!="}</TableCell>
                  <TableCell>No igual</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{"BETWEEN"}</TableCell>
                  <TableCell>Entre un cierto rango</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{"LIKE"}</TableCell>
                  <TableCell>Buscar un patrón</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{"IN"}</TableCell>
                  <TableCell>
                    Para especificar múltiples valores posibles para una columna
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <hr className="my-2" />
      </TabsContent>
    </div>
  );
};

export default WikiPage;
