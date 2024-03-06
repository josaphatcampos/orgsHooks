import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {requestProducers} from '../../services/requestDataService.ts';
import CardProducers from './CardProducers.tsx';

export default function Producers({header: Header}) {
  const [producers, setProducers] = useState('');
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    const producers = requestProducers();
    setProducers(producers.title);
    setProdList(producers.list);
  }, []);

  const listHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.header}>{producers}</Text>
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
