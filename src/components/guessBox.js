import React from 'react';

import GuessInput from './guessInput';
import GuessOutput from './guessOutput';




export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInputs: [],
            hotOrCold: '',
            status: '',
            correctNumber: Math.floor(Math.random() * 100) + 1
        }
    }

    tryAgain() {
        this.setState({
            userInputs: [],
            hotOrCold: '',
            status: '',
            correctNumber: Math.floor(Math.random() * 100) + 1
        });
    }



    guessNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            this.setState({ hotOrCold: 'Please enter a number' });
            return;
        }
        const diff = Math.abs(number - this.state.correctNumber);

        let hotOrCold;
        if (diff >= 30) {
         hotOrCold = 'Cold';
        } else if (diff >= 10) {
         hotOrCold = 'Warm.';
        } else if (diff >= 3) {
         hotOrCold = 'Hot!';
        } else {
         hotOrCold = 'CORRECT!';
        }

        this.setState({
            hotOrCold, userInputs: [...this.state.userInputs, number]
        });
    }
    giveFeedback() {
        const { userInputs } = this.state;

        let status = `Attempts: ${userInputs.length} Numbers guessed: ${userInputs}`;


        this.setState({ status });
    }
    s
    render() {
        const { hotOrCold, userInputs, status } = this.state;
        const inputCount = userInputs.length;

        return (
            <div className="guessBox">
                <h1 className="title">Hot or Cold</h1>
                <p>Guess a number between 1 and 100</p>
                <GuessInput id="userGuess" min={0} max={100} value={this.state.userInput}  onGuessNumber={number => this.guessNumber(number)} />
                <GuessOutput id="output" userInputs={userInputs} inputCount={inputCount} status={status} hotOrCold={hotOrCold} />
                <button onClick={() => this.tryAgain()}>Try again?</button>

            </div>
            )
    }
} 