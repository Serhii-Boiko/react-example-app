import {
    GET_LIST,
    GET_LIST_SUCCESS,
    GET_ITEM,
    GET_ITEM_ERROR,
    GET_ITEM_SUCCESS,
    CREATE_ITEM,
    CREATE_ITEM_SUCCESS,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS,
    ADD_ARTIST,
    ADD_ARTIST_SUCCESS,
    REMOVE_ARTIST,
    REMOVE_ARTIST_SUCCESS
} from './actionTypes';

const INIT_STATE = {
    list: {
        loading: false,
        loaded: false,
        loadedTime: 0,
        listUuid: [],
        data: {},
    },
    item: {
        error: '',
        loading: false,
        loaded: false,
        loadedTime: 0,
        uuid: '',
        data: {}
    }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_LIST: {
            return { ...state, list: { ...state.list, loading: true } };
        }
        case GET_LIST_SUCCESS: {
            const {items, time} = action.payload;
            const listUuid = items.map((item) => item.uuid);
            const festivals = items.reduce((obj, item) => {
                obj[item.uuid] = item;
                return obj
            }, {});

            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    loaded: true,
                    listUuid,
                    items: festivals,
                    loadedTime: time
                }
            };
        }
        case CREATE_ITEM: {
            return { ...state, list: { ...state.list, loading: true } };
        }
        case CREATE_ITEM_SUCCESS: {
            const uuid = action.payload.uuid;
            return {
                ...state,
                list: {
                    ...state.list,
                    listUuid: [uuid, ...state.list.listUuid],
                    items: {[uuid]: action.payload, ...state.list.items},
                    loading: false
                }
            };
        }
        case DELETE_ITEM: {
            return { ...state, list: { ...state.list, loading: true } };
        }
        case DELETE_ITEM_SUCCESS: {
            const listUuid = state.list.listUuid.filter((uuid) => uuid !== action.payload);
            const { [action.payload]: value, ...newListItems } = state.list.items;

            return {
                ...state,
                list: {
                    ...state.list,
                    listUuid,
                    items: newListItems,
                    loading: false
                }
            };
        }
        case GET_ITEM: {
            return { ...state, item: { ...state.item, loading: true, error: ''} };
        }
        case GET_ITEM_ERROR: {
            return {
                ...state,
                item: {
                    ...state.item,
                    loading: false,
                    error: action.payload,
                }
            };
        }
        case GET_ITEM_SUCCESS: {
            return {
                ...state,
                item: {
                    ...state.item,
                    data: action.payload,
                    loading: false,
                    loaded: true,
                }
            };
        }
        case ADD_ARTIST: {
            return { ...state, item: { ...state.item, loading: true} };
        }
        case ADD_ARTIST_SUCCESS: {
            const {artistUuid} = action.payload;
            const item = {...state.item.data, artists: [artistUuid, ...state.item.data.artists]};
            return {
                ...state,
                list: {
                    ...state.list,
                    data: {...state.list.data, [item.uuid]: item}
                },
                item: {
                    ...state.item,
                    data: item,
                    loading: false
                }
            };
        }
        case REMOVE_ARTIST: {
            return { ...state, item: { ...state.item, loading: true} };
        }
        case REMOVE_ARTIST_SUCCESS: {
            const {artistUuid} = action.payload;
            const item = {
                ...state.item.data,
                artists: state.item.data.artists.filter(uuid => uuid !== artistUuid)
            };
            return {
                ...state,
                list: {
                    ...state.list,
                    data: {...state.list.data, [item.uuid]: item}
                },
                item: {
                    ...state.item,
                    data: item,
                    loading: false
                }
            };
        }
        default:
            return state;
    }
};
