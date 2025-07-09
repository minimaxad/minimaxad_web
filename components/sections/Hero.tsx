import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">最大の成果</span>を<br />最小のコストで
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                MiniMaxADは、SEO優化開発、SNS運用代行、Google広告の運用代行で、効率的にビジネスを成長させます
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="bg-secondary-yellow text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>見積もり依頼</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="bg-primary-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>お問い合わせ</span>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                      <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">SEO順位向上</h3>
                      <p className="text-gray-600 text-sm">検索エンジン最適化</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center">
                      <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">SNS運営代行</h3>
                      <p className="text-gray-600 text-sm">プロフェッショナル運営</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-yellow rounded-lg flex items-center justify-center">
                      <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Google広告の運用代行</h3>
                      <p className="text-gray-600 text-sm">確実な成果を実現します</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-primary-orange opacity-10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary-teal opacity-10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
