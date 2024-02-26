export const ALL_NEWS = "ALL_NEWS";
export const ALL_NEWS_LOADING = "ALL_NEWS_LOADING";
export const ALL_NEWS_FAIL = "ALL_NEWS_FAIL";

export interface AllNewsLoading {
  type: typeof ALL_NEWS_LOADING;
}

export interface AllNews {
  type: typeof ALL_NEWS;
  payload: {
    data: any;
  };
}
export interface AllNewsFail {
  type: typeof ALL_NEWS_FAIL;
}

export type NewsActionTypes = AllNews | AllNewsLoading | AllNewsFail;
