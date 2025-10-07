import Image from 'next/image'
import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

const name = 'Mauricio Moreno'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={240}
          width={320}
          alt={'profile picture of two rubber ducks on a desk'}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}