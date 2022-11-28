import Slider from "react-slick";
import styled from "styled-components";
import React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class imgSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Carousel {...settings}>
        <Wrap>
          <a href="/home">
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/home">
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/home">
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/home">
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    );
  }
}

const Carousel = styled(Slider)`
  text-align: center;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: opacity 0.2s ease 0s;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 15px;
      color: rgb(150, 150, 170);
    }
  }
  li.slick-active button {
    &:before {
      color: #f6f6f6;
    }
  }

  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  padding: 6px;
  a {
    border-radius: 4px;
    box-shadow: rgb(0, 0, 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    padding: 0;
    border: 6px solid rgba(249, 249, 249, 0.8);
    transition-duration: 200ms;
  }
`;

export default imgSlider;
