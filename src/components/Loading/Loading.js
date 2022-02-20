import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView source={require('../../assets/8370-loading.json')} autoPlay />
  );
};

export default Loading;
