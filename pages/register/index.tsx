import React, { useState } from 'react'
import Button from '../../src/external/ui/components/input/Button'
import Input from '../../src/external/ui/components/input/Input'
import FlexContainer from '../../src/external/ui/components/layout/FlexContainer'

const Register = () => {
    const [github, setGithub] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <FlexContainer
            flex="alignCenterJustifyCenter"
            as="main"
            column
            style={{ margin: '0 1rem', height: '100vh' }}
        >
            <FlexContainer
                flex="alignCenterJustifyCenter"
                as="main"
                column
                color="ligth"
                style={{
                    maxWidth: '20rem',
                    width: '100%',
                    padding: '2rem',
                    boxShadow: '3px 3px 6px rgba(40, 62, 74, 0.1)',
                    borderRadius: '0.5rem'
                }}
            >
                <h1 style={{ fontSize: '1.5rem', textAlign: 'center' }}>
                    CADASTRE-SE
                </h1>
                <p
                    style={{
                        fontSize: '.75rem',
                        textAlign: 'center',
                        margin: '0.5rem 0'
                    }}
                >
                    Utilize seu Github
                </p>
                <FlexContainer
                    as="form"
                    column
                    style={{ background: 'transparent', width: '100%' }}
                >
                    <Input
                        name="Github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        error={''}
                        style={{ margin: '.25rem 0' }}
                    >
                        +
                    </Input>
                    <Input
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={''}
                        style={{ margin: '.25rem 0' }}
                    >
                        +
                    </Input>
                    <Input
                        name="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        error={''}
                        style={{ margin: '.25rem 0' }}
                    >
                        +
                    </Input>
                    <Button style={{ marginTop: '1rem' }}>Cadastrar</Button>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default Register
