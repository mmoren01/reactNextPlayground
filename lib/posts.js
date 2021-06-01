import remark from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  //GET FILES IN POSTS DIRECTORY IN ROOT/CURRENT WORKING DIRECTORY
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map(fileName => {
    //REMOVES .md FROM FILE NAME TO GET ID
    const id = fileName.replace(/\.md$/, '')

    //READS MARKDOWN AS A STRING
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //RETURNS META DATA IN MARKDOWN FILE
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileName = fs.readdirSync(postsDirectory)
  return fileName.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //USES GRAY-MATTER TO PARSE THE POST META DATA
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}