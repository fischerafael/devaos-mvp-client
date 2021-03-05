import React from 'react'
import { FaTrash } from 'react-icons/fa'
import FlexContainer from '../../layout/FlexContainer'
import CustomLink from '../../navigation/CustomLink'
import TaskItems from './TaskItems'

const TaskCard = () => {
    return (
        <FlexContainer column flex="alignCenterJustifyCenter">
            <FlexContainer
                flex="alignCenterJustifySpaceBetween"
                style={{
                    margin: '2rem 0',
                    maxWidth: '30rem'
                }}
            >
                <h2>Frontend de uma aplicação para auxiliar desenvolvedores</h2>
                <span style={{ marginLeft: '1rem', width: '5rem' }}>
                    15 min
                </span>

                <CustomLink href="">
                    <FaTrash />
                </CustomLink>
            </FlexContainer>

            <p
                style={{
                    lineHeight: '1.5rem',
                    letterSpacing: '.05rem',
                    maxWidth: '30rem'
                }}
            >
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
                asdfasdfas asdfasdfas asdfasdfas asdfasdfas asdfasdfas
            </p>

            <FlexContainer>
                <TaskItems />
            </FlexContainer>
        </FlexContainer>
    )
}

export default TaskCard
