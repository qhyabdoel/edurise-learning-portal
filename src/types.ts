export type LoginForm = {
  email: string;
  password: string;
};

export type ProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  summary: string;
  whatsapp: string;
};

export type UserData = {
  email: string;
  name: string;
  summary: string;
  whatsapp: string;
}

export type ChangePasswordForm = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type EmailNotifSettings = {
  weeklyReport: boolean;
  certificate: boolean;
  recommendation: boolean;
}