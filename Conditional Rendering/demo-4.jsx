import React from "react";
function Rainy(){
    return <h1>Bring Your Umbrella!</h1>
}
function Sunny(){
    return <h1>Bring Your Sunglasses!</h1>
}
const isRainy = true;

function RainOrShines(props){
    const isRainy = props.isRainy;
    return isRainy? <Rainy /> : <Sunny />;
}
export {Rainy, Sunny, RainOrShines};