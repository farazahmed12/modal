import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";

import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Button,
  Input,
} from "reactstrap";

const ReactSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container style={{ padding: "15px 0" }}>
      {/* Header */}
      <div className="slider__header">
        <h2>DRINKS</h2>
        <Button color="none">required</Button>
      </div>

      {/* Slider */}
      <div className="slider__wrapper">
        <Slider {...settings}>
          <div className="slider__item">
            <Card
              color="light"
              outline
              style={{
                width: "100%",
              }}
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Pepsi</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="slider__item">
            <Card
              color="light"
              outline
              style={{
                width: "100%",
              }}
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">7up</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="slider__item">
            <Card
              color="light"
              outline
              style={{
                width: "100%",
              }}
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Marinda</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="slider__item">
            <Card
              color="light"
              outline
              style={{
                width: "100%",
              }}
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Dew</CardTitle>
              </CardBody>
            </Card>
          </div>
        </Slider>
      </div>

      {/* text box */}
      <div className="text__area">
        <h1>Special Instructions</h1>
        <p>
          Plese let us know if you are allergic to anything or if we need to
          avoid anything.
        </p>
        <Input bsSize="lg" type="textarea" placeholder="Instructions here..." />
      </div>
    </Container>
  );
};

export default ReactSlider;
