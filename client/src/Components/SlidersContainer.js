import React from 'react';
import TempSlider from "../TempSlider";
const SlidersContainer = () => {
    
    return (
        <div><Headline />
    <TempSlider />
        </div>
    );
};


const Headline = () => {
    return <h1>Sliders to control input data</h1>;
};
export default SlidersContainer;