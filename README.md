# Edurise Learning Portal

## Instalasi

```bash
npm install
```

## Menjalankan Aplikasi

```bash
npm run dev
```

# Penjelasan Arsitektur Aplikasi

Pada aplikasi ini saya menggunakan pendekatan berikut:

- **Server Component**:
    - Digunakan pada halaman utama dan komponen yang memerlukan data langsung dari server.
    - Memungkinkan pengambilan data yang lebih cepat dan efisien.

- **Client Component**:
    - Digunakan pada komponen yang memerlukan interaksi dengan pengguna.
    - Memungkinkan penggunaan state management dan event handling.

- **Folder Structure**:
    ```
    src/
    ├── app/              # Next.js App Router
    │   ├── (dashboard)/  # Dashboard routes
    │   │   ├── dashboard/   # Dashboard page
    │   │   ├── courses/     # Courses pages
    │   │   └── layout.tsx   # Dashboard layout
    │   ├── layout.tsx       # Root layout
    │   ├── page.tsx         # Home page
    │   └── favicon.ico
    ├── components/       # Reusable components
    │   ├── ui/              # UI components
    │   └── layout/          # Layout components
    ├── services/         # API services
    └── utils/            # Utility functions
    ```

- **State Management**:
    - State lokal yang digunakan untuk menyimpan data yang diperlukan oleh komponen.

- **Fetching Data**:
    - Menggunakan `fetch` dengan parameter bawaan Next.js sehinggga cachingnya otomatis.

- **Security**:
    - Menyimpan token autentikasi di `http cookies` sehingga lebih aman dari inject local storage

- **UI Components**:
    - Menggunakan library `lucide-react` untuk ikon yang digunakan pada aplikasi.

- **Routing**:
    - Menggunakan `Next.js App Router`

- **Loading**: Menggunakan `Suspense` dan `Skeleton` pada komponen yang memerlukan data dari server untuk memberikan pengalaman pengguna yang lebih baik saat data sedang dimuat
