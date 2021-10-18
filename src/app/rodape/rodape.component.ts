import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

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

}
