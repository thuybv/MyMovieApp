import {Image} from 'expo-image';
import {router} from 'expo-router';
import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {URL_IMAGE} from '../constants';
import {DataNowPlaying} from '../types/home';

interface Props {
  title: string;
  data?: DataNowPlaying[];
}

const MovieList: FC<Props> = props => {
  const {title, data} = props;
  return (
    <View style={{paddingBottom: 24}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 17}}>{title}</Text>
        <TouchableOpacity onPress={() => router.push('/allmovies')}>
          <Text style={{color: 'yellow'}}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{paddingTop: 8}}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `item-${index}`}
        renderItem={item => (
          <View>
            <TouchableOpacity onPress={() => {}}>
              <View style={{paddingRight: 16}}>
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
    </View>
  );
};

export default MovieList;
