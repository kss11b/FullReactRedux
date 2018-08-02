import { RSAA } from 'redux-api-middleware';

export const GET_ITEMS = "GET_ITEMS";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILURE = "GET_ITEMS_FAILURE";

export const getItems = () => (
  {
    [RSAA] :
    {
      headers: { 'Content-Type': 'application/json' },
      types: [GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE],
      method: 'GET',
      endpoint: '/api/getArticles',
      // payload: response,
  }
    });
