
// this snippet is copied from a CSS-Tricks post
// source: https://css-tricks.com/adapting-javascript-abstractions-time/

class API {
  constructor() {
    this.url = '/api';
  }
  
  /**
   * Fetch API's specific way to check
   * whether an HTTP response's status code is in the successful range.
   */
  _handleError(_res) {
    return _res.ok ? _res : Promise.reject(_res.statusText);
  }

  /**
   * Get data abstraction
   * @return {Promise}
   */
  get(_endpoint) {
    return window.fetch(this.url + _endpoint, { 
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET' 
    }).then(this._handleError)
      .then( res => res.json())
      .catch( error => {
        alert('So sad. There was an error.');
        throw new Error(error);
      });
  }
  post(_endpoint, data) {
    return window.fetch(this.url + _endpoint, { 
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: data 
    }).then(this._handleError)
      .then( res => res.json())
      .catch( error => {
        alert('So sad. There was an error.');
        throw new Error(error);
      });
  }
};

let api = new API()

export default api;