import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EpisodioService } from '../../services/episodio.service';
import { Data, Info, Result } from '../../interfaces/episodio.interface';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {

  info!: Info

  episodios: Result[] = []

  constructor(private titleService: Title, private episodioService: EpisodioService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`R&M | Episodios`);
    this.getEpisodios()
  }

  getEpisodios() {
    this.episodioService.getEpisodios().subscribe((res: Data) => {
      this.episodios = []
      this.episodios = res.results
      console.log('Cantidad de registros: ', res.results.length)
    })
  }

}
