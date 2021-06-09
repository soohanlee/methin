import React from 'react';
import Carousel from 'components/Carousel';

const MainCarousel = () => {
  const mainList = [
    { img: '/assets/images/main-banner.jpg', link: '/' },
    { img: '/assets/images/main-banner.jpg', link: '/' },
  ];
  return <Carousel list={mainList} />;
};

export default MainCarousel;
