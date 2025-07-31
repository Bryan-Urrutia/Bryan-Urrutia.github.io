"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RecuerdoContext } from "@/context/RecuerdoContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RiEdit2Fill } from "react-icons/ri";
import Music from "./MusicRecuerdos";
import { PlayIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Page = () => {
  const {
    recuerdo,
    recuerdos,
    showRecuerdo,
    handleShowRecuerdo,
    handleSubmit,
    handleChange,
    handleChangeforName,
    getByIdRecuerdo,
    loadingUpdate,
    handleSong,
    handleChangeSong,
    songs,
    handleUpdate,
    handleImageUpload,
    showRecuerdos,
    selectedFlorId,
    handleFlorClick,
  } = useContext(RecuerdoContext);

  return (
    <>
      <section className="flex flex-row gap-x-4 min-h-screen bg-repeat bg-center bg-cover bg-fixed w-full p-2 mr-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="absolute">
              Crear recuerdo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[90%] md:max-w-[60%]">
            <DialogHeader>
              <DialogTitle>Crear recuerdo</DialogTitle>
              <DialogDescription>
                Para crear un recuerdo ingrese los siguientes datos:
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 pb-2">
                <div className="grid gap-3 col-span-1">
                  <Label htmlFor="recuerdo">Canción</Label>
                  <Select
                    onValueChange={(e) => {
                      handleSong(e);
                      handleChangeSong(e);
                    }}
                  >
                    <SelectTrigger className="w-full col-span-3">
                      <SelectValue placeholder="Selecciona una canción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Canciones</SelectLabel>
                        {songs.map((s, index) => (
                          <SelectItem key={index} value={s.titulo}>
                            {s.titulo}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="flor">Flor</Label>
                  <Select
                    onValueChange={(e) => {
                      handleChangeforName("tipo", e);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione una flor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flor1">flor1</SelectItem>
                      <SelectItem value="flor2">flor2</SelectItem>
                      <SelectItem value="flor3">flor3</SelectItem>
                      <SelectItem value="flor4">flor4</SelectItem>
                      <SelectItem value="flor5">flor5</SelectItem>
                      <SelectItem value="flor6">flor6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Color</Label>
                  <div className="grid grid-cols-4 gap-3 justify-items-center items-center">
                    <input
                      type="color"
                      id="color"
                      name="color"
                      className="col-span-1"
                      value={recuerdo.color}
                      onChange={handleChange}
                    />
                    <Input
                      name="color"
                      className="col-span-3"
                      value={recuerdo.color}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Petalos</Label>
                  <div className="grid grid-cols-4 gap-3 justify-items-center items-center">
                    <input
                      type="color"
                      id="color"
                      name="dot_color"
                      className="col-span-1"
                      value={recuerdo.dot_color}
                      onChange={handleChange}
                    />
                    <Input
                      name="dot_color"
                      className="col-span-3"
                      value={recuerdo.dot_color}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Fecha</Label>
                  <input
                    type="date"
                    name="fecha"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3 col-span-1">
                  <Label htmlFor="autor">Autor</Label>
                  <Input
                    name="autor"
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-3 col-span-1">
                  <Label htmlFor="titulo">Titulo</Label>
                  <Input
                    name="title"
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-3 col-span-1">
                  <Label htmlFor="imagen">Imagen</Label>
                  <Input
                    name="imagen"
                    onChange={handleImageUpload}
                    type="file"
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-3 col-span-2 pb-2">
                  <Label htmlFor="recuerdo">Recuerdo</Label>
                  <Textarea
                    name="recuerdo"
                    onChange={handleChange}
                    className="col-span-3 text-justify h-32"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <article className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-5 h-screen items-center place-items-center pt-20 md:pt-0">
          {recuerdos
            .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
            .map((flor, index) => {
              const isVisible =
                selectedFlorId === null || selectedFlorId === flor.id;

              return (
                <React.Fragment key={index}>
                  {isVisible && (
                    <>
                      <div
                        id={`recuerdo-left-${selectedFlorId}`}
                        className={`${
                          selectedFlorId ? "inline-block" : "hidden"
                        } side one recuerdo elemento transition-all duration-1000`}
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              onClick={() => {
                                getByIdRecuerdo(flor?.id);
                              }}
                              className="absolute"
                            >
                              <RiEdit2Fill />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[90%] md:max-w-[60%]">
                            <DialogHeader>
                              <DialogTitle>Editar recuerdo</DialogTitle>
                              <DialogDescription>
                                Para editar el recuerdo modifica los siguientes
                                datos:
                              </DialogDescription>
                            </DialogHeader>
                            <div
                              className={`${
                                loadingUpdate ? "opacity-0" : "opacity-100"
                              } transition-all duration-100`}
                            >
                              <form onSubmit={handleUpdate}>
                                <div className="grid grid-cols-2 gap-4 pb-4 w-full">
                                  <div className="grid gap-3">
                                    <Label htmlFor="recuerdo">Canción</Label>
                                    <Select
                                      onValueChange={(e) => {
                                        handleSong(e);
                                        handleChangeSong(e);
                                      }}
                                      value={recuerdo.song || ""}
                                    >
                                      <SelectTrigger className="w-full col-span-3">
                                        <SelectValue placeholder="Selecciona una canción" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectGroup>
                                          <SelectLabel>Canciones</SelectLabel>
                                          {songs.map((s, index) => (
                                            <SelectItem
                                              key={index}
                                              value={s.titulo}
                                            >
                                              {s.titulo}
                                            </SelectItem>
                                          ))}
                                        </SelectGroup>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid gap-3">
                                    <Label htmlFor="flor">Flor</Label>
                                    <Select
                                      onValueChange={(e) => {
                                        handleChangeforName("tipo", e);
                                      }}
                                      value={recuerdo.tipo}
                                      defaultValue={recuerdo.tipo || ""}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccione una flor" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="flor1">
                                          flor1
                                        </SelectItem>
                                        <SelectItem value="flor2">
                                          flor2
                                        </SelectItem>
                                        <SelectItem value="flor3">
                                          flor3
                                        </SelectItem>
                                        <SelectItem value="flor4">
                                          flor4
                                        </SelectItem>
                                        <SelectItem value="flor5">
                                          flor5
                                        </SelectItem>
                                        <SelectItem value="flor6">
                                          flor6
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid gap-3">
                                    <Label htmlFor="username-1">Color</Label>
                                    <div className="grid grid-cols-4 gap-3 justify-items-center items-center">
                                      <input
                                        type="color"
                                        id="color"
                                        name="color"
                                        className="col-span-1"
                                        value={recuerdo.color || "#000000"}
                                        onChange={handleChange}
                                      />
                                      <Input
                                        name="color"
                                        className="col-span-3"
                                        value={recuerdo.color || "#000000"}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>

                                  <div className="grid gap-3">
                                    <Label htmlFor="username-1">Petalos</Label>
                                    <div className="grid grid-cols-4 gap-3 justify-items-center items-center">
                                      <input
                                        type="color"
                                        id="color"
                                        name="dot_color"
                                        className="col-span-1"
                                        value={recuerdo.dot_color || "#000000"}
                                        onChange={handleChange}
                                      />
                                      <Input
                                        name="dot_color"
                                        className="col-span-3"
                                        value={recuerdo.dot_color || "#000000"}
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid gap-3">
                                    <Label htmlFor="username-1">Fecha</Label>
                                    <input
                                      type="date"
                                      name="fecha"
                                      value={recuerdo.fecha || ""}
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="grid gap-3 col-span-1">
                                    <Label htmlFor="autor">Autor</Label>
                                    <Input
                                      name="autor"
                                      onChange={handleChange}
                                      value={recuerdo.autor || ""}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid gap-3 col-span-1">
                                    <Label htmlFor="titulo">Titulo</Label>
                                    <Input
                                      name="title"
                                      onChange={handleChange}
                                      value={recuerdo.title || ""}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid gap-3 col-span-1">
                                    <Label htmlFor="imagen">Imagen</Label>
                                    <Input
                                      name="imagen"
                                      type="file"
                                      onChange={handleImageUpload}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid gap-3 col-span-2">
                                    <Label htmlFor="recuerdo">Recuerdo</Label>
                                    <Textarea
                                      name="recuerdo"
                                      onChange={handleChange}
                                      value={recuerdo.recuerdo || ""}
                                      className="col-span-3 text-justify h-32"
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    {/* <Button variant="outline">Cancel</Button> */}
                                    <Button type="submit">Save changes</Button>
                                  </DialogClose>
                                </DialogFooter>
                              </form>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <h2 className="text-secondary select-none">
                          {flor?.title}
                        </h2>
                        <p className="text-secondary pt-[0.1rem] select-none text-xl">
                          {flor?.recuerdo}
                        </p>
                      </div>
                      <div
                        onClick={() => handleFlorClick(flor?.id)}
                        className="transition-all duration-1000"
                      >
                        {flor?.tipo == "flor1" && (
                          <div className="h-96 pb-40 flex justify-center items-center">
                            <div className="flower">
                              <div
                                className="girasol leaf leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-4"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-5"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-6"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-7"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-8"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-9"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-10"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-11"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-12"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-13"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-14"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol leaf leaf-15"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="girasol dot"
                                style={{ "--dot_color": flor?.dot_color }}
                              ></div>
                              <div className="stem">
                                <div className="stemleaf leaf-0"></div>
                                <div className="stemleaf leaf-1"></div>
                              </div>
                              <div className="glass-group">
                                <div className="glass glass-1"></div>
                                <div className="glass glass-2"></div>
                                <div className="glass glass-3"></div>
                                <div className="glass glass-4"></div>
                                <div className="glass glass-5"></div>
                                <div className="glass glass-6"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {flor?.tipo == "flor2" && (
                          <div className="h-96 pb-40 flex justify-center items-center">
                            <div className="flower">
                              <div
                                className="tulipan leaf leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf leaf-4"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf leaf-5"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf leaf-6"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-7"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-8"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-9"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-10"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-11"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-12"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="tulipan leaf2 leaf-13"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div className="stem">
                                <div className="stemleaf leaf-0"></div>
                                <div className="stemleaf leaf-1"></div>
                              </div>
                              <div className="glass-group">
                                <div className="glass glass-1"></div>
                                <div className="glass glass-2"></div>
                                <div className="glass glass-3"></div>
                                <div className="glass glass-4"></div>
                                <div className="glass glass-5"></div>
                                <div className="glass glass-6"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {flor?.tipo == "flor3" && (
                          <div className="h-96 pb-40 flex justify-center items-center">
                            <div className="flower">
                              <div
                                className="flor3 leaf leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-4"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-5"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-6"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-7"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-8"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-9"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-10"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-11"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-12"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-13"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-14"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 leaf leaf-15"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor3 dot"
                                style={{ "--dot_color": flor?.dot_color }}
                              ></div>
                              <div className="stem">
                                <div className="stemleaf leaf-0"></div>
                                <div className="stemleaf leaf-1"></div>
                              </div>
                              <div className="glass-group">
                                <div className="glass glass-1"></div>
                                <div className="glass glass-2"></div>
                                <div className="glass glass-3"></div>
                                <div className="glass glass-4"></div>
                                <div className="glass glass-5"></div>
                                <div className="glass glass-6"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {flor?.tipo == "flor4" && (
                          <div className="h-96 pb-40 flex justify-center items-center">
                            <div className="flower">
                              <div
                                className="flor4 leaf leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf leaf-4"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf leaf-5"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf2 leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf2 leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf2 leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf2 leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf2 leaf-4"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 leaf2 leaf-5"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor4 dot"
                                style={{ "--dot_color": flor?.dot_color }}
                              ></div>
                              <div className="stem">
                                <div className="stemleaf leaf-0"></div>
                                <div className="stemleaf leaf-1"></div>
                              </div>
                              <div className="glass-group">
                                <div className="glass glass-1"></div>
                                <div className="glass glass-2"></div>
                                <div className="glass glass-3"></div>
                                <div className="glass glass-4"></div>
                                <div className="glass glass-5"></div>
                                <div className="glass glass-6"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {flor?.tipo == "flor5" && (
                          <div className="h-96 pb-40 flex justify-center items-center">
                            <div className="flower">
                              <div
                                className="heart leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="heart leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="heart leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="heart leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor5 dot"
                                style={{ "--dot_color": flor?.dot_color }}
                              ></div>
                              <div className="flor5 stem">
                                <div className="stemleaf leaf-0"></div>
                                <div className="stemleaf leaf-1"></div>
                              </div>
                              <div className="glass-group">
                                <div className="glass glass-1"></div>
                                <div className="glass glass-2"></div>
                                <div className="glass glass-3"></div>
                                <div className="glass glass-4"></div>
                                <div className="glass glass-5"></div>
                                <div className="glass glass-6"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {flor?.tipo == "flor6" && (
                          <div className="h-96 pb-40 flex justify-center items-center">
                            <div className="flower">
                              <div
                                className="flor6 leaf leaf-0"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-1"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-2"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-3"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-4"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-5"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-6"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-7"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-8"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-9"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-10"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-11"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-12"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-13"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-14"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor6 leaf leaf-15"
                                style={{ "--leaf_color": flor?.color }}
                              ></div>
                              <div
                                className="flor5 dot"
                                style={{ "--dot_color": flor?.dot_color }}
                              ></div>
                              <div className="flor5 stem">
                                <div className="stemleaf leaf-0"></div>
                                <div className="stemleaf leaf-1"></div>
                              </div>
                              <div className="glass-group">
                                <div className="glass glass-1"></div>
                                <div className="glass glass-2"></div>
                                <div className="glass glass-3"></div>
                                <div className="glass glass-4"></div>
                                <div className="glass glass-5"></div>
                                <div className="glass glass-6"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div
                        id={`recuerdo-right-${selectedFlorId}`}
                        className={`${
                          selectedFlorId ? "inline-block" : "hidden"
                        } side two recuerdo transition-all duration-1000 w-full flex flex-col gap-2 justify-start items-center overflow-hidden elemento`}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => {
                            getByIdRecuerdo(flor?.id);
                          }}
                          className="absolute right-0"
                        >
                          <PlayIcon />
                        </Button>
                        <div className="flex flex-col gap-y-6 py-4">
                          <h2 className="text-secondary select-none text-xl">
                            {flor?.fecha}
                          </h2>
                          <h2 className="text-secondary select-none text-xl">
                            {flor?.autor}
                          </h2>
                        </div>

                        <div>
                          {flor?.imagen && (
                            <img
                              src={flor?.imagen}
                              alt="Recuerdo"
                              width={250}
                              height="auto"
                            />
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
        </article>
        <Music />
      </section>
    </>
  );
};

export default Page;
