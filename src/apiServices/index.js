import { getRequest, postRequest } from "./requests";

export const LoginService = async (data) => {
  return await postRequest(`login`, data);
};
export const getAllUserService = async () => {
  return await getRequest(`users`);
};
export const getAllOrgService = async () => {
  return await getRequest(`organization`);
};
export const SignupService = async (data) => {
  return await postRequest(`user`, data);
};
