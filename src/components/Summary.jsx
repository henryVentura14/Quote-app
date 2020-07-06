import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { firtsMayus } from '../helpers/helper'

//=> Styled components
const ContentSummary = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#eeeeee;
    margin-top:1rem;
    border:solid 1px #76ead7;
`;
// Styled component <==//

const Summary = ({ data }) => {
    //=> extraemos data
    const { brand, year, plan } = data
    // extraemos data<==

    if (brand === '' || year === '' || plan === '') return null;

    return (
        <ContentSummary>
            <h2>Quote summary</h2>
            <ul>
                <li>Brand: {firtsMayus(brand)}</li>
                <li>Plan: {firtsMayus(plan)}</li>
                <li>Car year : {year}</li>
            </ul>
        </ContentSummary>
    )
}
Summary.prototypes = {
    data: PropTypes.object.isRequired
}
export default Summary