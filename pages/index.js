import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/main/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style={{width:'120px',height:'240px'}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=05012-21&language=en_IN&marketplace=amazon&region=IN&placement=B0C2HZYM87&asins=B0C2HZYM87&linkId=bcdd9ae52b26077b4d3573a34876ad9d&show_border=true&link_opens_in_new_window=true"></iframe>
   </Layout>
  )
}
