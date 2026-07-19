import styles from "./MobBanner.module.css";

type MobBannerProps = {
  mob: {
    name: string;
    category: string;
    editions: ("Java" | "Bedrock")[];
  };
};

export default function MobBanner({ mob }: MobBannerProps) {
  const colors: Record<string, string> = {
    Враждебный: "#b83d3d",
    Нейтральный: "#d7a43b",
    Дружелюбный: "#4da65d",
    Босс: "#7d4db8",
    Утилитарный: "#4c8bf5",
  };

  const color = colors[mob.category] ?? "#5b8cff";

  return (
    <div
      className={styles.mobBanner}
      style={
        {
          "--accent": color,
        } as React.CSSProperties
      }
    >
      <div className={styles.mobBannerGrid}>
        <div className={styles.mobBannerContent}>
          <span className={styles.mobBannerType}>
            Minecraft Mob
          </span>

          <h1 className={styles.mobBannerTitle}>
            {mob.name.toUpperCase()}
          </h1>

          <div className={styles.mobBannerBottom}>
            <span
              className={styles.mobCategory}
              style={{ background: color }}
            >
              {mob.category}
            </span>

            <span className={styles.mobEditions}>
              {mob.editions.join(" • ")}
            </span>
          </div>
        </div>

        <div className={styles.mobBannerPattern}>
          <div className={styles.pixelGrid} />
        </div>
      </div>
    </div>
  );
}