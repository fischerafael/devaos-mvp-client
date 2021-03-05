import Logo from '../src/external/ui/components/display/Logo'
import Button from '../src/external/ui/components/input/Button'
import FlexContainer from '../src/external/ui/components/layout/FlexContainer'

export default function Home() {
    return (
        <FlexContainer
            flex="alignCenterJustifyCenter"
            as="main"
            column
            style={{ margin: '0 1rem' }}
        >
            <FlexContainer
                flex="alignCenterJustifySpaceBetween"
                style={{
                    width: '100%',
                    height: '15vh'
                }}
                as="header"
            >
                <Logo />
                <Button variant="outline">ENTRAR</Button>
            </FlexContainer>
            <FlexContainer
                as="section"
                style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '85vh'
                }}
                column
            >
                <h1
                    style={{
                        fontSize: '10rem',
                        letterSpacing: '1rem',
                        textAlign: 'center'
                    }}
                >
                    DEV AOS
                </h1>
                <h2
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'normal',
                        textAlign: 'center'
                    }}
                >
                    MOSTRE SUA EXPERIÊNCIA COMO DESENVOLVEDOR COMPARTILHANDO
                    CONHECIMENTO
                </h2>
                <Button style={{ margin: '2rem' }}>CADASTRAR</Button>
            </FlexContainer>
        </FlexContainer>
    )
}
