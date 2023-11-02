import React from 'react';
import useInput from '../hooks/useInput';
import { FormEvent } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput("", "firstName");
    const [lastName, bindLastName, resetLastName] = useInput("", "lastName");

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert(`Hello ${firstName} ${lastName}`);

        resetFirstName();

        resetLastName();
    }

    const formStyles = {
        backgroundColor: 'rgb(245 250 255)',
        color: 'blue',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const formBox = {
        backgroundColor: 'white',
        width: 50,
        borderRedius:20,
        padding:50,
        textAlign: 'center'
    }

    const inputStyle = {
        padding:'10px',
        backgroundColor:'#edf1ff',
        border:'none'
    }

    const lableStyle = {
        color:'gray',
        marginRight:'5px'
    }

    const btnStyle = {
        backgroundColor:'#32049f',
        color:'white',
        border: 'none',
        boxShadow:'unset',
        padding:'5px 15px',
        marginTop:'15px'
    }

    return(
        <div style={formStyles}>
            <form style={{padding:'40px', backgroundColor:'white', textAlign:'center', boxShadow:'1px 4px 10px 0px gray'}} onSubmit={submitHandler}>
                <div style={{marginBottom:'10px'}}>
                    <label style={lableStyle}>First Name</label>
                    <input style={inputStyle} {...bindFirstName} type='text' />
                </div>
                <div style={{marginBottom:'10px'}}>
                    <label style={lableStyle}>Last Name</label>
                    <input style={inputStyle} {...bindLastName} type='text' />
                </div>
                <button style={btnStyle}>Submit</button>
            </form>
        </div>
    )
}