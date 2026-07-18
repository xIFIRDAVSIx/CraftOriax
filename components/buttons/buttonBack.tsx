"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./buttonBack.module.css";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Не показывать на главной
  if (pathname === "/") return null;

  return (
    <button
      className={styles.backButton}
      onClick={() => router.back()}
      aria-label="Назад"
      title="Назад"
    >
      <ArrowLeft size={22} />
    </button>
  );
}