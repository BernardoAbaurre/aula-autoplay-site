import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilmesService } from '../../services/filmes.service';
import { FilmesResponse } from '../../models/responses/filmes-response.model';
import { FilmesRequest } from '../../models/requests/filmes-request.model';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {
  filmes: FilmesResponse[] = [];
  carregando: boolean = false;
  erro: string = '';
  filtroForm: FormGroup;

  request: FilmesRequest = {
    Pagina: 1,
    TamanhoPagina: 100
  };

  constructor(
    private filmesService: FilmesService,
    private fb: FormBuilder
  ) {
    this.filtroForm = this.fb.group({
      Id: [null],
      Nome: [''],
      Direcao: [''],
      NotaMinima: [null],
      NotaMaxima: [null],
      DuracaoMinima: [null],
      DuracaoMaxima: [null]
    });
  }

  ngOnInit(): void {
    this.carregarFilmes();
  }

  carregarFilmes(): void {
    this.carregando = true;
    this.erro = '';

    this.filmesService.getFilmes(this.request).subscribe({
      next: (response) => {
        this.filmes = response.Itens;
        this.carregando = false;
      },
      error: (error) => {
        this.erro = 'Erro ao carregar filmes. Por favor, tente novamente.';
        console.error('Erro ao carregar filmes:', error);
        this.carregando = false;
      }
    });
  }

  filtrar(): void {
    const filtros = this.filtroForm.value;

    this.request = {
      Pagina: 1,
      TamanhoPagina: 100,
      OrdenarPor: this.request.OrdenarPor,
      OrdemDecrescente: this.request.OrdemDecrescente,
      Id: filtros.Id || undefined,
      Nome: filtros.Nome || undefined,
      Direcao: filtros.Direcao || undefined,
      NotaMinima: filtros.NotaMinima || undefined,
      NotaMaxima: filtros.NotaMaxima || undefined,
      DuracaoMinima: filtros.DuracaoMinima || undefined,
      DuracaoMaxima: filtros.DuracaoMaxima || undefined
    };

    this.carregarFilmes();
  }

  limparFiltros(): void {
    this.filtroForm.reset({
      Id: null,
      Nome: '',
      Direcao: '',
      NotaMinima: null,
      NotaMaxima: null,
      DuracaoMinima: null,
      DuracaoMaxima: null
    });

    this.request = {
      Pagina: 1,
      TamanhoPagina: 100
    };

    this.carregarFilmes();
  }

  ordenar(campo: string): void {
    // Se já está ordenando por este campo, alterna a ordem
    if (this.request.OrdenarPor === campo) {
      this.request.OrdemDecrescente = !this.request.OrdemDecrescente;
    } else {
      // Se é um novo campo, define como crescente
      this.request.OrdenarPor = campo;
      this.request.OrdemDecrescente = false;
    }

    this.carregarFilmes();
  }

  getIconeOrdenacao(campo: string): string {
    if (this.request.OrdenarPor !== campo) {
      return 'bi-arrow-down-up';
    }
    return this.request.OrdemDecrescente ? 'bi-sort-down' : 'bi-sort-up';
  }
}
