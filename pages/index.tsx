import Logo from '../src/external/ui/components/display/Logo'
import Button from '../src/external/ui/components/input/Button'
import FlexContainer from '../src/external/ui/components/layout/FlexContainer'
import CustomLink from '../src/external/ui/components/navigation/CustomLink'
import NavBar from '../src/external/ui/components/templates/NavBar'

export default function Home() {
    return (
        <FlexContainer
            flex="alignCenterJustifyCenter"
            as="main"
            column
            style={{ margin: '0 1rem' }}
        >
            <NavBar>
                <CustomLink href="/login">
                    <Button variant="outline">ENTRAR</Button>
                </CustomLink>
            </NavBar>

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
                <CustomLink href="/register">
                    <Button style={{ margin: '2rem' }}>CADASTRAR</Button>
                </CustomLink>
            </FlexContainer>
        </FlexContainer>
    )
}
