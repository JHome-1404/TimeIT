import { ENPOINTS } from "./connect";
import { getResBD } from "../services";

class Auth {
  baseApi = ENPOINTS.BASE_API;

  async register(data) {
    let url = `${this.baseApi}${ENPOINTS.AUTH.REGISTER}`;
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
    let res = await getResBD({ url, method: "POST", params: params });
    return res;
  }

  async login(data) {
    let url = `${this.baseApi}${ENPOINTS.AUTH.LOGIN}`;
    let params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      }),
    };
    let res = await getResBD({ url, method: "POST", params: params });
    return res;
  }

  setAccessKey(key) {
    localStorage.setItem("key", JSON.stringify(key));
  }

  getAccessKey() {
    return localStorage.getItem("key");
  }
}

export { Auth };
