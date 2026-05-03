"use client";

import Checkbox from "@/components/ui/Checkbox"
import { Switch } from "@/components/ui/Switch"
import { cn } from "@/utils/cn";
import { EmailNotifSettings } from "@/types";
import { useEffect, useState } from "react"

export default function EmailNotifSettingsForm({ initialNotif }: { initialNotif: EmailNotifSettings }) {
  const [enabledEmailNotif, setEnabledEmailNotif] = useState(false);
  const [emailNotif, setEmailNotif] = useState(initialNotif)
  const [debounceEmailNotif, setDebounceEmailNotif] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceEmailNotif(emailNotif);
    }, 1000);
    return () => clearTimeout(timer);
  }, [emailNotif]);

  useEffect(() => {
    if (JSON.stringify(debounceEmailNotif) === JSON.stringify(initialNotif)) return;
    if (!enabledEmailNotif) return;

    console.log('Set email notf:', debounceEmailNotif)
  }, [debounceEmailNotif])

  const handleWeeklyReport = () => setEmailNotif({ ...emailNotif, weeklyReport: !emailNotif.weeklyReport })
  const handleCertificate = () => setEmailNotif({ ...emailNotif, certificate: !emailNotif.certificate })
  const handleRecommendation = () => setEmailNotif({ ...emailNotif, recommendation: !emailNotif.recommendation })

  useEffect(() => {
    if (!enabledEmailNotif) {
      setEmailNotif({
        weeklyReport: false,
        certificate: false,
        recommendation: false
      })
    }
  }, [enabledEmailNotif])



  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <div>
          <Switch
            checked={enabledEmailNotif}
            onChange={() => setEnabledEmailNotif(!enabledEmailNotif)}
            disabled={false}
          />
        </div>
        <p className={cn("text-lg", !enabledEmailNotif ? "text-gray-400" : "text-blue-500")}>
          Pemberitahuan email aktif
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-3">
          <Checkbox
            checked={emailNotif.weeklyReport}
            onChange={handleWeeklyReport}
            disabled={!enabledEmailNotif}
          />
          <p className={cn(!enabledEmailNotif ? "text-gray-400" : emailNotif.weeklyReport ? "text-blue-500" : "")}>
            Laporan belajar kursus per minggu
          </p>
        </div>
        <div className="flex gap-3">
          <Checkbox
            checked={emailNotif.certificate}
            onChange={handleCertificate}
            disabled={!enabledEmailNotif}
          />
          <p className={cn(!enabledEmailNotif ? "text-gray-400" : emailNotif.certificate ? "text-blue-500" : "")}>
            Pencapaian sertifikat
          </p>
        </div>
        <div className="flex gap-3">
          <Checkbox
            checked={emailNotif.recommendation}
            onChange={handleRecommendation}
            disabled={!enabledEmailNotif}
          />
          <p className={cn(!enabledEmailNotif ? "text-gray-400" : emailNotif.recommendation ? "text-blue-500" : "")}>
            Rekomendasi kursus terbaru
          </p>
        </div>
      </div>
    </div>
  )
}