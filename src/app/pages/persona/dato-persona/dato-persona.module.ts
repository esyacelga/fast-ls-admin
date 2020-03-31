import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatoPersonaPage } from './dato-persona.page';

const routes: Routes = [
  {
    path: '',
    component: DatoPersonaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatoPersonaPage]
})
export class DatoPersonaPageModule {}
