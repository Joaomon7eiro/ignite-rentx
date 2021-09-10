import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';
import { CarDTO } from '../../dto/CarDTO';
import api from '../../services/api';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  FloatingButton
} from './styles'
import { useTheme } from 'styled-components';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

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

          <TotalCars>
            Total de 12 carros
          </TotalCars>

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
      <FloatingButton onPress={handleMyCarts}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </FloatingButton>
    </Container>
  );
}
