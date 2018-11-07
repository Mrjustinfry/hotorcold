import React from 'react';
import Numbers from './numbers';

export default function GuessOutput(props) {
    return (
        <div className="guessOutput">
            <p>{props.hotOrCold}</p>
            <p>You have guessed {props.inputCount} times</p>
            <p>{props.status}</p>
            <p>Numbers guessed:</p>
            <Numbers id="numbers" userInputs={props.userInputs} />
        </div>
    );
}