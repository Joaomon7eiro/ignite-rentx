import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dto/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as Params;

  function handleSchedule() {
    navigation.navigate('Schedule', { car });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <SliderWrapper>
        <ImageSlider imagesUrl={car.photos} />
      </SliderWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((acessory) => {
            return (
              <Acessory
                key={acessory.type}
                name={acessory.name}
                icon={getAccessoryIcon(acessory.type)}
              />
            )
          })}
        </Acessories>

        <About> {car.about} </About>
      </Content>

      <Footer>
        <Button title="confirmar" onPress={handleSchedule} />
      </Footer>
    </Container>
  );
}
