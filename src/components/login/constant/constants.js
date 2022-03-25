export const ruleUsername = [
  {
    required: true,
    message: "Tên người dùng không được để trống!",
  },
  { whitespace: true },
  { min: 3, message: "Mật khẩu phải tối thiểu 3 kí tự" },
  { max: 50, message: "Mật khẩu phải tối đa 50 kí tự" },
];
export const rulePassword = [
  {
    required: true,
    message: "Mật khẩu không được để trống!",
  },
  { min: 6, message: "Mật khẩu phải tối thiểu 6 kí tự" },
  { max: 50, message: "Mật khẩu phải tối đa 50 kí tự" },
];
export const TOKEN = {
  ACCESSTOKEN: "Access_Token",
  REFRESHTOKEN: "Refresh_Token",
};

export const RESPONSE_STATUS = { UNAUTHORIZED: 401 };
export const ERRORMSG = "Tài khoản hoặc mật khẩu không đúng";
export const ERROR_RETYPE = "Mật khẩu nhập lại không hợp lệ";
