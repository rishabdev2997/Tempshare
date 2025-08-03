# 🎨 TempShare Frontend

This is the **Next.js 14 frontend** for the **TempShare** microservices-based file-sharing platform. It provides a modern, clean, and responsive interface to upload, share, and download files with optional expiry settings.

---

## 🖥️ Live Preview (Optional)

> 🔗 **Live Demo**: [https://tempshare.example.com](https://tempshare.example.com) *(Add once deployed)*

---

## ⚙️ Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **ShadCN UI** + **Tailwind CSS**
- **Framer Motion** *(animations)*
- **Axios** *(API requests)*
- **JWT-based Auth** *(optional)*

---

## 📁 Folder Structure

```
frontend/
├── app/                  # App Router pages & layouts
│   ├── upload/           # Upload file page
│   ├── download/         # Download file page
│   ├── status/           # View file metadata
│   └── layout.tsx        # Global layout
├── components/           # UI components (buttons, forms, modals)
├── lib/                  # Axios config, utilities
├── public/               # Static assets
├── styles/               # Tailwind config and global styles
├── .env.local            # Environment variables
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tempshare-frontend.git
cd tempshare-frontend
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080  # Your API Gateway base URL
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser.

---

## 📦 Features

✅ File upload with short link generation  
✅ Download file via short link  
✅ View file metadata (expiry time, size)  
✅ Delete file manually  
🌗 Responsive UI with dark/light mode  
⚡ Smooth animations with Framer Motion  
🔐 Environment-based API config  

---

## 🔗 API Integration

All API requests are routed through the **Spring Cloud Gateway**.

| Action           | Method | Endpoint                    |
|------------------|--------|-----------------------------|
| Upload file      | POST   | `/upload`                   |
| Download file    | GET    | `/download/:short_link`     |
| View metadata    | GET    | `/status/:short_link`       |
| Delete file      | DELETE | `/delete/:short_link`       |

- Configured via `axios.create()` in `lib/axios.ts`
- Auth headers (if applicable) handled using interceptors

---

## 🔐 Optional JWT-based Auth

If your backend supports JWT:

- Store token in `localStorage`
- Inject token via Axios interceptors
- Add login/register pages
- Use middleware for route protection

---

## 📸 Screenshots *(Add Yours)*

- 📤 Upload Page  
- 🔗 Short Link Display  
- ⬇️ Download Page  
- 📝 Metadata Viewer  

---

## 🧠 Developer Notes

- Built with modular components using **ShadCN UI**
- Supports both **client** and **server** components
- Fully **responsive** and **mobile-friendly**
- Clean, **UX-first design**

---

## 🧪 Testing

Use the following tools for testing:

- **Playwright / Cypress** for E2E testing
- **Jest** + **React Testing Library** for unit testing

---

## 🎯 Future Plans

- 🔐 User accounts and dashboards  
- 📊 File analytics per user  
- 🌍 i18n support  
- ⏱️ Expiry control UI (time-based or download-limit)

---

## 🙏 Credits

- [Next.js](https://nextjs.org)
- [ShadCN UI](https://ui.shadcn.com)
- [Supabase](https://supabase.com)
- [Spring Boot](https://spring.io/projects/spring-boot)