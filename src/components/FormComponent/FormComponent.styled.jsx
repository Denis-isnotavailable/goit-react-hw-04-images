import { Form } from "formik";
import styled from "styled-components";

export const FormComponentStyled = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;

    button {
        display: inline-block;
        width: 48px;
        height: 48px;
        border: 0;
        background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
        background-size: 40%;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.6;
        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: none;
    }

    button:hover {
        opacity: 1;
    }

    /* span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
    } */

    input {
        display: inline-block;
        width: 100%;
        font: inherit;
        font-size: 20px;
        border: none;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
    }

    input::placeholder {
        font: inherit;
        font-size: 18px;
    }

    div {
        position: absolute;
        bottom: 4px;
        left: 50%;
        color: #f19090;
    }
`;