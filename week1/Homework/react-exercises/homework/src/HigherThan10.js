import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    setCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        let feedback;
        this.state.count > 10 ? feedback = "It's higher than 10!" : feedback = "Keep counting..."
        return (<div>
            <Count count={this.state.count} />
            <Button onclick={this.setCount} />
            <p>{feedback}</p>
        </div>)
    }
}


export class Count extends Component {
    render() {
        return <h1>Count: {this.props.count}</h1>
    }
}


export class Button extends Component {
    render() {
        return <button onClick={this.props.onclick}>Add 1!</button>
    }
}



