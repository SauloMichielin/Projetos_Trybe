import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        Card
        <h1 name="cardName" data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span
          name="cardDescription"
          data-testid="description-card"
        >
          { cardDescription }
        </span>
        <span name="cardAttr1" data-testid="attr1-card">{ cardAttr1 }</span>
        <span name="cardAttr2" data-testid="attr2-card">{ cardAttr2 }</span>
        <span name="cardAttr3" data-testid="attr3-card">{ cardAttr3 }</span>
        <span name="cardRare" data-testid="rare-card">{ cardRare }</span>
        {
          cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : ''
        }
      </div>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
