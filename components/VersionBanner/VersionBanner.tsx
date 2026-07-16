import styles from "./VersionBanner.module.css";

interface VersionBannerProps {
  version: string;
  compact?: boolean;
}

export default function VersionBanner({
  version,
  compact = false,
}: VersionBannerProps) {
  return (
 <div
  className={`${styles.banner} ${
    compact ? styles.bannerSmall : styles.bannerLarge
  }`}
>
      <div
        className={`${styles.logo} ${compact ? styles.logoSmall : styles.logoLarge
          }`}
      />

      <div className={styles.content}>
        <div className={styles.title}>
          MINECRAFT <span>JAVA</span>
        </div>

        <div className={styles.version}>
          Version {version}
        </div>
      </div>
    </div>
  );
}