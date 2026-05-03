'use client'

import { Switch } from "@/components/ui/Switch"
import Checkbox from "@/components/ui/Checkbox"
import { useEffect, useState } from "react"
import { cn } from "@/utils/cn"

export default function WhatsappNotifSettings() {
  const [notificationWhatsapp, setNotificationWhatsapp] = useState(false);
  const [messageWhatsapp, setMessageWhatsapp] = useState(false);
  const handleMessageWhatsapp = () => setMessageWhatsapp(!messageWhatsapp)

  useEffect(() => {
    if (!notificationWhatsapp) {
      setMessageWhatsapp(false)
    }
  }, [notificationWhatsapp])

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <div>
          <Switch
            checked={notificationWhatsapp}
            onChange={() => setNotificationWhatsapp(!notificationWhatsapp)}
            disabled={false}
          />
        </div>
        <p className={cn("text-lg", !notificationWhatsapp ? "text-gray-400" : "text-blue-500")}>
          Pemberitahuan whatsapp aktif
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-3">
          <Checkbox
            checked={messageWhatsapp}
            onChange={handleMessageWhatsapp}
            disabled={!notificationWhatsapp}
          />
          <p className={cn(!notificationWhatsapp ? "text-gray-400" : messageWhatsapp ? "text-blue-500" : "")}>
            Kirim pesan motivasi lewat whatsapp
          </p>
        </div>
      </div>
    </div>
  )
}