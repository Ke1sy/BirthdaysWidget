import React from 'react';
import BirthdaysContainer from "./components/BirthdaysContainer";
import {Header, Main, TestContent} from "./appStyles";

export const BIRTHDAY_BASE_URL = 'http://test.anromsocial.com/';

const App = () => {
    return (
        <>
            <Header>Header</Header>
            <Main>
                <TestContent>
                    <b>Exapmle 1: </b>Here there is a test content that takes the half of the page...
                    Widget will adapt to any size and will be displayed correctly.
                    Also scroll allows it not to take a lot of space.
                </TestContent>
                <BirthdaysContainer/>
            </Main>
            <Main>
                <BirthdaysContainer/>
                <TestContent lg>
                    <b>Exapmle 2: </b>Here there is another test content that occupies 70% of the page with the same widget. And so on...
                </TestContent>
            </Main>
        </>
    );
};

export default App;
