import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import FlexContainer from '../../layout/FlexContainer'

interface Props {
    children?: ReactNode
    [x: string]: any
    type?: 'text' | 'password' | 'number'
    error?: string
    textarea?: boolean
    value?: any
    onChange?: (e: any) => void
    name: string
}

const Input = ({
    value,
    onChange,
    name,
    textarea,
    error,
    type,
    children,
    ...props
}: Props) => {
    return (
        <InputStyle {...props}>
            {children && (
                <FlexContainer
                    flex="alignCenterJustifyCenter"
                    style={{ borderRadius: '0.25rem' }}
                >
                    {children}
                </FlexContainer>
            )}

            <FlexContainer
                flex="alignCenterJustifyCenter"
                style={{ position: 'relative', background: 'transparent' }}
            >
                <label>
                    <FlexContainer
                        style={{
                            position: 'absolute',
                            top: '.5rem',
                            background: 'transparent'
                        }}
                    >
                        <p>{name}</p>
                        {error && <span>{error}</span>}
                    </FlexContainer>
                    {textarea && <textarea />}
                    {!textarea && (
                        <input
                            onChange={onChange}
                            value={value}
                            type={type ? type : 'text'}
                        />
                    )}
                </label>
            </FlexContainer>
        </InputStyle>
    )
}

export default Input

export const InputStyle = styled.label<Props>`
    width: 100%;

    display: grid;

    grid-template-columns: 1fr 4fr;

    height: 3rem;
    background: transparent;

    border: solid 0.1rem ${(props) => props.theme.colors.background};
    border-radius: 0.5rem;

    label {
        background: transparent;
        padding: 0 1rem;
        width: 100%;

        p,
        span {
            font-size: 0.5rem;
            background: transparent;
        }

        span {
            margin-left: 0.5rem;
            color: red;
        }

        input {
            border: none;
            background: transparent;
            font-size: 1.5rem;
            outline: none;
            font: inherit;
            width: 100%;
            margin-top: 0.5rem;
        }

        textarea {
            border: none;
            background: transparent;
            font-size: 1.5rem;
            outline: none;
            font: inherit;
            resize: vertical;
            padding: 2rem 0;
        }
    }
`
const withChildren = css``
