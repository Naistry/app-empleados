import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.miServicio.muestraMensaje("Se agrego caracteristica: "+ value);
    this.caracteristicasEmpleado.emit(value);
  }
  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}
