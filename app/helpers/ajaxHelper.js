export async function ajax(props = {}) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error al acceder a la API";

      document.getElementById("main").innerHTML = /*html*/ ` 
        <div class="error text-white text-xl">
          <p>Error ${err.status}: ${message}</p>
        </div>`;

      console.log(err);
    });
}

/** ****************************** MÉTODO ALTERNATIVO ***************************** */
export async function ajax2(props = {}) {
  let { url, cbSuccess } = props;

  try {

    const resp = await fetch(url);
    const json = await resp.json();
    return cbSuccess(json);

  } catch (err) {

    const error = {
      status: err.status,
      message: err.statusText || "Ocurrió un error al acceder a la API"
    };

    return Promise.reject(error);

  }

}
/** ******************************************************************************* */