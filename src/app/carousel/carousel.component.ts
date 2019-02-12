import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/1500/500?random&t=${Math.random()}`);


}
