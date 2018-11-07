import React from 'react';

export default class GuessInput extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onGuessNumber) {
            const value = this.input.value;
            this.props.onGuessNumber(value);
        }
        this.input.value = '';
    }
    render() {
        return (
            <div className="guessInput">
                <form onSubmit={e => this.onSubmit(e)}>
                <label htmlFor="guessinput"></label>
                <input type="text" min="1" max="3" placeholder="Try your luck" ref={input => (this.input = input)} />
                <button type="submit">Guess</button>
                </form>
            </div>
        );
    }
}