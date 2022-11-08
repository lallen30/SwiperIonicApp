import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, SwiperOptions, Zoom, EffectCube } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCube]);


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  
  touchAllowed = false;

  constructor() {}

  config: SwiperOptions = {
    pagination: true,
    slidesPerView: 'auto',
    effect: 'cube',
  }
 
  images = [
    'https://images.unsplash.com/photo-1580894742597-87bc8789db3d',
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868'
  ];
 
  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }


next() {
  this.swiper.swiperRef.slideNext(500);
}

prev() {
  this.swiper.swiperRef.slidePrev(500);
}

toggleTouch() {
  this.touchAllowed = !this.touchAllowed;
  this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
}
}