import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/layout.module.css'
import utilStyles from '../../../styles/utils.module.css'

const name = 'Mauricio Moreno'

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={120}
            width={160}
            alt={name}
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}