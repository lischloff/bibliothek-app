import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProjektListePageRoutingModule } from './projekt-liste-routing.module';

import { ProjektListePage } from './projekt-liste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjektListePageRoutingModule
  ],
  declarations: [ProjektListePage]
})
export class ProjektListePageModule {}
