export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => res.json());
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

//   getInitialCards() {
//     return fetch(`${this._baseUrl}/cards`, {
//       method: "GET",
//       headers: this._headers,
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//   }


}
