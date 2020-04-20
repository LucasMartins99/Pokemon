import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ModalArea, Loading, Card } from './styles';
import loadingImg from '../../assets/img/loading-img.gif';

export default function Modal(props) {
  const loading = useSelector((state) => state.loading.loading);
  const pokemon = useSelector((state) => state.pokemons);
  const index = pokemon.length - 1;

  const handleCloseModal = () => {
    props.setVisible(false);
  };
  return (
    <>
      {props.visible === true && (
        <Container onClick={handleCloseModal}>
          <ModalArea>
            {loading ? (
              <Loading src={loadingImg} url="Loading" />
            ) : (
              <Card>
                <li>
                  <img src={pokemon[index].url} alt={pokemon[index].name} />
                  <strong>Name Pokemon: {pokemon[index].name}</strong>
                  <strong>
                    it's raining:
                    {pokemon[index].raining === 'Rain' ? 'Yes' : 'No'}
                  </strong>
                  <strong>
                    Temperature in Celsius: {pokemon[index].temp} graus
                  </strong>
                </li>
              </Card>
            )}
          </ModalArea>
        </Container>
      )}
    </>
  );
}
