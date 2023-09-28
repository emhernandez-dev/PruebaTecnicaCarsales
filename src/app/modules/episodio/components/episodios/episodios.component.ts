import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FavoritosService } from 'src/app/modules/account/services/favoritos.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  @Input() titulo: string = '';

  @Input() episodios: any;

  episodioDetalle: any

  favoritos: any[] = []

  constructor(private favoritosService: FavoritosService, private titleService: Title) { }

  ngOnInit(): void { this.getEpisodiosFavoritos() }

  getEpisodio(episodio: any) {
    this.episodioDetalle = episodio
  }

  getEpisodiosFavoritos() {
    this.favoritos = this.favoritosService.getFavoritos()
  }

  isFavorito(episodioId: number): boolean {
    return this.favoritos.some(favorito => favorito.id === episodioId);
  }

  toggleFavorito(episodio: any){
    const esFavorito = this.favoritosService.esFavorito(episodio.id)
    if (esFavorito) {
      this.favoritosService.eliminarFavorito(episodio)
    } else{
      this.favoritosService.agregarFavorito(episodio)
    }
    this. getEpisodiosFavoritos()

    this.favoritosService.emitirEvento()
  }

}
