import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    empleados: Empleado [] = [];

    constructor(private ventanaEmergente: ServicioEmpleadosService){

    }

    agregarEmpleadoServicio(empleado: Empleado){
        this.ventanaEmergente.muestraMensaje("Persona se que se va a agregar: " + empleado.nombre)
        this.empleados.push(empleado);
    }
}