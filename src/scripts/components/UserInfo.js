export default class UserInfo {
  constructor({ infoName, infoJob }) {
    this._infoName = infoName;
    this._infoJob = infoJob;
  }

  getUserInfo() {
    return {
      name: this._infoName.textContent,
      description: this._infoJob.textContent,
    };
  }

  setUserInfo(name, description) {
    this._infoName.textContent = name;
    this._infoJob.textContent = description;
  }
}
