import React from "react";
function Rainy(){
    return(
        <h1>Bring Your Umbrella!</h1>
    );
}
function Sunny(){
    return(
        <h1>Bring Your Sunglasses</h1>
    );
}

function RainOrShiny(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy />
        );
    } return (
        <Sunny />
    );
}
export {Rainy,Sunny, RainOrShiny};