import React from 'react';
import Grid from '@components/Grid';
import PageTitle from "@components/PageTitle";
import {FestivalAddArtistForm} from "../../components";
import ArtistList from "@components/ArtistList";
import connect from 'react-redux/es/connect/connect';
import { getItem, removeArtist, addArtist } from '../../actions';
import { getList } from '@/app/Artists/actions';
import Loading from '@components/Loading';
import CustomPagination from '@/common/components/Pagination';
import { Alert } from 'reactstrap';

class FestivalPage extends React.Component {
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
        const { uuid } = this.props.match.params;
        const { artists } = this.props;
        if (!artists.loadedTime || artists.loadedTime + 300000 < new Date().getTime()) {
            this.props.getList();
        }
        this.props.getItem(uuid)
    }

    removeArtist = (artistUuid) => {
        const { uuid } = this.props.match.params;
        this.props.removeArtist(uuid, artistUuid);
    };

    addArtist = (artistUuid) => {
        const { festival } = this.props;
        const { uuid } = this.props.match.params;
        const artistExist = festival.data.artists.find((uuid) => artistUuid === uuid);
        if (!artistExist) {
            this.props.addArtist(uuid, artistUuid);
        }
    };

    render() {
        const {festival, artists} = this.props;

        if (festival.error) {
            return <Alert color="light">{festival.error}</Alert>
        }

        if (!festival.loaded || !artists.loaded) {
            return <Loading />;
        }

        const artistList = this.state.pageOfItems.map((uuid) => artists.items[uuid]);

        return (
            <Grid>
                <PageTitle title={`Festival - ${festival.data.title}`} />
                <FestivalAddArtistForm artists={artists.listUuid.map((uuid) => artists.items[uuid])} addArtist={this.addArtist}/>
                <ArtistList items={artistList} onDelete={this.removeArtist}/>
                <CustomPagination items={festival.data.artists} onChangePage={this.onChangePage} page={this.state.page}/>
                {festival.loading && <Loading />}
            </Grid>
        );
    }
}

const mapStateToProps = ({festivals, artists}) => {
    return {
        festival: festivals.item,
        artists
    };
};

export default connect(mapStateToProps, {
    getItem,
    removeArtist,
    addArtist,
    getList,
})(FestivalPage);
