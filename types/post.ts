export interface PostData {
  id: string
  date: string
  title: string
}

export interface PostDataWithContent extends PostData {
  contentHtml: string
}