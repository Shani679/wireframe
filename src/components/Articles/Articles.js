import React from 'react';
import styled from 'styled-components';



const ArticlesContainer = styled.div`
    width: 290px;
    border-radius: 3px;
    background-color: #f6f6f6;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 24px;
    > .articles-container__title{
        margin: 0;
    }
    > .article{
        display: flex;
        &:not(:last-child){
            margin-bottom: 19px;
        }
        > .article__img{
            width: 92px;
            height: 92px;
            margin-right: 7px;
            border: 1px solid #e2e2e2;
        }
        > .article__description{
            font-size: 12px;
            line-height: 18px;
            margin: 0;
            flex: 1;
        }
    }
`

export const Articles = () => (
    <ArticlesContainer className="articles-container">
        <h3 className="articles-container__title">Articles</h3>
        <hr/>
        <article className="article">
            <img className="article__img" alt="article"/>
            <p className="article__description">The Pros And Cons Of A Meal Delivery Service</p>
        </article>
        <article className="article">
            <img className="article__img" alt="article"/>
            <p className="article__description">The Pros And Cons Of A Meal Delivery Service</p>
        </article>
        <article className="article">
            <img className="article__img" alt="article"/>
            <p className="article__description">The Pros And Cons Of A Meal Delivery Service</p>
        </article>
    </ArticlesContainer>
)