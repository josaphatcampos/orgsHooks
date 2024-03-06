import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {requestProducers} from '../../../services/requestDataService.ts';
import CardProducers from './CardProducers.tsx';
import useProducers from '../../../hooks/useProducers.ts';

// @ts-ignore
export default function Producers({header: Header}) {
  const [title, prodList] = useProducers();

  const listHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.header}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={prodList}
      renderItem={({item}) => <CardProducers {...item} />}
      keyExtractor={({name}) => name}
      ListHeaderComponent={() => listHeader()}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    lineHeight: 32,
    marginTop: 16,
    marginHorizontal: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
