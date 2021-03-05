import React from 'react'
import { FaBlog, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import FlexContainer from '../../layout/FlexContainer'
import CustomLink from '../../navigation/CustomLink'

const Profile = () => {
    return (
        <FlexContainer
            column
            flex="alignCenterJustifyCenter"
            style={{
                width: '100%',
                padding: '2rem 0',
                borderBottom: '.1rem solid white'
            }}
        >
            <img
                src="https://github.com/fischerafael.png"
                alt="Rafael Fischer"
                style={{
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '50%'
                }}
            />
            <h1 style={{ padding: '1rem', textAlign: 'center' }}>
                Rafael Fischer
            </h1>
            <p style={{ textAlign: 'center' }}>
                Desenvolvedor Frontend, UI & UX Designer e Pesquisador
            </p>
            <FlexContainer
                flex="alignCenterJustifyCenter"
                style={{ background: 'transparent', padding: '1rem' }}
            >
                <CustomLink href="">
                    <FaGithub />
                </CustomLink>
                <CustomLink href="">
                    <FaLinkedin />
                </CustomLink>
                <CustomLink href="">
                    <FaBlog />
                </CustomLink>
                <CustomLink href="">
                    <FaYoutube />
                </CustomLink>
            </FlexContainer>
        </FlexContainer>
    )
}

export default Profile
