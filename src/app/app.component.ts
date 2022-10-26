import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instaangular';

  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: { clickable: true },
  };

  items = [
    {
      foto : './assets/1.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/2.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/3.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/4.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/5.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/6.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/7.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/8.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/9.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/10.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/11.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/12.jpg',
      titulo : 'un titulo'
    },    
    {
      foto : './assets/13.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/14.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/15.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/16.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/1.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/2.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/3.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/2.jpg',
      titulo : 'un titulo'
    },
    {
      foto : './assets/3.jpg',
      titulo : 'un titulo'
    }

  ]




}
