import { ENPOINTS } from "./connect";
import { getResBD } from "../services";

class Page {
  baseApi = ENPOINTS.BASE_API;

  async alarm(data) {
    let data = await getResBD({ url, method, params });
  }
  async notes(data) {
    let data = await getResBD({ url, method, params });
  }
  async routines(data) {
    let data = await getResBD({ url, method, params });
  }
  async home(data) {
    let data = await getResBD({ url, method, params });
  }
}

export { Page };
