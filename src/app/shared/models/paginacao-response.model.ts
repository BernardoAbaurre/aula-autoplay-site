export interface PaginacaoResponse<T> {
  Itens: T[];
  TotalItens: number;
  PaginaAtual: number;
  TamanhoPagina: number;
  TotalPaginas: number;
}
