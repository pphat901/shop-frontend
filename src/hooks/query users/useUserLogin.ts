import { useMutation } from "@tanstack/react-query";
import useToastMessage from "../userToastMessage";
import { Login } from "@/types/login.type";
import { usersApi } from "@/api/users-api";
import { LocalUtils } from "@/utils/local-util";
import { ErrorResponse } from "@/types/error.type";
import { useNavigate } from "react-router-dom";

const useUserLogin = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (body: Login) => {
      return (await usersApi.login(body)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Đăng nhập thành công");
      LocalUtils.setLocalToken(data);
      navigate("/admin");
    },
    onError: (error: ErrorResponse) => {
      toastError("Đăng nhập thất bại");
      return error;
    },
  });
};

export default useUserLogin;
