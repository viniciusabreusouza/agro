import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage.service';
import { Observable } from 'rxjs';
import { PedidosResponse } from 'src/app/models/servicos/pedidos-response.model';
import { HttpClient } from '@angular/common/http';

const urlTodosProdutos: string = 'http://localhost:3000/api/Produtos?access_token=';
const urlApi = environment.baseUrlApi;

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(protected http: HttpClient,
    private localStorageService: LocalStorageService) { }

  buscarTodosPedidos(): Observable<PedidosResponse> {
    return this.http.get<PedidosResponse>(`${urlApi}/Pedidos`);
  }

  buscarDetalhesPedido(request: string): Observable<PedidosResponse> {
    return this.http.get<PedidosResponse>(`${urlApi}/Pedidos/${request}`);
  }

  atualizarPedido(idPedido: string , request: any): Observable<PedidosResponse> {
    return this.http.put<PedidosResponse>(`${urlApi}/Pedidos/${idPedido}`, request);
  }
}
