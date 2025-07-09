import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const Terms: React.FC = () => {
  return (
    <>
      <Head>
        <title>利用規約 - MiniMaxAD</title>
        <meta name="description" content="MiniMaxAD の利用規約ページ。サービス利用に関する規約をご確認ください。" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">利用規約</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                MiniMaxAD のサービス利用に関する規約をご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">第1条（適用）</h2>
                <p className="mb-6 text-gray-600">
                  本規約は、MiniMaxAD（以下「当社」といいます。）が提供するSEO優化開発・社交媒体運営代行サービス（以下「本サービス」といいます。）の利用条件を定めるものです。利用者（以下「ユーザー」といいます。）は、本サービスを利用することによって、本規約に同意したものとみなします。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第2条（利用登録）</h2>
                <p className="mb-6 text-gray-600">
                  本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用申込を行うものとします。当社は、利用申込を行った方（以下「申込者」といいます。）が以下の事由に該当する場合には、利用登録を承認しないことがあります。
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>申込者が本規約に違反したことがある場合</li>
                  <li>申込者が反社会的勢力等である、または反社会的勢力等との何らかの交流もしくは関与がある場合</li>
                  <li>その他、当社が利用登録を相当でないと判断した場合</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第3条（サービス内容）</h2>
                <p className="mb-6 text-gray-600">
                  当社は、以下のサービスを提供します：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>SEO優化開発サービス</li>
                  <li>Instagram運営代行サービス</li>
                  <li>TikTok運営代行サービス</li>
                  <li>デジタルマーケティング戦略立案・実行</li>
                  <li>その他関連するサービス</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第4条（利用料金及び支払方法）</h2>
                <p className="mb-6 text-gray-600">
                  ユーザーは、本サービスの利用の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。利用料金の支払いが遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第5条（禁止事項）</h2>
                <p className="mb-6 text-gray-600">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第6条（本サービスの提供の停止等）</h2>
                <p className="mb-6 text-gray-600">
                  当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
                </p>
                <ul className="mb-6 text-gray-600 list-disc pl-6">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第7条（保証の否認及び免責事項）</h2>
                <p className="mb-6 text-gray-600">
                  当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第8条（サービス内容の変更等）</h2>
                <p className="mb-6 text-gray-600">
                  当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第9条（利用規約の変更）</h2>
                <p className="mb-6 text-gray-600">
                  当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第10条（個人情報の取扱い）</h2>
                <p className="mb-6 text-gray-600">
                  当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第11条（通知または連絡）</h2>
                <p className="mb-6 text-gray-600">
                  ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第12条（権利義務の譲渡の禁止）</h2>
                <p className="mb-6 text-gray-600">
                  ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                </p>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">第13条（準拠法・裁判管轄）</h2>
                <p className="mb-6 text-gray-600">
                  本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>

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

export default Terms 