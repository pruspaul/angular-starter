import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    public name='Paul';
    public nrApasari=0;
  constructor() { }

  ngOnInit() {
  }

sayHello() {
    this.nrApasari++;
    alert('Salut '+this.name + '. Ai apasat de '+this.nrApasari + ' ori!');
}
}
