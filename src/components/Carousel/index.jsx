import React from 'react';
import OriginSlider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHistory } from 'react-router';
import { BreakPoint } from 'configs/config';

import ResponsiveTemplate from 'template/ResponsiveTemplate';
const Slider = styled(OriginSlider)`
  .slick-arrow {
    z-index: 999;
  }
  .slick-next {
    right: 10rem;
    background: url('/assets/images/black-r-arrow-icon.svg') no-repeat center;
    width: 10rem;
    height: 10rem;
    :before {
      display: none;
    }
  }
  .slick-prev {
    background: url('/assets/images/black-l-arrow-icon.svg') no-repeat center;
    left: 10rem;
    width: 10rem;
    height: 10rem;
    :before {
      display: none;
    }
  }
  .slick-dots {
    bottom: 1rem;
  }

  @media screen and (max-width: ${BreakPoint.s}px) {
    width: 100vw;
    .slick-next {
      right: 3rem;
      background: url('/assets/images/black-r-arrow-icon.svg') no-repeat center;
      width: 5rem;
      height: 5rem;
      :before {
        display: none;
      }
    }
    .slick-prev {
      background: url('/assets/images/black-l-arrow-icon.svg') no-repeat center;
      left: 3rem;
      width: 5rem;
      height: 5rem;
      :before {
        display: none;
      }
    }
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  min-height: 30rem;
  max-height: 50rem;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MobileImg = styled.img`
  width: 100vw;
`;

const Carousel = ({ list }) => {
  const history = useHistory();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  const renderImgList = () => {
    return (
      list &&
      list.map(({ img, link }, index) => {
        return (
          <Div onClick={() => handleMovePage(link)} key={img}>
            <Img alt={img + index} src={img} />
          </Div>
        );
      })
    );
  };

  const renderMobileImgList = () => {
    return (
      list &&
      list.map(({ mobileImg, link }, index) => {
        return (
          <Div onClick={() => handleMovePage(link)} key={mobileImg}>
            <MobileImg alt={mobileImg + index} src={mobileImg} />
          </Div>
        );
      })
    );
  };

  return (
    <ResponsiveTemplate
      NonPCContents={<Slider {...settings}>{renderMobileImgList()}</Slider>}
    >
      <Slider {...settings}>{renderImgList()}</Slider>;
    </ResponsiveTemplate>
  );
};

export default Carousel;
