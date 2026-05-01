import { ProfileForm, UserData } from "@/types";

export const updateProfileRequest = async (profile: ProfileForm): Promise<{ data: UserData }> => {
  const body = {
    name: `${profile.firstName} ${profile.lastName}`,
    email: profile.email,
    whatsapp: profile.whatsapp,
    summary: profile.summary
  }
  const response = await fetch('/api/user', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Terjadi kesalahan');
  }

  return data;
}