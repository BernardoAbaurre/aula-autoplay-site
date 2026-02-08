# Aula Autoplay Site

Aplicação Angular para fins de treinamento com listagem de Atores e Filmes.

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.4.

## 🚀 Tecnologias

- Angular 19.2.19
- Bootstrap 5.3.8
- Bootstrap Icons 1.13.1
- TypeScript
- Reactive Forms
- HttpClient com Interceptors

## 📋 Funcionalidades

### Listagem de Atores
- Filtros por: ID, Nome, Sobrenome, Data de Nascimento, Data de Falecimento, Altura
- Ordenação por qualquer coluna (crescente/decrescente)
- Grid paginado com accordion de filtros
- Integração com API REST

### Listagem de Filmes
- Filtros por: ID, Nome, Direção, Nota, Duração
- Ordenação por qualquer coluna (crescente/decrescente)
- Grid paginado com accordion de filtros
- Badges coloridos para notas dos filmes
- Integração com API REST

## ⚙️ Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/BernardoAbaurre/aula-autoplay-site.git

# Entre no diretório
cd aula-autoplay-site

# Instale as dependências
npm install
```

### 🔧 Configuração da API

O arquivo de configuração da API está em `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5095/api'
};
```

**Para alterar a URL da API**, edite o valor de `apiUrl` conforme necessário.

## Development server

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm start
# ou
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── core/                      # Funcionalidades core
│   │   ├── interceptors/          # HTTP Interceptors
│   │   └── tokens/                # Context Tokens
│   ├── shared/                    # Modelos compartilhados
│   │   └── models/                # Interfaces de paginação
│   ├── exemplo-cards/             # Módulo de exemplo com cards
│   ├── exemplo-grids/
│   │   ├── atores/                # Módulo de Atores
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── pages/
│   │   └── filmes/                # Módulo de Filmes
│   │       ├── models/
│   │       ├── services/
│   │       └── pages/
│   ├── app.component.*
│   ├── app.config.ts
│   └── app.routes.ts
└── environments/                  # Configurações de ambiente
```

## 🎨 Recursos Implementados

- ✅ Bootstrap UI Framework
- ✅ Routing e Navegação
- ✅ Reactive Forms com validação
- ✅ HTTP Interceptor para conversão automática de query params
- ✅ Models genéricos de paginação
- ✅ Ordenação clicável em headers de tabelas
- ✅ Filtros com accordion (inicialmente fechado)
- ✅ Ícones Bootstrap indicando ordenação
- ✅ Loading states e tratamento de erros
- ✅ Uso de `Partial<Interface>` para requests
- ✅ Código limpo e organizado

## 📝 API Endpoints Esperados

### Atores
- `GET /api/atores` - Lista paginada de atores com filtros

### Filmes
- `GET /api/filmes` - Lista paginada de filmes com filtros

### Parâmetros de Query Suportados
- `Pagina` - Número da página
- `TamanhoPagina` - Quantidade de itens por página
- `OrdenarPor` - Campo para ordenação
- `OrdemDecrescente` - true/false para ordem
- Filtros específicos de cada entidade

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
