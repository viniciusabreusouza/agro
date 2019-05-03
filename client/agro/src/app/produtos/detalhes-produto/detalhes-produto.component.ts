import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosResponse } from 'src/app/models/produtos/produtos-response.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosRequest } from 'src/app/models/produtos/produtos-request.models';
import { StringUtil } from 'src/app/util/string.util';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {
  obterProdutos: Subscription;
  editarProdutos: Subscription;
  valorProdutoMasked = '';
  editProductForm: FormGroup;
  submitted: boolean;
  idProduto: string;
  modelProduto: ProdutosResponse = {} as ProdutosResponse;
  modelUpdateProduto: ProdutosRequest = {} as ProdutosRequest;
  constructor(private produtosService: ProdutosService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.idProduto = queryParams.get('id');
    });

    this.editProductForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required]
    });

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

  onSubmit(): void {
    this.submitted = true;

    if (this.editProductForm.invalid) {
      return;
    }

    this.modelUpdateProduto  = {
      id: this.idProduto,
      Nome: this.editProductForm.value.nome,
      descricao: this.editProductForm.value.descricao,
      preco: this.editProductForm.value.valor,
    };

    this.editarProdutos = this.produtosService.atualizarProduto(this.modelUpdateProduto).subscribe(
      (data: ProdutosResponse) => {
        this.router.navigate(['produtos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  maskValor() {
    this.valorProdutoMasked = StringUtil.maskCurrency(this.valorProdutoMasked);
    this.setValorModel();
  }

  private setValorModel() {
    this.modelUpdateProduto.preco = StringUtil.unmaskCurrency(this.valorProdutoMasked);
  }

}
