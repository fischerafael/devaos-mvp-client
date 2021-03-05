import React, { ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
    [x: string]: any
    href: string
    target?: string
    children: ReactNode
}

const CustomLink = ({ href, target, children, ...props }: Props) => {
    return (
        <Link href={href}>
            <AnchorStyle {...props} target={target && target}>
                {children}
            </AnchorStyle>
        </Link>
    )
}

export default CustomLink

export const AnchorStyle = styled.a`
    text-decoration: 'none';
    cursor: pointer;
    margin: 0 0.5rem;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
