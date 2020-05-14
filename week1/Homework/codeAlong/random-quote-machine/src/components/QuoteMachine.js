import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


function QuoteMachine({ assignNewQuoteIndex, selectedQuote }) {
    return (
        <Card>
            <CardContent>
                <Typography id='text'>
                    {selectedQuote.quote}-<span id='button'>{selectedQuote.author}</span>
                </Typography>

            </CardContent>
            <CardActions>
                <Button id='newQuote' size='small' onClick={assignNewQuoteIndex}>Next Quote</Button>
                <IconButton id='tweet-quote'
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=StefQuotes`)}
                >
                    <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default QuoteMachine
