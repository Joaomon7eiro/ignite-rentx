import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import carAnimation from '../../assets/car_animation.json';

import { Container } from './styles';

export const LoadingAnimation: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={carAnimation}
        autoPlay
        style={{height: 200}}
        resizeMode='contain'
        loop
      />
    </Container>
  );
}

