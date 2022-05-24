import axios from "axios";
import { BehaviorSubject } from 'rxjs';

const API_URL = "http://localhost:4000/api/users";
const API_URL_LOGIN = "http://localhost:4000/api/users/login";


export const user$ = new BehaviorSubject();

const registerFunction = async (userData) => {

  try {
    const result = await axios.post(API_URL, userData);
    return result.data;
  } catch (error) {
    if (error.response) {
    return error.response.data;
    }
  }
};

const loginFunction = async (loginData) => {

  try {
		const res = await axios.post(API_URL_LOGIN, loginData);
		if(res.data.success){
      user$.next(res.data)
      console.log(user$);
			// user.updateUser(res.data.data.id, res.data.data.email, res.data.data.name, res.data.success);

		}

	} catch (error) {
		if (error.response) {
		console.log(error.response.data)	
	  }
 	 }
}

const authService = {
  registerFunction,
  loginFunction
};
export default authService;
