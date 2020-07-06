import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
//=> Styled components

const ContentHeader = styled.header`
    background-color: #393e46;
    padding:10px;
    color:#eeee;
    margin-top:4rem;
`;

const TextHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family:'Slabo 27px', serif;
    text-align:center;
`;
// Styled component <==//

const Header = ({ title }) => {
    return (
        <ContentHeader>
            <TextHeader>{title}</TextHeader>
        </ContentHeader>
    )
}

Header.prototypes = {
    title: PropTypes.string.isRequired
}
export default Header