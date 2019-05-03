import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProdutosResponse } from 'src/app/models/produtos/produtos-response.model';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {
  obterProdutos: Subscription;
  idProduto: string;
  modelProduto: ProdutosResponse;
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.idProduto = params.get('id');
    // });

    this.buscarProduto();
  }

  private buscarProduto(): void {
    this.obterProdutos = this.produtosService.buscarProdutoPorId(this.idProduto).subscribe(
      (data: ProdutosResponse) => {
        if (data != null) {
         this.modelProduto = data;
        }
     },
     (error) => {
       console.log(error);
     }
    );
  }

}
