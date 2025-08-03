"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Toaster } from "sonner";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Toaster />
      
      {pathname === "/upload" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4"
        >
          <Button onClick={() => router.push("/")} variant="outline" className="mb-4">
            ← Back to Homepage
          </Button>
        </motion.div>
      )}

      {children}
    </>
  );
}
