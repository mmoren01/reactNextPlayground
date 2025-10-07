import { PostData } from '../../types/post'

import { Metadata } from 'next'
import Link from 'next/link'

import { getSortedPostsData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export const metadata: Metadata = {
  title: 'Mauricio Moreno | Software Engineer',
}

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there! I'm Mauricio (maw-REE-see-oh), but feel free to call me Mo. It's a pleasure to meet you!
        </p>
        <p>
          I'm a Phoenix-based software engineer driven by my passion for building stuff and my love for continuous learning. When I'm not
immersed in code or engaging in tech discussions with my fellow engineers pictured above, I enjoy working on my Triumph Street Twin and
discovering new adventures in Phoenix with my family. Let's connect on <Link
href="https://www.linkedin.com/in/mauricio-moreno-swe">LinkedIn</Link> and chat about anything from coding and business to bikes and the
finest pizza joints in town.
        </p>
        <p>
          Thanks for stopping by, and don't hesitate to reach out!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: PostData) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}