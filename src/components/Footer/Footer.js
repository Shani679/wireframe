import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const FooterContainer = styled.footer`
    height: 202px;
    background-color: #f7f7f7;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    box-sizing: border-box;
    > .footer-inner-container{
        max-width: 1000px;
        width: 100%;
        display: flex;
        > .footer-inner-container-left{
            max-width: 227px;
            > .title{
                color: #222222;
                font-size: 29px;
                font-weight: 700;
                line-height: 30px;
                display: flex;
                align-items: center;
                font-family: 'Abhaya Libre', serif;
                > .title__logo{
                    margin-right: 17px;
                }
            }
            > p{
                font-size: 14px;
                font-weight: 300;
                line-height: 22px;
            }
        }
        > .footer-inner-container-right{
            width: 551px;
            max-width: 100%;
            margin: 0 auto;
            > .footer-list{
                margin: 0;
                padding: 0;
                list-style-type: none;
                display: flex;
                width: 100%;
                justify-content: space-between;
                text-transform: capitalize;
            }
            > .footer__disclaimer{
                text-align: center;
                font-size: 14px;
                font-weight: 300;
                line-height: 22px;
            }
        }
    }
    @media(max-width: 768px){
        height: unset;
        padding: 24px;
        > .footer-inner-container, > .footer-inner-container > .footer-inner-container-right > .footer-list{
            flex-direction: column;
            align-items: center;
        }
    }
`

export const Footer = () => (
    <FooterContainer className="footer">
        <div className="footer-inner-container">
            <div className="footer-inner-container-left">
                <div className="title">
                    <img src={logo} alt="logo" className="title__logo"/>
                    <span className="title__text">Meals & More</span>
                </div>
                <p className="footer__copyright">Copyright© 2018 Cappsool Technologies Ltd. All Rights Reserved.</p>
            </div>
            <div className="footer-inner-container-right">
                <ul className="footer-list">
                    <li className="footer-list__item">about us</li>
                    <li className="footer-list__item">terms of use</li>
                    <li className="footer-list__item">privacy policy</li>
                    <li className="footer-list__item">cookie policy</li>
                    <li className="footer-list__item">contact us</li>
                </ul>
                <p className="footer__disclaimer">By using our content, products & services you agree to our Terms of Service and Privacy Policy. Reproduction in whole or in part in any form or medium without express written permission of Cappsool Ltd. is strictly prohibited.</p>
            </div>
        </div>
    </FooterContainer>
)