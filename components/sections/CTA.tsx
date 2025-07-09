import React from 'react'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-orange to-primary-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-8">
          {/* Main CTA */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              私たちとご一緒に成功を。
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              デジタルマーケティングで、あなたのビジネスを次のレベルへ
            </p>
            <p className="text-lg opacity-80 mb-12">
              無料相談では、現在の課題をヒアリングし、最適なソリューションをご提案いたします。
              <br />
              まずはお気軽にお問い合わせください。
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="/contact" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300 group">
              <svg className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <h3 className="text-lg font-semibold mb-2">お問い合わせ</h3>
              <p className="text-sm opacity-80">いつでも受付中</p>
            </a>

            <a href="/quote" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300 group">
              <svg className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="text-lg font-semibold mb-2">見積もり依頼</h3>
              <p className="text-sm opacity-80">詳細な提案書</p>
            </a>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-white border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">無料</div>
                <div className="text-sm opacity-80">初回相談は完全無料</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">迅速</div>
                <div className="text-sm opacity-80">スピード対応</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">秘密厳守</div>
                <div className="text-sm opacity-80">NDA締結可能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
