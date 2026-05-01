"use client";

import Checkbox from "@/components/ui/Checkbox"
import { Switch } from "@/components/ui/Switch"
import { useState } from "react"

export default function EmailNotifSettings() {
  const [notificationEmail, setNotificationEmail] = useState(false);
  return (
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
  )
}