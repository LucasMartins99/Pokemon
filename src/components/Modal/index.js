import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ModalArea, Loading, Card } from './styles';
import loadingImg from '../../assets/img/loading-img.gif';
import not from '../../assets/img/not-img.png';

export default function Modal(props) {
  const loading = useSelector((state) => state.loading.loading);
  const err = useSelector((state) => state.loading.city);
  const pokemon = useSelector((state) => state.pokemons);
  const index = pokemon.length - 1;
  const { visible } = props;
  const handleCloseModal = () => {
    props.setVisible(false);
  };
  if (err) {
    props.setVisible(false);
  }
  return (
    <>
      {visible === true && (
        <Container onClick={handleCloseModal}>
          <ModalArea>
            <Card>
              {loading ? (
                <Loading src={loadingImg} url="Loading" />
              ) : (
                <li>
                  <img
                    src={pokemon[index].url === null ? not : pokemon[index].url}
                    alt={pokemon[index].name}
                  />
                  <strong>Name: {pokemon[index].name}</strong>
                  <strong>Type: {pokemon[index].type}</strong>
                  <strong>City: {pokemon[index].city}</strong>
                  <strong>
                    it is raining:{' '}
                    {pokemon[index].raining === 'Rain' ? 'Yes' : 'No'}
                  </strong>
                  <strong>Temperature: {pokemon[index].temp} ºC</strong>
                  <button type="button" onClick={() => handleCloseModal}>
                    CLOSE CARD
                  </button>
                </li>
              )}
            </Card>
          </ModalArea>
        </Container>
      )}
    </>
  );
}
Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
