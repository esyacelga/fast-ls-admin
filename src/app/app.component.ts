import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Articulo',
            url: 'articulo',
            icon: 'cube'
        },
        {
            title: 'Rol',
            url: 'tipo-usuario',
            icon: 'git-branch'
        },
        {
            title: 'Rol Persona',
            url: 'rol-persona',
            icon: 'git-branch'
        },
        {
            title: 'Tipo Articulo',
            url: 'tipo-articulo',
            icon: 'cube'
        },


        {
            title: 'Sector',
            url: '/sector',
            icon: 'clipboard'
        },
        {
            title: 'Segmento',
            url: 'segmento',
            icon: 'bookmarks'
        }
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    constructor(
        private platform: Platform,
        private navCtrl: NavController,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.navCtrl.navigateRoot('articulo');
    }
}
