"use client";

import { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface UploadResponse {
  fileName: string;
  downloadUri: string;
  contentType: string;
}

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [maxDownload, setMaxDownload] = useState("");
  const [expiryDateTime, setExpiryDateTime] = useState("");
  const [response, setResponse] = useState<UploadResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    if (password.trim()) {
      formData.append("password", password.trim());
    }

    if (maxDownload.trim()) {
      const parsed = parseInt(maxDownload.trim(), 10);
      if (!isNaN(parsed) && parsed > 0) {
        formData.append("maxDownloads", parsed.toString());
      }
    }

    if (expiryDateTime.trim()) {
      const isoTime = new Date(expiryDateTime).toISOString();
      formData.append("expiryTime", isoTime);
    }

    try {
      setLoading(true);
      const res = await axios.post<UploadResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponse(res.data);
      toast.success("File uploaded successfully!");
    } catch {
      toast.error("Upload failed. Check your server and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-xl mx-auto mt-10 p-6 border rounded-2xl shadow-lg space-y-6 bg-white dark:bg-neutral-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-center">📤 Upload File</h2>

      <motion.label
        whileHover={{ scale: 1.02 }}
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 transition"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadCloudIcon className="w-8 h-8 mb-2 text-blue-500" />
          <p className="mb-1 text-sm text-gray-500">
            {file ? file.name : "Click to select a file"}
          </p>
          <p className="text-xs text-gray-400">PNG, JPG, PDF, ZIP, etc.</p>
        </div>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
        />
      </motion.label>

      <div>
        <Label>Password (Optional)</Label>
        <Input
          placeholder="Enter password (optional)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <Label>Max Downloads (Optional)</Label>
        <Input
          type="number"
          min="1"
          placeholder="e.g. 5"
          value={maxDownload}
          onChange={(e) => setMaxDownload(e.target.value)}
        />
      </div>

      <div>
        <Label>Expiry (Date & Time, Optional)</Label>
        <Input
          type="datetime-local"
          value={expiryDateTime}
          onChange={(e) => setExpiryDateTime(e.target.value)}
        />
      </div>

      <motion.div whileTap={{ scale: 0.97 }}>
        <Button onClick={handleUpload} className="w-full" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </Button>
      </motion.div>

      <AnimatePresence>
        {response && (
          <motion.div
            key="response-box"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-green-100 p-4 rounded-xl mt-4 text-sm text-black"
          >
            <p><strong>File Name:</strong> {response.fileName}</p>
            <p><strong>Download URL:</strong></p>
            <a
              href={response.downloadUri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 break-all"
            >
              {response.downloadUri}
            </a>
            <p><strong>Content Type:</strong> {response.contentType}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
