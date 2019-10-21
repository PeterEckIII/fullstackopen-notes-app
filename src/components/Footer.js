import React from 'react'
import styled from 'styled-components';

const FootContainer = styled.div`
    color: green;
    font-style: italic;
    font-size: 16px;
`;

const Footer = () => (
    <FootContainer>
        <br/>
        <em>Note app, Published by Peter Eck</em>
    </FootContainer>
)

export default Footer;
