import { Routes } from '@angular/router';
import { ListagemCardsComponent } from './exemplo-cards/pages/listagem-cards/listagem-cards.component';
import { ListagemComponent } from './exemplo-grids/atores/pages/listagem/listagem.component';
import { ListagemComponent as FilmesListagemComponent } from './exemplo-grids/filmes/pages/listagem/listagem.component';

export const routes: Routes = [
  { path: '', redirectTo: '/exemplo-cards/listagem', pathMatch: 'full' },
  { path: 'exemplo-cards/listagem', component: ListagemCardsComponent },
  { path: 'exemplo-grids/atores', component: ListagemComponent },
  { path: 'exemplo-grids/filmes', component: FilmesListagemComponent }
];
