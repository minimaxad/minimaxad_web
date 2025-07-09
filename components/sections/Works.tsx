import React from 'react'
import { ExternalLink, TrendingUp, Users, Eye, Target } from 'lucide-react'

const Works: React.FC = () => {
  const works = [
    {
      title: 'ECサイトのSEO最適化',
      category: 'SEO優化',
      description: 'ファッションECサイトの検索順位を3ヶ月で平均20位向上させ、オーガニック流入を300%増加させました。',
      results: [
        { label: '検索順位', value: '20位向上', icon: TrendingUp },
        { label: 'オーガニック流入', value: '300%増加', icon: Eye },
        { label: 'コンバージョン率', value: '150%向上', icon: Target }
      ],
      image: '/images/work1.jpg',
      tags: ['SEO', 'Eコマース', 'コンテンツマーケティング']
    },
    {
      title: 'レストランチェーンのInstagram運営',
      category: 'SNS運営',
      description: 'レストランチェーンのInstagramアカウントを6ヶ月で10万フォロワーまで成長させ、来店数を大幅に増加させました。',
      results: [
        { label: 'フォロワー数', value: '10万人達成', icon: Users },
        { label: 'エンゲージメント率', value: '8.5%', icon: TrendingUp },
        { label: '来店数', value: '40%増加', icon: Eye }
      ],
      image: '/images/work2.jpg',
      tags: ['Instagram', 'フード', 'ブランディング']
    },
    {
      title: 'コスメブランドのTikTok戦略',
      category: 'TikTok運営',
      description: '新興コスメブランドのTikTokアカウントでバイラル動画を制作し、ブランド認知度を飛躍的に向上させました。',
      results: [
        { label: '総再生数', value: '500万回', icon: Eye },
        { label: 'フォロワー増加', value: '5万人/月', icon: Users },
        { label: 'ブランド認知度', value: '250%向上', icon: TrendingUp }
      ],
      image: '/images/work3.jpg',
      tags: ['TikTok', 'コスメ', 'バイラルマーケティング']
    }
  ]

  return (
    <section id="works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">実績</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            様々な業界のクライアント様と共に築き上げた成功事例をご紹介します。
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">200+</div>
            <div className="text-gray-600">成功プロジェクト</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-teal mb-2">95%</div>
            <div className="text-gray-600">顧客満足度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-yellow mb-2">300%</div>
            <div className="text-gray-600">平均成長率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">50+</div>
            <div className="text-gray-600">業界実績</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                もっと多くの成功事例を見る
              </h3>
              <p className="text-gray-600 mb-6">
                様々な業界での実績をご確認ください
              </p>
              <a href="/works" className="bg-primary-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                実績一覧を見る
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                あなたも成功事例の一つに
              </h3>
              <p className="text-gray-600 mb-6">
                無料相談で可能性を一緒に探りましょう
              </p>
              <a href="/contact" className="bg-secondary-yellow text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
