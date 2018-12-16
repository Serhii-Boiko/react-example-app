import React from 'react';
import Grid from '@components/Grid';
import PageTitle from '@components/PageTitle';
import { FestivalList, FestivalCreateForm } from '../../components';
import CustomPagination from '@components/Pagination';
import Loading from '@components/Loading';
import connect from 'react-redux/es/connect/connect';
import { createItem , deleteItem, getList } from '../../actions';

class FestivalsPage extends React.Component {
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
        this.props.createItem(data);
    };

    render() {
        const { listUuid, items, loading } = this.props;
        const festivalList = this.state.pageOfItems.map((uuid) => items[uuid]);
        return (
            <Grid>
                <PageTitle title="LIST OF FESTIVALS" />
                <FestivalCreateForm onCreate={this.createItem} />
                <FestivalList items={festivalList} onDelete={this.deleteItem} />
                <CustomPagination items={listUuid} onChangePage={this.onChangePage} page={this.state.page}/>
                {loading && <Loading />}
            </Grid>
        );
    }
}


const mapStateToProps = ({festivals}) => festivals.list;

export default connect(mapStateToProps, {
    getList,
    createItem,
    deleteItem
})(FestivalsPage);

