"use client";

import Input from "@/components/ui/Input";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";
import { useState } from "react";
import Checkbox from "@/components/ui/Checkbox";

const InputGroup = ({ label }: { label: string }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <Input />
  </div>
)

export default function ProfilePage() {
  const [notificationEmail, setNotificationEmail] = useState(false);
  const [notificationWhatsapp, setNotificationWhatsapp] = useState(false);

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
              <div className="flex gap-4">
                <div className="w-1/2">
                  <InputGroup label="Nama depan" />
                </div>
                <div className="w-1/2">
                  <InputGroup label="Nama belakang" />
                </div>
              </div>
              <div>
                <InputGroup label="User" />
              </div>
              <div>
                <InputGroup label="Email" />
              </div>
              <div>
                <InputGroup label="Nomor whatsapp" />
              </div>
              <div>
                <InputGroup label="Jabatan" />
              </div>
              <div className="mt-8 w-40">
                <Button>Simpan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-12 mb-20">
        <div className="space-y-6 flex-1">
          <h1 className="text-2xl font-semibold">Pengaturan pemberitahuan email</h1>
          <div className="space-y-6">
            <div className="flex gap-3">
              <div>
                <Switch
                  checked={notificationEmail}
                  onChange={() => setNotificationEmail(!notificationEmail)}
                  disabled={false}
                />
              </div>
              <p className="text-blue-500 text-lg">Aktifkan pemberitahuan email</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Checkbox />
                <p>Laporan belajar kursus per minggu</p>
              </div>
              <div className="flex gap-3">
                <Checkbox />
                <p>Pencapaian sertifikan</p>
              </div>
              <div className="flex gap-3">
                <Checkbox />
                <p>Rekomendasi kursus terbaru</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 flex-1">
          <h1 className="text-2xl font-semibold">Pengaturan pemberitahuan whatsapp</h1>
          <div className="space-y-6">
            <div className="flex gap-3">
              <div>
                <Switch
                  checked={notificationEmail}
                  onChange={() => setNotificationEmail(!notificationEmail)}
                  disabled={false}
                />
              </div>
              <p className="text-blue-500 text-lg">Aktifkan pemberitahuan email</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Checkbox />
                <p>Laporan belajar kursus per minggu</p>
              </div>
              <div className="flex gap-3">
                <Checkbox />
                <p>Pencapaian sertifikan</p>
              </div>
              <div className="flex gap-3">
                <Checkbox />
                <p>Rekomendasi kursus terbaru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
