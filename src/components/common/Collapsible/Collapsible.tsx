import React from 'react'
import { Collapse, CardContent, Typography, CardActions, Card } from '@mui/material'
import { CollapsibleStyles } from './Collapsible.styles'
import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Collapsible = ({ Heading, Icon }: any) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <CollapsibleStyles>
            <Card className='card' style={{ borderRadius: '10px', border: '1px solid grey' }}>
                <CardActions disableSpacing className='card-header'>
                    <div style={{ display: 'flex', justifyContent: 'center', columnGap: '10px', color: 'white' }}>
                        <span>{Icon}</span>  <Typography> {Heading}</Typography>
                    </div>
                    <ExpandMore
                        onClick={handleExpandClick}
                        className='expand-icon'
                    >
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent style={{ backgroundColor: '#303339' }}>
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