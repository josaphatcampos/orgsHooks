import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// @ts-ignore
export default function CardProducers({name, image, distance, rate}) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} accessibilityLabel={name} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    padding: 16,
    //android
    elevation: 4,
    //ios
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.62,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
