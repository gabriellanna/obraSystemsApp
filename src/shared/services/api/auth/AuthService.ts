import { IResponseAPI } from "../../../models/base";
import { Auth } from "../../../models/base/Auth";
import { Api } from "../axios-config";



const auth = async (email: string, password: string): Promise<IResponseAPI<Auth>> => {
  try {
    const { data } = await Api.post('/auth/login', { email, password })
    return data
  } catch (error: any) {
    return error.response.data;
  }
};


const register = async (name: string, email: string, nomeEmpresa: string, password: string): Promise<IResponseAPI<boolean>> => {

  const request = {
    name: name,
    email: email,
    password: password,
    nomeEmpresa: nomeEmpresa,
  };

  const { data } = await Api.post('/auth/firstRegister', request).catch((data) => {
    return data.response;
  });

  return data;
};


export const AuthService = {
  auth,
  register
};