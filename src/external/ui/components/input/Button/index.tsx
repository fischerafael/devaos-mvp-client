import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
    children: ReactNode
    [x: string]: any
    variant?: 'ghost' | 'outline'
}

const Button = ({ children, ...props }: Props) => {
    return <ButtonStyle {...props}>{children}</ButtonStyle>
}

export default Button

export const ButtonStyle = styled.button<Props>`
    color: ${(props) => props.theme.colors.ligth};
    background: ${(props) => props.theme.colors.primary};

    &:hover {
        color: ${(props) => props.theme.colors.primary};
        background: transparent;
    }

    ${(props) => props.variant === 'ghost' && Ghost}
    ${(props) => props.variant === 'outline' && Outline}
`
const Ghost = css`
    color: ${(props) => props.theme.colors.primary};
    background: transparent;

    &:hover {
        color: ${(props) => props.theme.colors.ligth};
        background: ${(props) => props.theme.colors.primary};
    }
`

const Outline = css`
    color: ${(props) => props.theme.colors.primary};
    background: transparent;
    border: solid 0.125rem ${(props) => props.theme.colors.primary};

    &:hover {
        color: ${(props) => props.theme.colors.ligth};
        background: ${(props) => props.theme.colors.primary};
    }
`
