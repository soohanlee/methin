import React from 'react';
import { Typography } from 'antd';
import styled,{css} from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  
  ${({selected}) => selected && css`
    font-weight: bold;
  `};
`;

function menuListItem(props) {
    return (
        <Container selected={props.selected} {...props}>
            <Typography.Text> {props.displayName} </Typography.Text>
        </Container>
    );
}

export default menuListItem;