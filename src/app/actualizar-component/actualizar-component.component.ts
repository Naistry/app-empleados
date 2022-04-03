import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent implements OnInit {


  constructor(private router: Router,private route:ActivatedRoute ,private empleadosService : EmpleadosService) { }
  
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice:number;
  empleados:Empleado [] = [];
 
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados; 

    this.indice= this.route.snapshot.params['id'];

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  actualizarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
    this.empleadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
  }

  eliminarEmpleado(){
    this.empleadosService.eliminarEmpleadoServicio(this.indice);
  }
  volverHome(){
    this.router.navigate(['']);
  }

  
}
