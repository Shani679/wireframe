import React from 'react';
import styled from 'styled-components';
import { Navbar } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { Tabs } from './components/Tabs/Tabs';
import { Articles } from './components/Articles/Articles';
import { Footer } from './components/Footer/Footer';
import { Faq } from './components/Faq/Faq';
import { ServicesOptions } from './components/ServicesOptions/ServicesOptions';
import { Favorites } from './components/Favorites/Favorites';
import { Promotion } from './components/Promotion/Promotion';

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0 19px 0 21px;
  box-sizing: border-box;
  h2, h4 {font-family: 'Abhaya Libre', serif;}
  > .main-section{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1000px;
    max-width: 100%;
    flex-wrap: wrap;
  }
  > .description{
    width: 1000px;
    max-width: 100%;
    > .description__title{
      font-size: 30px;
      font-weight: 700;
      line-height: 30px;
    }
    > .description__content{
      width: 680px;
      max-width: 100%;
      font-size: 14px;
      font-weight: 300;
    }
  }
  @media(max-width: 768px){
    > .main-section{
      flex-direction: column;
    }
  }
`

function App() {
  return (
    <View>
      <Navbar/>
      <Header/>
      <Main>
        <Tabs/>
        <div className="main-section">
          <ServicesOptions/>
          <aside>
            <Articles/>
            <Promotion/>
          </aside>
        </div>
        <section className="description">
          <h2 className="description__title">Meal Delivery Services</h2>
          <p className="description__content">When looking for the best food box delivery service, it can be challenging just knowing where to start. Whether you’re looking for a cook at home delivery service, or even a vegan recipe delivery, there are many food delivery meal kits to push you to be more adventurous in the
          kitchen. Naturally, not everyone has the time to plan, prepare and cook their meals from scratch, so finding the best home meal kits can really help you to become a culinary genius in the kitchen with minimal effort.</p>
        </section>
        <Favorites/>
        <Faq/>
      </Main>
      <Footer/>
    </View>
  );
}

export default App;
