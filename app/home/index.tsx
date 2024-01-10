import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackGround} from '../../components/BackGround';
import MovieList from '../../components/MovieList';
import LogoSmall from '../../components/icons/LogoSmall';
import {
  dataNowPlaying,
  dataPopular,
  dataTopRated,
} from '../../containers/Home/selector';
import {
  fetchListNowPlaying,
  fetchListPopular,
  fetchListTopRate,
} from '../../containers/Home/thunk';
import {useAppDispatch, useAppSelector} from '../../store/store';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const nowPlaying = useAppSelector(dataNowPlaying);
  const popular = useAppSelector(dataPopular);
  const topRated = useAppSelector(dataTopRated);
  useEffect(() => {
    dispatch(fetchListNowPlaying({page: 1}));
    dispatch(fetchListPopular({page: 1}));
    dispatch(fetchListTopRate({page: 1}));
  }, [dispatch]);

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
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
              <LogoSmall />
              <Text style={{color: 'white', fontSize: 20}}>Choose Movie</Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 45,
                  backgroundColor: 'white',
                }}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 40,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'grey',
                marginBottom: 32,
              }}>
              <TextInput
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  paddingHorizontal: 0,
                  flex: 1,
                  color: 'white',
                }}
                placeholder="Search"
                placeholderTextColor="grey"
                allowFontScaling={false}
                value={search}
                onChangeText={value => setSearch(value)}
              />
            </View>
            <MovieList title="Now Playing" data={nowPlaying} />
            <MovieList title="Popular" data={popular} />
            <MovieList title="Top Rated" data={topRated} />
          </SafeAreaView>
        </BackGround>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Home;
