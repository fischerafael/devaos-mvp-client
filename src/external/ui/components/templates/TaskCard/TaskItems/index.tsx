import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../../../layout/FlexContainer'

const TaskItems = () => {
    return (
        <FlexContainer
            flex="alignCenterJustifySpaceBetween"
            style={{
                maxWidth: '30rem',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}
        >
            <TaskItemStyle>React</TaskItemStyle>
            <TaskItemStyle>Frontend</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>

            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
            <TaskItemStyle>Métodos Ágeis</TaskItemStyle>
        </FlexContainer>
    )
}

export default TaskItems

export const TaskItemStyle = styled.span`
    padding: 0.5rem;
    margin: 0.25rem;
    flex-wrap: wrap;
    background: white;
`
