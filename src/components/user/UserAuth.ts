// import axios from "axios";
import axios from "../redux/API";

export const createAccount = (
  name: string,
  email: string,
  password: string,
  confirm_password: string,
  mobile_number: string
) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("/user", {
        name: name,
        password: password,
        email: email,
        confirm_password: confirm_password,
        mobile_number: mobile_number,
      })
      .then((data) => resolve(data))
      .catch((err: any) => {
        reject(err);
      });
  });
};

export const authenticate = (username: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    let errorFlag = false;
    await axios
      .post("user/signIn", {
        username: username,
        password: password,
      })
      // .then((data) => resolve(data.data))
      .catch((err: any) => {
        errorFlag = true;
        reject(err);
      });

    if (!errorFlag) {
      await axios
        .get("user/userInfo")
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((err) => {
          errorFlag = true;
          reject(err);
        });
    }
  });
};

export const logout = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("user/signOut")
      .then((resp) => {
        localStorage.clear();
        window.location.replace("/");
        resolve(resp);
      })
      .catch((err) => reject(err));
  });
};

export const addSubscribe = (planId: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("subscription/subscribe", { plan_id: planId })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export const addWatchlist = (coinId: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("watchlist/add", { coin_uuid: coinId })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
export const removeWatchlist = (coinId: any) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post("watchlist/remove", { coin_uuid: coinId })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
