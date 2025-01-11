"use client";
import React, { useContext, useEffect } from "react";
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

const UpdateCarta = () => {
  const {
    updateModal,
    setUpdateModal,
    carta,
    setCarta,
    handleUpdate,
    handleChange,
    handleStyle,
    loadingUpdate,
  } = useContext(CartaContext);

  return (
    <Dialog open={updateModal} onOpenChange={setUpdateModal}>
      <DialogContent
        className="max-w-[80%] sm:w-[60%] overflow-y-auto"
        aria-describedby="add-task-description"
        aria-hidden="undefined"
      >
        <DialogHeader>
          <DialogTitle>Actualizar carta</DialogTitle>
          <DialogDescription>
            Para actulizar la cartita debes editar los siguientes datos:
          </DialogDescription>
        </DialogHeader>
        <div
          className={`${
            loadingUpdate ? "opacity-0" : "opacity-100"
          } transition-all duration-100`}
        >
          <form onSubmit={handleUpdate} className="space-y-4">
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
                    defaultValue={carta?.color?.tipo}
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
                    value={carta?.de || ""}
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
                    value={carta?.para || ""}
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
                    value={carta?.izquierda || ""}
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
                    value={carta?.derecha || ""}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCarta;
