import {Injectable} from '@angular/core';
import {CRUD_NOTIFICACION, CRUD_NOTIFICACION_ACTUALIZAR} from '../../constantes/ConstanteTransaccional';
import {NotificacionModel} from '../../classes/notificacion/NotificacionModel';
import {OBTENER_TODOS_NOTIFICACIONES} from '../../constantes/ConstanteConsulta';
import {ExecuteCallProcedureService} from '../../modules/system/generic/service/execute-call-procedure.service';
import {RequestOptions} from '../../modules/system/generic/classes/RequestOptions';

@Injectable({
    providedIn: 'root'
})
export class NotificacionMasivaService {

    constructor(private svrGenerico: ExecuteCallProcedureService) {

    }

    async registar(notificacionModel: NotificacionModel) {
        const requestOptions = new RequestOptions();
        return await this.svrGenerico.servicioRestGenericoPost(notificacionModel, CRUD_NOTIFICACION, requestOptions) as NotificacionModel;
    }

    async actualizar(notificacionModel: NotificacionModel) {
        const requestOptions = new RequestOptions();
        return await this.svrGenerico.servicioRestGenericoPost(notificacionModel, CRUD_NOTIFICACION_ACTUALIZAR, requestOptions) as NotificacionModel;
    }

    async obtenerTodos() {
        const requestOptions = new RequestOptions();
        return await this.svrGenerico.servicioRestGenericoGet({}, OBTENER_TODOS_NOTIFICACIONES, requestOptions) as NotificacionModel[];
    }

}
