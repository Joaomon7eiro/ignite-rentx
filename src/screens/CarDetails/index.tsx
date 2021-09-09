import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  SliderWrapper,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles'
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <SliderWrapper>
        <ImageSlider imagesUrl={['https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png', 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png']} />
      </SliderWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>Audi-RS5</Brand>
            <Name>Audi-RS5</Name>
          </Description>

          <Rent>
            <Period>10 dias</Period>
            <Price>R$ 200</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380Km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelerationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>

        <About>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In doloremque incidunt suscipit pariatur accusamus harum, recusandae blanditiis quo officia fugiat quae itaque veritatis, dolorum esse architecto inventore. Fugiat, culpa illum!
        </About>
      </Content>

      <Footer>
        <Button title="confirmar" onPress={() => { }} />
      </Footer>
    </Container>
  );
}
