import { createClient } from '@supabase/supabase-js'
export default async function handler(
  req,
  res
) {
  if (req.method === 'POST') {
    try {
      // 解析请求体中的参数
      const { email } = req.body;
      const privateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      if (!privateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`)
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!url) throw new Error(`Expected env var SUPABASE_URL`)

      const client = createClient(url, privateKey)
      const result = await client.auth.getUser(email)
      console.log(result);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error});
    }
  } else {
    // 处理非POST请求
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
