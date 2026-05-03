import Image from "next/image";
import ProfileForm from "./components/ProfileForm";
import PasswordForm from "./components/PasswordForm";
import WhatsappNotifSettings from "./components/WhatsappNotifSettings";
import { getEmailNotifRequest } from "@/services/notif-service";
import EmailNotifSettingsForm from "./components/EmailNotifSettings";

export default async function ProfilePage() {
  const { data: emailNotifData } = await getEmailNotifRequest();

  return (
    <>
      <div className="space-y-5 mb-20">
        <h1 className="text-2xl font-semibold">Akun</h1>
        <div className="space-y-5">
          <div className="md:flex gap-12">
            <div className="md:w-80 border border-gray-200 rounded p-4 flex items-center justify-center">
              <div className="space-y-6">
                <div>
                  <Image src="/images/profile-photo.png" alt="Profile Photo" width={240} height={240} className="mx-auto" />
                </div>
                <p className="text-center">
                  Ukuran gambar harus di bawah 1MB dan rasio gambar harus 1:1
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 mb-20 w-1/2">
        <h1 className="text-2xl font-semibold">Ubah Password</h1>
        <PasswordForm />
      </div>

      <div className="flex gap-12 mb-20">
        <div className="space-y-6 flex-1">
          <h1 className="text-2xl font-semibold">Pengaturan pemberitahuan email</h1>
          <EmailNotifSettingsForm initialNotif={emailNotifData} />
        </div>
        <div className="space-y-5 flex-1">
          <h1 className="text-2xl font-semibold">Pengaturan pemberitahuan whatsapp</h1>
          <WhatsappNotifSettings />
        </div>
      </div>
    </>
  );
}
