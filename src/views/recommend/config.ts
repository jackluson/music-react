import styles from './index.module.scss';

export const slickSettings = {
  dots: true,
  dotsClass: styles['slick-dots'],
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  swipe: true,
  pauseOnFocus: true,
  pauseOnHover: true
};
