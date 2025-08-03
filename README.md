🎨 TempShare Frontend
This is the Next.js 14 frontend for the TempShare microservices file-sharing platform. It offers a clean and responsive interface for uploading, sharing, and downloading files with optional expiry settings.

🖥️ Live Preview (Optional)
🧪 Live Demo: https://tempshare.example.com
(Add once deployed)

⚙️ Tech Stack
Next.js 14 (App Router)

TypeScript

ShadCN UI + Tailwind CSS

Framer Motion (for animations)

Axios (for API requests)

JWT-based Auth (optional)

📁 Folder Structure
php
Copy
Edit
frontend/
├── app/                # App Router pages & layouts
│   ├── upload/         # Upload file page
│   ├── download/       # Download file page
│   ├── status/         # View file metadata
│   └── layout.tsx      # Global layout
├── components/         # UI components (buttons, forms, modals)
├── lib/                # Axios config, utils
├── public/             # Static assets
├── styles/             # Tailwind config, globals
├── .env.local          # Environment variables
└── README.md
🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/tempshare-frontend.git
cd tempshare-frontend
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Setup environment variables
Create a .env.local file:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080  # Your API Gateway base URL
4. Run the dev server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000

📦 Features
✅ File Upload with short link generation
✅ File download via short link
✅ View file metadata (expiry time, size)
✅ Delete file manually
🌗 Responsive UI with dark/light mode
⚡ Smooth animations with Framer Motion
🔐 Environment-based config

🔗 API Integration
All requests are proxied through your API Gateway (Spring Cloud Gateway).

Action	Method	Endpoint
Upload file	POST	/upload
Download file	GET	/download/:short_link
View metadata	GET	/status/:short_link
Delete file	DELETE	/delete/:short_link

✅ Configured using axios.create() in lib/axios.ts
✅ Auth headers (if added) managed via interceptors

🔐 Optional Enhancements
If your backend supports JWT-based auth:

Store token in localStorage

Inject token via Axios interceptors

Add login/register pages

Gate routes using middleware

📸 Screenshots (Add yours)
📤 Upload Page
🔗 Short Link Display
⬇️ Download Page
📝 Status Viewer

🧠 Developer Notes
Built with modular components (ShadCN)

Supports both client and server components

Responsive and mobile-friendly

Minimal, clean design with UX-first approach

🧪 Testing
You can use tools like:

Playwright or Cypress for e2e tests

Jest + React Testing Library for unit tests

🎯 Future Plans
🔐 User accounts and dashboards

📊 File analytics per user

🌍 i18n support

🔗 Expiry UI control (time/download-based)

🙏 Credits
Next.js

ShadCN UI

Supabase

Spring Boot + Microservices