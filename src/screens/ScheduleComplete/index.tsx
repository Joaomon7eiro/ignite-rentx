import React from 'react';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  ConfirmButton,
  ButtonTitle,
  Footer
} from './styles';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScheduleComplete() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();


  function handleHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>


      </Content>

      <Footer>
        <ConfirmButton onPress={handleHome}>
          <ButtonTitle>OK</ButtonTitle>
        </ConfirmButton>
      </Footer>
    </Container>
  );
}
