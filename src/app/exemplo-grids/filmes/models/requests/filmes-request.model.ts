import { PaginacaoRequest } from '../../../../shared/models/paginacao-request.model';

export class FilmesRequest extends PaginacaoRequest {
  Id?: number;
  Nome?: string;
  Direcao?: string;
  NotaMinima?: number;
  NotaMaxima?: number;
  DuracaoMinima?: number;
  DuracaoMaxima?: number;

  constructor(params?: Partial<FilmesRequest>) {
    super(params);
    this.Id = params?.Id;
    this.Nome = params?.Nome;
    this.Direcao = params?.Direcao;
    this.NotaMinima = params?.NotaMinima;
    this.NotaMaxima = params?.NotaMaxima;
    this.DuracaoMinima = params?.DuracaoMinima;
    this.DuracaoMaxima = params?.DuracaoMaxima;
  }
}
