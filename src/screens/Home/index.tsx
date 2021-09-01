import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles'

export function Home() {
  const cars = [{
    thumbnail: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Audi-RS5-Coupe.png',
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    }
  }]

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={12} />

          <TotalCars>
            Total de 12 carros
          </TotalCars>

        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => {
          return <Car data={cars[0]} />
        }}
      />



    </Container>
  );
}
