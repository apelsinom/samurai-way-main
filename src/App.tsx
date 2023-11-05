import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Dialogs/>
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
