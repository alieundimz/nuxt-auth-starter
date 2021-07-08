export default function({ $axios, store }) {
  //onError 422
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code == 422) {
      store.dispatch("validation/setErrors", error.response.data.errors);
      return Promise.reject();
    }

    return Promise.reject(error);
  });
  //onRequest clear errors
  $axios.onRequest(() => {
    store.dispatch("validation/clearErrors");
  });
}
