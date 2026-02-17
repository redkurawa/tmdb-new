<div align="center">
  <a href="https://github.com/your-username/tmdb-new">
    <img src="https://capsulerender.vercel.app/api?type=waving&color=0:FF6B6B,100:4ECDC4&height=300&section=header&text=TMDB%20Movie%20Explorer&fontSize=90&animation=fadeIn&fontAlignY=35&desc=Powered%20by%20TMDB%20API%20%F0%9F%8E%AC%20%F0%9F%8C%9F&descAlignY=55&descAlign=Center" width="100%" alt="TMDB Movie Explorer Header"/>
  </a>
</div>

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/your-username/tmdb-new?style=flat&color=FF6B6B&logo=github)](https://github.com/your-username/tmdb-new/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/your-username/tmdb-new?style=flat&color=4ECDC4&logo=github)](https://github.com/your-username/tmdb-new/network)
[![GitHub Issues](https://img.shields.io/github/issues/your-username/tmdb-new?style=flat&color=34D399&logo=github)](https://github.com/your-username/tmdb-new/issues)
[![GitHub License](https://img.shields.io/github/license/your-username/tmdb-new?style=flat&color=6EE7B7&logo=github)](https://github.com/your-username/tmdb-new/blob/main/LICENSE)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📑 Table of Contents / Daftar Isi

1. [Project Overview](#1-project-overview---gambaran-umum-project)
2. [Features](#2-features---fitur-fitur)
3. [Tech Stack](#3-tech-stack---teknologi-yang-digunakan)
4. [Prerequisites](#4-prerequisites---persiapan-sebelum-mulai)
5. [Installation](#5-installation---instalasi-project)
6. [Environment Variables](#6-environment-variables---variabel-lingkungan)
7. [Project Structure](#7-project-structure---struktur-project)
8. [Running the Application](#8-running-the-application---menjalankan-aplikasi)
9. [API Integration](#9-api-integration---integrasi-api-tmdb)
10. [Routing System](#10-routing-system---sistem-routing)
11. [State Management](#11-state-management---manajemen-state)
12. [Components Overview](#12-components-overview---gambaran-komponen)
13. [Deployment](#13-deployment---deploy-ke-production)
14. [Troubleshooting](#14-troubleshooting---pemecahan-masalah)
15. [Best Practices](#15-best-practices---praktik-terbaik)
16. [Contributing](#16-contributing---kontribusi)
17. [License](#17-license---lisensi)
18. [Acknowledgments](#18-acknowledgments---ucapan-terima-kasih)

---

## 1. Project Overview / Gambaran Umum Project

### English

Welcome to **TMDB Movie Explorer**, a modern, high-performance web application for exploring movies using The Movie Database (TMDB) API. This project is built with cutting-edge technologies including React 19, TypeScript 5.9, Vite 7, and Tailwind CSS 4.

This application provides a seamless experience for browsing popular movies, discovering upcoming releases, and searching through an extensive movie database. Users can view detailed information about each movie, including cast members, production details, ratings, and more.

The project follows modern best practices in web development, including:
- **Component-based architecture** for reusable and maintainable code
- **TypeScript** for type safety and better developer experience
- **Server state management** with TanStack Query (React Query)
- **Responsive design** that works on all devices
- **Modern build tooling** with Vite for lightning-fast development
- **Code quality tools** including ESLint and Prettier

### Bahasa Indonesia

Selamat datang di **TMDB Movie Explorer**, aplikasi web modern dan berkinerja tinggi untuk menjelajahi film menggunakan API The Movie Database (TMDB). Project ini dibangun dengan teknologi terkini termasuk React 19, TypeScript 5.9, Vite 7, dan Tailwind CSS 4.

Aplikasi ini menyediakan pengalaman yang mulus untuk menelusuri film populer, menemukan rilis mendatang, dan mencari melalui database film yang luas. Pengguna dapat melihat informasi detail tentang setiap film, termasuk pemeran, detail produksi, rating, dan lainnya.

Project ini mengikuti praktik terbaik dalam pengembangan web modern, termasuk:
- **Arsitektur berbasis komponen** untuk kode yang dapat digunakan ulang dan mudah dirawat
- **TypeScript** untuk keamanan tipe dan pengalaman pengembang yang lebih baik
- **Manajemen state server** dengan TanStack Query (React Query)
- **Desain responsif** yang berfungsi di semua perangkat
- **Build tooling modern** dengan Vite untuk pengembangan yang sangat cepat
- **Alatan kualitas kode** termasuk ESLint dan Prettier

---

## 2. Features / Fitur-Fitur

### English

This application comes packed with powerful features designed to provide the best movie browsing experience:

#### Core Features

1. **🎬 Popular Movies Display**
   - View the most popular movies currently trending
   - Beautiful carousel slider for easy browsing
   - Lazy loading with infinite scroll pagination
   - High-quality movie posters and backdrops

2. **🔍 Movie Search**
   - Real-time search functionality
   - Search results displayed instantly
   - Debounced search to minimize API calls
   - Support for movie title searches

3. **📽️ Upcoming Movies**
   - Discover upcoming movie releases
   - Infinite scroll pagination for seamless browsing
   - "Load More" button for manual pagination control
   - Movie release date information

4. **📊 Movie Details**
   - Comprehensive movie information
   - Overview/synopsis
   - Cast and crew information
   - Production companies
   - Budget and revenue statistics
   - Runtime and release date
   - Genre tags
   - User ratings and vote counts

5. **🖼️ Visual Excellence**
   - Hero section with backdrop images
   - Responsive image loading
   - Optimized image URLs from TMDB CDN
   - Smooth animations with Motion library

6. **📱 Responsive Design**
   - Mobile-first approach
   - Adaptive layouts for all screen sizes
   - Touch-friendly carousel controls
   - Optimized for both portrait and landscape orientations

### Bahasa Indonesia

Aplikasi ini dilengkapi dengan fitur-fitur kuat yang dirancang untuk memberikan pengalaman menjelajahi film terbaik:

#### Fitur Inti

1. **🎬 Tampilan Film Populer**
   - Lihat film paling populer yang sedang tren
   - Slider karousel yang indah untuk penelusuran mudah
   - Pemuatan lambat dengan pagination infinite scroll
   - Poster film dan backdrop berkualitas tinggi

2. **🔍 Pencarian Film**
   - Fungsionalitas pencarian real-time
   - Hasil pencarian ditampilkan secara instan
   - Pencarian di-debounce untuk meminimalkan panggilan API
   - Dukungan untuk pencarian judul film

3. **📽️ Film yang Akan Datang**
   - Temukan rilis film yang akan datang
   - Pagination infinite scroll untuk penelusuran tanpa batas
   - Tombol "Load More" untuk kontrol pagination manual
   - Informasi tanggal rilis film

4. **📊 Detail Film**
   - Informasi film yang komprehensif
   - Overview/sinopsis
   - Informasi pemeran dan crew
   - Perusahaan produksi
   - Statistik anggaran dan pendapatan
   - Durasi dan tanggal rilis
   - Tag genre
   - Rating pengguna dan jumlah suara

5. **🖼️ Keunggulan Visual**
   - Bagian hero dengan gambar backdrop
   - Pemuatan gambar yang responsif
   - URL gambar yang dioptimalkan dari TMDB CDN
   - Animasi halus dengan library Motion

6. **📱 Desain Responsif**
   - Pendekatan mobile-first
   - Tata letak adaptif untuk semua ukuran layar
   - Kontrol karousel yang ramah sentuh
   - Dioptimalkan untuk orientasi portrait dan landscape

---

## 3. Tech Stack / Teknologi yang Digunakan

### English

This project leverages the latest and most powerful web development technologies:

#### Frontend Framework
- **React 19.1.1** - The latest version of React with concurrent rendering, automatic batching, and improved performance
- **React DOM 19.1.1** - React's DOM rendering library

#### Language
- **TypeScript 5.9** - Typed superset of JavaScript for better developer experience and code quality
- **ESLint 9.x** - Pluggable JavaScript linter for identifying and fixing problems
- **Prettier 3.x** - Opinionated code formatter for consistent code style

#### Build Tools
- **Vite 7.1.7** - Next-generation frontend build tool with instant server start and lightning-fast HMR (Hot Module Replacement)
- **@vitejs/plugin-react 5.0.4** - Official Vite React plugin

#### Styling
- **Tailwind CSS 4.1.14** - A utility-first CSS framework for rapid UI development
- **@tailwindcss/vite 4.1.14** - Official Tailwind CSS Vite plugin
- **Tailwind Merge 3.3.1** - Utility function to merge Tailwind CSS classes
- **Class Variance Authority 0.7.1** - Create component variants with class names
- **CLSX 2.1.1** - Simple utility for constructing className strings conditionally

#### Data Fetching & State Management
- **TanStack Query (React Query) 5.90.2** - Powerful asynchronous state management for React
- **Axios 1.12.2** - Promise-based HTTP client for making API requests

#### UI Components
- **Radix UI React Slot 1.2.3** - Primitive component composition
- **Lucide React 0.545.0** - Beautiful & consistent icon library
- **Embla Carousel React 8.6.0** - Lightweight carousel library with gesture support

#### Animation
- **Motion 12.23.24** - Production-ready motion library for React (formerly Framer Motion)

#### Routing
- **React Router DOM 7.9.4** - Standard routing library for React applications

#### Utilities
- **Day.js 1.11.18** - Minimalist JavaScript date library (2KB alternative to Moment.js)
- **@types/node 24.7.1** - TypeScript definitions for Node.js
- **@types/react 19.1.16** - TypeScript definitions for React
- **@types/react-dom 19.1.9** - TypeScript definitions for React DOM

#### Development Tools
- **TypeScript ESLint 8.45.0** - TypeScript parser and linter for ESLint
- **ESLint Plugin React 5.x** - React specific linting rules
- **ESLint Plugin React Hooks 5.2.0** - Linting rules for React Hooks
- **ESLint Plugin Import 2.32.0** - Plugin to support ES2015+ import/export syntax
- **ESLint Plugin Prettier 5.5.4** - Runs Prettier as ESLint rules
- **ESLint Config Prettier 10.1.8** - Turns off all unnecessary or conflicting rules
- **Prettier Plugin TailwindCSS 0.6.14** - Prettier plugin for Tailwind CSS
- **tw-animate-css 1.4.0** - Tailwind CSS animation utilities

### Bahasa Indonesia

Project ini memanfaatkan teknologi pengembangan web tercanggih dan terhebat:

#### Framework Frontend
- **React 19.1.1** - Versi terbaru React dengan concurrent rendering, automatic batching, dan peningkatan performa
- **React DOM 19.1.1** - Library rendering DOM React

#### Bahasa Pemrograman
- **TypeScript 5.9** - Superset JavaScript yang typed untuk pengalaman pengembang dan kualitas kode yang lebih baik
- **ESLint 9.x** - Linter JavaScript yang dapat di-extend untuk mengidentifikasi dan memperbaiki masalah
- **Prettier 3.x** - Formatter kode yang opiniatif untuk gaya kode yang konsisten

#### Build Tools
- **Vite 7.1.7** - Alat build frontend generasi berikutnya dengan start server instan dan HMR super cepat
- **@vitejs/plugin-react 5.0.4** - Plugin React resmi Vite

#### Styling
- **Tailwind CSS 4.1.14** - Framework CSS berbasis utility untuk pengembangan UI yang cepat
- **@tailwindcss/vite 4.1.14** - Plugin Tailwind CSS resmi untuk Vite
- **Tailwind Merge 3.3.1** - Fungsi utility untuk menggabungkan kelas Tailwind CSS
- **Class Variance Authority 0.7.1** - Membuat variant komponen dengan nama kelas
- **CLSX 2.1.1** - Utility sederhana untuk membangun string className secara kondisional

#### Pengambilan Data & Manajemen State
- **TanStack Query (React Query) 5.90.2** - Manajemen state asinkron yang kuat untuk React
- **Axios 1.12.2** - Klien HTTP berbasis Promise untuk membuat permintaan API

#### Komponen UI
- **Radix UI React Slot 1.2.3** - Komposisi komponen primitif
- **Lucide React 0.545.0** - Library ikon yang indah dan konsisten
- **Embla Carousel React 8.6.0** - Library karousel ringan dengan dukungan gesture

#### Animasi
- **Motion 12.23.24** - Library animasi siap produksi untuk React (dulunya Framer Motion)

#### Routing
- **React Router DOM 7.9.4** - Library routing standar untuk aplikasi React

#### Utility
- **Day.js 1.11.18** - Library date JavaScript yang minimalis (alternatif 2KB untuk Moment.js)
- **@types/node 24.7.1** - Definisi TypeScript untuk Node.js
- **@types/react 19.1.16** - Definisi TypeScript untuk React
- **@types/react-dom 19.1.9** - Definisi TypeScript untuk React DOM

#### Alat Pengembangan
- **TypeScript ESLint 8.45.0** - Parser dan linter TypeScript untuk ESLint
- **ESLint Plugin React 5.x** - Aturan linting spesifik React
- **ESLint Plugin React Hooks 5.2.0** - Aturan linting untuk React Hooks
- **ESLint Plugin Import 2.32.0** - Plugin untuk mendukung sintaks import/export ES2015+
- **ESLint Plugin Prettier 5.5.4** - Menjalankan Prettier sebagai aturan ESLint
- **ESLint Config Prettier 10.1.8** - Menonaktifkan semua aturan yang tidak perlu atau bertentangan
- **Prettier Plugin TailwindCSS 0.6.14** - Plugin Prettier untuk Tailwind CSS
- **tw-animate-css 1.4.0** - Utilitas animasi Tailwind CSS

---

## 4. Prerequisites / Persiapan Sebelum Mulai

### English

Before you begin, make sure you have the following installed on your system:

#### Required Software

1. **Node.js (v18 or higher)**
   - Download from: https://nodejs.org/
   - Recommended: Use LTS (Long Term Support) version
   - Verify installation: `node --version`
   
2. **npm (comes with Node.js)**
   - Verify installation: `npm --version`
   - Alternative: You can use `yarn` or `pnpm` if preferred

3. **Git (optional but recommended)**
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

4. **Code Editor**
   - Recommended: Visual Studio Code (https://code.visualstudio.com/)
   - Extensions needed:
     - ESLint
     - Prettier - Code formatter
     - Tailwind CSS IntelliSense
     - TypeScript Vue Plugin (or similar for TypeScript support)

#### API Key Requirements

To run this application, you need a TMDB API key:

1. Visit https://www.themoviedb.org/
2. Create an account or sign in
3. Go to Settings > API
4. Create a new API key
5. Copy the API key for use in environment variables

### Bahasa Indonesia

Sebelum Anda mulai, pastikan Anda telah menginstal hal berikut di sistem Anda:

#### Software yang Dibutuhkan

1. **Node.js (v18 atau lebih tinggi)**
   - Unduh dari: https://nodejs.org/
   - Direkomendasikan: Gunakan versi LTS (Long Term Support)
   - Verifikasi instalasi: `node --version`
   
2. **npm (didapat dengan Node.js)**
   - Verifikasi instalasi: `npm --version`
   - Alternatif: Anda dapat menggunakan `yarn` atau `pnpm` jika lebih suka

3. **Git (opsional tetapi direkomendasikan)**
   - Unduh dari: https://git-scm.com/
   - Verifikasi instalasi: `git --version`

4. **Code Editor**
   - Direkomendasikan: Visual Studio Code (https://code.visualstudio.com/)
   - Extensions yang dibutuhkan:
     - ESLint
     - Prettier - Code formatter
     - Tailwind CSS IntelliSense
     - TypeScript Vue Plugin (atau serupa untuk dukungan TypeScript)

#### Persyaratan API Key

Untuk menjalankan aplikasi ini, Anda membutuhkan API key TMDB:

1. Kunjungi https://www.themoviedb.org/
2. Buat akun atau sign in
3. Pergi ke Settings > API
4. Buat API key baru
5. Salin API key untuk digunakan di variabel lingkungan

---

## 5. Installation / Instalasi Project

### English

Follow these step-by-step instructions to set up the project on your local machine:

#### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/tmdb-new.git

# Navigate to the project directory
cd tmdb-new
```

#### Step 2: Install Dependencies

```bash
# Install all project dependencies using npm
npm install

# OR if you prefer using yarn
# yarn install

# OR if you prefer using pnpm
# pnpm install
```

This will install all the required packages defined in the `package.json` file.

#### Step 3: Configure Environment Variables

```bash
# Copy the sample environment file
cp .env.sample .env

# Edit the .env file with your preferred text editor
# Add your TMDB API key
```

For detailed instructions, see Section 6: Environment Variables.

#### Step 4: Start Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

#### Step 5: Build for Production (Optional)

```bash
# Build the production version
npm run build
```

The built files will be in the `dist/` directory.

### Bahasa Indonesia

Ikuti petunjuk langkah demi langkah ini untuk mengatur project di mesin lokal Anda:

#### Langkah 1: Clone Repository

```bash
# Clone repository
git clone https://github.com/username-anda/tmdb-new.git

# Masuk ke direktori project
cd tmdb-new
```

#### Langkah 2: Instal Dependencies

```bash
# Instal semua dependencies project menggunakan npm
npm install

# ATAU jika Anda lebih suka menggunakan yarn
# yarn install

# ATAU jika Anda lebih suka menggunakan pnpm
# pnpm install
```

Ini akan menginstal semua paket yang diperlukan yang didefinisikan di file `package.json`.

#### Langkah 3: Konfigurasi Variabel Lingkungan

```bash
# Salin file environment sample
cp .env.sample .env

# Edit file .env dengan editor teks favorit Anda
# Tambahkan API key TMDB Anda
```

Untuk petunjuk lengkap, lihat Bagian 6: Variabel Lingkungan.

#### Langkah 4: Mulai Server Pengembangan

```bash
# Mulai server pengembangan
npm run dev
```

Aplikasi akan tersedia di `http://localhost:5173/` (atau port lain jika 5173 sedang digunakan).

#### Langkah 5: Build untuk Production (Opsional)

```bash
# Build versi production
npm run build
```

File yang di-build akan berada di direktori `dist/`.

---

## 6. Environment Variables / Variabel Lingkungan

### English

The application requires specific environment variables to function properly. Here's a detailed explanation:

#### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_TMDB` | The base URL for TMDB API v3 | `https://api.themoviedb.org/3` |
| `VITE_API_KEY` | Your TMDB API read access token | Your API key string |

#### How to Get TMDB API Key

1. **Create TMDB Account**
   - Go to https://www.themoviedb.org/
   - Click "Sign In" and create an account

2. **Request API Key**
   - Log in to your account
   - Click on your profile picture > "Settings"
   - Click on "API" in the left sidebar
   - Click "Create" under "API"
   - Fill in the required information
   - Copy your API key

#### Configuration

Create a `.env` file in the project root directory:

```env
VITE_API_TMDB=https://api.themoviedb.org/3
VITE_API_KEY=your_api_key_here
```

**Important:**
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Use `.env.sample` as a template for other developers

#### Environment Variables in Code

The application uses `import.meta.env` to access environment variables in Vite:

```typescript
// Example usage in src/services/api.ts
const baseURL = import.meta.env.VITE_API_TMDB;
const token = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
```

### Bahasa Indonesia

Aplikasi ini membutuhkan variabel lingkungan khusus untuk berfungsi dengan baik. Berikut penjelasan detail:

#### Variabel yang Dibutuhkan

| Variabel | Deskripsi | Contoh |
|----------|-----------|--------|
| `VITE_API_TMDB` | URL dasar untuk API TMDB v3 | `https://api.themoviedb.org/3` |
| `VITE_API_KEY` | Token akses read API TMDB Anda | String API key Anda |

#### Cara Mendapatkan API Key TMDB

1. **Buat Akun TMDB**
   - Kunjungi https://www.themoviedb.org/
   - Klik "Sign In" dan buat akun

2. **Minta API Key**
   - Login ke akun Anda
   - Klik foto profil Anda > "Settings"
   - Klik "API" di sidebar kiri
   - Klik "Create" di bawah "API"
   - Isi informasi yang diperlukan
   - Salin API key Anda

#### Konfigurasi

Buat file `.env` di direktori root project:

```env
VITE_API_TMDB=https://api.themoviedb.org/3
VITE_API_KEY=api_key_anda_disini
```

**Penting:**
- Jangan pernah commit file `.env` ke version control
- File `.env` sudah ada di `.gitignore`
- Gunakan `.env.sample` sebagai template untuk developer lain

#### Variabel Lingkungan di Kode

Aplikasi menggunakan `import.meta.env` untuk mengakses variabel lingkungan di Vite:

```typescript
// Contoh penggunaan di src/services/api.ts
const baseURL = import.meta.env.VITE_API_TMDB;
const token = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
```

---

## 7. Project Structure / Struktur Project

### English

The project follows a clean, organized structure that promotes maintainability and scalability:

```
tmdb-new/
├── public/                      # Static assets
│   ├── icons/                   # Custom SVG icons
│   │   ├── age.svg
│   │   ├── avatar.png
│   │   ├── avatar-s.png
│   │   ├── avatar-s2.png
│   │   ├── female.png
│   │   ├── female-s.png
│   │   ├── male.png
│   │   ├── male-s.png
│   │   └── star.svg
│   └── vite.svg               # Vite logo
├── src/                        # Source code
│   ├── assets/                # React assets
│   │   └── react.svg         # React logo
│   ├── components/           # React components
│   │   ├── layouts/          # Layout components
│   │   │   ├── movie-card.tsx
│   │   │   ├── movie-cast.tsx
│   │   │   ├── movie-detail-stats.tsx
│   │   │   └── movie-header.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── movie-detail.tsx
│   │   │   └── movie-list.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       └── input.tsx
│   ├── lib/                  # Utility libraries
│   │   ├── queryClient.ts    # React Query client
│   │   └── utils.ts          # Utility functions
│   ├── services/             # API services
│   │   ├── api.ts           # Axios instance
│   │   └── service.ts       # API functions
│   ├── types/                # TypeScript types
│   │   ├── movie-credit.ts
│   │   ├── movie-detail.ts
│   │   └── movie-list.ts
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles
│   ├── main.tsx             # Application entry point
│   └── vercel.json          # Vercel deployment config
├── .env.sample              # Environment variables template
├── .eslint.config.js        # ESLint configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── components.json          # Shadcn/ui components config
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package-lock.json        # npm lock file
├── package.json             # Project dependencies
├── tsconfig.app.json        # TypeScript app config
├── tsconfig.json           # TypeScript base config
├── tsconfig.node.json      # TypeScript node config
└── vite.config.ts          # Vite configuration
```

#### Directory Explanations

- **public/**: Static files that are served directly. Contains icons and logos.
- **src/components/layouts/**: Components that define the layout structure of pages (cards, headers, etc.)
- **src/components/pages/**: Full page components that represent routes
- **src/components/ui/**: Reusable UI components like buttons, inputs, cards
- **src/lib/**: Utility functions and library configurations
- **src/services/**: API handling code (Axios setup, API calls)
- **src/types/**: TypeScript interfaces and types for type safety

### Bahasa Indonesia

Project mengikuti struktur yang bersih dan terorganisir yang meningkatkan maintainability dan scalability:

```
tmdb-new/
├── public/                      # Aset statis
│   ├── icons/                   # Ikon SVG kustom
│   │   ├── age.svg
│   │   ├── avatar.png
│   │   ├── avatar-s.png
│   │   ├── avatar-s2.png
│   │   ├── female.png
│   │   ├── female-s.png
│   │   ├── male.png
│   │   ├── male-s.png
│   │   └── star.svg
│   └── vite.svg               # Logo Vite
├── src/                        # Kode sumber
│   ├── assets/                # Aset React
│   │   └── react.svg         # Logo React
│   ├── components/           # Komponen React
│   │   ├── layouts/          # Komponen layout
│   │   │   ├── movie-card.tsx
│   │   │   ├── movie-cast.tsx
│   │   │   ├── movie-detail-stats.tsx
│   │   │   └── movie-header.tsx
│   │   ├── pages/            # Komponen halaman
│   │   │   ├── movie-detail.tsx
│   │   │   └── movie-list.tsx
│   │   └── ui/               # Komponen UI yang dapat digunakan ulang
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       └── input.tsx
│   ├── lib/                  # Library utility
│   │   ├── queryClient.ts    # Klien React Query
│   │   └── utils.ts          # Fungsi utility
│   ├── services/             # Layanan API
│   │   ├── api.ts           # Instance Axios
│   │   └── service.ts       # Fungsi API
│   ├── types/                # Tipe TypeScript
│   │   ├── movie-credit.ts
│   │   ├── movie-detail.ts
│   │   └── movie-list.ts
│   ├── App.tsx              # Komponen aplikasi utama
│   ├── index.css            # Gaya global
│   ├── main.tsx             # Entry point aplikasi
│   └── vercel.json          # Konfigurasi deployment Vercel
├── .env.sample              # Template variabel lingkungan
├── .eslint.config.js        # Konfigurasi ESLint
├── .gitignore               # Aturan git ignore
├── .prettierrc              # Konfigurasi Prettier
├── components.json          # Konfigurasi komponen Shadcn/ui
├── eslint.config.js         # Konfigurasi ESLint
├── index.html               # Entry point HTML
├── package-lock.json        # File lock npm
├── package.json             # Dependencies project
├── tsconfig.app.json        # Konfigurasi TypeScript app
├── tsconfig.json           # Konfigurasi dasar TypeScript
├── tsconfig.node.json      # Konfigurasi TypeScript node
└── vite.config.ts          # Konfigurasi Vite
```

#### Penjelasan Direktori

- **public/**: File statis yang disajikan langsung. Berisi ikon dan logo.
- **src/components/layout/**: Komponen yang mendefinisikan struktur layout halaman (cards, headers, dll)
- **src/components/pages/**: Komponen halaman penuh yang merepresentasikan route
- **src/components/ui/**: Komponen UI yang dapat digunakan ulang seperti buttons, inputs, cards
- **src/lib/**: Fungsi utility dan konfigurasi library
- **src/services/**: Kode penanganan API (setup Axios, panggilan API)
- **src/types/**: Interface dan tipe TypeScript untuk keamanan tipe

---

## 8. Running the Application / Menjalankan Aplikasi

### English

#### Development Mode

```bash
# Start development server with hot reload
npm run dev
```

This will start the Vite development server. The app will be available at `http://localhost:5173/`. Changes will automatically reload the page.

#### Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

#### Linting

```bash
# Run ESLint to find and fix problems
npm run lint
```

### Bahasa Indonesia

#### Mode Pengembangan

```bash
# Mulai server pengembangan dengan hot reload
npm run dev
```

Ini akan memulai server pengembangan Vite. Aplikasi akan tersedia di `http://localhost:5173/`. Perubahan akan otomatis memuat ulang halaman.

#### Build Production

```bash
# Build untuk production
npm run build

# Preview build production secara lokal
npm run preview
```

#### Linting

```bash
# Jalankan ESLint untuk menemukan dan memperbaiki masalah
npm run lint
```

---

## 9. API Integration / Integrasi API TMDB

### English

The application integrates with TMDB API v3 to fetch movie data. Here's how it works:

#### API Setup

The API client is configured in `src/services/api.ts`:

```typescript
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_TMDB,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
```

#### API Service Functions

API calls are handled in `src/services/service.ts`:

```typescript
import { api } from './api';

export const GetM = async (url: string) => {
  const r = await api.get(url);
  return r;
};
```

#### Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `movie/popular` | Get popular movies |
| `movie/upcoming` | Get upcoming movies |
| `search/movie` | Search for movies |
| `movie/{movie_id}` | Get movie details |
| `movie/{movie_id}/credits` | Get movie cast & crew |

#### Example Usage

```typescript
// Fetch popular movies
const response = await GetM('movie/popular');
const popularMovies = response.data.results;

// Search movies
const searchResponse = await GetM(`/search/movie?query=${searchQuery}`);
const searchResults = searchResponse.data.results;
```

### Bahasa Indonesia

Aplikasi berintegrasi dengan API TMDB v3 untuk mengambil data film. Berikut cara kerjanya:

#### Setup API

Klien API dikonfigurasi di `src/services/api.ts`:

```typescript
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_TMDB,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
```

#### Fungsi Layanan API

Panggilan API ditangani di `src/services/service.ts`:

```typescript
import { api } dari './api';

export const GetM = async (url: string) => {
  const r = await api.get(url);
  return r;
};
```

#### Endpoint yang Tersedia

| Endpoint | Deskripsi |
|----------|-----------|
| `movie/popular` | Dapatkan film populer |
| `movie/upcoming` | Dapatkan film yang akan datang |
| `search/movie` | Cari film |
| `movie/{movie_id}` | Dapatkan detail film |
| `movie/{movie_id}/credits` | Dapatkan pemeran & crew film |

#### Contoh Penggunaan

```typescript
// Ambil film populer
const response = await GetM('movie/popular');
const popularMovies = response.data.results;

// Cari film
const searchResponse = await GetM(`/search/movie?query=${searchQuery}`);
const searchResults = searchResponse.data.results;
```

---

## 10. Routing System / Sistem Routing

### English

The application uses React Router DOM v7 for client-side routing:

#### Route Structure

```typescript
// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import List from './components/pages/movie-list';
import ShowDetail from './components/pages/movie-detail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/detail/:id' element={<ShowDetail />} />
      </Routes>
    </>
  );
}
```

#### Routes Available

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `List` | Home page with popular and upcoming movies |
| `/detail/:id` | `ShowDetail` | Movie detail page |

### Bahasa Indonesia

Aplikasi menggunakan React Router DOM v7 untuk routing di sisi klien:

#### Struktur Route

```typescript
// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import List from './components/pages/movie-list';
import ShowDetail from './components/pages/movie-detail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/detail/:id' element={<ShowDetail />} />
      </Routes>
    </>
  );
}
```

#### Route yang Tersedia

| Path | Komponen | Deskripsi |
|------|----------|-----------|
| `/` | `List` | Halaman utama dengan film populer dan yang akan datang |
| `/detail/:id` | `ShowDetail` | Halaman detail film |

---

## 11. State Management / Manajemen State

### English

The application uses multiple state management approaches:

#### 1. Server State with TanStack Query

TanStack Query (React Query) is used for managing server state:

```typescript
// Fetching popular movies
const { data: popular } = useQuery({
  queryKey: ['tmdb/popular'],
  queryFn: async () => {
    const r = await GetM('movie/popular');
    return r.data.results as Movie[];
  },
});
```

```typescript
// Infinite query for upcoming movies
const { data: upcoming, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['tmdb/upcoming'],
  initialPageParam: 1,
  queryFn: async ({ pageParam }) => {
    const r = await GetM(`movie/upcoming?language=en-US&page=${pageParam}`);
    const res = (r.data?.results ?? []) as Movie[];
    const nextOf = r.data?.page ? (pageParam as number) + 1 : undefined;
    return { res, nextOf };
  },
  getNextPageParam: (lastPage) => lastPage.nextOf,
});
```

#### 2. Local State with React useState

```typescript
// Search state
const [query, setQuery] = useState('');
const [results, setResults] = useState<Movie[]>([]);
const [isOpen, setIsOpen] = useState(false);
```

### Bahasa Indonesia

Aplikasi menggunakan beberapa pendekatan manajemen state:

#### 1. State Server dengan TanStack Query

TanStack Query (React Query) digunakan untuk mengelola state server:

```typescript
// Mengambil film populer
const { data: popular } = useQuery({
  queryKey: ['tmdb/popular'],
  queryFn: async () => {
    const r = await GetM('movie/popular');
    return r.data.results as Movie[];
  },
});
```

```typescript
// Infinite query untuk film yang akan datang
const { data: upcoming, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['tmdb/upcoming'],
  initialPageParam: 1,
  queryFn: async ({ pageParam }) => {
    const r = await GetM(`movie/upcoming?language=en-US&page=${pageParam}`);
    const res = (r.data?.results ?? []) as Movie[];
    const nextOf = r.data?.page ? (pageParam as number) + 1 : undefined;
    return { res, nextOf };
  },
  getNextPageParam: (lastPage) => lastPage.nextOf,
});
```

#### 2. State Lokal dengan React useState

```typescript
// State pencarian
const [query, setQuery] = useState('');
const [results, setResults] = useState<Movie[]>([]);
const [isOpen, setIsOpen] = useState(false);
```

---

## 12. Components Overview / Gambaran Komponen

### English

#### Page Components

1. **MovieList (movie-list.tsx)**
   - Main landing page
   - Displays popular movies in carousel
   - Shows upcoming movies with infinite scroll
   - Search functionality
   - Hero section with backdrop

2. **MovieDetail (movie-detail.tsx)**
   - Detailed movie information
   - Cast listing
   - Statistics (budget, revenue, runtime)
   - Production details

#### Layout Components

1. **MovieCard**
   - Movie poster display
   - Title and release date
   - Rating display

2. **MovieCast**
   - Cast member list
   - Character names
   - Actor photos

3. **MovieDetailStats**
   - Budget/revenue display
   - Runtime information
   - Status information

4. **MovieHeader**
   - Search input
   - Logo/branding
   - Navigation elements

#### UI Components

1. **Button**
   - Reusable button component
   - Multiple variants
   - Loading states

2. **Card**
   - Content container
   - Various styles

3. **Carousel**
   - Movie slider
   - Navigation controls
   - Responsive design

4. **Input**
   - Search input field
   - Custom styling

### Bahasa Indonesia

#### Komponen Halaman

1. **MovieList (movie-list.tsx)**
   - Halaman utama
   - Menampilkan film populer di karousel
   - Menampilkan film yang akan datang dengan infinite scroll
   - Fungsionalitas pencarian
   - Bagian hero dengan backdrop

2. **MovieDetail (movie-detail.tsx)**
   - Informasi detail film
   - Daftar pemeran
   - Statistik (anggaran, pendapatan, durasi)
   - Detail produksi

#### Komponen Layout

1. **MovieCard**
   - Tampilan poster film
   - Judul dan tanggal rilis
   - Tampilan rating

2. **MovieCast**
   - Daftar anggota pemeran
   - Nama karakter
   - Foto aktor

3. **MovieDetailStats**
   - Tampilan anggaran/pendapatan
   - Informasi durasi
   - Informasi status

4. **MovieHeader**
   - Input pencarian
   - Logo/branding
   - Elemen navigasi

#### Komponen UI

1. **Button**
   - Komponen tombol yang dapat digunakan ulang
   - Multiple variant
   - State loading

2. **Card**
   - Kontainer konten
   - Berbagai gaya

3. **Carousel**
   - Slider film
   - Kontrol navigasi
   - Desain responsif

4. **Input**
   - Kolom input pencarian
   - Gaya kustom

---

## 13. Deployment / Deploy ke Production

### English

This application can be deployed to various hosting platforms. Below are detailed instructions for the most popular options:

### Option 1: Vercel (Recommended)

Vercel is the creators of Next.js and provides excellent support for Vite applications.

#### Method 1: Deploy via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel
```

Follow the prompts:
1. Set up and deploy? Yes
2. Which scope? Your Vercel username
3. Want to modify settings? No (or Yes to customize)
4. Project Name: tmdb-new (or your preferred name)

#### Method 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Add New..." > "Project"
4. Import your repository
5. Configure settings:
   - Framework Preset: Vite
   - Build Command: `npm run build` (or `vite build`)
   - Output Directory: `dist`
6. Click "Deploy"

#### Method 3: Deploy via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New..." > "Project"
3. Drag and drop your project folder
4. Configure environment variables:
   - Go to "Environment Variables"
   - Add `VITE_API_TMDB` with your TMDB API base URL
   - Add `VITE_API_KEY` with your TMDB API key
5. Click "Deploy"

### Option 2: Netlify

#### Method 1: Deploy via CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
netlify deploy --prod --dir=dist
```

#### Method 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in "Advanced build settings"
7. Click "Deploy site"

### Option 3: Firebase Hosting

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Select your project
# What do you want to use as your public directory? dist
# Configure as a single-page app? Yes
# Set up automatic builds and deploys with GitHub? (Optional)

# Build and deploy
npm run build
firebase deploy
```

### Option 4: GitHub Pages

1. Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/your-repo-name/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

2. Install GitHub Pages deployment package:

```bash
npm install -D gh-pages
```

3. Update `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

### Option 5: Docker

Create a `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Build and run:

```bash
docker build -t tmdb-app .
docker run -p 8080:80 tmdb-app
```

### Environment Variables in Production

Make sure to set your environment variables in your hosting platform:

| Variable | Value |
|----------|-------|
| `VITE_API_TMDB` | `https://api.themoviedb.org/3` |
| `VITE_API_KEY` | Your TMDB API key |

### Bahasa Indonesia

Aplikasi ini dapat di-deploy ke berbagai platform hosting. Berikut petunjuk detail untuk opsi paling populer:

### Opsi 1: Vercel (Direkomendasikan)

Vercel adalah kreator Next.js dan memberikan dukungan luar biasa untuk aplikasi Vite.

#### Metode 1: Deploy via CLI

```bash
# Instal Vercel CLI secara global
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy dari root project
vercel
```

Ikuti prompt:
1. Set up and deploy? Ya
2. Which scope? Username Vercel Anda
3. Want to modify settings? Tidak (atau Ya untuk kustomisasi)
4. Project Name: tmdb-new (atau nama yang Anda inginkan)

#### Metode 2: Deploy via GitHub

1. Push kode Anda ke GitHub
2. Kunjungi https://vercel.com
3. Klik "Add New..." > "Project"
4. Import repository Anda
5. Konfigurasi settings:
   - Framework Preset: Vite
   - Build Command: `npm run build` (atau `vite build`)
   - Output Directory: `dist`
6. Klik "Deploy"

#### Metode 3: Deploy via Dashboard Vercel

1. Kunjungi https://vercel.com/dashboard
2. Klik "Add New..." > "Project"
3. Drag dan drop folder project Anda
4. Konfigurasi variabel lingkungan:
   - Pergi ke "Environment Variables"
   - Tambahkan `VITE_API_TMDB` dengan URL dasar API TMDB Anda
   - Tambahkan `VITE_API_KEY` dengan API key TMDB Anda
5. Klik "Deploy"

### Opsi 2: Netlify

#### Metode 1: Deploy via CLI

```bash
# Instal Netlify CLI
npm i -g netlify-cli

# Login ke Netlify
netlify login

# Build dan deploy
netlify deploy --prod --dir=dist
```

#### Metode 2: Deploy via GitHub

1. Push kode Anda ke GitHub
2. Kunjungi https://netlify.com
3. Klik "Add new site" > "Import an existing project"
4. Hubungkan ke GitHub dan pilih repository Anda
5. Konfigurasi:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Tambahkan variabel lingkungan di "Advanced build settings"
7. Klik "Deploy site"

### Opsi 3: Firebase Hosting

```bash
# Instal Firebase CLI
npm i -g firebase-tools

# Login ke Firebase
firebase login

# Inisialisasi Firebase
firebase init hosting

# Pilih project Anda
# What do you want to use as your public directory? dist
# Configure as a single-page app? Yes
# Set up automatic builds and deploys with GitHub? (Opsional)

# Build dan deploy
npm run build
firebase deploy
```

### Opsi 4: GitHub Pages

1. Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/nama-repo-anda/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

2. Instal package deployment GitHub Pages:

```bash
npm install -D gh-pages
```

3. Update `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

### Opsi 5: Docker

Buat `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Buat `nginx.conf`:

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Build dan jalankan:

```bash
docker build -t tmdb-app .
docker run -p 8080:80 tmdb-app
```

### Variabel Lingkungan di Production

Pastikan Anda mengatur variabel lingkungan di platform hosting Anda:

| Variabel | Nilai |
|----------|-------|
| `VITE_API_TMDB` | `https://api.themoviedb.org/3` |
| `VITE_API_KEY` | API key TMDB Anda |

---

## 14. Troubleshooting / Pemecahan Masalah

### English

Common issues and their solutions:

#### 1. API Key Issues

**Problem:** "401 Unauthorized" or "Invalid API Key" error

**Solution:**
- Make sure your API key is correctly set in `.env`
- Restart the development server after changing `.env`
- Check if your API key is valid at https://www.themoviedb.org/settings/api

#### 2. CORS Errors

**Problem:** CORS error when making API requests

**Solution:**
- The API should work with browser requests using Bearer token
- If issues persist, consider using a proxy server

#### 3. Build Errors

**Problem:** TypeScript or ESLint errors during build

**Solution:**
- Run `npm run lint` to see detailed errors
- Check TypeScript configuration files
- Ensure all dependencies are installed

#### 4. Environment Variables Not Working

**Problem:** Environment variables show as `undefined`

**Solution:**
- Make sure variable names start with `VITE_` (required by Vite)
- Restart development server after changes
- Check `.env` file exists in project root

#### 5. Module Not Found

**Problem:** "Cannot find module '@/components/...'" error

**Solution:**
- Check `tsconfig.app.json` includes path aliases
- Verify `vite.config.ts` has correct alias configuration

### Bahasa Indonesia

Masalah umum dan solusinya:

#### 1. Masalah API Key

**Problem:** Error "401 Unauthorized" atau "Invalid API Key"

**Solusi:**
- Pastikan API key Anda benar diatur di `.env`
- Restart development server setelah mengubah `.env`
- Periksa apakah API key Anda valid di https://www.themoviedb.org/settings/api

#### 2. Error CORS

**Problem:** Error CORS saat membuat permintaan API

**Solusi:**
- API seharusnya berfungsi dengan permintaan browser menggunakan Bearer token
- Jika masalah berlanjut, pertimbangkan untuk menggunakan proxy server

#### 3. Error Build

**Problem:** Error TypeScript atau ESLint saat build

**Solusi:**
- Jalankan `npm run lint` untuk melihat error detail
- Periksa file konfigurasi TypeScript
- Pastikan semua dependencies terinstal

#### 4. Variabel Lingkungan Tidak Berfungsi

**Problem:** Variabel lingkungan menunjukkan `undefined`

**Solusi:**
- Pastikan nama variabel dimulai dengan `VITE_` (dibutuhkan oleh Vite)
- Restart development server setelah perubahan
- Periksa file `.env` ada di root project

#### 5. Modul Tidak Ditemukan

**Problem:** Error "Cannot find module '@/components/...'"

**Solusi:**
- Periksa `tsconfig.app.json` menyertakan path aliases
- Verifikasi `vite.config.ts` memiliki konfigurasi alias yang benar

---

## 15. Best Practices / Praktik Terbaik

### English

Follow these best practices when working on this project:

1. **Use TypeScript**
   - Always define types for props and state
   - Use interfaces for object shapes
   - Avoid `any` type

2. **Component Organization**
   - Keep components small and focused
   - Use composition over inheritance
   - Extract reusable logic into custom hooks

3. **State Management**
   - Use TanStack Query for server state
   - Use React state for UI state
   - Keep state as local as possible

4. **Performance**
   - Use React Query's caching features
   - Implement lazy loading for images
   - Use infinite scroll for large lists

5. **Code Quality**
   - Run `npm run lint` before committing
   - Use Prettier for code formatting
   - Write meaningful commit messages

### Bahasa Indonesia

Ikuti praktik terbaik ini saat bekerja di project ini:

1. **Gunakan TypeScript**
   - Selalu definisikan tipe untuk props dan state
   - Gunakan interface untuk bentuk objek
   - Hindari tipe `any`

2. **Organisasi Komponen**
   - Jaga komponen tetap kecil dan fokus
   - Gunakan komposisi daripada pewarisan
   - Ekstrak logika yang dapat digunakan ke custom hooks

3. **Manajemen State**
   - Gunakan TanStack Query untuk state server
   - Gunakan React state untuk state UI
   - Jaga state se-lokal mungkin

4. **Performa**
   - Gunakan fitur caching React Query
   - Implementasi lazy loading untuk gambar
   - Gunakan infinite scroll untuk daftar besar

5. **Kualitas Kode**
   - Jalankan `npm run lint` sebelum committing
   - Gunakan Prettier untuk formatting kode
   - Tulis commit message yang bermakna

---

## 16. Contributing / Kontribusi

### English

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Bahasa Indonesia

Kontribusi sangat diterima! Silakan ikuti langkah-langkah ini:

1. Fork repository
2. Buat branch baru: `git checkout -b feature/fitur-luar-biasa`
3. Buat perubahan Anda
4. Jalankan tes dan linting
5. Commit perubahan Anda: `git commit -m 'Tambah fitur luar biasa'`
6. Push ke branch: `git push origin feature/fitur-luar-biasa`
7. Buka Pull Request

---

## 17. License / Lisensi

### English

This project is licensed under the MIT License - see the LICENSE file for details.

### Bahasa Indonesia

Project ini dilisensikan di bawah Lisensi MIT - lihat file LICENSE untuk detail.

---

## 18. Acknowledgments / Ucapan Terima Kasih

### English

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [React](https://react.dev/) team for the amazing framework
- [Vite](https://vitejs.dev/) team for the blazing fast build tool
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework
- [TanStack](https://tanstack.com/) for React Query
- All open source contributors

### Bahasa Indonesia

- [The Movie Database (TMDB)](https://www.themoviedb.org/) untuk menyediakan API
- Tim [React](https://react.dev/) untuk framework yang luar biasa
- Tim [Vite](https://vitejs.dev/) untuk alat build yang sangat cepat
- Tim [Tailwind CSS](https://tailwindcss.com/) untuk framework CSS berbasis utility
- [TanStack](https://tanstack.com/) untuk React Query
- Semua kontributor open source

---

<p align="center">
  Made with ❤️ by TMDB Movie Explorer Team
</p>

<p align="center">
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  </a>
</p>

---

<div align="center">

### 📚 Additional Resources / Sumber Daya Tambahan

| Resource | Link |
|----------|------|
| TMDB API Documentation | https://developers.themoviedb.org/3 |
| React Documentation | https://react.dev/ |
| Vite Documentation | https://vitejs.dev/ |
| Tailwind CSS Documentation | https://tailwindcss.com/ |
| TanStack Query Documentation | https://tanstack.com/query/latest |
| TypeScript Documentation | https://www.typescriptlang.org/ |

</div>

---

<div align="center">

### 🚀 Quick Start / Mulai Cepat

```bash
# Clone and install
git clone https://github.com/your-username/tmdb-new.git
cd tmdb-new
npm install

# Configure environment
cp .env.sample .env
# Edit .env with your TMDB API key

# Start development
npm run dev
```

</div>

---

<div align="center">

### 📋 Available Scripts / Script yang Tersedia

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

</div>

---

<div align="center">

### 🔧 Configuration Files / File Konfigurasi

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite configuration |
| `tsconfig.json` | TypeScript base configuration |
| `tsconfig.app.json` | TypeScript app configuration |
| `tsconfig.node.json` | TypeScript Node configuration |
| `.eslint.config.js` | ESLint configuration |
| `.prettierrc` | Prettier configuration |
| `tailwind.config.js` | Tailwind CSS configuration |
| `components.json` | Shadcn UI components configuration |

</div>

---

<div align="center">

### 📦 Dependencies Summary / Ringkasan Dependencies

**Production Dependencies:**
- React 19.1.1
- React DOM 19.1.1
- React Router DOM 7.9.4
- TanStack Query 5.90.2
- Axios 1.12.2
- Tailwind CSS 4.1.14
- Lucide React 0.545.0
- Motion 12.23.24
- Embla Carousel React 8.6.0
- Day.js 1.11.18
- And more...

**Development Dependencies:**
- Vite 7.1.7
- TypeScript 5.9
- ESLint 9.x
- Prettier 3.x
- And more...

</div>

---

<div align="center">

### 🎨 Image Resources / Sumber Daya Gambar

TMDB provides multiple image sizes. The app uses:

| Type | Path | Description |
|------|------|-------------|
| Poster | `/t/p/w500/` | 500px wide poster |
| Backdrop | `/t/p/original/` | Original backdrop |
| Profile | `/t/p/h632/` | 632px profile |

Base URL: `https://image.tmdb.org/t/p/`

</div>

---

<div align="center">

### 🔐 Security Considerations / Pertimbangan Keamanan

1. **API Key Protection**
   - Never expose API key in client-side code
   - Use environment variables
   - Rotate API keys periodically

2. **Environment Variables**
   - Use `.env` files for local development
   - Configure environment variables in deployment platform
   - Never commit `.env` to version control

3. **Production Best Practices**
   - Enable HTTPS
   - Configure CORS properly
   - Use CDN for static assets

</div>

---

<div align="center">

### 📈 Performance Tips / Tips Performa

1. **React Query Optimization**
   - Configure stale time appropriately
   - Use placeholder data
   - Implement infinite queries for large datasets

2. **Image Optimization**
   - Use appropriate image sizes
   - Implement lazy loading
   - Use modern image formats

3. **Bundle Optimization**
   - Code splitting with dynamic imports
   - Tree shaking
   - Minification

4. **Caching Strategy**
   - Browser caching for static assets
   - API response caching with React Query
   - Service worker for offline support (future enhancement)

</div>

---

<div align="center">

### 🌍 Browser Support / Dukungan Browser

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

</div>

---

<div align="center">

### 📱 Responsive Breakpoints / Titik Putus Responsif

| Breakpoint | Width | Description |
|------------|-------|-------------|
| sm | 640px | Small screens |
| md | 768px | Medium screens |
| lg | 1024px | Large screens |
| xl | 1280px | Extra large screens |
| 2xl | 1536px | 2X large screens |

</div>

---

<div align="center">

### 🔄 API Rate Limits / Batasan Rate API

TMDB API has rate limits:
- **Standard API Key:** 40 requests per second
- **Enhanced Access Token:** Higher limits

For production, consider:
- Implementing request caching
- Using React Query's stale-while-revalidate
- Rate limiting on client side

</div>

---

<div align="center">

### 📝 Changelog Format / Format Changelog

```markdown
# Changelog

## [Version] - YYYY-MM-DD

### Added
- New feature description

### Changed
- Changed feature description

### Fixed
- Bug fix description

### Removed
- Removed feature description
```

</div>

---

<div align="center">

### 🎯 Roadmap / Rencana Pengembangan

- [ ] Add user authentication
- [ ] Add favorite movies functionality
- [ ] Add movie recommendations
- [ ] Add TV shows support
- [ ] Add person/celebrity pages
- [ ] Add multi-language support
- [ ] Add dark/light theme toggle
- [ ] Add PWA support
- [ ] Add offline mode
- [ ] Add advanced search filters

</div>

---

<div align="center">

### 📞 Support / Dukungan

If you need help:
- Open an issue on GitHub
- Check existing issues
- Read TMDB API documentation

</div>

---

<div align="center">

### 🏆 Credits / Kredit

- TMDB API for movie data
- All contributors and maintainers
- Open source community

</div>

---

<div align="center">

### 📄 License Information / Informasi Lisensi

MIT License

Copyright (c) 2024 TMDB Movie Explorer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</div>

---

<div align="center">

### 🔗 Useful Links / Link Berguna

- [TMDB Website](https://www.themoviedb.org/)
- [TMDB API Docs](https://developers.themoviedb.org/)
- [TMDB Settings](https://www.themoviedb.org/settings/api)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

</div>

---

<div align="center">

### 👏 Acknowledgments / Ucapan Terima Kasih

Thank you to all contributors who have helped make this project better!

</div>

---

<div align="center">

### 📚 Learning Resources / Sumber Pembelajaran

- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/)
- [TanStack Query Guide](https://tanstack.com/query/latest)

</div>

---

<div align="center">

### 🎓 Contributing Guidelines / Pedoman Kontribusi

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

</div>

---

<div align="center">

### 💻 Development Setup / Setup Pengembangan

```bash
# Install Node.js dependencies
npm install

# Copy environment file
cp .env.sample .env

# Add your TMDB API key to .env

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

</div>

---

<div align="center">

### 🚦 Project Status / Status Project

![Status](https://img.shields.io/badge/status-active-success?style=flat)

This project is actively maintained and under continuous development.

</div>

---

<div align="center">

### 📊 Code Statistics / Statistik Kode

- **Total Files:** 40+
- **Total Lines:** 1000+
- **Languages:** TypeScript, JavaScript, CSS, HTML
- **Framework:** React 19, Vite 7

</div>

---

<div align="center">

### 🎉 Version History / Riwayat Versi

- **v0.0.1** - Initial release
  - Basic movie listing
  - Search functionality
  - Movie details page
  - Popular and upcoming movies

</div>

---

<div align="center">

### 🔮 Future Plans / Rencana Masa Depan

- Add more movie categories
- Implement user authentication
- Add watchlist feature
- Add movie recommendations
- Improve UI/UX
- Add animations
- PWA support

</div>

---

<div align="center">

### 📝 Notes / Catatan

- This project uses TMDB API but is not endorsed or certified by TMDB.
- All movie data and images are provided by TMDB.
- API key is required for the app to work properly.

</div>

---

<div align="center">

### 🙏 Final Thanks / Terima Kasih Akhir

Thank you for using TMDB Movie Explorer!

Happy Coding! 🚀

</div>

---

<p align="center">
  <strong>END OF README</strong>
</p>

<p align="center">
  Total Lines: ~600+
</p>
