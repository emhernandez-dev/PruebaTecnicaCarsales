import { Component, OnInit } from '@angular/core';
import { EpisodioService } from '../../services/episodio.service';
import { Data, Info, Result } from '../../interfaces/episodio.interface';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  info!: Info

  episodios: Result[] = []

  constructor(private episodioService: EpisodioService) { }

  ngOnInit(): void {
    this.getEpisodios()
  }

  getEpisodios() {
    this.episodioService.getEpisodios().subscribe((res: Data) => {
      this.episodios = res.results
    })
  }

}
