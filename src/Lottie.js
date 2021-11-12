import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

export const LottieAnimation = ({lotti,height,width}) => {
    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData:lotti,
        renderSettings:{
            preserveAspectRation:"xMidYMid S=slice",
        },

    };
    return (
        <div>
            <Lottie options = {defaultOptions} height={height} width={width}/>
        </div>
    );
}

export default LottieAnimation;