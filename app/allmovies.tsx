import {Image} from 'expo-image';
import {router} from 'expo-router';
import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackGround} from '../components/BackGround';
import IconBack from '../components/icons/IconBack';
import {URL_IMAGE} from '../constants';
import {dataAllMovie} from '../containers/Home/selector';
import {fetchListMovie} from '../containers/Home/thunk';
import {useAppDispatch, useAppSelector} from '../store/store';

const AllMovies = () => {
  const dispatch = useAppDispatch();

  const allMovies = useAppSelector(dataAllMovie);
  useEffect(() => {
    dispatch(fetchListMovie({page: 1}));
  }, [dispatch]);
  return (
    <View style={{flex: 1}}>
      <BackGround
        style={{
          paddingHorizontal: 24,
        }}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 8,
            }}>
            <TouchableOpacity onPress={() => router.back()}>
              <IconBack />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 20}}>All Movies</Text>
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 45,
                backgroundColor: 'white',
              }}
            />
          </View>
          <FlatList
            data={allMovies}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `item-${index}`}
            renderItem={item => (
              <View>
                <TouchableOpacity onPress={() => {}}>
                  <View style={{paddingRight: 24, paddingTop: 8}}>
                    <Image
                      source={{
                        uri: `${URL_IMAGE}${item.item.backdrop_path}`,
                      }}
                      style={{height: 135, width: 105, borderRadius: 20}}
                      contentFit="cover"
                    />
                  </View>
                </TouchableOpacity>
                <Text style={{color: 'white', paddingTop: 4}}>
                  {item.item.title.length > 14
                    ? `${item.item.title.slice(0, 13)}...`
                    : item.item.title}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
      </BackGround>
    </View>
  );
};

export default AllMovies;
