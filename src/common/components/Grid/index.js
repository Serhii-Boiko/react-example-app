import React from 'react';
import { Container } from 'reactstrap';

const Grid = ({children}) => (
    <Container className="mt-3">
        {children}
    </Container>
);

export default Grid;