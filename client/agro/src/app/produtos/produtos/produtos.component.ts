import { ProdutosResponse } from 'src/app/models/produtos/produtos-response.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit, OnDestroy {
  obterProdutos: Subscription;
  modelProdutos: ProdutosResponse;
  erros = false;
  mensagemErro: string;
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.obterProdutos = this.produtosService.buscarTodosProdutos().subscribe(
      (data: ProdutosResponse) => {
         if (data != null) {
          this.modelProdutos = data;
         }
      },
      (error) => {
        this.erros = true;
        this.mensagemErro = 'Ocorreu um erro insesperado!';
      }
    );
  }

  ngOnDestroy(): void {
    if (this.obterProdutos) {
      this.obterProdutos.unsubscribe();
    }
  }

}
