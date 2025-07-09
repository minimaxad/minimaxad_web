import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Calendar } from 'lucide-react'

const Works: React.FC = () => {
  return (
    <>
      <Head>
        <title>実績 - MiniMaxAD</title>
        <meta name="description" content="MiniMaxADの成功事例をご紹介。様々な業界でのSEO優化開発・社交媒体運営代行の実績と成果をご覧ください。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-cream to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">実績</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                様々な業界のクライアント様と共に築き上げた成功事例をご紹介します。<br />
                数値で証明された確かな実績をご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">140%</div>
                <div className="text-gray-600">最大流量増加率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-teal mb-2">98%</div>
                <div className="text-gray-600">ページ収録率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-yellow mb-2">8,000+</div>
                <div className="text-gray-600">SNSフォロワー増加</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">95%</div>
                <div className="text-gray-600">クライアント継続率</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* Case Study 1: Rakutto B2B Marketing & SEO */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary-orange text-white text-sm rounded-full mb-4">
                        B2Bマーケティング・SEO最適化
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Rakutto B2Bマーケティング・SEO最適化
                      </h2>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span>B2B企業</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>6ヶ月</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Description & Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">プロジェクト概要</h3>
                        <p className="text-gray-600 leading-relaxed">Rakutto向けのB2Bマーケティング戦略とSEO最適化を実施し、専門ブログ構築とTikTokマトリックス運用による包括的なデジタルマーケティングソリューションを提供しました。</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">実施内容</h3>
                        <ul className="text-gray-600 leading-relaxed space-y-2">
                          <li>• 専門ブログ構築（blog.rakutto.com）</li>
                          <li>• AI+全球策略师网络による高品質コンテンツ制作</li>
                          <li>• コスト削減：5万円→3千円（5000字深度博文）</li>
                          <li>• 多账号TikTok矩阵运营（@rakutto_official, @minimaco_office）</li>
                          <li>• B2B専門知識共有と企業文化展示の二重戦略</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">戦略的アプローチ</h3>
                        <p className="text-gray-600 leading-relaxed">「AI+全球策略师网络」モデルにより、高品質コンテンツの制作コストを大幅に削減し、大規模なコンテンツ展開を実現。TikTokではB2B専門知識共有と企業文化展示の二つの異なるポジショニングで、精密な顧客獲得とブランドイメージ向上の両立を図りました。</p>
                      </div>

                      {/* Tags */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">タグ</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">B2Bマーケティング</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">SEO最適化</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">コンテンツ制作</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">TikTok運用</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">コスト削減</span>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">成果</h3>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-primary-orange to-red-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">+150%</div>
                            <div className="text-sm opacity-90">自然検索流量増加</div>
                          </div>
                          <div className="bg-gradient-to-r from-primary-teal to-blue-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">94%</div>
                            <div className="text-sm opacity-90">コスト削減率</div>
                          </div>
                          <div className="bg-gradient-to-r from-secondary-yellow to-orange-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">6ヶ月</div>
                            <div className="text-sm opacity-90">核心キーワード首位達成</div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">2アカウント</div>
                            <div className="text-sm opacity-90">TikTokマトリックス運用</div>
                          </div>
                        </div>
                      </div>

                      {/* Company Website Link */}
                      <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-primary-orange transition-colors duration-300">
                        <a href="https://www.rakutto.com/index" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Rakutto</p>
                          <p className="text-xs text-gray-500">公式サイト</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2: SEO Optimization Development */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary-orange text-white text-sm rounded-full mb-4">
                        SEO優化開発
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        ホテル事業者向けSEO最適化プロジェクト
                      </h2>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span>ホテル業界</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>6ヶ月</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Description & Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">プロジェクト概要</h3>
                        <p className="text-gray-600 leading-relaxed">ホテル業界向けの包括的なSEO最適化を実施し、検索順位向上と売上増加を実現しました。</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">実施内容</h3>
                        <ul className="text-gray-600 leading-relaxed space-y-2">
                          <li>• ホテル業界特化のキーワード戦略策定</li>
                          <li>• 地域検索最適化とローカルSEO強化</li>
                          <li>• 競合他社のSEO戦略分析と差別化</li>
                          <li>• ホテル予約に特化したコンテンツ制作</li>
                          <li>• 検索結果での視認性向上施策</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">SEO戦略</h3>
                        <p className="text-gray-600 leading-relaxed">地域性とホテル業界の特性を活かしたSEO戦略により、ターゲットユーザーの検索意図に合致したコンテンツ最適化を実現しました。</p>
                      </div>

                      {/* Tags */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">タグ</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">SEO最適化</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">ホテル業界</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">ローカルSEO</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">キーワード戦略</span>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">成果</h3>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-primary-orange to-red-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">+30%</div>
                            <div className="text-sm opacity-90">検索ランキング向上</div>
                          </div>
                          <div className="bg-gradient-to-r from-primary-teal to-blue-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">+25%</div>
                            <div className="text-sm opacity-90">売上増加</div>
                          </div>
                          <div className="bg-gradient-to-r from-secondary-yellow to-orange-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">+200%</div>
                            <div className="text-sm opacity-90">オーガニック流入増加</div>
                          </div>
                          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">+20%</div>
                            <div className="text-sm opacity-90">検索順位向上</div>
                          </div>
                        </div>
                      </div>

                      {/* Image placeholder */}
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4"></path>
                        </svg>
                        <p className="text-gray-500 text-sm">SEO Analytics Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3: TikTok Account Management */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <span className="inline-block px-3 py-1 bg-secondary-yellow text-gray-800 text-sm rounded-full mb-4">
                        SNS運用代行
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        TikTok「跑步喵」アカウント運営プロジェクト
                      </h2>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span>フィットネス業界</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>4ヶ月</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Description & Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">プロジェクト概要</h3>
                        <p className="text-gray-600 leading-relaxed">TikTokプラットフォームでのフィットネス関連アカウントの成長戦略を実施し、エンゲージメントとフォロワー数の大幅な向上を実現しました。</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">コンテンツ戦略</h3>
                        <ul className="text-gray-600 leading-relaxed space-y-2">
                          <li>• 「運動シーン+トレンド話題」コンテンツモデルの構築</li>
                          <li>• 人気BGMとチャレンジ企画の戦略的活用</li>
                          <li>• ユーザーエンゲージメントを促進するインタラクティブコンテンツ制作</li>
                          <li>• トレンド分析に基づくタイムリーなコンテンツ投稿</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">成長戦略</h3>
                        <p className="text-gray-600 leading-relaxed">フィットネストレンドとソーシャルメディアの特性を組み合わせ、ターゲットユーザーに響くコンテンツ戦略を展開しました。</p>
                      </div>

                      {/* Tags */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">タグ</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">TikTok運営</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">フィットネス</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">コンテンツ戦略</span>
                          <span className="px-3 py-1 bg-secondary-cream text-gray-700 text-sm rounded-full">エンゲージメント</span>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">成果</h3>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-secondary-yellow to-orange-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">+35%</div>
                            <div className="text-sm opacity-90">インタラクション率向上</div>
                          </div>
                          <div className="bg-gradient-to-r from-primary-teal to-blue-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">8,000+</div>
                            <div className="text-sm opacity-90">フォロワー増加</div>
                          </div>
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">100万+</div>
                            <div className="text-sm opacity-90">累計再生数</div>
                          </div>
                          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">15%</div>
                            <div className="text-sm opacity-90">平均エンゲージメント率</div>
                          </div>
                        </div>
                      </div>

                      {/* Douyin Link */}
                      <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-red-500 transition-colors duration-300">
                        <a href="https://www.douyin.com/user/MS4wLjABAAAAWOMhUA48G57EZo6VF7fbimjcR2uNo5eORfWpGDYClCKid_YZzftwqExQSlkmr2m_?from_tab_name=main" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-700 mb-1">跑步喵</p>
                          <p className="text-xs text-gray-500">抖音アカウント</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-orange to-primary-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              あなたも成功事例の一つになりませんか？
            </h2>
            <p className="text-lg mb-8 opacity-90">
              無料相談で、あなたのビジネスの可能性を一緒に探りましょう
            </p>
            <a href="/quote" className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              無料相談を申し込む
            </a>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Works
