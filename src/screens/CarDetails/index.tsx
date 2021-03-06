import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  SliderWrapper,
  Header,
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
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value,
        [0, 110, 200],
        [200, 90, 80],
        Extrapolate.CLAMP
      )
    }
  });

  const carSliderStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value,
        [0, 150],
        [1, 0],
      )
    }
  })

  function handleSchedule() {
    navigation.navigate('Schedule', { car });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Animated.View
        style={[headerStyleAnimation, styles.header, {backgroundColor: theme.colors.background_secondary}]}
      >
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <SliderWrapper
          style={[carSliderStyleAnimation]}
        >
          <ImageSlider imagesUrl={car.photos} />
        </SliderWrapper>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 180
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button title="confirmar" onPress={handleSchedule} />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1
  }
})
