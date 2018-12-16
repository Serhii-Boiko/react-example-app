import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";

class FestivalItem extends React.Component {
    onDelete = () => {
        const { item } = this.props;
        this.props.onDelete(item.uuid);
    };

    render() {
        const { item } = this.props;
        return (
            <ListGroupItem className="justify-content-space-between">
                <Link to={`/festivals/${item.uuid}`}>{item.title}</Link>
                <button className="close text-danger float-right"
                        onClick={this.onDelete}
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </ListGroupItem>
        )
    }
};

export default FestivalItem;
