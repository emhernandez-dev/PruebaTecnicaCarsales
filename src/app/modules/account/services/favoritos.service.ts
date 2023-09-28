import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  private favoritosKey = 'favoritos';

  eventoEnFavorito: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitirEvento() {
    this.eventoEnFavorito.emit();
  }

  getFavoritos(): any[] {
    const favoritosStr = localStorage.getItem(this.favoritosKey);
    return favoritosStr ? JSON.parse(favoritosStr) : [];
  }

  agregarFavorito(favorito: any): void {
    const favoritos = this.getFavoritos();
    favoritos.push(favorito);
    localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
  }

  eliminarFavorito(favorito: any): void {
    const favoritos = this.getFavoritos();
    const index = favoritos.findIndex(favorito => favorito.id === favorito.id);
    if (index !== -1) {
      favoritos.splice(index, 1);
      localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
    }
  }

  esFavorito(favoritoId: number): boolean {
    const favoritos = this.getFavoritos();
    return favoritos.some(favorito => favorito.id === favoritoId);
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
