import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
  DateValueWrapper,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Schedule() {
  const theme = useTheme();

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
          onPress={() => { }}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValueWrapper selected={false}>
              <DateValue >2/122/12212</DateValue>

            </DateValueWrapper>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValueWrapper selected={true}>
              <DateValue >2/122/12212</DateValue>
            </DateValueWrapper>
          </DateInfo>
        </RentalPeriod>

      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button
          title="confirmar"
          onPress={() => { }}
        />
      </Footer>
    </Container>
  );
}
