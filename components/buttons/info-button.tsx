"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";
import styles from "./info-button.module.css";

export default function InfoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setOpen(true)}
        aria-label="Информация о сайте"
      >
        <Info size={22} />
      </button>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>

            <h2>🚧 Сайт находится в разработке</h2>

            <p>
              Энциклопедия Minecraft ещё активно развивается.
              Мы регулярно добавляем новые версии, статьи,
              блоки, предметы и другую информацию.
            </p>

            <p>
              Некоторые страницы могут содержать неточности,
              неполную информацию или ошибки.
            </p>

            <p>
              Если вы заметили ошибку или хотите предложить
              улучшение, пожалуйста, сообщите нам.
              Это поможет сделать сайт лучше.
            </p>

            <h3>Связаться с нами</h3>

            <ul>
              <li>GitHub Issues</li>
              <li>Telegram</li>
              <li>Discord</li>
              <li>E-mail</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}