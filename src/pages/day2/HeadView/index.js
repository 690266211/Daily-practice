import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    HeadView
} from '../style'
class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeadView>{this.props.value}</HeadView>
        )
    }
}
const mapStateProps = (state) => {
    return {
        value: state.get('value')
    }
}

export default connect(mapStateProps, null)(Input)