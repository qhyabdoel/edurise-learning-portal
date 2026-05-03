import { EmailNotifSettings } from "@/types";
const BASE_URL = 'http://localhost:3000';

export const setEmailNotifRequest = async (emailNotif: EmailNotifSettings) => {
    const response = await fetch(`${BASE_URL}/api/notif/email`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailNotif)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
    }

    return data;
};

export const getEmailNotifRequest = async () => {
    const response = await fetch(`${BASE_URL}/api/notif/email`, { next: { revalidate: 60 } });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
    }

    return data;
};