import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import StarComponent from './Star.tsx';

// @ts-ignore
export default function Rate({rate: oldRate, isEdit = false, isBig = false}) {
  const [quantity, setQuantity] = useState(oldRate);
  const RenderStars = () => {
    const listStar = [];

    for (let i = 0; i < 5; i++) {
      console.log(quantity);
      console.log(i < quantity);
      listStar.push(
        // @ts-ignore
        <StarComponent
          key={i}
          isEdit={isEdit}
          isBig={isBig}
          fillImage={i < quantity}
          onPress={() => setQuantity(i + 1)}
        />,
      );
    }
    return listStar;
  };

  return (
    <View style={styles.view}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginRight: 2,
  },
});
