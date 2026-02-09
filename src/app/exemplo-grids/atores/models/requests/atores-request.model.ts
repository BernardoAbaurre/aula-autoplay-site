import { PaginacaoRequest } from '../../../../shared/models';

export class AtoresRequest extends PaginacaoRequest {
  Id?: number;
  Nome?: string;
  Sobrenome?: string;
  DataNascimentoInicio?: Date;
  DataNascimentoFim?: Date;
  DataFalecimentoInicio?: Date;
  DataFalecimentoFim?: Date;
  AlturaMinima?: number;
  AlturaMaxima?: number;

  constructor(params?: Partial<AtoresRequest>) {
    super(params);
    this.Id = params?.Id;
    this.Nome = params?.Nome;
    this.Sobrenome = params?.Sobrenome;
    this.DataNascimentoInicio = params?.DataNascimentoInicio;
    this.DataNascimentoFim = params?.DataNascimentoFim;
    this.DataFalecimentoInicio = params?.DataFalecimentoInicio;
    this.DataFalecimentoFim = params?.DataFalecimentoFim;
    this.AlturaMinima = params?.AlturaMinima;
    this.AlturaMaxima = params?.AlturaMaxima;
  }
}
