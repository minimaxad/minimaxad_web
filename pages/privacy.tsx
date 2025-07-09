import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const Privacy: React.FC = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー - MiniMaxAD</title>
        <meta name="description" content="MiniMaxAD のプライバシーポリシーページ。個人情報の取り扱いについてご確認ください。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">プライバシーポリシー</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                MiniMaxAD の個人情報の取り扱いについてご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">個人情報の取り扱いについて</h2>
                <p className="mb-6 text-gray-600">
                  MiniMaxAD（以下「当社」といいます。）は、個人情報の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）を遵守すると共に、以下のプライバシーポリシーに従って、個人情報を適切に取り扱います。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">1. 個人情報の定義</h2>
                <p className="mb-6 text-gray-600">
                  本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む。）を指します。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">2. 個人情報の収集方法</h2>
                <p className="mb-6 text-gray-600">
                  当社は、以下の方法により個人情報を収集いたします：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>お問い合わせフォームからの入力</li>
                  <li>見積もり依頼フォームからの入力</li>
                  <li>電話やメールでのお問い合わせ</li>
                  <li>サービス契約時の書面による提供</li>
                  <li>その他適法な方法による収集</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">3. 個人情報の利用目的</h2>
                <p className="mb-6 text-gray-600">
                  当社は、収集した個人情報を以下の目的で利用いたします：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>お問い合わせへの回答</li>
                  <li>見積もりの作成・提供</li>
                  <li>サービスの提供・運営</li>
                  <li>契約の締結・履行</li>
                  <li>料金の請求・決済</li>
                  <li>サービス向上のための分析</li>
                  <li>新サービス・キャンペーンのご案内</li>
                  <li>法令に基づく対応</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">4. 個人情報の第三者提供</h2>
                <p className="mb-6 text-gray-600">
                  当社は、以下の場合を除き、個人情報を第三者に提供いたしません：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>ご本人の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">5. 個人情報の管理</h2>
                <p className="mb-6 text-gray-600">
                  当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、必要かつ適切な安全管理措置を実施いたします。また、個人情報を取り扱う従業者や委託先に対して、必要かつ適切な監督を行います。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">6. 個人情報の開示・訂正等</h2>
                <p className="mb-6 text-gray-600">
                  当社は、ご本人から個人情報の開示を求められたときは、遅滞なく開示いたします。ただし、開示することにより以下のいずれかに該当する場合は、その全部または一部を開示しないこともあります：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>ご本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>法令に違反することとなる場合</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">7. Cookieの使用について</h2>
                <p className="mb-6 text-gray-600">
                  当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieとは、ウェブサイトがお客様のコンピュータに送信する小さなファイルで、お客様のブラウザに保存されます。Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができます。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">8. アクセス解析ツールについて</h2>
                <p className="mb-6 text-gray-600">
                  当社のウェブサイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。これらのツールはCookieを使用してお客様の行動データを収集しますが、個人を特定する情報は含まれません。データの収集・処理方法については、各ツールの利用規約・プライバシーポリシーをご確認ください。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">9. プライバシーポリシーの変更</h2>
                <p className="mb-6 text-gray-600">
                  当社は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーについては、当社ウェブサイトに掲載した時から効力を生じるものとします。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">10. お問い合わせ窓口</h2>
                <p className="mb-6 text-gray-600">
                  個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください：
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <strong>MiniMaxAD</strong><br />
                    メールアドレス：info@minimaxad.com<br />
                    電話番号：080-8916-5438<br />
                    受付時間：平日 9:00〜18:00（土日祝日除く）
                  </p>
                </div>

                <p className="text-sm text-gray-500 text-right">
                  制定日：2024年1月1日<br />
                  最終更新日：2024年1月1日
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Privacy 