import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

// @ts-ignore
import starImage from '../../assets/estrela.png';
// @ts-ignore
import starGrayImage from '../../assets/estrelaCinza.png';

// @ts-ignore
export default function StarComponent({
  isEdit,
  isBig,
  fillImage,
  onPress,
}) {
  const styles = stylesFunc(isBig);
  const getImage = () => {
    console.log('fill:' + fillImage);
    if (fillImage) {
      return starImage;
    } else {
      return starGrayImage;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={!isEdit}>
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  );
}

const stylesFunc = (isBig: boolean) =>
  StyleSheet.create({
    star: {
      width: isBig ? 36 : 12,
      height: isBig ? 36 : 12,
    },
  });
