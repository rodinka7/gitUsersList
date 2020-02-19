import styled from 'styled-components';

const BaseUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const AppDiv = styled.div`
    text-align: center;
`;

export const Image = styled.img.attrs(props => ({
    alt: props.name
  }))`
    width: ${props => props.width};
    height: ${props => props.height || 'auto'};
`;

export const Input = styled.input.attrs(() => ({
    type: 'text'
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 14px;
`;

export const Div = styled.div`
    color: palevioletred
`;

export const Ul = styled(BaseUl)`
    width: 60%;
    margin: 50px auto 0;
`;

export const Li = styled.li`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid gainsboro;
`;

export const Href = styled.a`
    color: #61dafb;
    text-decoration: none;
`;

export const UserDiv = styled.div`
    text-align: left;
    font-size: 12px;
`;

export const UserUl = styled(BaseUl)`
    margin: 0 0 15px 30px;
`;

export const UserLi = styled.li`
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    & svg * {
        fill: gainsboro;
    }
`;

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MessageDiv = styled(FlexDiv)`
    padding: 10px;
    color: palevioletred;
    background: papayawhip;
    border-radius: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30%;
`;