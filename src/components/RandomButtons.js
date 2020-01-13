import React from "react";
import styled from 'styled-components';

export const RdmButton = styled.button`
    height: 30px;
    width: 100px;
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    background: -o-repeating-linear-gradient();
    margin: 10px 10px 20px 10px;
`;

export const RandomButtons = props => (
    
    <div>
        <div>
            <button onClick={props.randomizeButtonValues}>
                Click for random list
            </button>
        </div>
        <div>
            {props.rdmButtonvalues
                .map(breed => (
                    <RdmButton onClick={props.handleSubmit}>{breed}</RdmButton>
                ))
                .slice(1, 9)}
        </div>
    </div>
);
