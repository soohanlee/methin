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

const ContentsContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 60rem;
  height: 20rem;
  margin: auto;
  text-align: center;
  line-height: 4rem;
`;

const Title = styled.span`
  font-size: 3rem;
  display: inline;
`;

const HighligthLine = styled(Title)`
  border-bottom: 1px solid black;
  font-weight: 200;
`;

const Description = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const Button = styled.div`
  border: 1px solid black;
  line-height: 3rem;
  width: 15rem;
  padding-bottom: 0.2rem;
  margin: auto;
  margin-top: 4rem;
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
            <ContentsContainer>
              <HighligthLine>아름답고 건강하게</HighligthLine>
              <br />
              <Title>다이어트 하자!</Title>
              <Description>미띤 첫 오픈 기념 이벤트</Description>
              <Button>view more</Button>
            </ContentsContainer>
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
