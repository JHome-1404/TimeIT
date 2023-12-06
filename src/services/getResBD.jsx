const getResBD = async ({ url, method, params }) => {
  try {
    let options;
    if (params) {
      const { headers = null, body = null } = params;
      options = { method, headers, body };
    } else {
      options = { method };
    }

    const res = await fetch(url, options);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const json = await res.json();
    return json;
  } catch (err) {
    const message = err.statusText || "Ocurrio un Error Desconocido";
    return `Error ${err.status}: ${message}`;
  }
};

export { getResBD };
