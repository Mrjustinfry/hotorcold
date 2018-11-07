import React from 'react';


export default function Number(props) {

    const userInputs = props.userInputs.map((number, index) => (
        <li key={index}>{number}, </li>
    ));
    return (
        <ul className="numbers">{userInputs}</ul>
    );
}
