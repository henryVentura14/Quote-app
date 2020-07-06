import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

//=> Styled components
const Message = styled.p`
    background-color:#c4fb6d;
    margin-top:2rem;
    padding:1rem;
    text-align:center;
    color: #393e46;
`;
const ResultMessage = styled.div`
    text-align:center;
    padding:0.5rem;
    border:1px solid #76ead7;
    background-color:#76ead7;
    margin-top:1rem;
    position:relative;
`;
const TextQuote = styled.p`
    color: #393e46;
    padding:1rem;
    text-transform:uppercase;
    font-weight:bold;
    margin:0;
`;

// Styled component <==//
const Result = ({ quote }) => {

    return (
        (quote === 0)
            ? <Message>Choose brand, year and plan</Message>
            : <ResultMessage>
                <TextQuote>The total is : $ {quote}</TextQuote>
            </ResultMessage>
    )
}
Result.prototypes = {
    quote: PropTypes.number.isRequired
}
export default Result