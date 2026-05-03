"use client";

import Checkbox from "@/components/ui/Checkbox"
import { Switch } from "@/components/ui/Switch"
import { cn } from "@/utils/cn";
import { EmailNotifSettings } from "@/types";
import { useEffect, useState } from "react"
import { setEmailNotifRequest } from "@/services/notif-service";
import ErrorAlert from "@/components/ui/alerts/ErrorAlert";

export default function EmailNotifSettingsForm({ initialNotif }: { initialNotif: EmailNotifSettings }) {
  const [emailNotif, setEmailNotif] = useState<EmailNotifSettings>(initialNotif)
  const [debounceEmailNotif, setDebounceEmailNotif] = useState<EmailNotifSettings>({} as EmailNotifSettings);
  const [errored, setErrored] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceEmailNotif(emailNotif);
    }, 1500);
    return () => clearTimeout(timer);
  }, [emailNotif]);

  useEffect(() => {
    if (JSON.stringify(debounceEmailNotif) === JSON.stringify(initialNotif)) return;

    requestUpdateNotif()
  }, [debounceEmailNotif])

  const requestUpdateNotif = async () => {
    try {
      await setEmailNotifRequest(debounceEmailNotif)
    } catch (err) {
      console.log(err);
      setErrored("Terjadi kesalahan saat memperbarui notifikasi")
    }
  }

  const handleWeeklyReport = () => setEmailNotif({ ...emailNotif, weeklyReport: !emailNotif.weeklyReport })
  const handleCertificate = () => setEmailNotif({ ...emailNotif, certificate: !emailNotif.certificate })
  const handleRecommendation = () => setEmailNotif({ ...emailNotif, recommendation: !emailNotif.recommendation })

  useEffect(() => {
    if (!emailNotif.enabled) {
      setEmailNotif({
        enabled: false,
        weeklyReport: false,
        certificate: false,
        recommendation: false
      })
    }
  }, [emailNotif.enabled])

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <div>
          <Switch
            checked={emailNotif.enabled}
            onChange={() => setEmailNotif({ ...emailNotif, enabled: !emailNotif.enabled })}
            disabled={false}
          />
        </div>
        <p className={cn("text-lg", !emailNotif.enabled ? "text-gray-400" : "text-blue-500")}>
          Pemberitahuan email aktif
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-3">
          <Checkbox
            checked={emailNotif.weeklyReport}
            onChange={handleWeeklyReport}
            disabled={!emailNotif.enabled}
          />
          <p className={cn(!emailNotif.enabled ? "text-gray-400" : emailNotif.weeklyReport ? "text-blue-500" : "")}>
            Laporan belajar kursus per minggu
          </p>
        </div>
        <div className="flex gap-3">
          <Checkbox
            checked={emailNotif.certificate}
            onChange={handleCertificate}
            disabled={!emailNotif.enabled}
          />
          <p className={cn(!emailNotif.enabled ? "text-gray-400" : emailNotif.certificate ? "text-blue-500" : "")}>
            Pencapaian sertifikat
          </p>
        </div>
        <div className="flex gap-3">
          <Checkbox
            checked={emailNotif.recommendation}
            onChange={handleRecommendation}
            disabled={!emailNotif.enabled}
          />
          <p className={cn(!emailNotif.enabled ? "text-gray-400" : emailNotif.recommendation ? "text-blue-500" : "")}>
            Rekomendasi kursus terbaru
          </p>
        </div>
      </div>
      <div className="w-96">
        {errored && <ErrorAlert message={errored} setErrored={setErrored} />}
      </div>
    </div>
  )
}