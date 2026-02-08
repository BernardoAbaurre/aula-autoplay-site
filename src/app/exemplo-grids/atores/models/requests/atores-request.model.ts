import { PaginacaoRequest } from '../../../../shared/models';

export interface AtoresRequest extends PaginacaoRequest {
  Id?: number;
  Nome?: string;
  Sobrenome?: string;
  DataNascimentoInicio?: Date;
  DataNascimentoFim?: Date;
  DataFalecimentoInicio?: Date;
  DataFalecimentoFim?: Date;
  AlturaMinima?: number;
  AlturaMaxima?: number;
}
