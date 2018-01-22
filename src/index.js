import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber () {
    return Math.floor(Math.random() * (1000 - 0) + 1);
}

var luckyNumberStorage = {
    name: 'Matt',
    number: luckyNumber(),
};

function greeting (user) {
    return (
        <div className="container">
            <h1>Hello {user.name}</h1>
            <h2 className="text-muted">Your Lucky Number is: {user.number}</h2>
        </div>
    )
}


ReactDOM.render(
    greeting(luckyNumberStorage),
    document.getElementById('root')

);