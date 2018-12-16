import React from 'react';
import { ListGroup } from 'reactstrap';
import FestivalItem from '../FestivalItem'

const FestivalList = ({items, ...props}) => (
    <ListGroup className="mt-3">
        {items.map((item) => item && <FestivalItem item={item} key={item.uuid} {...props}/>)}
    </ListGroup>
);

export default FestivalList;
