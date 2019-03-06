import React, { Component } from 'react'
import { BtnWrapper } from '../style'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreator'

const KEYNUM = ['clear', '<--', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

class BtnView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            let value = isNaN(Number(e.key)) ? e.key : Number(e.key);
            this.props.clickBtn(value);
        })
    }

    render() {
        return (
            <BtnWrapper>
                { 
                    KEYNUM.map(value => {
                        let isDouble = value === 'clear' || value === 0;
                        let btn = <button onClick={this.props.clickBtn.bind(this, value)} key={value} className={ isDouble ? 'dobuleWidth' : ''}>{value}</button>;
                        return btn;
                    })
                }
            </BtnWrapper>
        )
    }
}
const mapDispacth = (dispatch) => ({
    clickBtn(value) {
        if(typeof value === 'number') {
            dispatch(actionCreators.clickNum(value.toString()));
        }
        if(value === 'clear') {
            dispatch(actionCreators.clearNum());
        }
        if(value === '.') {
            dispatch(actionCreators.addDecimals())
        }
        if(value === '<--' || value === 'Backspace') {
            dispatch(actionCreators.breakUp())
        }
        if(value === '+' || value === '-' || value === '*' || value === '/' || value === '=' || value === 'Enter') {
            dispatch(actionCreators.operator(value))
        }
    },
})
export default connect(null, mapDispacth)(BtnView);