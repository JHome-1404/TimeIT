const getResBD = async ({ url, method, params }) => {
  try {
    let options;
    if (params) {
      const { headers = null, body = null, credentials = null } = params;
      options = {
        method,
        ...(headers && { headers }),
        ...(credentials && { credentials }),
        ...(body && { body }),
      };
    } else {
      options = { method };
    }

    console.log(options);
    const res = await fetch(url, options);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    const message = err.statusText || "Ocurrio un Error Desconocido";
    return `Error ${err.status}: ${message}`;
  }
};

export { getResBD };
