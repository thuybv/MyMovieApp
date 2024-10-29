import {LinearGradient} from 'expo-linear-gradient';
import {router} from 'expo-router';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {BackGround} from '../components/BackGround';
import IconLogo from '../components/icons/Logo';

const LoginScreen = () => {
  return (
    <View style={{flex: 1}}>
      <BackGround logged>
        <LinearGradient
          colors={['rgba(19,11,43,0)', 'rgba(19,11,43,1)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 0.8}}
          style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
              <IconLogo />
              <Text
                style={{color: 'white', width: '50%', textAlign: 'center'}}
                numberOfLines={2}>
                Watch Tv Show & Move Any Time, Where
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                padding: 36,
              }}>
              <Text
                style={{
                  color: 'white',
                  width: '50%',
                  textAlign: 'left',
                  paddingBottom: 4,
                }}
                numberOfLines={2}>
                720P, Can't Download
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  backgroundColor: '#B6116B',
                  width: '100%',
                  height: 52,
                  marginBottom: 12,
                }}
                onPress={() => router.push('/home/')}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>$4.99 Pre Month</Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  width: '50%',
                  textAlign: 'left',
                  paddingBottom: 4,
                }}
                numberOfLines={2}>
                1080P, Free Download
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  backgroundColor: '#B6116B',
                  width: '100%',
                  height: 52,
                  marginBottom: 12,
                }}
                onPress={() => router.push('/home/')}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>$4.99 Pre Month</Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  width: '50%',
                  textAlign: 'left',
                  paddingBottom: 4,
                }}
                numberOfLines={2}>
                4K, Free Download
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  backgroundColor: '#B6116B',
                  width: '100%',
                  height: 52,
                }}
                onPress={() => router.push('/home/')}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>$4.99 Pre Month</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </BackGround>
    </View>
  );
};
export default LoginScreen;
