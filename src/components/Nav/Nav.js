import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import hamburgerIcon from '../../images/menu_icon.svg';

const Nav = styled.nav`
    height: 80px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    box-sizing: border-box;
    > div.nav-inner-container{
        max-width: 1000px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div.nav-title{
            color: #222222;
            font-size: 29px;
            font-weight: 700;
            line-height: 30px;
            display: flex;
            align-items: center;
            font-family: 'Abhaya Libre', serif;
            > .nav-title__logo{
                margin-right: 17px;
            }
        }
        > .menu__list{
            display: flex;
            margin: 0;
            padding: 0;
            list-style-type: none;
            li.menu__item{
                color: #222222;
                font-family: 'Montserrat', sans-serif;
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0.65px;
                line-height: 27px;
                padding-right: 30px;
            }
        }
        > img.menu__trigger{
            display: none;
        }
    }
    @media(max-width: 768px){
        > div.nav-inner-container{
            > .menu__list{
                display: none;
            }
            > img.menu__trigger{
                display: initial;
                cursor: pointer;
            }
        }
    }
`

export const Navbar = () => (
    <Nav>
        <div className="nav-inner-container">
            <div className="nav-title">
                <img src={logo} alt="logo" className="nav-title__logo"/>
                <span className="nav-title__text">Meals & More</span>
            </div>
            <ul className="menu__list">
                <li className="menu__item"><a>Best Meal Delivery</a></li>
                <li className="menu__item"><a>Reviews</a></li>
                <li className="menu__item"><a>Recipes</a></li>
                <li className="menu__item"><a>Learn</a></li>
            </ul>
            <img className="menu__trigger" src={hamburgerIcon} alt="toggle-menu"/>
        </div>
    </Nav>
)