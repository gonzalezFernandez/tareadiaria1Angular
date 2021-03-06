import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { ComidasComponent } from './comidas/comidas.component';
import { DiasComponent } from './dias/dias.component';
import { MesesComponent } from './meses/meses.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    MesesComponent,
    DiasComponent,
    ComidasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
