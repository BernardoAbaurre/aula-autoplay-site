import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginacaoResponse } from '../../../shared/models/paginacao-response.model';
import { FilmesResponse } from '../models/responses';
import { FilmesRequest } from '../models/requests';
import { withRequestParams } from '../../../core/tokens/http-context.token';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private apiUrl = `${environment.apiUrl}/filmes`;

  constructor(private http: HttpClient) {}

  getFilmes(request: FilmesRequest): Observable<PaginacaoResponse<FilmesResponse>> {
    return this.http.get<PaginacaoResponse<FilmesResponse>>(this.apiUrl, {
      context: withRequestParams(request)
    });
  }
}
