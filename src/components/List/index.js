import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ModalArea, Card } from './styles';
import notImage from '../../assets/img/not-img.png';

export default function List(props) {
  const { visible, name } = props;
  const pokemons = useSelector((state) => state.pokemons);
  const pokemon = pokemons.filter((item) => item.name === name);

  const handleCloseModal = () => {
    props.setVisible(false);
  };
  return (
    <>
      {visible === true && (
        <Container onClick={handleCloseModal}>
          <ModalArea>
            <Card>
              <li>
                <img
                  src={pokemon[0].url === null ? notImage : pokemon[0].url}
                  alt={pokemon[0].name}
                />
                <strong>Name: {pokemon[0].name}</strong>
                <strong>Type: {pokemon[0].type}</strong>
                <strong>City: {pokemon[0].city}</strong>
                <strong>
                  it is raining: {pokemon[0].raining === 'Rain' ? 'Yes' : 'No'}
                </strong>
                <strong>Temperature: {pokemon[0].temp} ºC</strong>
                <button type="button" onClick={() => handleCloseModal}>
                  CLOSE CARD
                </button>
              </li>
            </Card>
          </ModalArea>
        </Container>
      )}
    </>
  );
}
List.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
