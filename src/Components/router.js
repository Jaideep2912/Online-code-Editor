import React from 'react';
import { Route, ReactLocation } from "react-location";
import Homepage from "../Components/Homepage"
import Login from "../Components/Login"
import Testing1 from './Testing1';
import Code from "../Components/codeEditor";
import Homepage_Header from "../Components/Homepage_Header"
import HomepageHeader from "../Components/Homepage_Header"
import Footer from './Footer';
import Header from "../Components/Header";
import CodeEditor from "../Components/codeEditor";
export const routes: Route[] = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path:"testing",
        element:<Testing1/>
    },
    {
    path: "button",
        element: <Header />
    },
    {
    path: "code",
          element: <codeEditor />
          
          
    },
          
    {
        path: "h_header",
        element: <HomepageHeader/>
    },
    {
        path: "footer",
        element: <Footer/>
    },
];

export const location = new ReactLocation();