import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask My Books</title>
        <meta name="description" content="Get answers from your book" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap" rel="stylesheet"/>
      </Head>
      <main className='flex justify-center '>
        <div className='font-semibold text-3xl mt-[45vh]'>
          Hello World
        </div>
      </main>
      </>
  )
}
