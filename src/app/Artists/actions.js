import {
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    GET_LIST,
    GET_LIST_SUCCESS,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS
} from './actionTypes';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const addItemSuccess = (item) => ({
    type: ADD_ITEM_SUCCESS,
    payload: item
});

export const getList = () => ({
    type: GET_LIST
});

export const getListSuccess = (items) => ({
    type: GET_LIST_SUCCESS,
    payload: items
});

export const deleteItem = (uuid) => ({
    type: DELETE_ITEM,
    payload: uuid
});

export const deleteItemSuccess = (uuid) => ({
    type: DELETE_ITEM_SUCCESS,
    payload: uuid
});
