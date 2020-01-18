import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
    width: 680px;
    height: 200px;
    border-radius: 3px;
    border: 1px solid #e2e2e2;
    background-color: #ffffff;
    margin-bottom: 30px;
    display: flex;
    padding: 5px;
    box-sizing: border-box;
    > .service__video{
        width: 50%;
        border: 1px solid #e2e2e2;
    }
    .service__title{
        margin: 0;
        font-size: 18px;
    }
    .service__list > .service__item{
        font-size: 12px;
    }
    @media(max-width: 768px){
        max-width: 100%;
    }
`

export const Service = ({title, list}) => (
    <ServiceContainer className="service">
        <div className="service__video"></div>
        <div>
            <h1 className="service__title">
                <img className="service__logo" alt="logo"/>
                <span className="service__text">{title}</span>
            </h1>
            <ul className="service__list">
                {list.map((item, i) => <li className="service__item" key={i}>{item}</li>)}
            </ul>
            <button className="service__btn">Buy</button>
        </div>
    </ServiceContainer>
)