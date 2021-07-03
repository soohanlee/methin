import React from 'react';
import Carousel from 'components/Carousel';

const MainCarousel = () => {
  const mainList = [
    {
      img: '/assets/images/main-banner.jpg',
      mobileImg: '/assets/images/mobile/banner-img-1.png',
      link: '/',
    },
    {
      img: '/assets/images/main-banner.jpg',
      mobileImg: '/assets/images/mobile/banner-img-1.png',
      link: '/',
    },
  ];
  return <Carousel list={mainList} />;
};

export default MainCarousel;
