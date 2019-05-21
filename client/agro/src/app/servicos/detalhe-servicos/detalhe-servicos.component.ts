import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos/servicos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PedidosResponse } from 'src/app/models/servicos/pedidos-response.model';
import { PedidosRequest } from 'src/app/models/servicos/pedidos-request.model';
import { ProdutosResponse } from 'src/app/models/produtos/produtos-response.model';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-detalhe-servicos',
  templateUrl: './detalhe-servicos.component.html',
  styleUrls: ['./detalhe-servicos.component.scss']
})
export class DetalheServicosComponent implements OnInit {

  obterSolicitacaoServico: Subscription;
  editarSolicitacaoServico: Subscription;
  obterProdutos: Subscription;
  editServicoForm: FormGroup;
  submitted: boolean;
  idSolicitacaoServico: string;
  modelSolicitacaoServico: PedidosResponse = {} as PedidosResponse;
  modelUpdatePedido: PedidosRequest = {} as PedidosRequest;
  modelProduto: ProdutosResponse = {} as ProdutosResponse;


  constructor(private servicosService: ServicosService,
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    debugger

    this.editServicoForm = this.formBuilder.group({
      solicitante: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      produto: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.route.queryParamMap.subscribe(queryParams => {
      this.idSolicitacaoServico = queryParams.get('id');
    });

    this.buscarSolicitacaoServico();
  }

  buscarSolicitacaoServico(): void {
    this.obterSolicitacaoServico = this.servicosService.buscarDetalhesPedido(this.idSolicitacaoServico).subscribe(
      (data: PedidosResponse) => {
        if (data != null) {
         this.modelSolicitacaoServico = data;

         if (data.produtoId) {
          this.obterProdutos = this.produtosService.buscarProdutoPorId(data.produtoId).subscribe(
            (dataProduto: any) => {
              if (dataProduto != null && dataProduto.Nome) {
                this.modelSolicitacaoServico.produtoName = dataProduto.Nome;
              }
           },
           (error) => {
             console.log(error);
           }
          );
         }
        }
     },
     (error) => {
       console.log(error);
     }
    );
  }

  onSubmit(): void {
    debugger
    this.submitted = true;

    if (this.editServicoForm.invalid) {
      return;
    }

    this.modelUpdatePedido  = {
      id: this.idSolicitacaoServico,
      quantidade: this.editServicoForm.value.quantidade,
      descricao: this.editServicoForm.value.descricao,
      solicitante: this.editServicoForm.value.solicitante,
      produtoId: this.modelSolicitacaoServico.produtoId,
      status: this.editServicoForm.value.status,
    };

    this.editarSolicitacaoServico = this.servicosService.atualizarPedido(this.idSolicitacaoServico , this.modelUpdatePedido).subscribe(
      (data: any) => {
        this.router.navigate(['servicos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
