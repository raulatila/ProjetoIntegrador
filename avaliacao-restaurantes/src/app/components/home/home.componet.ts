import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName = 'Usuário Exemplo';
  busca = '';
  categoriaSelecionada = '';

  categorias = ['Todos', 'Pizza', 'Sushi', 'Churrasco'];

  restaurantes = [
    { nome: 'Pizzaria Bella', nota: 4.8, categoria: 'Pizza', publicacao: 'Promoção: Pizza em dobro!' },
    { nome: 'Sushi Time', nota: 4.5, categoria: 'Sushi', publicacao: 'Rodízio completo por R$ 79,90' },
    { nome: 'Churrasco Grill', nota: 4.2, categoria: 'Churrasco', publicacao: 'Cortes premium no almoço' },
  ];

  getRestaurantesFiltrados() {
    return this.restaurantes
      .filter(r =>
        (this.categoriaSelecionada === 'Todos' || !this.categoriaSelecionada || r.categoria === this.categoriaSelecionada) &&
        r.nome.toLowerCase().includes(this.busca.toLowerCase())
      )
      .sort((a, b) => b.nota - a.nota);
  }

  verDetalhes(restaurante: any) {
    alert(`Abrir detalhes de ${restaurante.nome}`);
  }
}
