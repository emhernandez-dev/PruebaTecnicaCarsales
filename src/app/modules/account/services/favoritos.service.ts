import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  private favoritosKey = 'favoritos';

  getFavoritos(): string[] {
    const favoritosStr = localStorage.getItem(this.favoritosKey);
    return favoritosStr ? JSON.parse(favoritosStr) : [];
  }

  agregarFavorito(favorito: string): void {
    const favoritos = this.getFavoritos();
    favoritos.push(favorito);
    localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
  }

  eliminarFavorito(favorito: string): void {
    const favoritos = this.getFavoritos();
    const index = favoritos.indexOf(favorito);
    if (index !== -1) {
      favoritos.splice(index, 1);
      localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
    }
  }

  esFavorito(favorito: string): boolean {
    const favoritos = this.getFavoritos();
    return favoritos.includes(favorito);
  }

  // Data:
  initDatosPrueba(): void {
    if (!localStorage.getItem(this.favoritosKey)) {
      const datosPrueba = [
        {
          id: 1,
          name: 'Pilot',
          air_date: 'December 2, 2013',
          episode: 'S01E01'
        },
        {
          id: 2,
          name: 'Lawnmower Dog',
          air_date: 'December 9, 2013',
          episode: 'S01E02'
        },
        {
          id: 3,
          name: 'Anatomy Park',
          air_date: 'December 16, 2013',
          episode: 'S01E03'
        },
      ];

      localStorage.setItem(this.favoritosKey, JSON.stringify(datosPrueba));
    }
  }

}
