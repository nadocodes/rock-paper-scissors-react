import React from 'react'

const GetWinner = ({winner = 0}) => {
    const text = {
        "-1": 'You Win!',
        1: 'You Lose!',
        0: "It's a Draw!",
    };
    return(<h2>{text[winner]}</h2>);
}

export default GetWinner