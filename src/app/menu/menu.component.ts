import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.id = 0
    environment.nome = ''
    environment.foto = ''
    environment.token = ''
  }

}
