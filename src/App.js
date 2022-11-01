import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
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
    deck: [],
  };

  onInputChange = (event) => {
    const { target } = event;
    const validador = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.name]: validador }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const valorMax = 90;
      const soma = 210;
      const disableState = cardName.length <= 0
        || cardDescription.length <= 0
        || cardImage.length <= 0
        || cardRare.length <= 0
        || parseInt(cardAttr1, 10) > valorMax
        || parseInt(cardAttr1, 10) < 0
        || parseInt(cardAttr2, 10) > valorMax
        || parseInt(cardAttr2, 10) < 0
        || parseInt(cardAttr3, 10) > valorMax
        || parseInt(cardAttr3, 10) < 0
        || parseInt(cardAttr1, 10)
          + parseInt(cardAttr2, 10)
          + parseInt(cardAttr3, 10) > soma;
      this.setState({ isSaveButtonDisabled: disableState });
    });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState((prevState) => ({ deck: [...prevState.deck,
      { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

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
      deck,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          <ul>
            { deck.map((cartas) => (
              <Card
                cardName={ cartas.cardName }
                cardDescription={ cartas.cardDescription }
                cardImage={ cartas.cardImage }
                cardAttr1={ cartas.cardAttr1 }
                cardAttr2={ cartas.cardAttr2 }
                cardAttr3={ cartas.cardAttr3 }
                cardRare={ cartas.cardRare }
                cardTrunfo={ cartas.cardTrunfo }
                key={ cartas.cardName }
              />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
