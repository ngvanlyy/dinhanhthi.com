import { notionX } from '@notion-x/src/lib/notionx'
import { notFound } from 'next/navigation'
import { parsePageId } from 'notion-utils'

import { getMetadata, getPostProperties } from '../../lib/helpers'
import SinglePostTemplate from '../../templates/SinglePostTemplate'

export const revalidate = 20

export const metadata = getMetadata({
  title: 'Support Ly',
  images: [
    {
      url: 'https://i.imgur.com/PyXUtfTh.png',
      width: 1024,
      height: 591
    }
  ]
})

export default async function SupportThiPage() {
  try {
    const recordMap = await notionX.getPage(parsePageId(process.env.SUPPORT_ME as string))
    const id = Object.keys(recordMap.block)[0]
    const block = recordMap.block[id]?.value
    const postProps = getPostProperties(block)
    return <SinglePostTemplate hideMeta={true} recordMap={recordMap} postProps={postProps} />
  } catch (error) {
    console.log('🚨Error when loading Support ly page', error)
    notFound()
  }
}
