import React from 'react'
import { Search, Instagram, MessageCircle } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO優化開発',
      description: 'Googleアルゴリズムに最適化されたSEO戦略で、検索順位を向上させます。',
      features: ['キーワード分析', 'コンテンツ最適化', 'テクニカルSEO', 'レポート分析'],
      color: 'bg-primary-orange',
      buttonColor: 'bg-primary-orange hover:bg-red-500'
    },
    {
      icon: Instagram,
      title: 'SNS運用代行',
      description: 'Instagram・TikTok等SNSで ブランドに合ったコンテンツ制作と戦略的な運用を行います。',
      features: ['Instagram・TikTok運営', 'コンテンツ企画・制作', 'ハッシュタグ戦略', 'エンゲージメント向上'],
      color: 'bg-primary-teal',
      buttonColor: 'bg-primary-teal hover:bg-teal-600'
    },
    {
      icon: MessageCircle,
      title: 'Google広告の運用代行',
      description: 'Google検索広告、ディスプレイ広告、YouTube広告など、効果的な広告運用で確実な成果を実現します。',
      features: ['Google検索広告', 'ディスプレイ広告', 'YouTube広告', 'ROI最適化'],
      color: 'bg-secondary-yellow',
      buttonColor: 'bg-secondary-yellow text-white hover:bg-yellow-500'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">サービス</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SEO優化開発から社交媒体運営まで、デジタルマーケティングの全領域をカバーする包括的なサービスを提供します。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8">
                <a href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className={`block w-full py-3 ${service.buttonColor} text-white rounded-lg transition-colors duration-300 font-medium text-center`}>
                  詳細を見る
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-orange to-primary-teal rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              どのサービスが最適かわからない？
            </h3>
            <p className="text-lg mb-8 opacity-90">
              無料相談で、あなたのビジネスに最適なソリューションをご提案します
            </p>
            <a href="/quote" className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              見積もりを依頼する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
