import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    padding: 36px 19px 29px 21px;
    box-sizing: border-box;
    color: #000000;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    > .header-inner-container{
        width: 1000px;
        max-width: 100%;
        > .header__title{
            font-size: 55px;
            font-weight: 700;
            line-height: 60px;
            margin: 0 0 16px;
            font-family: 'Abhaya Libre', serif;
        }
        > .header__content{
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            font-family: 'Montserrat', sans-serif;
            max-width: 600px;
            margin: 0;
        }
    }
    @media(max-width: 768px){
        > .header-inner-container > .header__title{
            font-size: 29px;
        }
    }
`

export const Header = () => (
    <HeaderContainer>
        <div className="header-inner-container">
            <h1 className="header__title">Best Meal Delivery Services</h1>
            <p className="header__content">Sign up for one of the meal delivery plans to save time, cook great meals and upgrade your lifestyle. Try out one of the meal delivery services below!</p>
        </div>
    </HeaderContainer>
)