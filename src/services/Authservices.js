import axios from "../axios/Api";

const USER_API = "Auth"
// https://localhost:7181/api/Auth/register
export const signup = async (user) => {

    return await axios.post(USER_API + "/register", user);

}

export const signin = async (user) => {
    return await axios.post(USER_API + "/login", user);
}

// export const logout = async () => {
//     return await axios.post(USER_API + "/logout");
// }

// export const profile = async () => {
//     return await axios.get(USER_API + "/user-profile");
// }  