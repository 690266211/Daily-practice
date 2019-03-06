import styled from 'styled-components';
export const Wrapper = styled.div`
    width: 264px;
    height: 420px;
    margin: 100px auto;
    padding: 23px 12px 18px;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, .4) inset;
`
export const HeadView = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    padding-right: 5px;
    line-height: 60px;
    font-size: 32px;
    font-weight: bold;
    background: #ebeae5;
    border: 2px solid #6a6a6a;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 1) inset;
`

export const BtnWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 8px;
    button {
        width: 58px;
        height: 58px;
        box-shadow: 0 0 14px 4px rgba(255, 255, 255, 0.8) inset;
        margin-bottom: 2px;
    }
    .dobuleWidth {
        width: 118px;
    }
`