import styles from './VersionBanner.module.css'

interface VersionBannerProps {
  version: string
  edition?: 'Java' | 'Bedrock'
  mode?: 'page' | 'featured' | 'card'
}

export default function VersionBanner({ version, edition = 'Java', mode = 'page' }: VersionBannerProps) {
  return (
    <div className={`${styles.banner} ${styles[mode]}`}>
      <div className={`${styles.logo} ${styles[mode + 'Logo']}`} />
      <div className={styles.content}>
        <div className={`${styles.title} ${styles[mode + 'Title']}`}>
          MINECRAFT <span>{edition.toUpperCase()}</span>
        </div>
        <div className={`${styles.version} ${styles[mode + 'Version']}`}>
          Version {version}
        </div>
      </div>
    </div>
  )
}
