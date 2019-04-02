import styled, {css} from 'styled-components';

const Container = styled.div`
    width: 870px;
    margin: 0 auto;
    border: 1px solid black;
    text-align: center;
`;

const Card = styled.div`
    max-width: 280px;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: #254E70;
    color: #fff;
    display: inline-block;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 15px;
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
`;

const CardText = styled.text`
    display: block;
    text-align: left;
    margin: .15em 0;
`;

export {Container, Card, CardTitle, CardBody, CardText}