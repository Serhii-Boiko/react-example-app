import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {constants as Settings, reducer as  SettingsReducer} from '@/app/Settings';
import {constants as Festivals, reducer as FestivalsReducer} from '@/app/Festivals';
import {constants as Artists, reducer as  ArtistsReducer} from '@/app/Artists';

export default history => combineReducers({
    router: connectRouter(history),
    [Settings.NAME]: SettingsReducer,
    [Festivals.NAME]: FestivalsReducer,
    [Artists.NAME]: ArtistsReducer,
});
