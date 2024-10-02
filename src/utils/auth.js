import Cookies from 'js-cookie';

const accessTokenKey = 'access_token';
const userId = 'user_id';
const userName = 'user_name';
const roleTitle = 'role_title';
const fullName = 'full_name';

const objCookies = {
  path: '/',
  expires: 365,
};

export const saveToken = (access_token) => {
  if (access_token) {
    Cookies.set(accessTokenKey, access_token, objCookies);
  } else {
    Cookies.remove(accessTokenKey, objCookies);
  }
};

export const saveUserId = (id) => {
  if (id) {
    Cookies.set(userId, id.toString(), objCookies);
  } else {
    Cookies.remove(userId, objCookies);
  }
};

export const saveUserFullName = (fullname) => {
  if (fullname) {
    Cookies.set(fullName, fullname, objCookies);
  } else {
    Cookies.remove(fullName, objCookies);
  }
};

export const saveUserName = (name) => {
  if (name) {
    Cookies.set(userName, name, objCookies);
  } else {
    Cookies.remove(userName, objCookies);
  }
};

export const saveUserRole = (roles) => {
  if (roles) {
    const dataSave = roles.map(role => role.name);
    Cookies.set(roleTitle, dataSave, objCookies);
  } else {
    Cookies.remove(roleTitle, objCookies);
  }
};

export const getToken = () => Cookies.get(accessTokenKey);

export const getUserId = () => {
  const id = Cookies.get(userId);
  return id ? parseInt(id, 10) : null;
};

export const getUserName = () => Cookies.get(userName);

export const getUserFullName = () => Cookies.get(fullName);

export const getUserRole = () => Cookies.get(roleTitle);
