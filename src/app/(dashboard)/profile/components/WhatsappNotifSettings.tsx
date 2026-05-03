'use client'

import { Switch } from "@/components/ui/Switch"
import Checkbox from "@/components/ui/Checkbox"
import { useEffect, useState } from "react"
import { cn } from "@/utils/cn"
import { WhatsappNotifSettings } from "@/types";
import { setWhatsappNotifRequest } from "@/services/notif-service";
import ErrorAlert from "@/components/ui/alerts/ErrorAlert"

export default function WhatsappNotifSettingsForm({ initialNotif }: { initialNotif: WhatsappNotifSettings }) {
  const [whatsappNotifSettings, setWhatsappNotifSettings] = useState<WhatsappNotifSettings>(initialNotif);
  const [debounceWhatsappNotifSettings, setDebounceWhatsappNotifSettings] = useState<WhatsappNotifSettings>(initialNotif);
  const [errored, setErrored] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceWhatsappNotifSettings(whatsappNotifSettings)
    }, 1500)

    return () => clearTimeout(timer);
  }, [whatsappNotifSettings])

  useEffect(() => {
    if (JSON.stringify(debounceWhatsappNotifSettings) === JSON.stringify(initialNotif)) return;

    requestUpdateNotif()
  }, [debounceWhatsappNotifSettings])

  const requestUpdateNotif = async () => {
    try {
      await setWhatsappNotifRequest(debounceWhatsappNotifSettings)
    } catch (err) {
      console.log(err);
      setErrored("Terjadi kesalahan saat memperbarui notifikasi")
    }
  }

  const handleWhatsappNotifSettings = () => setWhatsappNotifSettings({
    ...whatsappNotifSettings,
    enabled: !whatsappNotifSettings.enabled
  })
  const handleMotivationNotifSettings = () => setWhatsappNotifSettings({
    ...whatsappNotifSettings,
    motivation: !whatsappNotifSettings.motivation
  })

  useEffect(() => {
    if (!whatsappNotifSettings.enabled) {
      setWhatsappNotifSettings({ ...whatsappNotifSettings, motivation: false })
    }
  }, [whatsappNotifSettings.enabled])

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <div>
          <Switch
            checked={whatsappNotifSettings.enabled}
            onChange={handleWhatsappNotifSettings}
            disabled={false}
          />
        </div>
        <p className={cn("text-lg", !whatsappNotifSettings.enabled ? "text-gray-400" : "text-blue-500")}>
          Pemberitahuan whatsapp aktif
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-3">
          <Checkbox
            checked={whatsappNotifSettings.motivation}
            onChange={handleMotivationNotifSettings}
            disabled={!whatsappNotifSettings.enabled}
          />
          <p className={cn(!whatsappNotifSettings.enabled ? "text-gray-400" : whatsappNotifSettings.motivation ? "text-blue-500" : "")}>
            Kirim pesan motivasi lewat whatsapp
          </p>
        </div>
      </div>
      <div className="w-96">
        {errored && <ErrorAlert message={errored} setErrored={setErrored} />}
      </div>
    </div>
  )
}