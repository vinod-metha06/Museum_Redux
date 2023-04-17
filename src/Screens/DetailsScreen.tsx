import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const InfoScreen = ({route}: any) => {
  const infostate = useSelector(state => state.MuseumInfoReducer);
  return (
    <View style={styles.container}>
      <Text>Access Number: {infostate.info.accessionNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen;
