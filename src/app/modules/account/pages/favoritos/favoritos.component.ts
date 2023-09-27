import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private favoritosService: FavoritosService) { }

  favoritos: any[] = []

  ngOnInit(): void {
    this.favoritosService.initDatosPrueba()
    this.getEpisodiosFavoritos()
  }

  getEpisodiosFavoritos() {
    this.favoritos = this.favoritosService.getFavoritos()
  }

}
