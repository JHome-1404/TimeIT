import { ENPOINTS } from "./connect";
import { getResBD } from "../services";

class Web {
  baseApi = ENPOINTS.BASE_API;

  async alarm(data) {
    let res = await getResBD({ url, method, params });
  }
  async notes(data) {
    let res = await getResBD({ url, method, params });
  }
  async routines(data) {
    let res = await getResBD({ url, method, params });
  }
  async home(data) {
    let res = await getResBD({ url, method, params });
  }
}

export { Web };
