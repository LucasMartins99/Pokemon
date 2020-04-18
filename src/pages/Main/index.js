import React, { useRef } from 'react';
import { MdAddLocation, MdTrackChanges } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Container, Form, SubmitButton, List } from './styles';
import { addPokemonRequest } from '../../store/modules/pokemons/actions';

export default function Main() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const myForm = useRef(null);

  const pokemons = useSelector((state) => state.pokemons);

  function onSubmit(data) {
    dispatch(addPokemonRequest(data.city));
    myForm.current.reset();
  }

  return (
    <Container>
      <h1>
        {' '}
        <MdAddLocation />
        Localizar Pókemons
      </h1>
      <Form ref={myForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          ref={register}
          name="city"
        />
        <SubmitButton type="submit">
          <MdTrackChanges color="#FFF" size={22} />
        </SubmitButton>
      </Form>
      <List>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <span>{pokemon.name}</span>
          </li>
        ))}
      </List>
    </Container>
  );
}
