import React, { Component } from 'react'
import HeadView from './HeadView'
import BtnView from './BtnView'
import {
    Wrapper
} from './style'

class Day2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
                <HeadView />
                <BtnView />
            </Wrapper>
        )
    }
}


export default Day2;