import React from 'react';
import styled from 'styled-components';

const FavoritesContainer = styled.section`
    width: 1000px;
    max-width: 100%;
    > div{
        width: 680px;
        max-width: 100%;
        > .favorites__title{
            color: #222222;
            font-size: 24px;
            font-weight: 700;
            line-height: 22px;
        }
        
        > .favorites-services-container{
            display: flex;
            justify-content: space-between;
            > .service{
                width: 210px;
                height: 235px;
                border-radius: 3px;
                border: 1px solid #e2e2e2;
                background-color: #ffffff;
            }
        }
    }
    @media(max-width: 768px){
        > div > .favorites-services-container{
            flex-direction: column;
            align-items: center;
            > .service:not(:last-child){
                margin-bottom: 10px;
            }
        }
    }
`

export const Favorites = () => (
    <FavoritesContainer>
        <div>
            <h2 className="favorites__title">Tim’s favorites</h2>
            <hr/>
            <div className="favorites-services-container">
                <div className="service"></div>
                <div className="service"></div>
                <div className="service"></div>
            </div>
        </div>
    </FavoritesContainer>
)