export class PaginacaoRequest {
  Pagina: number;
  TamanhoPagina: number;
  OrdenarPor?: string;
  OrdemDecrescente: boolean;

  constructor(params?: Partial<PaginacaoRequest>) {
    this.Pagina = params?.Pagina ?? 1;
    this.TamanhoPagina = params?.TamanhoPagina ?? 10;
    this.OrdenarPor = params?.OrdenarPor;
    this.OrdemDecrescente = params?.OrdemDecrescente ?? false;
  }
}
