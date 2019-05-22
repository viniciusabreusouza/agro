import { Component, OnInit } from '@angular/core';
import { ProdutosResponse } from 'src/app/models/produtos/produtos-response.model';
import { ProdutosRequest } from 'src/app/models/produtos/produtos-request.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {

  modelUpdateProduto: ProdutosRequest = {} as ProdutosRequest;
  adicionarProdutos: Subscription;
  addProductForm: FormGroup;


  constructor(private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addProductForm.invalid) {
      return;
    }

    this.modelUpdateProduto  = {
      id: '',
      Nome: this.addProductForm.value.nome,
      descricao: this.addProductForm.value.descricao,
      preco: this.addProductForm.value.valor,
    };

    this.adicionarProdutos = this.produtosService.adicionarProduto(this.modelUpdateProduto).subscribe(
      (data: ProdutosResponse) => {
        this.router.navigate(['produtos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
