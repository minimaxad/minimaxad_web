import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { 
      name, 
      company, 
      email, 
      phone, 
      service_type, 
      budget, 
      timeline, 
      description,
      website_url,
      current_issues,
      goals,
      target_audience,
      competitors
    } = req.body

    // 验证必填字段
    if (!name || !email || !service_type || !description) {
      return res.status(400).json({ message: '必須項目が入力されていません' })
    }

    // 构建邮件内容
    const emailContent = `
見積もり依頼内容：

基本情報:
お名前: ${name}
会社名: ${company || '未入力'}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}

サービス情報:
サービス種別: ${service_type}
予算: ${budget || '未設定'}
希望納期: ${timeline || '未設定'}

プロジェクト詳細:
${description}

追加情報:
ウェブサイトURL: ${website_url || '未入力'}
現在の課題: ${current_issues || '未入力'}
目標: ${goals || '未入力'}
ターゲット層: ${target_audience || '未入力'}
競合他社: ${competitors || '未入力'}
    `.trim()

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: 'MiniMaxAD <contact@minimaxad.com>',
      to: ['info@minimaxad.com'],
      subject: `見積もり依頼 - ${service_type} - ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35;">見積もり依頼</h2>
          
          <h3 style="color: #333; margin-top: 20px;">基本情報</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">お名前:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">会社名:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">メールアドレス:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">電話番号:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || '未入力'}</td>
            </tr>
          </table>

          <h3 style="color: #333; margin-top: 20px;">サービス情報</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">サービス種別:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service_type}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">予算:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || '未設定'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">希望納期:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${timeline || '未設定'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #333;">プロジェクト詳細:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${description}</div>
          </div>

          <h3 style="color: #333; margin-top: 20px;">追加情報</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">ウェブサイトURL:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${website_url || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">現在の課題:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${current_issues || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">目標:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${goals || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">ターゲット層:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${target_audience || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">競合他社:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${competitors || '未入力'}</td>
            </tr>
          </table>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ message: 'メール送信に失敗しました' })
    }

    res.status(200).json({ message: '見積もり依頼を送信しました', data })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
} 