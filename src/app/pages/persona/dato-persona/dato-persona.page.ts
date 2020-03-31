import {Component, OnInit} from '@angular/core';
import {ModeloPersona, ModeloTipoUsuarioPersona} from '../../../classes/persona/TipoUsuarioPersona';
import {Util} from '../../../modules/system/generic/classes/util';
import {PersonaService} from '../../../services/persona/persona.service';
import {TipoUsuarioPersonaService} from '../../../services/persona/tipo-usuario-persona.service';
import {TipoUsuarioService} from '../../../services/persona/tipo-usuario.service';
import {Sector} from '../../../classes/persona/Sector';
import {SectorService} from '../../../services/persona/sector.service';
import {ModalController} from '@ionic/angular';
import {PhotoProfilePage} from '../../photo-profile/photo-profile.page';

@Component({
    selector: 'app-dato-persona',
    templateUrl: './dato-persona.page.html',
    styleUrls: ['./dato-persona.page.scss'],
})
export class DatoPersonaPage implements OnInit {
    objPersona: ModeloPersona;
    lstPersona: ModeloPersona[];
    lstSectores: Sector[];
    lstTipoUsuarioPersona: ModeloTipoUsuarioPersona[];

    constructor(private svrUtil: Util, private svrPersona: PersonaService,
                private svrSector: SectorService, private modalCtrl: ModalController,
                private svrPersonaUsuario: TipoUsuarioPersonaService, private svrTipoUsuario: TipoUsuarioService) {
    }

    async selecionPersona(persona: string) {
        this.lstTipoUsuarioPersona = await this.svrPersonaUsuario.obtenerPorPersona(persona);
    }

    async ngOnInit() {
        this.lstPersona = await this.svrPersona.obtenerTodos();
        this.lstSectores = await this.svrSector.obtenerSectores();
    }

    async abrirModal() {
        const modal = await this.modalCtrl.create({
            component: PhotoProfilePage,
            componentProps: {title: 's', tipoError: 's', mensaje: 'mensajeError'}
        });
        await modal.present();
        const {data} = await modal.onDidDismiss();
    }

}
