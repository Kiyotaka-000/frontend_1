import * as React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from "../modules/landing-page/pages/home";
import EventRegistrationPage from "../modules/event-registration/pages/event-registration-page";

const Path=()=>{
    // const Navigate = useNavigate();

    // const NavigateHome=()=>{
    //     Navigate('/');
    // }

    // const NavigateToEventRegistrationPage=()=>{
    //     Navigate('/eventRegistration');
    // }

    return (
    
    
    
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eventregistration" element={<EventRegistrationPage/>}/>
    </Routes>)
}
export default Path;