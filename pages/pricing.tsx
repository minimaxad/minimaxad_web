import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Check } from 'lucide-react'

const Pricing: React.FC = () => {
  return (
    <>
      <Head>
        <title>料金 - MiniMaxAD</title>
        <meta name="description" content="MiniMaxADの料金プラン。SEO対策、SNS運用代行、Google広告の運用代行の詳細料金をご確認ください。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">料金プラン</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                透明性のある料金体系で、お客様のニーズに合わせた最適なプランをご提供します。<br />
                初期費用無料のプランもご用意しております。
              </p>
            </div>
          </div>
        </section>

        {/* 统一对比表格：SEO・SNS・Google广告 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">料金比較</h2>
              <p className="text-gray-600">MiniMaxADは業界標準よりも高品質・低コストでご提供します</p>
            </div>
            <div className="space-y-12">
              {/* SEO対策 */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">SEO対策</h3>
                <p className="text-gray-600 mb-4 text-center">検索エンジンで上位表示を実現するSEO戦略</p>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-orange-200 flex flex-col items-center" style={{boxShadow:'0 4px 24px 0 rgba(255,107,107,0.08)'}}>
                  <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-8">
                    {/* 一般的な制作会社 */}
                    <div className="flex-1 flex flex-col items-center justify-between border-r border-gray-200 pr-0 md:pr-8">
                      <div className="text-center mb-6">
                        <div className="text-gray-400 text-lg font-bold mb-2">一般的な制作会社</div>
                        <div className="text-xl md:text-2xl font-extrabold text-gray-400 mb-4 whitespace-nowrap line-through">5000字ブログ記事：¥20,000~</div>
                      </div>
                    </div>
                    {/* MiniMaxAD */}
                    <div className="flex-1 flex flex-col items-center justify-between pl-0 md:pl-8">
                      <div className="text-center mb-6">
                        <div className="text-primary-orange text-lg font-bold mb-2">MiniMaxAD</div>
                        <div className="text-xl md:text-2xl font-extrabold text-primary-orange mb-4 whitespace-nowrap">5000字ブログ記事：¥9,900（税込）</div>
                        <div className="text-primary-orange text-base font-bold mb-4">10記事以上でキーワード最適化無料</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-t border-gray-100 my-8"></div>
                  <div className="w-full flex flex-col items-center">
                    <div className="text-xl font-bold mb-6 text-center">サービス内容</div>
                    <div className="flex flex-col md:flex-row justify-center gap-12 w-full">
                      <ul className="space-y-2 text-left mx-auto">
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />キーワード分析</li>
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />SEO戦略立案</li>
                      </ul>
                      <ul className="space-y-2 text-left mx-auto">
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />競合分析</li>
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />レポート・改善提案</li>
                      </ul>
                    </div>
                    <a href="/contact" className="mt-8 bg-primary-orange text-white px-8 py-3 rounded-lg font-medium hover:bg-red-500 transition-colors duration-300 text-center block w-full max-w-xs">相談する</a>
                  </div>
                </div>
              </div>
              {/* SNS運用代行 */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">SNS運用代行</h3>
                <p className="text-gray-600 mb-4 text-center">Instagram・TikTokなどのSNS運営を代行</p>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-200 flex flex-col items-center" style={{boxShadow:'0 4px 24px 0 rgba(255,107,107,0.08)'}}>
                  <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-8">
                    {/* 一般的な制作会社 */}
                    <div className="flex-1 flex flex-col items-center justify-between border-r border-gray-200 pr-0 md:pr-8">
                      <div className="text-center mb-6">
                        <div className="text-gray-400 text-lg font-bold mb-2">一般的な制作会社</div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-400 line-through mb-2">¥200,000～500,000</div>
                        <div className="text-gray-400 text-sm mb-4">月額（税別）</div>
                      </div>
                    </div>
                    {/* MiniMaxAD */}
                    <div className="flex-1 flex flex-col items-center justify-between pl-0 md:pl-8">
                      <div className="text-center mb-6">
                        <div className="text-primary-orange text-lg font-bold mb-2">MiniMaxAD</div>
                        <div className="text-2xl md:text-3xl font-bold text-primary-orange mb-2">¥100,000～250,000</div>
                        <div className="text-gray-600 text-sm mb-4">月額（税別）</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-t border-gray-100 my-8"></div>
                  <div className="w-full flex flex-col items-center">
                    <div className="text-xl font-bold mb-6 text-center">サービス内容</div>
                    <div className="flex flex-col md:flex-row justify-center gap-12 w-full">
                      <ul className="space-y-2 text-left mx-auto">
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Instagram・TikTok運営</li>
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />コンテンツ企画・制作</li>
                      </ul>
                      <ul className="space-y-2 text-left mx-auto">
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />ハッシュタグ戦略</li>
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />エンゲージメント向上</li>
                      </ul>
                    </div>
                    <a href="/contact" className="mt-8 bg-primary-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 text-center block w-full max-w-xs">相談する</a>
                  </div>
                </div>
              </div>
              {/* Google広告の運用代行 */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">Google広告の運用代行</h3>
                <p className="text-gray-600 mb-4 text-center">効果的な広告運用で確実な成果を実現</p>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-yellow-200 flex flex-col items-center" style={{boxShadow:'0 4px 24px 0 rgba(255,209,102,0.08)'}}>
                  <div className="w-full flex flex-col md:flex-row justify-between items-stretch gap-8">
                    {/* 一般的制作会社 */}
                    <div className="flex-1 flex flex-col items-center justify-between border-r border-gray-200 pr-0 md:pr-8">
                      <div className="text-center mb-6">
                        <div className="text-gray-400 text-lg font-bold mb-2">一般的な制作会社</div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-400 line-through mb-2">¥200,000～500,000</div>
                        <div className="text-gray-400 text-sm mb-2">広告費の20%</div>
                        <div className="text-gray-400 text-sm mb-4">月額（税別）</div>
                      </div>
                    </div>
                    {/* MiniMaxAD */}
                    <div className="flex-1 flex flex-col items-center justify-between pl-0 md:pl-8">
                      <div className="text-center mb-6">
                        <div className="text-primary-orange text-lg font-bold mb-2">MiniMaxAD</div>
                        <div className="text-2xl md:text-3xl font-bold text-primary-orange mb-2">¥19,900~</div>
                        <div className="text-primary-orange text-sm mb-2">広告費の3%</div>
                        <div className="text-gray-600 text-sm mb-4">月額（税別）</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-t border-gray-100 my-8"></div>
                  <div className="w-full flex flex-col items-center">
                    <div className="text-xl font-bold mb-6 text-center">サービス内容</div>
                    <div className="flex flex-col md:flex-row justify-center gap-12 w-full">
                      <ul className="space-y-2 text-left mx-auto">
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Google検索広告</li>
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />ディスプレイ広告</li>
                      </ul>
                      <ul className="space-y-2 text-left mx-auto">
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />YouTube広告</li>
                        <li className="flex items-center text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />ROI最適化</li>
                      </ul>
                    </div>
                    <a href="/contact" className="mt-8 bg-secondary-yellow text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300 text-center block w-full max-w-xs">相談する</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Pricing 