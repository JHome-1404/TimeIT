import { ENPOINTS } from "./connect";
import { getResBD } from "../services";

class User {
  baseApi = ENPOINTS.BASE_API;

  async updateUser(data) {
    let url = `${this.baseApi}${ENPOINTS.USER.USER}`;
    let params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        age: data.age,
        country: data.country,
        city: data.city,
        phone: data.phone,
        email: data.email,
        password: data.password,
      }),
    };
    let res = await getResBD({ url, method: "PATCH", params: params });
    return res;
  }

  async deleteUser() {
    let url = `${this.baseApi}${ENPOINTS.USER.DELETE}`;
    let params = {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    let res = await getResBD({ url, method: "DELETE", params: params });
    return res;
  }

  async logoutUser() {
    let url = `${this.baseApi}${ENPOINTS.USER.LOGOUT}`;
    let params = {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    let res = await getResBD({ url, method: "POST", params: params });
    return res;
  }

  removeAccessKey() {
    localStorage.removeItem("key");
  }
}

export { User };
