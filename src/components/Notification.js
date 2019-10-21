import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
    background: lightgrey;
    font-size: 20px;
    border-style: solid;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

const Notification = ({ message }) => {
    return message === null
        ? null
        : <ErrorMessage>{ message }</ErrorMessage>
};

export default Notification;
