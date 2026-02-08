import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginacaoResponse } from '../../../shared/models';
import { AtoresResponse } from '../models/responses/atores-response.model';
import { AtoresRequest } from '../models/requests/atores-request.model';
import { withRequestParams } from '../../../core/tokens/http-context.token';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtoresService {
  private apiUrl = `${environment.apiUrl}/atores`;

  constructor(private http: HttpClient) { }

  getAtores(request: AtoresRequest): Observable<PaginacaoResponse<AtoresResponse>> {
    return this.http.get<PaginacaoResponse<AtoresResponse>>(this.apiUrl, {
      context: withRequestParams(request)
    });
  }
}
