import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, BackHandler } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { LoadingAnimation as Loading } from '../../components/LoadingAnimation';
import { CarDTO } from '../../dto/CarDTO';
import api from '../../services/api';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles'
import { useTheme } from 'styled-components';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value},
        { translateY: positionY.value }
      ]
    }
  });

  const onGestureHandlerEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive: (event, ctx: any) => {
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },
    onEnd: (event) => {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  });

  const navigation = useNavigation();

  const theme = useTheme();

  useEffect(() => {

    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, [])

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleMyCarts() {
    navigation.navigate('MyCars');
  }

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
          {!loading ?
            <TotalCars>
            Total de 12 carros
            </TotalCars>
             : null
          }

        </HeaderContent>
      </Header>

      {loading ? <Loading /> :

        <CarList
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return <Car data={item} onPress={() => handleCarDetails(item)} />
          }}
        />
      }

      <PanGestureHandler
        onGestureEvent={onGestureHandlerEvent}
      >
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22,
            }
        ]}
        >
          <ButtonAnimated
            onPress={handleMyCarts}
            style={[ styles.button, { backgroundColor: theme.colors.main}]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>

    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
