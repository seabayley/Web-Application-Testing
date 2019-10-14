import React from 'react'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const Dashboard = (props) => {

    return (
        <ButtonGroup color="primary" variant='contained' aria-label="outlined primary button group">
            <Button onClick={props.handleHit}>Hit</Button>
            <Button onClick={props.handleBall}>Ball</Button>
            <Button onClick={props.handleFoul}>Foul</Button>
            <Button onClick={props.handleStrike}>Strike</Button>
        </ButtonGroup>
    )
}
