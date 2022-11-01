import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <label htmlFor="name-input">
          <input
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description-input"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1-input"
            data-testid="attr1-input"
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2-input"
            data-testid="attr2-input"
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3-input"
            data-testid="attr3-input"
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="trunfo-input">
              supertrunfo
              <input
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                id="trunfo-input"
                data-testid="trunfo-input"
              />
            </label>
          )
        }
        <label htmlFor="save-button">
          <input
            type="button"
            value="Butãum"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            id="save-button"
            data-testid="save-button"
          />
        </label>
      </div>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  onInputChange: '',
  onSaveButtonClick: '',
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
