import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Mail, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiry_type: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('お問い合わせありがとうございます。24時間以内にご連絡いたします。');
      } else {
        alert(result.message || 'メール送信に失敗しました。');
      }
    } catch (error) {
      alert('サーバーエラーが発生しました。');
    }
  }

  return (
    <>
      <Head>
        <title>お問い合わせ - MiniMaxAD</title>
        <meta name="description" content="MiniMaxAD へのお問い合わせページ。SEO対策と社交媒体運営代行に関するご相談はこちらから。" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">お問い合わせ</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                SEO対策と社交媒体運営代行に関するご質問やご相談は、<br />
                お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-10 w-full">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">お問い合わせフォーム</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">お名前 *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="山田太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">会社名</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="株式会社サンプル"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400" placeholder="example@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">電話番号</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="080-8916-5438"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ種別 *</label>
                    <select
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent ${formData.inquiry_type ? 'text-gray-800' : 'text-gray-400'}` }
                    >
                      <option value="" className="text-gray-400">お問い合わせ内容を選択してください</option>
                      <option value="seo" className="text-gray-800">SEO対策について</option>
                      <option value="instagram" className="text-gray-800">Instagram運営代行について</option>
                      <option value="tiktok" className="text-gray-800">TikTok運営代行について</option>
                      <option value="pricing" className="text-gray-800">料金について</option>
                      <option value="other" className="text-gray-800">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容 *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400 resize-none"
                      placeholder="具体的なご質問やご要望をお聞かせください。&#10;例：&#10;・現在のウェブサイトのSEO改善について相談したい&#10;・Instagram運営代行の詳細な料金を知りたい&#10;・TikTokでの集客方法について教えてほしい"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-orange text-white py-4 rounded-lg font-medium hover:bg-red-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    お問い合わせを送信
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary-orange to-primary-teal rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">お気軽にご連絡ください</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">メールでのお問い合わせ</div>
                        <div className="text-sm opacity-90">info@minimaxad.com</div>
                        <div className="text-xs opacity-80">24時間受付</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">対応時間について</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-600">初回レスポンス：24時間以内</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                      <span className="text-gray-600">詳細回答：2営業日以内</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary-yellow rounded-full"></div>
                      <span className="text-gray-600">無料相談：随時受付中</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-secondary-cream rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">お急ぎの方は</h3>
                  <p className="text-gray-600 mb-6">見積もり依頼フォームから<br />より詳細なご相談が可能です</p>
                  <a href="/quote" className="inline-block bg-secondary-yellow text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    見積もり依頼へ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact

