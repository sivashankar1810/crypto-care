import {
  NewsActionTypes,
  ALL_NEWS,
  ALL_NEWS_LOADING,
  ALL_NEWS_FAIL,
} from "../actions/NewsActionTypes";

interface NewsDefaultStateI {
  available: boolean;
  data?: any;
}
const NewsDefaultState: NewsDefaultStateI = {
  available: false,
};

const NewsReducer = (
  state: NewsDefaultStateI = NewsDefaultState,
  action: NewsActionTypes
) => {
  switch (action.type) {
    case ALL_NEWS:
      return {
        available: true,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default NewsReducer;
