import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Search, Instagram, MessageCircle, BarChart3, Target, Smartphone, Check, ArrowRight, Share2 } from 'lucide-react'

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>サービス - MiniMaxAD</title>
        <meta name="description" content="MiniMaxADのサービス詳細。SEO優化開発、SNS運営代行、Google広告代投放の実績と特徴をご紹介します。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-cream to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">サービス</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                MiniMaxADが提供する3つの核心サービス。
                SEO優化開発、SNS運営代行、Google広告代投放で、お客様のデジタルマーケティングを成功に導きます。
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* SEO Service */}
            <div id="seo" className="mb-20 scroll-mt-20">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">SEO優化開発</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  検索エンジンでの上位表示を実現し、質の高いオーガニックトラフィックを獲得します。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">サービス内容</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">キーワード分析・戦略立案</h4>
                        <p className="text-gray-600 text-sm">競合分析と市場調査に基づく効果的なキーワード戦略を策定します。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">テクニカルSEO</h4>
                        <p className="text-gray-600 text-sm">サイト構造の最適化、ページ速度改善、モバイル対応などの技術的改善を行います。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">コンテンツ最適化</h4>
                        <p className="text-gray-600 text-sm">検索意図に合致した高品質なコンテンツの制作と既存コンテンツの改善を行います。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">実績例</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">検索順位向上</span>
                        <span className="text-2xl font-bold text-primary-orange">1位</span>
                      </div>
                      <p className="text-xs text-gray-500">競合キーワードで3ヶ月で1位獲得</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">オーガニック流入</span>
                        <span className="text-2xl font-bold text-primary-teal">+250%</span>
                      </div>
                      <p className="text-xs text-gray-500">6ヶ月でオーガニック流入2.5倍増加</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">コンバージョン率</span>
                        <span className="text-2xl font-bold text-secondary-yellow">+180%</span>
                      </div>
                      <p className="text-xs text-gray-500">最適化によりCVR大幅改善</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SNS Service */}
            <div id="sns" className="mb-20 scroll-mt-20">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">SNS運用代行</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Instagram、TikTokなどのSNSプラットフォームで、ブランド認知度向上とエンゲージメント増加を実現します。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">サービス内容</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Instagram運営代行</h4>
                        <p className="text-gray-600 text-sm">ブランドイメージに合わせたビジュアルコンテンツ制作と戦略的運営。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">TikTok運営代行</h4>
                        <p className="text-gray-600 text-sm">トレンドを捉えたバイラル動画で若年層へのリーチを拡大。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">統合SNS戦略</h4>
                        <p className="text-gray-600 text-sm">複数プラットフォームの連携でブランドメッセージを統一。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 lg:order-1">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">実績例</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">フォロワー増加</span>
                        <span className="text-2xl font-bold text-primary-teal">+300%</span>
                      </div>
                      <p className="text-xs text-gray-500">3ヶ月でフォロワー3倍増加</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">エンゲージメント率</span>
                        <span className="text-2xl font-bold text-primary-orange">8.5%</span>
                      </div>
                      <p className="text-xs text-gray-500">業界平均の2倍以上を達成</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">総再生数</span>
                        <span className="text-2xl font-bold text-secondary-yellow">500万回</span>
                      </div>
                      <p className="text-xs text-gray-500">バイラル動画で大幅なリーチ獲得</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Ads Service */}
            <div id="google-ads" className="mb-20 scroll-mt-20">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-secondary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Google広告の運用代行</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  効果的な広告運用で確実な成果を実現し、ROIを最大化します。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">サービス内容</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-secondary-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">検索広告運用</h4>
                        <p className="text-gray-600 text-sm">検索意図に合致した効果的な検索広告キャンペーンを運用します。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-secondary-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">ディスプレイ広告</h4>
                        <p className="text-gray-600 text-sm">ターゲティングとクリエイティブでブランド認知度を向上させます。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-secondary-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">パフォーマンス最適化</h4>
                        <p className="text-gray-600 text-sm">継続的な分析と改善でROIを最大化します。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">実績例</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">ROAS改善</span>
                        <span className="text-2xl font-bold text-secondary-yellow">+150%</span>
                      </div>
                      <p className="text-xs text-gray-500">広告費用対効果を大幅改善</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">クリック率</span>
                        <span className="text-2xl font-bold text-primary-teal">+80%</span>
                      </div>
                      <p className="text-xs text-gray-500">広告クリック率を大幅向上</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">コンバージョン率</span>
                        <span className="text-2xl font-bold text-primary-orange">+120%</span>
                      </div>
                      <p className="text-xs text-gray-500">広告からの成約率向上</p>
                    </div>
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

export default Services
