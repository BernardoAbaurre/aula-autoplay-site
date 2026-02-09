import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AtoresService } from '../../services/atores.service';
import { AtoresResponse } from '../../models/responses/atores-response.model';
import { AtoresRequest } from '../../models/requests/atores-request.model';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  atores: AtoresResponse[] = [];
  carregando: boolean = false;
  erro: string = '';
  filtroForm: FormGroup;

  request: AtoresRequest = new AtoresRequest({
    Pagina: 1,
    TamanhoPagina: 100
  });

  constructor(
    private atoresService: AtoresService,
    private fb: FormBuilder
  ) {
    this.filtroForm = this.fb.group({
      Id: [null],
      Nome: [''],
      Sobrenome: [''],
      DataNascimentoInicio: [''],
      DataNascimentoFim: [''],
      DataFalecimentoInicio: [''],
      DataFalecimentoFim: [''],
      AlturaMinima: [null],
      AlturaMaxima: [null]
    });
  }

  ngOnInit(): void {
    this.carregarAtores();
  }

  carregarAtores(): void {
    this.carregando = true;
    this.erro = '';

    this.atoresService.getAtores(this.request).subscribe({
      next: (response) => {
        this.atores = response.Itens;
        this.carregando = false;
      },
      error: (error) => {
        this.erro = 'Erro ao carregar atores. Por favor, tente novamente.';
        console.error('Erro ao carregar atores:', error);
        this.carregando = false;
      }
    });
  }

  filtrar(): void {
    const filtros = this.filtroForm.value;

    this.request = new AtoresRequest({
      Pagina: 1,
      TamanhoPagina: 100,
      OrdenarPor: this.request.OrdenarPor,
      OrdemDecrescente: this.request.OrdemDecrescente,
      Id: filtros.Id || undefined,
      Nome: filtros.Nome || undefined,
      Sobrenome: filtros.Sobrenome || undefined,
      DataNascimentoInicio: filtros.DataNascimentoInicio ? new Date(filtros.DataNascimentoInicio) : undefined,
      DataNascimentoFim: filtros.DataNascimentoFim ? new Date(filtros.DataNascimentoFim) : undefined,
      DataFalecimentoInicio: filtros.DataFalecimentoInicio ? new Date(filtros.DataFalecimentoInicio) : undefined,
      DataFalecimentoFim: filtros.DataFalecimentoFim ? new Date(filtros.DataFalecimentoFim) : undefined,
      AlturaMinima: filtros.AlturaMinima || undefined,
      AlturaMaxima: filtros.AlturaMaxima || undefined
    });

    this.carregarAtores();
  }

  limparFiltros(): void {
    this.filtroForm.reset({
      Id: null,
      Nome: '',
      Sobrenome: '',
      DataNascimentoInicio: '',
      DataNascimentoFim: '',
      DataFalecimentoInicio: '',
      DataFalecimentoFim: '',
      AlturaMinima: null,
      AlturaMaxima: null
    });

    this.request = new AtoresRequest({
      Pagina: 1,
      TamanhoPagina: 100
    });

    this.carregarAtores();
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

    this.carregarAtores();
  }

  getIconeOrdenacao(campo: string): string {
    if (this.request.OrdenarPor !== campo) {
      return 'bi-arrow-down-up';
    }
    return this.request.OrdemDecrescente ? 'bi-sort-down' : 'bi-sort-up';
  }
}
