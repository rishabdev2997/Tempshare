
# 📁 TempShare – Microservices File Sharing App

TempShare is a **microservices-based file-sharing** application built using **Spring Boot**. It allows users to securely upload files, share them via **short links**, and set optional **expiry rules** (time-based or download limit).
It leverages **Supabase** for both **object storage** and **PostgreSQL database**.

---

## 🧱 Architecture Overview

| Service                 | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| 🔀 **API Gateway**      | Routes external requests to internal microservices       |
| ⬆️ **Upload Service**   | Handles file uploads and stores metadata in Supabase     |
| ⬇️ **Download Service** | Serves files via short links, checks expiry conditions   |
| 📝 **Metadata Service** | Manages file metadata (CRUD operations)                  |
| ⏳ **Expiry Service**    | Scheduled cleanup of expired files or max-download files |
| 🗄️ **Storage Adapter** | Wrapper for interacting with Supabase Storage API        |

---

## 📁 Folder Structure

```
project-root/
├── api-gateway/
├── upload-service/
├── download-service/
├── metadata-service/
├── expiry-service/
├── storage-adapter/
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Prerequisites

* 🔧 Java 17+
* 📦 Maven or Gradle
* 🐳 Docker & Docker Compose
* ☁️ Supabase account (Free tier is sufficient)

---

## 🔐 Supabase Setup

* ✅ **Project URL**
* 🔑 **Service Role Key**
* 🔓 **Anon Key**
* 📂 **Storage Bucket**: `uploads`
* 🗃️ **Database Table**: `files`
  *(See schema in `metadata-service` or Supabase Studio)*

---

## 🚀 Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/tempshare.git
   cd tempshare
   ```

2. **Configure environment variables** for each service:

   * Supabase URL
   * Supabase API keys
   * Bucket name

3. **Build services:**

   ```bash
   mvn clean install
   ```

4. **Start the app using Docker Compose:**

   ```bash
   docker-compose up --build
   ```

5. **Test APIs** using Postman or `curl`.

---

## 🔗 Common API Endpoints

| Method   | Endpoint                | Description                            |
| -------- | ----------------------- | -------------------------------------- |
| `POST`   | `/upload`               | Upload a file and receive a short link |
| `GET`    | `/download/:short_link` | Download a file using short link       |
| `GET`    | `/status/:short_link`   | Get file metadata (expiry, size)       |
| `DELETE` | `/delete/:short_link`   | Manually delete a file                 |

📘 *For detailed request/response bodies, refer to Swagger UI or service-level docs.*

---

## 💡 Development Notes

* Each microservice is a standalone Spring Boot app, communicating via **REST**.
* Configured to work seamlessly with **Supabase**.
* Environment-specific properties should be defined in `application.yml` or passed as env variables.
* Ideal for small/medium files (< 50 MB) on Supabase's free tier.
* Avoid committing secrets like **Service Role Key** to public repos! 🔐

---

## 🧠 Tech Stack

* **Java 17**, **Spring Boot**, **Spring Cloud Gateway**
* **Supabase** (PostgreSQL + Storage)
* **Docker**, **Docker Compose**
* Optional: **Swagger/OpenAPI** for documenting APIs

---

## 🌟 Credits

* 🏗️ **Supabase** – for robust, scalable backend services
* ☕ **Spring Boot** – rapid development of microservices
* 📤 **Open Source Tools** – powering the modern dev ecosystem

---

## 🖼️ Future Enhancements

* 📦 Chunked file uploads
* 📧 Email notifications on upload/download
* 📊 Admin dashboard (file stats, usage)
* 🔐 OAuth-based user authentication

---

