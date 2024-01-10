import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BackGround} from '../../components/BackGround';
import {TextField} from '../../components/TextField';
import Logo from '../../components/icons/Logo';
import {
  dataNowPlaying,
  dataPopular,
  dataTopRated,
} from '../../containers/Home/selector';
import {clearOldData} from '../../containers/Home/slice';
import {
  fetchListNowPlaying,
  fetchListPopular,
  fetchListTopRate,
} from '../../containers/Home/thunk';
import {URL_IMAGE} from '../../libs/constant';
import {APP_SCREEN, HomeTabScreenProps} from '../../navigation/navigation';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {DataNowPlaying} from '../../types/home';
import styles from './styles';

const HomeScreen: FC<HomeTabScreenProps<APP_SCREEN.HOME>> = ({navigation}) => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const nowPlaying = useAppSelector(dataNowPlaying);
  const popular = useAppSelector(dataPopular);
  const topRate = useAppSelector(dataTopRated);

  useEffect(() => {
    dispatch(fetchListNowPlaying({}));
    dispatch(fetchListPopular({}));
    dispatch(fetchListTopRate({}));
  }, [dispatch]);

  const _renderItem: ListRenderItem<DataNowPlaying> = ({
    item,
  }: ListRenderItemInfo<DataNowPlaying>) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(clearOldData());
          navigation.navigate(APP_SCREEN.MOVIE_DETAIL, {movie_id: item.id});
        }}>
        <View style={styles.pr16}>
          <FastImage
            source={{
              uri: `${URL_IMAGE}${item.backdrop_path}`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}>
        {/* <ScrollView style={styles.container}> */}
        <View style={styles.container}>
          <BackGround>
            <View style={styles.view}>
              <View style={styles.header}>
                <Logo />
                <Text style={styles.title}>Choose Movie</Text>
                <View style={styles.avatar} />
              </View>
              <TextField
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search"
                inputStyle={styles.input}
              />
              <View style={styles.pt32}>
                <Text style={styles.section}>Now Playing</Text>
                <FlatList
                  data={nowPlaying}
                  renderItem={_renderItem}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.pt32}>
                <Text style={styles.section}>Popular</Text>
                <FlatList
                  data={popular}
                  renderItem={_renderItem}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.pt32}>
                <Text style={styles.section}>Top Rated</Text>
                <FlatList
                  data={topRate}
                  renderItem={_renderItem}
                  keyExtractor={(item, index) => `${index}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </BackGround>
        </View>
        {/* </ScrollView> */}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
