import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, company, email, phone, inquiry_type, message } = req.body

    // 验证必填字段
    if (!name || !email || !inquiry_type || !message) {
      return res.status(400).json({ message: '必須項目が入力されていません' })
    }

    // 构建邮件内容
    const emailContent = `
お問い合わせ内容：

お名前: ${name}
会社名: ${company || '未入力'}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
お問い合わせ種別: ${inquiry_type}

お問い合わせ内容:
${message}
    `.trim()

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: 'MiniMaxAD <contact@minimaxad.com>',
      to: ['info@minimaxad.com'],
      subject: `お問い合わせ - ${inquiry_type} - ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35;">お問い合わせ</h2>
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
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">お問い合わせ種別:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${inquiry_type}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">お問い合わせ内容:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ message: 'メール送信に失敗しました' })
    }

    res.status(200).json({ message: 'お問い合わせを送信しました', data })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
} 