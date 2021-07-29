import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
