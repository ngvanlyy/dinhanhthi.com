import CouseraIcon from '@/public/social/coursera.png'
import DuolingoIcon from '@/public/social/duolingo.svg'
import GithubIcon from '@/public/social/github.svg'
import GoodreadsIcon from '@/public/social/goodreads.svg'
import LinkedInIcon from '@/public/social/linkedin.svg'
import Math2ITIcon from '@/public/social/math2it.png'
import SOIcon from '@/public/social/so.svg'
import TwitterIcon from '@/public/social/twitter.png'
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
