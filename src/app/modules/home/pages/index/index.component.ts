import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(`R&M | Home`);
  }

}
