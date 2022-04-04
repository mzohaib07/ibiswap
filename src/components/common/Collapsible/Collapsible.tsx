import React from 'react'
import { Collapse, CardContent, Typography, CardActions, Card } from '@mui/material'
import { CollapsibleStyles } from './Collapsible.styles'
import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Collapsible = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <CollapsibleStyles>
            <Card className='card'>
                <CardActions disableSpacing className='card-header'>
                    <div>
                        <Typography>Hello There</Typography>
                    </div>
                    <ExpandMore
                        onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </CollapsibleStyles>
    )
}

export default Collapsible