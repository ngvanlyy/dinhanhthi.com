import cn from 'classnames'

import CVSection from './CVSection'
import HeadingAbout from './HeadingAbout'

export type CVItem = {
  id: string
  where: string
  bgWhite?: boolean
  url?: string
  title: string
  date: string
  activity: string[]
  tech?: string[]
}

export type CVGroupType = {
  id: string
  name: string
  list: CVItem[]
}

type CVGroupProps = {
  cvGroup: CVGroupType
  className?: string
}

export default function CVGroup({ cvGroup, className }: CVGroupProps) {
  return (
    <div className={className ? className : ''}>
      <HeadingAbout className="mb-4">{cvGroup.name}</HeadingAbout>
      <div className={'thi-box-code divide-y px-4'}>
        {cvGroup.list.map((cvItem: CVItem) => (
          <CVSection key={cvItem.id} cv={cvItem} />
        ))}
      </div>
    </div>
  )
}

export function SkeletonCVGroup(props: CVGroupProps) {
  return (
    <div className={props.className}>
      <HeadingAbout className="text-2xl mb-4">{props.cvGroup.name}</HeadingAbout>
      <div className={cn('rounded-lg shadow-lg bg-slate-200 animate-pulse h-[500px]')}></div>
    </div>
  )
}
