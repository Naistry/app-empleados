import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empelados';
  empleados: Empleado [] = [

    new Empleado("Martin","Pastorino","Presidente", 7500),
    new Empleado("Ana","Planeta","Secretaria", 3000),
    new Empleado("Jimena","Hicieron","Emperatriz", 10000),
    new Empleado("David","River","Rey", 5000),
  ];
  
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;


  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }
}
