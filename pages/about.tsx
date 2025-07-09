import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Zap, Users, Lightbulb, Target, Clock, Award, Heart } from 'lucide-react'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>会社概要 - MiniMaxAD</title>
        <meta name="description" content="MiniMaxAD の会社概要ページ。企業理念、会社情報、私たちの強みをご紹介します。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">会社概要</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                MiniMaxADは、最大の成果を最小のコストで実現することを使命とする、<br />
                デジタルマーケティングのプロフェッショナル集団です。
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Company Philosophy - Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">効率性の追求</h4>
                <p className="text-gray-600 text-sm">最小のコストで最大の成果を実現し、お客様のROIを最大化します。</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">パートナーシップ</h4>
                <p className="text-gray-600 text-sm">お客様と共に成長し、長期的な成功を目指します。</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
                <div className="w-16 h-16 bg-secondary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Google広告の運用代行</h4>
                <p className="text-gray-600 text-sm">効果的な広告運用で確実な成果を実現し、ROIを最大化します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">会社概要</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                MiniMaxADの詳細情報とアクセス方法をご確認ください。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Company Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8 aspect-square flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-gray-800">会社情報</h3>
                <div className="flex-1 flex flex-col justify-between space-y-8 overflow-hidden">
                  {/* Company Basic Info */}
                  <div className="space-y-6 pb-8 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium text-base">会社名</span>
                      <span className="text-gray-800 font-semibold text-base">MiniMaxAD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium text-base">電話番号</span>
                      <span className="text-gray-800 text-base">080-8916-5438</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium text-base">メール</span>
                      <span className="text-gray-800 text-base truncate ml-3">info@minimaxad.com</span>
                    </div>
                  </div>

                  {/* Access Information */}
                  <div className="flex-1 space-y-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-6">アクセス情報</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Address */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"></path>
                          </svg>
                        </div>
                                                            <div className="min-w-0 flex-1">
                                        <h5 className="font-semibold text-gray-800 mb-2 text-lg">住所</h5>
                                        <p className="text-gray-600 text-lg leading-relaxed">〒111-0053<br />東京都台東区浅草橋4-15-5-301</p>
                                    </div>
                      </div>

                      {/* Business Hours */}
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-secondary-yellow rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                                                            <div className="min-w-0 flex-1">
                                        <h5 className="font-semibold text-gray-800 mb-2 text-lg">営業時間</h5>
                                        <p className="text-gray-600 text-lg leading-relaxed">平日 9:00-18:00<br />土日祝日は休業</p>
                                    </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Link */}
                  <div className="pt-6 border-t border-gray-100">
                    <a href="https://maps.google.com/?q=東京都台東区浅草橋4-15-5-301" target="_blank" className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-orange to-primary-teal text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-base">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"></path>
                      </svg>
                      <span>地図を見る</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden aspect-square">
                <div className="w-full h-full bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps?q=東京都台東区浅草橋4-15-5-301&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
