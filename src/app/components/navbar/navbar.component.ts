import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ConfirmarLogoutComponent } from 'src/app/confirmar-logout/confirmar-logout.component';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public authService: AuthService
  ) { }


  ngOnInit(): void {
    this.usuario();
  }

  logout() {
    const dialog= this.dialog.open(ConfirmarLogoutComponent)
    dialog.afterClosed().subscribe((Response) => {
      if(Response) {
        this.authService.signOut()
      }
    })
  }

  usuario() {
    /* console.log(this.authService.usuario()); */
    
    this.dataExpiration = this.authService.dataToken();

    this.dataExpiration.getDate();

    const dataAtual = new Date().getDate();

    const sub =  this.dataExpiration.getDate() - dataAtual;

    this.timer = new Date(sub);

  }

  dataExpiration!: Date 

  timer!: Date 

}

