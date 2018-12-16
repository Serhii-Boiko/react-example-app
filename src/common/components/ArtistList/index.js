import React from 'react';
import { ListGroup } from 'reactstrap';
import ArtistItem from '../ArtistItem'
import { Alert } from 'reactstrap';

const ArtistList = ({items, ...props}) => {
    if (!items.length) {
        return (
            <Alert color="light" className="mt-3">
                Artist list empty.
            </Alert>
        )
    }

    return (
        <ListGroup className="mt-3">
            {items.map((item) => item && <ArtistItem item={item} key={item.uuid} {...props} />)}
        </ListGroup>
    )
};

export default ArtistList;
