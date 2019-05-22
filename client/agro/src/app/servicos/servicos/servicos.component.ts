import { Component, OnInit } from '@angular/core';
import { PedidosResponse } from 'src/app/models/servicos/pedidos-response.model';
import { Subscription } from 'rxjs';
import { ServicosService } from 'src/app/services/servicos/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  modelServicos: PedidosResponse;
  obterServicos: Subscription;
  erros = false;
  mensagemErro: string;
  constructor(
    private pedidosService: ServicosService
  ) { }

  ngOnInit() {
    this.buscarServicos();
  }

  buscarServicos(): void {
    this.obterServicos = this.pedidosService.buscarTodosPedidos().subscribe(
      (data: PedidosResponse) => {
         if (data != null) {
          this.modelServicos = data;
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro insesperado!';
      }
    );
  }

}
