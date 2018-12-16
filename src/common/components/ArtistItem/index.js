import React from 'react';
import { ListGroupItem } from 'reactstrap';
import styles from './index.scss';

class ArtistItem extends React.Component {
    onDelete = () => {
        const { item } = this.props;
        this.props.onDelete(item.uuid);
    };

    render() {
        const { item } = this.props;
        const date = new Date(item.created).toDateString();
        return (
            <ListGroupItem className="justify-content-space-between">
                {item.first_name} {item.last_name} <span className={styles.font}>(Created - {date})</span>
                <button className="close text-danger float-right" onClick={this.onDelete}
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </ListGroupItem>
        )
    }

}

export default ArtistItem;
