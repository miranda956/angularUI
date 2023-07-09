import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/balance'] }
                ]
            },
            {
                label: 'Wallet',
                items: [
                    { label: 'Balance', icon: 'pi pi-fw pi-wallet', routerLink: ['/balance'] },

                    { label: 'Deposits', icon: 'pi pi-fw pi-id-card', routerLink: ['/deposit'] },
                    { label: 'Withdrawals', icon: 'pi pi-fw pi-check-square', routerLink: ['/withdraw'] },
                    { label: 'MiniStatement', icon: 'pi pi-fw pi-table', routerLink: ['/ministatement'] },
                    { label: 'TransferFunds', icon: 'pi pi-fw pi-arrow-right', routerLink: ['/transfer'] },

                   
                ]
            },

            
            
           
        ];
    }
}
