import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images: any = [];

  mySwiper: any;

  constructor(private imagesService: ImageService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe(
      res => {
        for (let index = 0; index < 20; index++) {
          let rnd =Math.floor(Math.random() * 50);
          this.images.push(res[rnd]);
        }
        //console.log(this.images);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }

}
