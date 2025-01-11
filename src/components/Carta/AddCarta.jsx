"use client";
import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CartaContext } from "@/context/CartaContext";
import { Textarea } from "../ui/textarea";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddCarta = () => {
  const {
    addModal,
    setAddModal,
    setCarta,
    handleSubmit,
    handleChange,
    carta,
    handleStyle,
  } = useContext(CartaContext);

  return (
    <Dialog open={addModal} onOpenChange={setAddModal}>
      <DialogTrigger asChild>
        <div
          id="cloud"
          className="cursor-pointer"
          // onClick={() => {
          // setTask({
          //   company: "",
          //   model: "",
          //   name: "",
          //   abbreviate: "",
          //   inheritance: "",
          //   type: "",
          //   variables: [
          //     {
          //       attribute_name: "",
          //       attribute_display: "",
          //       attribute_type: "",
          //       attribute_spec: "",
          //       attribute_pre: false,
          //       attribute_validation: false,
          //     },
          //   ],
          // });
        >
          <p className="relative text-secondary z-50 text-4xl font-medium">
            Crear carta
          </p>
          <span className="shadow"></span>
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-[80%] sm:w-[60%] overflow-y-auto"
        aria-describedby="add-task-description"
      >
        <DialogHeader>
          <DialogTitle>Formulario de la tarea</DialogTitle>
          <DialogDescription>
            Crear el formulario de la tarea a partir de los siguientes datos:
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-y-6 py-4">
            <div className="grid grid-cols-2 gap-y-3 w-full">
              <div className="grid grid-cols-4 col-span-2 items-center gap-4">
                <Label htmlFor="company" className="text-center">
                  Estilo
                </Label>
                <Select
                  onValueChange={(e) => {
                    handleStyle(e);
                  }}
                >
                  <SelectTrigger className="w-full col-span-3">
                    <SelectValue placeholder="Selecciona un estilo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estilos</SelectLabel>
                      <SelectItem value="Lidia">Lidia</SelectItem>
                      <SelectItem value="Bryan">Bryan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4 ">
                <Label htmlFor="company" className="text-right">
                  Autor
                </Label>
                <Input
                  id="de"
                  name="de"
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Para
                </Label>
                <Input
                  id="para"
                  name="para"
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 col-span-2 items-center gap-4">
                <Label htmlFor="company" className="text-center">
                  Texto izquierda <br />
                  <br />
                  {carta?.izquierda.length}/580
                </Label>
                <Textarea
                  id="izquierda"
                  name="izquierda"
                  placeholder="Mensaje izquierdo de la carta"
                  onChange={handleChange}
                  maxLength={580}
                  className="col-span-3"
                />
              </div>
              <div className="relative grid grid-cols-4 col-span-2 items-center gap-4">
                <Label htmlFor="company" className="text-center">
                  Texto derecha <br />
                  <br />
                  {carta?.derecha.length}/700
                </Label>
                <Textarea
                  id="derecha"
                  placeholder="Mensaje derecho de la carta"
                  name="derecha"
                  maxLength={700}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Guardar cambios</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCarta;
