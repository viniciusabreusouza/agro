import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutosResponse } from 'src/app/models/produtos/produtos-response.model';
import { LocalStorageService } from '../local-storage.service';
import { environment } from 'src/environments/environment';
import { ProdutosRequest } from 'src/app/models/produtos/produtos-request.models';

const urlTodosProdutos: string = 'http://localhost:3000/api/Produtos?access_token=';
const urlApi = environment.baseUrlApi;


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(protected http: HttpClient,
              private localStorageService: LocalStorageService) { }

  buscarTodosProdutos(): Observable<ProdutosResponse> {
    const token = this.localStorageService.getObject('userToken');
    return this.http.get<ProdutosResponse>(`${urlApi}/Produtos?access_token=${token['id']}`);
  }

  buscarProdutoPorId(request: string): Observable<ProdutosResponse> {
    const token = this.localStorageService.getObject('userToken');
    return this.http.get<ProdutosResponse>(`${urlApi}/Produtos/${request}?access_token=${token['id']}`);
  }

  atualizarProduto(request: ProdutosRequest): Observable<ProdutosResponse> {
    const token = this.localStorageService.getObject('userToken');
    return this.http.put<ProdutosResponse>(`${urlApi}/Produtos/${request.id}?access_token=${token['id']}`, request);
  }

  adicionarProduto(request: any): Observable<ProdutosResponse> {
    const token = this.localStorageService.getObject('userToken');
    return this.http.post<ProdutosResponse>(`${urlApi}/Produtos/?access_token=${token['id']}`, request);
  }
}
