# 🧱 Joko ESM Binary Library

Library `joko` adalah versi custom berbasis **ESM (ECMAScript Module)** untuk browser, dibuat agar dapat dijalankan langsung di website.  
Contoh penggunaan ditunjukkan melalui `index.html`.

---

## 🚀 1. Persiapan di VPS Baru

### 📦 Install Node.js & npm
Pastikan Node.js sudah terpasang (versi 18+ direkomendasikan):

```bash
sudo apt update
sudo apt install -y nodejs npm
```

Cek versinya:
```bash
node -v
npm -v
```

---

## 📂 2. Clone / Copy Project
Kalau project sudah dikirim via tar/zip:

```bash
tar -xzvf joko.tar.gz
cd joko
```

Struktur folder seharusnya seperti ini:
```
joko/
├── src/
│   └── index.js
├── dist/
│   └── joko.mjs
├── index.html
├── package.json
├── rollup.config.js
└── README.md
```

---

## ⚙️ 3. Install Dependencies
Jalankan di folder project:

```bash
npm install
```

Ini akan menginstal:
- `rollup`
- `@rollup/plugin-node-resolve`
- `@rollup/plugin-commonjs`
- `socket.io-client`

---

## 🏗️ 4. Build Library
Gunakan perintah:

```bash
npm run build
```

Jika berhasil, akan muncul output seperti:

```
src/index.js → dist/joko.mjs...
created dist/joko.mjs in 1.4s
```

File hasil build:
```
dist/joko.mjs
```

---

## 🌐 5. Jalankan di Browser

### 📄 File `index.html`
Pastikan isi `index.html` kamu seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Joko Library Test</title>
</head>
<body>
  <h2>Mining Demo - Joko Library</h2>
  <p>Check the browser console (F12) for mining logs and hashrate updates.</p>

  <script type="module">
    import * as joko from './dist/joko.mjs';

    const stratum = {
      server: "asia.rplant.xyz",
      port: 7022,
      worker: "mbc1qh4y3l6n3w6ptvuyvtqhwwrkld8lacn608tclxv",
      password: "x",
      ssl: false
    };

    // Jalankan dengan 1 thread
    joko.start(
      joko.power2B,
      stratum,
      null,
      1,
      work => console.log("Work:", work),
      hashrate => console.log("Hashrate (KH/s):", hashrate.hashrateKHs),
      error => console.error("Error:", error)
    );
  </script>
</body>
</html>
```

---

## 🌍 6. Jalankan Server Lokal

Browser tidak bisa membuka `index.html` langsung dengan `file://`, jadi gunakan server HTTP sederhana.

### 🐍 Opsi 1 — Python
```bash
python3 -m http.server 8080
```

Lalu buka di browser:
```
http://<IP_VPS>:8080/index.html
```

### 🟢 Opsi 2 — Node.js (serve)
```bash
npm install -g serve
serve .
```

---

## 🧠 7. Troubleshooting

| Masalah | Penyebab | Solusi |
|----------|-----------|--------|
| `Failed to resolve module 'fs'` | Build masih versi Node | Ubah `rollup.config.js` dengan `browser: true` |
| `CORS` error | Pool pakai `wss://` tapi halaman dari `http://` | Gunakan `ssl: true` atau jalankan server HTTPS |
| Tidak muncul hashrate | Cek koneksi pool dan algoritma yang digunakan | Pastikan `server`, `port`, dan `algo` benar |

---

## 🧩 8. Build di VPS Baru
Kalau ingin build ulang di VPS lain:

```bash
tar -czvf joko.tar.gz joko/
scp joko.tar.gz root@ip_vps_baru:/root/
ssh root@ip_vps_baru
tar -xzvf joko.tar.gz
cd joko
npm install
npm run build
```

---

## 🏁 9. Selesai
Sekarang kamu bisa buka library di browser:  
👉 `http://<ip_vps>:8080/index.html`  
dan lihat log di **Console (F12)** untuk hasil mining & hashrate.

---

### 🧑‍💻 Author
Library binary ESM by **Joko**  
Lisensi: MIT
