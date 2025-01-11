"use client";
import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "@/components/ui/button";
import { TaskContext } from "@/context/TaskContext";
import DeleteTask from "./DeleteTask";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Select } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const UpdateTask = () => {
  const {
    updateModal,
    setUpdateModal,
    handleUpdate,
    handleChange,
    task,
    tasks,
    handleVariableChange,
    handleVariableChangeCheckbox,
    moveVariableDown,
    moveVariableUp,
    removeVariable,
    addVariable,
    list_company,
    list_model,
    list_specs,
    list_type,
    list_type_attribute,
    setShowHerencia,
    showHerencia,
  } = useContext(TaskContext);

  return (
    <Dialog open={updateModal} onOpenChange={setUpdateModal}>
      <DialogContent
        className="sm:max-w-full"
        aria-describedby="update-task-description"
      >
        <DialogHeader>
          <DialogTitle>Formulario de la tarea</DialogTitle>
          <DialogDescription>
            Actualizar el formulario de la tarea a continuación:
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="grid gap-y-6 py-4">
            <div className="grid grid-cols-3 gap-y-3">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Empresa
                </Label>
                <Select
                  lista={list_company}
                  name={"company"}
                  value={task?.company || ""}
                  display={"compañia"}
                  search={"Buscar compañia"}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Modelo
                </Label>
                <Select
                  lista={list_model}
                  name={"model"}
                  value={task?.model || ""}
                  display={"modelo"}
                  search={"Buscar modelo"}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Tipo
                </Label>
                <Select
                  lista={list_type}
                  name={"type"}
                  value={task?.type || ""}
                  display={"Tipo de formulario"}
                  search={"Buscar tipo de formulario"}
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={task?.name || ""}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="abbreviate" className="text-right">
                  Abreviatura
                </Label>
                <Input
                  id="abbreviate"
                  name="abbreviate"
                  value={task?.abbreviate || ""}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="inheritance" className="text-right">
                  Herencia
                </Label>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowHerencia(!showHerencia);
                  }}
                >
                  Editar
                </Button>
                {showHerencia && (
                  <div className="bg-secondary right-12 top-4 pt-4 px-4 z-50 absolute h-60 w-60 text-primary p-2 rounded-sm overflow-y-scroll">
                    {tasks.map((item,idx) => (<div key={idx} className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item.name}
                      </label>
                    </div>))}
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-6 items-center gap-4">
              <Label className="text-center">Nombre</Label>
              <Label className="text-center">Display</Label>
              <Label className="text-center">Tipo de atributo</Label>
              <Label className="text-center">Especificación</Label>
              <Label className="text-center">Precargado/Validación</Label>
              <Label className="text-center">Opciones</Label>
            </div>
            <div className="h-[250px] overflow-y-auto no-scrollbar border p-2">
              {task?.variables.map((variable, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 items-center gap-x-6 mb-2"
                >
                  <Input
                    id={`attribute_name_${index}`}
                    name="attribute_name"
                    value={variable.attribute_name}
                    onChange={(e) => handleVariableChange(index, e)}
                    className="col-span-1"
                  />
                  <Input
                    id={`attribute_display_${index}`}
                    name="attribute_display"
                    value={variable.attribute_display}
                    onChange={(e) => handleVariableChange(index, e)}
                    className="col-span-1"
                  />
                  <Select
                    lista={list_type_attribute}
                    name={"attribute_type"}
                    value={variable.attribute_type}
                    display={"atributo"}
                    search={"Buscar atributo"}
                    attribute={true}
                    id={index}
                  />
                  <Select
                    lista={list_specs}
                    name={"attribute_spec"}
                    value={variable.attribute_spec}
                    display={"Especificación"}
                    search={"Buscar especificación"}
                    attribute={true}
                    id={index}
                  />
                  <div className="w-full flex justify-center items-center gap-x-6">
                    <Checkbox
                      id={`attribute_pre_${index}`}
                      checked={variable.attribute_pre}
                      onCheckedChange={(checked) => {
                        handleVariableChangeCheckbox(
                          index,
                          "attribute_pre",
                          checked
                        );
                      }}
                    />
                    <Checkbox
                      id={`attribute_validation_${index}`}
                      checked={variable.attribute_validation}
                      onCheckedChange={(checked) => {
                        handleVariableChangeCheckbox(
                          index,
                          "attribute_validation",
                          checked
                        );
                      }}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={(e) => moveVariableUp(e, index)}
                      disabled={index === 0}
                    >
                      ↑
                    </Button>
                    <Button
                      variant="outline"
                      onClick={(e) => moveVariableDown(e, index)}
                      disabled={index === task.variables.length - 1}
                    >
                      ↓
                    </Button>
                    <Button
                      variant="outline"
                      onClick={(e) => removeVariable(e, index)}
                    >
                      -
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={(e) => {
                addVariable(e);
              }}
            >
              + Añadir Atributo
            </Button>
            <DialogFooter>
              <DeleteTask />
              <Button type="submit">Guardar cambios</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTask;
