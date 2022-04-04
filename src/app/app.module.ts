import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienComponentComponent } from './quien-component/quien-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.services';
import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes = [

  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualizar/:id', component:ActualizarComponentComponent},
  {path:'**',component:ErrorPersonalizadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienComponentComponent,
    ContactoComponentComponent,
    ActualizarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
