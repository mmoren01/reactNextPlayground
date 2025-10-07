import '../styles/global.css'
  import { Metadata } from 'next'

  export const metadata: Metadata = {
    title: {
      template: '%s | Mauricio Moreno',
      default: 'Mauricio Moreno',
    },
    description: 'Personal blog and portfolio of Mauricio Moreno',
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: "Mauricio's Blog",
      images: [`https://og-image.vercel.app/${encodeURI("Mauricio's Blog")}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.ver
  cel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`],
    },
    twitter: {
      card: 'summary_large_image',
    },
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }