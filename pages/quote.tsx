import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website_url: '',
    industry: '',
    budget: '',
    start_timing: '',
    goals: '',
    additional_requests: '',
    services: [] as string[]
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value]
      })
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(service => service !== value)
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 取第一个选中的服务作为 service_type
    const service_type = formData.services[0] || '';
    // description 用 goals 字段
    const description = formData.goals || '';
    const payload = {
      ...formData,
      service_type,
      description,
    };
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok) {
        alert('見積もり依頼ありがとうございます。24時間以内に詳細な見積もり書をお送りいたします。');
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
        <title>見積もり - MiniMaxAD</title>
        <meta name="description" content="MiniMaxAD の見積もり依頼ページ。SEO優化開発と社交媒体運営代行の詳細な見積もりをご提供いたします。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">見積もり</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                あなたのビジネスに最適なソリューションをご提案いたします。<br />
                詳細な要件をお聞かせください。無料で詳細な見積もりをご提供いたします。
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">見積もり依頼フォーム</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">基本情報</h3>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">会社名 *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="株式会社サンプル"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="example@company.com"
                      />
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
                </div>

                {/* Service Selection */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">ご希望のサービス *</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="seo"
                        checked={formData.services.includes('seo')}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                      />
                      <span className="ml-3 text-gray-700">SEO優化開発</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="instagram"
                        checked={formData.services.includes('instagram')}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                      />
                      <span className="ml-3 text-gray-700">Instagram運営代行</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="tiktok"
                        checked={formData.services.includes('tiktok')}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                      />
                      <span className="ml-3 text-gray-700">TikTok運営代行</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services"
                        value="marketing"
                        checked={formData.services.includes('marketing')}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                      />
                      <span className="ml-3 text-gray-700">デジタルマーケティング戦略</span>
                    </label>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">プロジェクト詳細</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ウェブサイトURL</label>
                      <input
                        type="url"
                        name="website_url"
                        value={formData.website_url}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">業界・業種</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent text-gray-400"
                        >
                          <option value="" className="text-gray-400">業界を選択してください</option>
                          <option value="ecommerce" className="text-gray-800">EC・オンラインショップ</option>
                          <option value="corporate" className="text-gray-800">企業サイト</option>
                          <option value="restaurant" className="text-gray-800">飲食店</option>
                          <option value="beauty" className="text-gray-800">美容・エステ</option>
                          <option value="medical" className="text-gray-800">医療・クリニック</option>
                          <option value="education" className="text-gray-800">教育・スクール</option>
                          <option value="other" className="text-gray-800">その他</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">月間予算</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent text-gray-400"
                        >
                          <option value="" className="text-gray-400">予算を選択してください</option>
                          <option value="50000" className="text-gray-800">5万円以下</option>
                          <option value="100000" className="text-gray-800">5万円〜10万円</option>
                          <option value="200000" className="text-gray-800">10万円〜20万円</option>
                          <option value="300000" className="text-gray-800">20万円〜30万円</option>
                          <option value="500000" className="text-gray-800">30万円〜50万円</option>
                          <option value="over500000" className="text-gray-800">50万円以上</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">現在の課題・目標 *</label>
                      <textarea
                        name="goals"
                        required
                        rows={4}
                        value={formData.goals}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="例：&#10;・検索順位を上げて集客を増やしたい&#10;・SNSのフォロワーを増やしてブランド認知度を向上させたい&#10;・売上を向上させたい&#10;・競合他社との差別化を図りたい"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">希望開始時期</label>
                      <select
                        name="start_timing"
                        value={formData.start_timing}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent text-gray-400"
                      >
                        <option value="" className="text-gray-400">開始時期を選択してください</option>
                        <option value="immediate" className="text-gray-800">すぐに（一週間）</option>
                        <option value="1month" className="text-gray-800">1ヶ月以内</option>
                        <option value="3months" className="text-gray-800">3ヶ月以内</option>
                        <option value="6months" className="text-gray-800">6ヶ月以内</option>
                        <option value="undecided" className="text-gray-800">未定</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">その他ご要望・質問</label>
                      <textarea
                        name="additional_requests"
                        rows={4}
                        value={formData.additional_requests}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent placeholder-gray-400"
                        placeholder="その他ご質問やご要望がございましたらお聞かせください&#10;例：&#10;・特定のキーワードでの上位表示を希望&#10;・競合他社の分析も含めて提案してほしい&#10;・定期的なレポートの頻度について相談したい"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white py-4 rounded-lg font-medium hover:bg-red-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  見積もりを依頼する
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">見積もりプロセス</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                シンプルで分かりやすい4ステップで、最適なソリューションをご提案いたします。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">フォーム送信</h3>
                <p className="text-gray-600 text-sm">詳細な要件をお聞かせください</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">ヒアリング</h3>
                <p className="text-gray-600 text-sm">24時間以内にご連絡いたします</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">提案・見積もり</h3>
                <p className="text-gray-600 text-sm">最適なプランをご提案</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">契約・開始</h3>
                <p className="text-gray-600 text-sm">ご納得いただけましたら開始</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Quote 