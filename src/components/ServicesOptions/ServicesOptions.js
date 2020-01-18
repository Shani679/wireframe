import React from 'react';
import styled from 'styled-components';
import { Service } from './Service';

const ServicesOptionsContainer = styled.section`
    @media(max-width: 768px){
        max-width: 100%;
    }
`

export const ServicesOptions = () => (
    <ServicesOptionsContainer>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
        <Service title="Home cheff" list={["$30 off your first order", "Healthy meals in 30 minutes", "Fresh ingredients, not frozen"]}/>
    </ServicesOptionsContainer>
)