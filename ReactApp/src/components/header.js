import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

    render() {
        const style= {
            backgroundColor: "navy",
            opacity: "90%",
            color: "white",
            textAlign: "center",
            height: "100px",
            fontFamily: "helvetica"
        }
        return (
            <div>
            <h1 style={style}>Employee Directory</h1>
            </div>
        )
    }
}

export default Header;