import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rate from '../../../components/Rate.tsx';

// @ts-ignore
export default function CardProducers({name, image, distance, rate}) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setSelected(!selected);
      }}>
      <Image style={styles.img} source={image} accessibilityLabel={name} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Rate rate={rate} isEdit={selected} isBig={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
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
