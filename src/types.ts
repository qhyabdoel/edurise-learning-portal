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
  enabled: boolean;
  weeklyReport: boolean;
  certificate: boolean;
  recommendation: boolean;
}

export type WhatsappNotifSettings = {
  enabled: boolean;
  motivation: boolean;
}