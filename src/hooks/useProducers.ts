import {useEffect, useState} from 'react';
import {requestProducers} from '../services/requestDataService.ts';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const producers = requestProducers();

    producers.list.sort((prod1, prod2) => prod1.distance - prod2.distance);

    setTitle(producers.title);
    // @ts-ignore
    setList(producers.list);
  }, []);

  return [title, list];
}
