import React, { useRef, useState } from 'react';
import { MdAddLocation, MdTrackChanges } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Container, Form, SubmitButton, Historic } from './styles';
import { addPokemonRequest } from '../../store/modules/pokemons/actions';
import Modal from '../../components/Modal';
import List from '../../components/List';

export default function Main() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const myForm = useRef(null);

  const pokemons = useSelector((state) => state.pokemons);

  const [modalVisible, setModalVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [name, setName] = useState('');

  const handleOpenList = (item) => {
    setListVisible(true);
    setName(item);
  };

  function onSubmit(data) {
    dispatch(addPokemonRequest(data.city));
    setModalVisible(true);
    myForm.current.reset();
  }

  return (
    <Container>
      <Modal visible={modalVisible} setVisible={setModalVisible} />
      <List visible={listVisible} name={name} setVisible={setListVisible} />
      <h1>
        {' '}
        <MdAddLocation />
        Find Pókemons
      </h1>
      <Form ref={myForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter the city name"
          ref={register}
          name="city"
        />
        <SubmitButton type="submit">
          <MdTrackChanges color="#FFF" size={22} />
        </SubmitButton>
      </Form>

      <Historic>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <span>{pokemon.name}</span>
            <button type="button" onClick={() => handleOpenList(pokemon.name)}>
              See again
            </button>
          </li>
        ))}
      </Historic>
    </Container>
  );
}
