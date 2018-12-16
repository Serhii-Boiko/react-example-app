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
    REMOVE_ARTIST_SUCCESS,
} from './actionTypes';

export const getList = () => ({
    type: GET_LIST,
});

export const getListSuccess = (items) => ({
    type: GET_LIST_SUCCESS,
    payload: items
});

export const getItem = (uuid) => ({
    type: GET_ITEM,
    payload: uuid
});

export const getItemError = (error) => ({
    type: GET_ITEM_ERROR,
    payload: error
});

export const getItemSuccess = (item) => ({
    type: GET_ITEM_SUCCESS,
    payload: item
});

export const createItem = (data) => ({
    type: CREATE_ITEM,
    payload: data
});

export const createItemSuccess = (item) => ({
    type: CREATE_ITEM_SUCCESS,
    payload: item
});

export const deleteItem = (uuid) => ({
    type: DELETE_ITEM,
    payload: uuid
});

export const deleteItemSuccess = (item) => ({
    type: DELETE_ITEM_SUCCESS,
    payload: item
});

export const addArtist = (festivalUuid, artistUuid) => ({
    type: ADD_ARTIST,
    payload: {festivalUuid, artistUuid}
});

export const addArtistSuccess = (festivalUuid, artistUuid) => ({
    type: ADD_ARTIST_SUCCESS,
    payload: {festivalUuid, artistUuid}
});

export const removeArtist = (festivalUuid, artistUuid) => ({
    type: REMOVE_ARTIST,
    payload: {festivalUuid, artistUuid}
});

export const removeArtistSuccess = (festivalUuid, artistUuid) => ({
    type: REMOVE_ARTIST_SUCCESS,
    payload: {festivalUuid, artistUuid}
});
