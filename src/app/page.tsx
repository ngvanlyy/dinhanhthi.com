/* eslint-disable quotes */
import HeadingWithMore from '@notion-x/src/components/HeadingWithMore'
import ImageComponent from '@notion-x/src/components/ImageComponent'
import SkeletonPostList from '@notion-x/src/components/SkeletonPostList'
import { makeSlugText } from '@notion-x/src/lib/helpers'
import cn from 'classnames'
import Link from 'next/link'
import { Suspense } from 'react'
import Footer from './components/Footer'
import ScrollToTop from '@notion-x/src/components/ScrollToTop'
import me from '../data/me'
import Container from './components/Container'
import HeaderIndex from './components/HeaderIndex'
import ProjectItem, { Project, SkeletonProjectItem } from './components/ProjectItem'
import {
  getTopics,
  getUnofficialProjects,
} from './lib/fetcher'
import { getMetadata, getUri } from './lib/helpers'

export const revalidate = 20

export const metadata = getMetadata({
  title: "Hi! I'm Ly",
  description: me.quote,
  images: [
    {
      url: 'https://i.imgur.com/PyXUtfTh.png',
      width: 1024,
      height: 581
    }
  ]
})

export default async function Home() {

  const numProjects = 6


  const projects = await getUnofficialProjects()
  const _topics = await getTopics()

  const topics = _topics.map(topic => ({ 
    ...topic,
    icon: { sourceUrl: topic.iconUrl, width: 20, height: 20 }
  }))

  const projectsToShow = projects.slice(0, numProjects)
  const isThereDsProject = projectsToShow.some(project => project.type.includes('ds'))
  const isThereWebProject = projectsToShow.some(project => project.type.includes('web'))
  const isThereOtherProject = projectsToShow.some(project => project.type.includes('other'))

  return (
    <div className="ly-bg-stone">
      <HeaderIndex />
      <Container>
        <div className="flex flex-col gap-14">
          {/* Notes */}
          <div className="flex flex-col gap-4">
            <HeadingWithMore
              title="Recently updated notes"
            />

            <div className="flex flex-col gap-2">
              {/* pinned */}
              <div className="ly-box-code overflow-hidden mb-3">
                <Suspense
                  fallback={
                    <SkeletonPostList
                      count={6}
                      postType="PostSimple"
                      options={{
                        className: 'flex flex-col divide-y'
                      }}
                    />
                  }
                >
                </Suspense>
              </div>

              {/* notes */}
              <div className="ly-box-code overflow-hidden">
                <Suspense
                  fallback={
                    <SkeletonPostList
                      count={8}
                      postType="PostSimple"
                      options={{
                        className: 'flex flex-col divide-y'
                      }}
                    />
                  }
                >
                </Suspense>
              </div>
            </div>
          </div>
          {/* Topics */}
          <div className="flex flex-col gap-4">
            <HeadingWithMore title="Main topics" href="/tags/" />
            <div className="flex flex-wrap gap-4 overflow-hidden">
              {topics
                .filter(t => t.pinned)
                .map(topic => (
                  <Link
                    href={getUri('tag', makeSlugText(topic.name))!}
                    key={makeSlugText(topic.name)}
                    className={cn(
                      'flex items-center gap-1 p-2 ly-box-code',
                      'transition duration-200 ease-in-out hover:-translate-y-0.5',
                      { 'tooltip-auto': topic.description }
                    )}
                    data-title={topic.description}
                  >
                    {topic.icon && (
                      <div>
                        <ImageComponent
                          image={topic.icon}
                          alt={topic.name}
                          imageProps={{ width: 20, height: 20, placeholder: 'empty' }}
                        />
                      </div>
                    )}
                    <div>{topic.longName || topic.name}</div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <HeadingWithMore
              title="Recent projects"
              href={projects.length >= numProjects ? '/projects/' : undefined}
            />
            <div className="flex flex-col gap-x-3 gap-y-4">
              <div className="flex gap-4 flex-wrap">
                {isThereDsProject && (
                  <div className="flex gap-2 items-center">
                    <div className="h-1 rounded-xl w-8 sm:w-16 bg-sky-600"></div>
                    <div className="text-slate-600 text-sm">
                      <span className="hidden sm:inline whitespace-nowrap">Data Science</span>
                      <span className="sm:hidden">DS</span>
                    </div>
                  </div>
                )}

                {isThereWebProject && (
                  <div className="flex gap-2 items-center">
                    <div className="h-1 rounded-xl w-8 sm:w-16 bg-amber-500"></div>
                    <div className="text-slate-600 text-sm">
                      <span className="hidden sm:inline whitespace-nowrap">Web Development</span>
                      <span className="sm:hidden">Web</span>
                    </div>
                  </div>
                )}

                {isThereOtherProject && (
                  <div className="flex gap-2 items-center">
                    <div className="h-1 rounded-xl w-8 sm:w-16 bg-emerald-600"></div>
                    <div className="text-slate-600 text-sm whitespace-nowrap">Others</div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-3 xl:grid-cols-3 overflow-hidden">
                {projects.slice(0, numProjects).map((project: Project) => (
                  <Suspense key={project.id} fallback={<SkeletonProjectItem />}>
                    <ProjectItem key={project.id} project={project} grayScale={true} />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer footerType="gray" />
      <ScrollToTop />
    </div>
  )
}
