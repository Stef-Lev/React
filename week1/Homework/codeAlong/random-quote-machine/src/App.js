import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import QuoteMachine from './components/QuoteMachine';


const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(res => res.json())
      .then(quotes => {
        this.setState({ quotes }, this.assignNewQuoteIndex)
      })
  }

  get selectedQuote() {
    const { quotes, selectedQuoteIndex } = this.state
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generateNewQuoteIndex = () => {
    const { quotes } = this.state
    if (!quotes.length) {
      return undefined;
    }
    return random(0, quotes.length - 1)
  }

  assignNewQuoteIndex = () => {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  render() {
    return (
      <Grid className={this.props.classes.container} id='quote-box'
        justify='center' container>
        <Grid item xs={11} lg={8} >
          {
            this.selectedQuote ?
              <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> : null
          }
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(App);
