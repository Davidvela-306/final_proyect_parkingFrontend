/* fetchGet, fetchPost, fetchPut, fetchDelete */
async function fetchPost(baseUrl, route, postData) {
  const response = await baseUrl.post(route, postData);
  return response;
}
async function fetchGet(baseUrl, route) {
  const response = await baseUrl.get(route);
  return response;
}

async function fetchPut(baseUrl, route, putData) {
  const response = await baseUrl.put(route, putData);
  return response;
}
async function fetchDelete(baseUrl, route) {
  const response = await baseUrl.delete(route);
  return response;
}

export { fetchGet, fetchPost, fetchPut, fetchDelete };
