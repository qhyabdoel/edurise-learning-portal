import { EmailNotifSettings } from "@/types";
import { WhatsappNotifSettings } from "@/types";

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
    const response = await fetch(`${BASE_URL}/api/notif/email`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
    }

    return data;
};

export const setWhatsappNotifRequest = async (whatsappNotif: WhatsappNotifSettings) => {
    const response = await fetch(`${BASE_URL}/api/notif/whatsapp`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(whatsappNotif)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
    }

    return data;
};

export const getWhatsappNotifRequest = async () => {
    const response = await fetch(`${BASE_URL}/api/notif/whatsapp`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
    }

    return data;
};
