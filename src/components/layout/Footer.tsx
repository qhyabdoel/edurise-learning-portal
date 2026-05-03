import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white md:px-0 px-8">
      <div className="container mx-auto md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-500 mb-5">
              EduRise
            </h2>

            <p className="text-sm mb-8 max-w-md">
              Tingkatkan kemampuanmu, raih masa depan lebih baik
            </p>

            <div className="flex gap-4">
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-blue-500`}
              >
                <span className="text-lg font-semibold">
                  in
                </span>
              </button>

              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-800`}
              >
                <Image src="/icons/icon-instagram.png" alt="instagram" width={16} height={16} />
              </button>

              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-800`}
              >
                <span className="text-xl font-semibold">
                  f
                </span>
              </button>

              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-800`}
              >
                <Image src="/icons/icon-youtube.png" alt="youtube" width={16} height={16} />
              </button>

              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-800`}
              >
                <Image src="/icons/icon-twitter.png" alt="x" width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="mb-6">
              4 Kategori teratas
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Pemrograman
              </li>
              <li className="hover:text-white cursor-pointer">
                Keuangan
              </li>
              <li className="hover:text-white cursor-pointer">
                Desain
              </li>
              <li className="hover:text-white cursor-pointer">
                Bisnis
              </li>
            </ul>
          </div>

          {/* Tautan */}
          <div>
            <h3 className="mb-6">
              Tautan
            </h3>

            <ul className="space-y-3 ext-sm">
              <li>Tentang kami</li>
              <li>Kontak kami</li>
              <li>Bergabung dengan kami</li>
            </ul>
          </div>

          {/* Bantuan + App */}
          <div>
            <h3 className="mb-6">
              Bantuan
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Pusat bantuan</li>
              <li>FAQs</li>
              <li>Syarat & ketentuan</li>
              <li>Kebijakan privasi</li>
            </ul>
          </div>

          {/* Tautan */}
          <div>
            <h3 className="mb-5">
              Download EduRise di
            </h3>

            <div className="space-y-4">
              <button className="w-full rounded-xl bg-slate-800 hover:bg-slate-700 transition p-4 flex items-center gap-4">
                <div className="text-3xl"></div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">
                    Download
                  </p>
                  <p className="font-medium">
                    App Store
                  </p>
                </div>
              </button>

              <button className="w-full rounded-xl bg-slate-800 hover:bg-slate-700 transition p-4 flex items-center gap-4">
                <div className="text-3xl">▶</div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">
                    Download
                  </p>
                  <p className="font-medium">
                    Play Store
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-8 text-center text-slate-400">
          © 2025 - EduRise. All rights reserved
        </div>
      </div>
    </footer>
  );
}