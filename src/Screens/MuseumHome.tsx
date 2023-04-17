import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import {GetMuseumID, GetMuseumIDInfo} from '../service/service';

import {useDispatch, useSelector} from 'react-redux';

const MuseumHomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const res = useSelector(state => state.MuseumReducer);
  const infostate = useSelector(state => state.MuseumInfoReducer);

  useEffect(() => {
    const getData = async () => {
      var data = await GetMuseumID();
      console.log(data + 'Homelog');

      if (data !== 'error') {
        dispatch({type: 'FETCH', payload: data.objectIDs.slice(0, 10)});
      } else {
        dispatch({type: 'FETCH_ERROR'});
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!infostate.loading && Object.keys(infostate.info).length > 0) {
      navigation.navigate('Info');
    }
  }, [infostate.info]);

  const getInfo = async (id: any) => {
    const data = await GetMuseumIDInfo(id);
    if (data != 'error') {
      dispatch({type: 'FETCH_INFO', payload: data});
    } else {
      dispatch({type: 'FETCH_ERROR'});
    }
  };

  if (res?.loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  if (res?.error) {
    console.log(res.error);
  }

  const renderItem = ({item}: any) => {
    console.log(item + 'item');
    return (
      <TouchableOpacity
        onPress={() => {
          getInfo(item);
        }}>
        <View style={{borderWidth: 2, margin: 10, padding: 10}}>
          <Text>IDs: {item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{fontSize: 20, padding: 10}}>Museum Screen</Text>
      <View
        style={{
          height: '90%',
          borderWidth: 2,
          margin: 10,
          flexDirection: 'column',
        }}>
        <FlatList
          data={res?.data}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default MuseumHomeScreen;
