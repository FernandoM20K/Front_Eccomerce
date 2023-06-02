import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  images = [
    'assets/img/carrousel/img-1-p.webp',
    'assets/img/carrousel/img-2-p.webp',
    'assets/img/carrousel/img-3-p.webp',
    'assets/img/carrousel/img-4-p.webp',
  ];
  currentImage = 0;
  private carouselSub: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    const source = interval(5000);
    this.carouselSub = source.subscribe(() => {
      this.nextImage();
    });
  }

  ngOnDestroy() {
    this.carouselSub.unsubscribe();
  }

  nextImage() {
    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0;
    } else {
      this.currentImage++;
    }
  }

  prevImage() {
    if (this.currentImage === 0) {
      this.currentImage = this.images.length - 1;
    } else {
      this.currentImage--;
    }
  }
}
