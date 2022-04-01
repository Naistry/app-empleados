import { Empleado } from "./empleado.model";

export class EmpleadosService{

    empleados: Empleado [] = [];

    agregarEmpleadoServicio(empleado: Empleado){
        this.empleados.push(empleado);
    }
}