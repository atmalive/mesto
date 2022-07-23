export default class UserInfo {
  constructor({ infoName, infoJob, avatar}) {
    this._infoName = infoName;
    this._infoJob = infoJob;
    this._avatar = avatar;
    this._userId = '';
  }

  getUserInfo() {
    return {
      name: this._infoName.textContent,
      description: this._infoJob.textContent,
      avatar: this._avatar,
      userId: this._userId
    };
  }

  setUserInfo(name, description, infoAvatar, infoId) {
    this._infoName.textContent = name;
    this._infoJob.textContent = description;
    this._avatar.style.backgroundImage = `url(${infoAvatar})`;
    this._userId = infoId;
  }
}
