import styled from 'styled-components';

const Container = styled.div`
    width: 870px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
`;

const Card = styled.div`
    max-width: 270px;
    width: 100%;
    background-color: #254E70;
    color: #fff;
    display: inline-block;
    margin: 3px;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 10px;
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #37718E;
`;

const CardText = styled.text`
    display: block;
    text-align: left;
    margin: .15em 0;
    padding: 10px;
`;

const Form = styled.form`
    
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    margin: 5px;
    width: 250px;
`;

const Button = styled.button`
    background-color: #C33C54;
    color: #fff;
    padding: 8px 15px;;
    font-size: 14px;
    border: 0px solid #C33C54;
    margin: 5px;
    cursor: pointer;
`;

export {Container, Card, CardTitle, CardBody, CardText, Form, Input, Button}