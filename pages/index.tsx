import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Works from '@/components/sections/Works'
import Contact from '@/components/sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>MiniMaxAD - SEO優化開発・SNS運営代行・Google広告代投放</title>
        <meta 
          name="description" 
          content="MiniMaxAD - SEO優化開発、SNS運営代行、Google広告代投放のプロフェッショナル。最大の成果を、最小のコストで実現します。" 
        />
        <meta name="keywords" content="SEO, TikTok, Instagram, 社交媒体, デジタルマーケティング, 運営代行" />
        <meta property="og:title" content="MiniMaxAD - SEO優化開発・SNS運営代行・Google広告代投放" />
        <meta property="og:description" content="SEO優化開発と社交媒体運営代行のプロフェッショナル集団" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Layout>
        <Hero />
        <Services />
        <Works />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
