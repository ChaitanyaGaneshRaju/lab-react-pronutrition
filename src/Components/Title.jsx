import React, { Component } from 'react';
import styled from 'styled-components';


const Header=styled.h2`
background-color:rgba(90,34,206,255);
color:white;
margin:0;
padding:1em
`

class Title extends Component {
    render() {
        return (
            <div>
                <Header>Pro-Nutrition</Header>
            </div>
        );
    }
}

export default Title;