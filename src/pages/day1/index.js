import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { Wrapper } from './style'
class Day1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
        this.handleCut = this.handleCut.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <Wrapper>
                <Button onClick={this.handleCut}>-</Button>
                <Input className='input' value={this.state.value} type="text" onChange={this.handleChange}  />
                <Button onClick={this.handleAdd}>+</Button>
            </Wrapper>
        )
    }

    handleChange(event) {
        let value = event.target.value;
        let numcheck = /\D+/;
        if(!numcheck.test(value)) {
            this.setState({
                value: event.target.value
            })
        }
    }

    handleCut() {
        let value = this.state.value || 1;
        if(value <= 1) {
            return;
        }
        this.setState({
            value: value-1
        })
    }

    handleAdd() {
        let value = Number(this.state.value) || 1;
        this.setState({
            value: value + 1
        })
    }
}

export default Day1;