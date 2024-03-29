import BadgeTech from '@notion-x/src/components/BadgeTech'
import cn from 'classnames'

import techs from '../../data/techs'
import { CVItem } from './CVGroup'

type CVSectionProps = {
  cv: CVItem
  className?: string
}

export default function CVSection({ cv, className }: CVSectionProps) {
  return (
    <div className={cn('flex flex-wrap items-center', className)}>
      <div className={'hidden w-1/4 flex-col items-center py-4 px-2 md:flex'}>
        <h4 className="text-slate-700 mt-2 text-center text-base font-semibold">
          {cv.url && (
            <a
              className={'text-slate-700 thi-link-normal'}
              href={cv.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cv.where}
            </a>
          )}
          {!cv.url && <span>{cv.where}</span>}
        </h4>
        <div className="mt-1 text-center text-sm opacity-70">{cv.date}</div>
      </div>
      <div className="flex-1 px-4 py-6">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-700">{cv.title}</h3>
            <h4 className="text-base md:hidden">
              {cv.url && (
                <a className={'thi-link-normal'} href={cv.url}>
                  {cv.where}
                </a>
              )}
              {!cv.url && <span>{cv.where}</span>}
            </h4>
            <div className="mt-1 text-sm opacity-70 md:hidden">{cv.date}</div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {cv.activity.map((activity: string, index: number) => (
            <div
              key={index}
              className="opacity-95 text-sm"
              dangerouslySetInnerHTML={{ __html: activity }}
            ></div>
          ))}
        </div>
        {cv.tech && (
          <div className="mt-4 flex flex-wrap gap-2">
            {cv.tech.map((id: string) => {
              const techItem = techs.find(tech => tech.id === id)
              if (!techItem) return null
              const newTechItem = { ...techItem, icon: { staticImageData: techItem.icon } }
              return (
                <BadgeTech key={id} tech={newTechItem} hideText={true} useLink={false}></BadgeTech>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}


