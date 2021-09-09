import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

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
  Acessories,
  Footer,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  CalendarIcon,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles'
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';

export function ScheduleDetails() {
  const theme = useTheme();

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


        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.shape}
          />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>

          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1740</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="confirmar" onPress={() => { }} />
      </Footer>
    </Container>
  );
}
