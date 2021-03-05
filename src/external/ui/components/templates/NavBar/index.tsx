import React from 'react'
import Logo from '../../display/Logo'

import FlexContainer from '../../layout/FlexContainer'
import CustomLink from '../../navigation/CustomLink'

const NavBar = ({ children }) => {
    return (
        <FlexContainer
            flex="alignCenterJustifySpaceBetween"
            style={{
                width: '100%',
                height: '15vh'
            }}
            as="header"
        >
            <CustomLink href="/">
                <Logo />
            </CustomLink>

            {children}
        </FlexContainer>
    )
}

export default NavBar
