import React, { Component } from 'react'

export class Guarantee extends Component {

    render() {
        return (
            <div style={{ margin: '10px 20px', textAlign: 'center' }}>
                <img src={this.props.img} alt={this.props.title} width='90px' height='90px' />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Guarantee;
