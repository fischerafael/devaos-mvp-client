import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    color?: 'ligth' | 'primary'
    as?: 'span' | 'main' | 'header' | 'nav' | 'section' | 'form'
    column?: boolean
    flex?: 'alignCenterJustifyCenter' | 'alignCenterJustifySpaceBetween'
    [x: string]: any
}

const FlexContainer = ({ as, children, ...props }: Props) => {
    return (
        <FlexContainerStyle as={as} {...props}>
            {children}
        </FlexContainerStyle>
    )
}

export default FlexContainer

export const FlexContainerStyle = styled.div<Props>`
    background: ${(props) => props.theme.colors.background};
    background: ${(props) =>
        props.color === 'ligth' && props.theme.colors.ligth};
    background: ${(props) =>
        props.color === 'primary' && props.theme.colors.primary};

    display: flex;
    flex-direction: ${(props) => props.column && 'column'};
    ${(props) =>
        props.flex === 'alignCenterJustifyCenter' && alignCenterJustifyCenter}
    ${(props) =>
        props.flex === 'alignCenterJustifySpaceBetween' &&
        alignCenterJustifySpaceBetween};
`
const alignCenterJustifyCenter = css`
    align-items: center;
    justify-content: center;
`
const alignCenterJustifySpaceBetween = css`
    align-items: center;
    justify-content: space-between;
`
