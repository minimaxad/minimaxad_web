import React from 'react'
import { Award, Users, Clock, Target } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: '豊富な実績',
      description: '200社以上のデジタルマーケティングを成功に導いた実績があります。'
    },
    {
      icon: Users,
      title: '専門チーム',
      description: 'SEO・SNS・デザインの各分野のエキスパートが連携してサポートします。'
    },
    {
      icon: Clock,
      title: '迅速対応',
      description: '24時間以内の初回レスポンスと、スピーディーな施策実行をお約束します。'
    },
    {
      icon: Target,
      title: '成果重視',
      description: 'KPI設定から効果測定まで、数値にこだわった成果重視のアプローチです。'
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">信頼</span>を一番大切にしています
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                「MiniMaxADなら信頼できるから任せよう」
                <br />
                そう言っていただける会社を目指しています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                私たちは、デジタルマーケティングの力で企業の成長を支援する専門集団です。
                SEO優化開発から社交媒体運営まで、包括的なソリューションを提供し、
                お客様のビジネス目標達成をサポートします。
              </p>
            </div>

            {/* Company Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="/about" className="bg-secondary-yellow text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
                会社概要を見る
              </a>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">200+</div>
                <div className="text-gray-600 text-sm">成功プロジェクト</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-teal mb-2">95%</div>
                <div className="text-gray-600 text-sm">顧客満足度</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-secondary-yellow mb-2">5年</div>
                <div className="text-gray-600 text-sm">平均継続期間</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">24h</div>
                <div className="text-gray-600 text-sm">サポート体制</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">私たちのミッション</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                デジタル時代において、すべての企業が持つ可能性を最大限に引き出し、
                持続可能な成長を実現することです。
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary-orange rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-primary-teal rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-secondary-yellow rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">専門チームがサポート</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
