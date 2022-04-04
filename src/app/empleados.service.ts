
import { Injectable } from "@angular/core";
import { DataService } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    empleados: Empleado [] = [];

    constructor(private ventanaEmergente: ServicioEmpleadosService, private dataService:DataService){

    }


    obtenerEmpleados(){

      return this.dataService.cargarEmpleados();
    }
    agregarEmpleadoServicio(empleado: Empleado){
        this.ventanaEmergente.muestraMensaje("Persona se que se va a agregar: " + empleado.nombre)
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
    }

     
  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];

    return empleado;
  }

  actualizarEmpleadoServicio(indice: number,empleado :Empleado){
   let empleadoModificado = this.empleados[indice];

   empleadoModificado.nombre= empleado.nombre;
   empleadoModificado.apellido = empleado.apellido;
   empleadoModificado.cargo = empleado.cargo;
   empleadoModificado.salario = empleado.salario;

   

  }

  eliminarEmpleadoServicio(indice: number){
    this.empleados.splice(indice,1);
  }
}