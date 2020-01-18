import React from 'react';
import styled from 'styled-components';

const PromotionContainer = styled.div`
    width: 290px;
    height: 370px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    border: 1px solid #e2e2e2;
    background-color: #ffffff;
    padding: 15px;
    box-sizing: border-box;
    > .promotion__video{
    width: 100%;
    height: 200px;
    border: 1px solid #e2e2e2;
    }
`

export const Promotion = () => (
    <PromotionContainer>
        <div className="promotion__video">Video</div>
        <ul className="promotions__list">
            <li className="promotion__item">$30 off your first order</li>
            <li className="promotion__item">Healthy meals in 30 minutes</li>
        </ul>
        <button className="promotion__button">Order Now</button>
    </PromotionContainer>
)