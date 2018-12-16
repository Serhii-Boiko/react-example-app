import React from 'react';
import { connect } from 'react-redux'

import CustomPagination from '@components/Pagination';
import Grid from '@components/Grid';
import ArtistList from '@components/ArtistList';
import PageTitle from '@components/PageTitle';
import Loading from '@components/Loading';
import { ArtistCreateForm } from '../../components';
import { getList, addItem, deleteItem } from '../../actions';

class ArtistsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            exampleItems: [],
            pageOfItems: []
        };
    }

    onChangePage = (pageOfItems, page) => {
        this.setState({ page, pageOfItems });
    };

    componentDidMount() {
        if (!this.props.loadedTime || this.props.loadedTime + 300000 < new Date().getTime()) {
            this.props.getList();
        }
    }

    deleteItem = (uuid) => {
        this.props.deleteItem(uuid)
    };

    createItem = (data) => {
        this.props.addItem(data);
    };

    render() {
        const { listUuid, items, loading } = this.props;
        const artistList = this.state.pageOfItems.map((uuid) => items[uuid]);
        return (
            <Grid>
                <PageTitle title="LIST OF ARTISTS" />
                <ArtistCreateForm onCreate={this.createItem} />
                <ArtistList items={artistList} onDelete={this.deleteItem}/>
                <CustomPagination items={listUuid} onChangePage={this.onChangePage} page={this.state.page}/>
                {loading && <Loading />}
            </Grid>
        );
    }
};

const mapStateToProps = ({artists}) => artists;

export default connect(mapStateToProps, {
    getList,
    addItem,
    deleteItem
})(ArtistsPage);
