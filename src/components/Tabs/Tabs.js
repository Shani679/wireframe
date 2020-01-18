import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 19px 0 22px;
    padding: 0;
    flex-wrap: wrap;
    width: 1000px;
    max-width: 100%;
    box-sizing: border-box;
    > li.tab{
        border-radius: 3px;
        border: 1px solid #e2e2e2;
        background-color: #ffffff;
        padding: 6px 11px 7px 10px;
        box-sizing: border-box;
        margin: 0 15px 7px 0;
    }
`

export const Tabs = () => {
    const tabs = ["All", "vegan", "keto", "paleo", "vegetarian", "diet", "low carb", "gluten free", "quick & easy"];
    return (
        <TabsContainer>
            {tabs.map((tab, i) => <li key={i} className="tab">{tab}</li>)}
        </TabsContainer>
        
    )
}