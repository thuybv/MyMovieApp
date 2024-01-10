import React, {FC} from 'react';
import {ImageBackground, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  logged?: boolean;
}

export const BackGround: FC<Props> = props => {
  const {children, style, logged} = props;
  return (
    <ImageBackground
      source={
        logged
          ? require('../assets/images/splash.png')
          : require('../assets/images/background.png')
      }
      resizeMode="cover"
      style={[{flex: 1}, style]}>
      {children}
    </ImageBackground>
  );
};
