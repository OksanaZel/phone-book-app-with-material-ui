import React from 'react';
import mainPageImg from "../images/home-page.png"
import {MainPageContainer, MainPageImg, MainPageTitle} from "../components/App/App.styled"

function HomeView() {
    return (
        <MainPageContainer>
            <MainPageTitle>PhoneBook App</MainPageTitle>
            <MainPageImg src={mainPageImg}></MainPageImg>
        </MainPageContainer>
    )
}

export default HomeView;
