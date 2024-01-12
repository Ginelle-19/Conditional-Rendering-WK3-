import React from "react";
function Rainy(){
    return(
        <h1>Bring Your Umbrella!</h1>
    );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy />
        );
    } return (
        <h1>No Rain Today!</h1>
    );
}
export {Rainy, RainOrShine};