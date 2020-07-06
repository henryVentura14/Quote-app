import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { getYearDifference, calculateBrand, getPlan } from '../helpers/helper'

//=> Styled components
const Field = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
    color:#393e46;
`;
const Label = styled.label`
    flex:0 0 100px;
`;

const Select = styled.select`
    display:flex;
    width:100%;
    padding:1rem;
    border:1px solid #e1e1e1;
    -webkit-appearance:none;
    &:focus{
        outline: solid 1px #393e46;
    }
`;

const InputRadio = styled.input`
    margin:0 1rem;
`;

const Button = styled.button`
    background-color:#393e46;
    font-size:16px;
    width:100%;
    padding:1rem;
    text-transform:uppercase;
    font-weight:bold;
    border:solid 1px #393e46;
    cursor: pointer;
    color:#eeeeee;
    margin-top:2rem;
    &:hover{
        color:#76ead7;
        border:solid 1px #76ead7;
        outline: none;
    }
    &:focus{
        outline: none;
    }
`;

const Error = styled.div`
    background-color:#c70039;
    color:#ffffff;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom:1rem;
`;
// Styled component <==//

const Form = ({ saveSummary, saveLoading }) => {

    //==> useState
    const [data, saveData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, saveError] = useState(false)
    //useState <==//

    // ==> Extraemos valores del state
    const { brand, year, plan } = data;
    // Extraemos valores del state <== //

    //==> Leer los datos del form y colocar en el state
    const getInformation = e => {
        saveData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    // Leer los datos del form y colocar en el state <==//

    // ==> Handle submit 
    const insuranceQuote = e => {
        e.preventDefault();
        //==> Validate
        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false)
        // Validate <==//


        //Base de 2000
        let result = 2000;

        //==> Obtener la diferencia de años
        const difference = getYearDifference(year);
        // Obtener la diferencia de años <== //

        //==>Por cada año hay que restar el 3%
        result -= ((difference * 3) * result) / 100;
        //Por cada año hay que restar el 3% <==//

        //Americano 15%, Asiatico 5% y Europeo 30%
        result = calculateBrand(brand) * result;

        // Basico 20% , completo 50%
        const incrementPlan = getPlan(plan);
        result = parseFloat(incrementPlan * result).toFixed(2);
        //=> Se muestra el spinner
        saveLoading(true);
        // Se muestra el spinner <==//
        setTimeout(() => {
            //=> Se oculta el spinner
            saveLoading(false);

            //=> Se pasa la info component principal
            saveSummary({
                quote: Number(result),
                data
            });
        }, 1000);

    }
    // Handle submit  <==// 
    return (
        <form onSubmit={insuranceQuote}>
            <Field>
                {error ? <Error>dasdasd</Error> : null}
            </Field>
            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getInformation}>
                    <option value="">--Select--</option>
                    <option value="american">--American--</option>
                    <option value="asian">--Asian--</option>
                    <option value="europe">--Europe--</option>
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInformation}>
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getInformation}
                />Basic
                <InputRadio
                    type="radio"
                    name="plan"
                    value="complete"
                    checked={plan === "complete"}
                    onChange={getInformation}
                />Complete
            </Field>
            <Button type="submit">Quote</Button>
        </form>
    )
}
Form.prototypes = {
    saveSummary: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}
export default Form