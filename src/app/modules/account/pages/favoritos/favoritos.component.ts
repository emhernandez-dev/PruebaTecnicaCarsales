import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private favoritosService: FavoritosService, private titleService: Title) { }

  favoritos: any[] = []

  ngOnInit(): void {
    this.titleService.setTitle(`R&M | Favoritos`);
    // this.favoritosService.initDatosPrueba()
    this.getEpisodiosFavoritos()

    this.favoritosService.eventoEnFavorito.subscribe(() => {
      this.getEpisodiosFavoritos()
    });
  }

  getEpisodiosFavoritos() {
    this.favoritos = this.favoritosService.getFavoritos()
  }

}
