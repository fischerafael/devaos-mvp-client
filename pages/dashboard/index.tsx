import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaBlog,
    FaTrash
} from 'react-icons/fa'
import Button from '../../src/external/ui/components/input/Button'
import FlexContainer from '../../src/external/ui/components/layout/FlexContainer'
import CustomLink from '../../src/external/ui/components/navigation/CustomLink'
import NavBar from '../../src/external/ui/components/templates/NavBar'
import Profile from '../../src/external/ui/components/templates/Profile'
import TaskCard from '../../src/external/ui/components/templates/TaskCard'

const dashboard = () => {
    return (
        <FlexContainer
            flex="alignCenterJustifyCenter"
            as="main"
            column
            style={{ margin: '1rem' }}
        >
            <NavBar>
                <CustomLink href="/login">
                    <Button variant="outline">SAIR</Button>
                </CustomLink>
            </NavBar>
            <Profile />
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </FlexContainer>
    )
}

export default dashboard
