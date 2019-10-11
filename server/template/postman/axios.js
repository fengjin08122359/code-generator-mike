import axios from 'axios'
import qs from 'qs'
//默认
var postFormInstance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  },
})
//json
var postJsonInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
});
var postInstance = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data, headers) {
    return qs.stringify(data);
  }],
});

const httpInstance = {
  post(url, params) {
    return postInstance.post(url, params)
  },
  postJson(url, params) {
    return postJsonInstance.post(url, params)
  },
  postForm(url, params) {
    return postFormInstance.post(url, params)
  },
  get(url, params) {
    return postInstance.get(url, params)
  },
}

/* http start */
/* http end */

export {
  /* export start */
/* export end */
}