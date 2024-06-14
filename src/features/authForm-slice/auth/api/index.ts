import { instance } from "@/shared/api";
import { IAuth, IToken } from "@/shared/interface/auth";

export const postUser = async (authForm: IAuth): Promise<IToken | Error> => {
  try {
    const { data }: { data: IToken } = await instance.post("/auth/register/", {
      email: authForm.email,
      password: authForm.password,
    });
    sessionStorage.setItem("accessToken", data.accessToken);

    return data;
  } catch (error) {
    return error as Error;
  }
};

export const loginUser = async (authForm: IAuth): Promise<IToken | Error> => {
  try {
    const { data }: { data: IToken } = await instance.post("/auth/login/", {
      login: authForm.email,
      password: authForm.password,
    });
    sessionStorage.setItem("accessToken", data.accessToken);

    return data;
  } catch (error) {
    return error as Error;
  }
};
