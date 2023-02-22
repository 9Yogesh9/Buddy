import jwt_decode from "jwt-decode";

export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== 'undefined' ? jwt_decode(JSON.parse(localStorage.getItem('user'))) : localStorage.clear();
    return userInfo;
}