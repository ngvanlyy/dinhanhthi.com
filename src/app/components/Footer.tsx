import CafeIcon from '@/public/cafe.svg'
import { containerWide } from '@/src/app/lib/config'
import TbExternalLink from '@notion-x/src/icons/TbExternalLink'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import me from '../../data/me'
import Container from './Container'

type FooterProps = {
  footerType?: 'white' | 'gray'
}

export default function Footer(props: FooterProps) {
  const aClass = 'hover:text-white whitespace-nowrap flex items-center gap-1'
  return (
    <footer className="bg-nav-dark-bg text-gray-300">
      <div
        className={cn({
          'bg-wave-bottom-white': !props.footerType || props.footerType === 'white',
          'bg-wave-bottom-stone': props.footerType === 'gray'
        })}
      ></div>
      <Container className={cn('!mt-0 py-6', containerWide)}>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 pt-2 pb-1 lg:flex-row">
          <Link className={cn(aClass)} href={'/about/'}>
            About
          </Link>
          <Link className={cn(aClass)} href={'/support-me/'}>
            <Image className="h-4 w-auto" src={CafeIcon} alt="Cafe icon" /> Support Ly
          </Link>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 pt-1 pb-2 lg:flex-row">
          <a className={cn(aClass)} href={`mailto:${me.email}`}>
            💌 {me.email}
          </a>
        </div>
      </Container>
    </footer>
  )
}
