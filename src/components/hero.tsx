"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4 overflow-hidden">
      <motion.h1
        className="text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Share Files Like Magic with <span className="underline decoration-wavy">TempShare</span> ⚡
      </motion.h1>

      <motion.p
        className="text-lg text-center mb-6 max-w-2xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Drag. Drop. Share securely with expiry times and download limits. No signups. No nonsense.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          href="/upload"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Upload a File
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-purple-200 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </main>
  );
}
