
import GithubIcon from '@/public/social/github.svg'
import LinkedInIcon from '@/public/social/linkedin.svg'
import { BadgeSocialProps } from '@notion-x/src/components/BadgeSocial'

const socials: BadgeSocialProps[] = [
  {
    id: 'github',
    title: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/ngvanlyy',
    imgClass: 'invert'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/nguyen-van-ly-7a4a64175/'
  }

]

export default socials
