export const ruleUsername = [
  {
    required: true,
    message: "Tên người dùng không được để trống!",
  },
  { whitespace: true },
  { min: 3 },
  { max: 50 },
];
export const rulePassword = [
  {
    required: true,
    message: "Mật khẩu không được để trống!",
  },
  { min: 6 },
  { max: 50 },
];
export const TOKEN = {
  ACCESSTOKEN: "Access_Token",
  REFRESHTOKEN: "Refresh_Token",
};

export const RESPONSE_STATUS = { UNAUTHORIZED: 401 };
export const ERRORMSG = "Tài khoản hoặc mật khẩu không đúng";
export const ERROR_RETYPE = "Mật khẩu nhập lại không hợp lệ";
