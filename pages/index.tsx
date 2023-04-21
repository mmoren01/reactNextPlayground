import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

interface Props {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }: Props): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there! My name is Mauricio - pronounced <em>maw-REE-see-oh</em>, but you may also call me Mo if that's easier – great to meet you!
        </p>
        <p>
          I'm a software engineer based in Phoenix, Arizona, and I love putzing around on my Triumph Street Twin. When I'm not busy chatting it up with those two pictured above about some piece of code, you can find me being a dad at your local park or museum. Feel free to connect with me on <Link href="https://www.linkedin.com/in/mauricio-moreno-swe">LinkedIn</Link> – I'd love to chat about business, bikes, or the best pizza joints in town.
        </p>
        <p>Thanks for dropping by!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}></h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title}) => (
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
    </Layout>
  )
}
