import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "./CryptoApi";
import { cryptoNewsApi } from "./CryptoNewsApi";
import { userManagementApi } from "./UserManagementApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [userManagementApi.reducerPath]: userManagementApi.reducer,
  },
});
