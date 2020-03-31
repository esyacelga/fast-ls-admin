import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DatoPersonaPage} from './dato-persona.page';
import {ComponentModule} from '../../../modules/components/component.module';

const routes: Routes = [
    {
        path: '',
        component: DatoPersonaPage
    }
];

@NgModule({
    imports: [
        ComponentModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DatoPersonaPage]
})
export class DatoPersonaPageModule {
}
