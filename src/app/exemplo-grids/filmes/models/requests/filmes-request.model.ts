import { PaginacaoRequest } from '../../../../shared/models/paginacao-request.model';

export interface FilmesRequest extends PaginacaoRequest {
  Id?: number;
  Nome?: string;
  Direcao?: string;
  NotaMinima?: number;
  NotaMaxima?: number;
  DuracaoMinima?: number;
  DuracaoMaxima?: number;
}
