import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    value: '0',
    proValue: null,
    operator: null,
    isClickOperator: false
});

// 点击数字
const changeVlaue = (state, action) => {
    let defaultValue = state.get('value');
    let operator = state.get('operator');
    if(operator === '=' || operator === 'Enter') {
        return state.merge({
            'value': action.value,
            'proValue': null,
            'operator': null,
            'isClickOperator': false
        });
    }
    let isClickOperator = state.get('isClickOperator');
    if(isClickOperator) {
        // 按下了操作符
        return state.merge({
            'value': action.value,
            'proValue': defaultValue,
            'isClickOperator': false
        });
    } else {
        if(defaultValue.length >= 12) {
            return state;
        }
        let newValue;
        if(defaultValue === '0') {
            if(action.value !== '0') {
                newValue = action.value;
            } else {
                return;
            }
        } else {
            newValue = defaultValue + action.value;
        }
        return state.merge({
            'value': newValue.toString()
        });
    }
}

// 清空
const clearNum = (state) => {
    let defaultValue = state.get('value');
    if(defaultValue !== '0') {
        return state.merge({
            'value': '0',
            'proValue': null,
            'operator': null,
            'isClickOperator': false
        });
    }
    return state;
}

// 小数点
const addDecimals = (state) => {
    let operator = state.get('operator');
    if(operator === '=') {
        let defaultValue = '0';
        return state.merge({
            'value': defaultValue + '.',
            'proValue': null,
            'operator': null,
            'isClickOperator': false
        });
    }

    let defaultValue = state.get('value');
    if(defaultValue.length >= 12) {
        return state;
    }
    if(!defaultValue.includes('.')) {
        return state.merge({
            'value': defaultValue + '.'
        });
    }
    return state;
}

// 后退
const breakUp = (state) => {
    let defaultValue = state.get('value');
    let isClickOperator = state.get('isClickOperator');
    if(defaultValue === '0' || isClickOperator) {
        return state;
    }
    if(defaultValue.length === 1) {
        return state.merge({
            'value': '0'
        })
    }
    return state.merge({
        'value': defaultValue.substring(0, defaultValue.length - 1)
    })
}

// + - * /
const operator = (state, action) => {
    let defaultValue = state.get('value');
    let operator = state.get('operator');
    if(operator != null) {
        let defaultValue = state.get('value');
        let proValue = state.get('proValue');
        if((operator === '=' && action.operator === '=') || (operator === 'Enter' && action.operator === 'Enter')) {
            return state;
        }
        if(operator !== action.operator && action.operator !== '=' && action.operator !== 'Enter') {
            return state.merge({
                'operator': action.operator
            })
        }
        let value;
        switch(operator) {
            case '+':
                value = (Number(proValue) + Number(defaultValue)).toString();
            break;
            case '-':
                value = (Number(proValue) - Math.abs(Number(defaultValue))).toString();
            break;
            case '*':
                value = (Number(proValue) * Number(defaultValue)).toString();
            break;
            case '/':
                value = (Number(proValue) / Number(defaultValue)).toString();
            break;
        }
        return state.merge({
            'value': value,
            'proValue': value,
            'isClickOperator': true,
            'operator': action.operator,
        })
    } else {
        return state.merge({
            'proValue': defaultValue,
            'operator': action.operator,
            'isClickOperator': true
        })
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CLICK_NUM:
            return changeVlaue(state, action);
        case actionTypes.CLEAR_NUM:
            return clearNum(state, action);
        case actionTypes.ADD_DECIMALS:
            return addDecimals(state, action);
        case actionTypes.BREAK_UP:
            return breakUp(state, action);
        case actionTypes.OPERATOR:
            return operator(state, action);
        default:
            return state;
    }
}