export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterData {
  clientName: string;
  ownerName: string;
  country: object;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotData {
  email: string;
}
