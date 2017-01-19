import request from 'superagent';


/**
 * Fire the actual http request & return a Promise object.
 *
 * @param {string} method standard http method.
 * @param {string} url endpoint url to request.
 * @param {object} settings configurations used by superagent.
 * @return {Promise} Promise object for futher processing.
 * @api private
 */
const execute = (method, url, settings) => {
  const defaults = {
    // SEE https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
    headers: {
      credentials: url.startsWith('http') ? 'include' : 'same-origin',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };
  const options = Object.assign({}, defaults, settings);

  return new Promise((resolve, reject) => {
    request[method.toLowerCase()](url)
      .set(options.headers)
      .send(options.payload)
      .type(options.type || 'form')
      .end((error, response) => {
        if (error) {
          return reject(error);
        } else if (response.status >= 400) {
          return reject(new Error(response.text));
        }
        return resolve(response);
      });
  });
};

/**
 * Fire an http GET request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const get = (url, options) => execute('GET', url, options);


/**
 * Fire an http POST request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const post = (url, options) => execute('POST', url, options);


/**
 * Fire an http PUT request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const put = (url, options) => execute('PUT', url, options);


/**
 * Fire an http DELETE request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const remove = (url, options) => execute('DELETE', url, options);


export {
  get,
  post,
  put,
  remove,
};
