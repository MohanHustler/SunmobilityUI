import Storage from './storage';
// import { STORAGE_KEY } from '../constants';

class User {
  constructor() {
    this.storage = new Storage();
  }

  isAuthenticated = () => {
    const userToken = this.getUserToken();

    if (userToken.length > 2) {
      return true;
    } else {
      return false;
    }
  };

  getUserToken = () => this.storage.get('token');

  signOut = () => {
    // this.storage.delete(STORAGE_KEY);
    this.userManager.signoutRedirect();
  };

  forceLogout = () => {
    this.storage.delete('token');
    window.location = '/signin';
  };
}

export default User;
