export const fetchUser = () => {
  const userinfo = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : localStorage.clear();
  return userinfo;
};
