import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {addComponent} from '../actions/index'

class MenuItem extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.generateEvent} style = {{ 'cursor': 'pointer'}}>{this.props.label}</div>
        );
    }

}



function mapDispatchToProps(dispatch, props) {
    console.log('cl9icked')
    return {
        generateEvent : function() {
            dispatch(addComponent(props.label));
        }
    }
}

export default connect(null, mapDispatchToProps)(MenuItem)
