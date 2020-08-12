import {Component, OnInit} from '@angular/core';
import {ModeloPersona, ModeloTipoUsuarioPersona} from '../../../classes/persona/TipoUsuarioPersona';
import {Util} from '../../../modules/system/generic/classes/util';
import {PersonaService} from '../../../services/persona/persona.service';
import {TipoUsuarioPersonaService} from '../../../services/persona/tipo-usuario-persona.service';
import {Sector} from '../../../classes/persona/Sector';
import {SectorService} from '../../../services/persona/sector.service';
import {ModalController} from '@ionic/angular';
import {PhotoProfilePage} from '../../photo-profile/photo-profile.page';
import {StorageAppService} from '../../../modules/system/generic/service/storage-app.service';

@Component({
    selector: 'app-dato-persona',
    templateUrl: './dato-persona.page.html',
    styleUrls: ['./dato-persona.page.scss'],
})
export class DatoPersonaPage implements OnInit {
    public objPersona: ModeloPersona;
    public lstPersona: ModeloPersona[];
    public lstSectores: Sector[];
    public modeloPersonaTipoUsuario: ModeloTipoUsuarioPersona;
    public lstTipoUsuarioPersona: ModeloTipoUsuarioPersona[];
    public objTipoUsuarioPersona: ModeloTipoUsuarioPersona;

    constructor(private svrUtil: Util,
                private svrPersona: PersonaService,
                private svtTipoUsuariPersona: TipoUsuarioPersonaService,
                private svrStorage: StorageAppService,
                private svrSector: SectorService, private modalCtrl: ModalController,
                private svrPersonaUsuario: TipoUsuarioPersonaService) {
    }

    public async selecionPersona(persona: string) {
        this.lstTipoUsuarioPersona = await this.svrPersonaUsuario.obtenerPorPersona(persona);
        if (this.lstTipoUsuarioPersona.length > 0 && this.lstTipoUsuarioPersona[0].persona && this.lstTipoUsuarioPersona[0].persona.correo) {
            this.objTipoUsuarioPersona = (await this.svtTipoUsuariPersona.obtenerPorCorreo(this.lstTipoUsuarioPersona[0].persona.correo) as ModeloTipoUsuarioPersona);
            this.svrStorage.setStorageObject(this.objTipoUsuarioPersona, 'usuario');
        }
    }

    public async ngOnInit() {
        this.lstPersona = await this.svrPersona.obtenerTodos();
        this.lstSectores = await this.svrSector.obtenerSectores();
    }

    public async abrirModal() {
        const modal = await this.modalCtrl.create({
            component: PhotoProfilePage,
            componentProps: {title: 's', tipoError: 's', mensaje: 'mensajeError'}
        });
        await modal.present();
        const {data} = await modal.onDidDismiss();
    }

}
