import {
    GET_LIST,
    GET_LIST_SUCCESS,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS,
    ADD_ITEM,
    ADD_ITEM_SUCCESS
} from './actionTypes';

const INIT_STATE = {
    loaded: false,
    loadedTime: 0,
    loading: false,
    listUuid: [],
    items: {},
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_LIST: {
            return {...state, loading: true};
        }
        case GET_LIST_SUCCESS: {
            const {items, time} = action.payload;
            const listUuid = items.map((item) => item.uuid);
            const artists = items.reduce((obj, item) => {
                obj[item.uuid] = item;
                return obj
            }, {});

            return {
                ...state,
                listUuid,
                items: artists,
                loading: false,
                loaded: true,
                loadedTime: time
            };
        }
        case DELETE_ITEM: {
            return {...state, loading: true};
        }
        case DELETE_ITEM_SUCCESS: {
            const listUuid = state.listUuid.filter((uuid) => uuid !== action.payload);
            const { [action.payload]: value, ...newListItems } = state.items;
            return {...state, listUuid, items: newListItems, loading: false};
        }
        case ADD_ITEM: {
            return {...state, loading: true};
        }
        case ADD_ITEM_SUCCESS:{
            const uuid = action.payload.uuid;
            return {
                ...state,
                listUuid: [uuid, ...state.listUuid],
                items: {[uuid]: action.payload, ...state.items},
                loading: false
            };
        }
        default:
            return state;
    }
};
