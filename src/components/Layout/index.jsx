import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';




export default function Layout() {
    const style = {
        height: "100vh"
    }
    return (
        <Fragment>
            <NavBar />
            <Outlet style={style} />
            <Footer />

        </Fragment>
    )
}
