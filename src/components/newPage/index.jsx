import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NewPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sample: 'hi'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            sample: 'newHi'
        })
        console.log(this.props.initialData);
    }

    handleClick() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <p>NewPage Works!</p>
                {/* <p>{this.props.initialData}</p> */}
                <button type="button" class="btn btn-primary" onClick={this.handleClick}>Primary</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialData: state.initialDataReducer
    }
}

export default connect(mapStateToProps)(NewPage);