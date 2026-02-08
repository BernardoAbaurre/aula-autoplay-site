# Query Params Interceptor

## Descrição
Interceptor HTTP que converte automaticamente objetos TypeScript em query params para requisições GET.

## Como Funciona

O interceptor detecta quando um objeto é passado via `HttpContext` e automaticamente o converte em query params.

## Como Usar

### 1. Em Services

```typescript
import { withRequestParams } from '@app/core/tokens';

export class MeuService {
  getData(request: MeuRequest): Observable<Response> {
    return this.http.get<Response>(this.apiUrl, {
      context: withRequestParams(request)
    });
  }
}
```

### 2. Exemplo Prático

```typescript
const request = {
  Pagina: 1,
  TamanhoPagina: 10,
  Nome: 'João',
  DataInicio: new Date('2024-01-01'),
  Ativo: true,
  Tags: ['tag1', 'tag2']
};

// No service
this.http.get(url, { context: withRequestParams(request) });

// O interceptor converte automaticamente para:
// ?Pagina=1&TamanhoPagina=10&Nome=João&DataInicio=2024-01-01T00:00:00.000Z&Ativo=true&Tags=tag1&Tags=tag2
```

## Funcionalidades

- ✅ Conversão automática via interceptor
- ✅ Ignora valores `undefined` e `null`
- ✅ Converte `Date` para ISO string automaticamente
- ✅ Suporta arrays (múltiplos valores para mesma chave)
- ✅ Converte números e booleanos para string
- ✅ Mantém os nomes das propriedades (PascalCase)

## Exemplo Completo

```typescript
// Model
export interface AtoresRequest {
  Pagina: number;
  TamanhoPagina: number;
  Nome?: string;
  DataNascimento?: Date;
}

// Service
import { withRequestParams } from '@app/core/tokens';

@Injectable()
export class AtoresService {
  getAtores(request: AtoresRequest): Observable<Response> {
    return this.http.get<Response>(this.apiUrl, {
      context: withRequestParams(request)
    });
  }
}

// Component
const request: AtoresRequest = {
  Pagina: 1,
  TamanhoPagina: 100,
  Nome: 'João'
};

this.service.getAtores(request).subscribe(...);
```

## Benefícios

1. **Zero configuração**: O interceptor faz tudo automaticamente
2. **Código limpo**: Services ficam com apenas 1 linha
3. **Type-safe**: Trabalha com interfaces TypeScript
4. **Manutenível**: Adicionar novos filtros não requer alterar o service
5. **Reutilizável**: Funciona para todos os services automaticamente
