import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoStyle>
            DE<span>VAOS</span>
        </LogoStyle>
    )
}

export default Logo

export const LogoStyle = styled.span`
    span {
        font-family: inherit;
        font-weight: bold;
    }
`
