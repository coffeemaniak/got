import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='6'>
                {/* {spinner} */}
                {left}
            </Col>
            <Col md='6'>
                {/* {spinner} */}
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;