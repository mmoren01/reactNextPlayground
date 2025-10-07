import type { PostDataWithContent } from '../../../types/post'

import { Metadata } from 'next'

import { getAllPostIds, getPostData } from '../../../lib/posts'
import Date from '../../../components/date'
import utilStyles from '../../../styles/utils.module.css'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((path) => ({
    id: path.params.id,
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostData(id)
  return {
    title: postData.title,
  }
}

export default async function Post({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const postData = await getPostData(id)

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}