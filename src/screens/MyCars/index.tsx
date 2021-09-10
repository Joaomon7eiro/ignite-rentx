import { useTheme } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dto/CarDTO';
import api from '../../services/api';

import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Quantity,
  Appointments,
  Content,
  AppointmentsTitle,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';
import { useNavigation } from '@react-navigation/core';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

interface CarProps {
  car: CarDTO[];
  user_id: string;
  id: string;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps>({} as CarProps);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const theme = useTheme();

  function goBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          color={theme.colors.shape}
          onPress={goBack}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <Subtitle>
          Conforto, segurança e praticidade
        </Subtitle>
      </Header>

      {loading ? <Loading /> :
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos Feitos</AppointmentsTitle>
            <Quantity>{cars.length}</Quantity>
          </Appointments>


          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <CarWrapper>
                  <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.startDate}</CarFooterDate>
                      <AntDesign
                        name="arrowright"
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <CarFooterDate>{item.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>)
            }}
          />
        </Content>
      }
    </Container>
  );
}
