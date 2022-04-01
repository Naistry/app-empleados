import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleado.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
