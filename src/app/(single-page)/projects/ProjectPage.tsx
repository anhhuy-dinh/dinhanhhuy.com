'use client'

import cn from 'classnames'
import { Suspense, useState } from 'react'

import projects from '../../../data/projects'
import ProjectItem, {
  Project,
  ProjectType,
  SkeletonProjectItem
} from '../../components/ProjectItem'

export default function ProjectPage() {
  const [typeToShow, setTypeToShow] = useState<ProjectType[]>(['web', 'ds', 'other'])
  const buttonClassName = (type: ProjectType) =>
    cn(
      'px-4 py-1.5 thi-box-code rounded-3xl border-l-4 flex gap-2',
      'text-[0.95rem] flex items-center justify-center',
      {
        'text-white': typeToShow.includes(type),
        'bg-white': !typeToShow.includes(type),
        'border-l-sky-600': type === 'ds',
        'border-l-amber-500': type === 'web',
        'border-l-emerald-600': type === 'other',
        'bg-sky-600': typeToShow.includes('ds') && type === 'ds',
        'bg-amber-500': typeToShow.includes('web') && type === 'web',
        'bg-emerald-600': typeToShow.includes('other') && type === 'other'
      }
    )

  const toggleTypeToShow = (type: ProjectType) => {
    if (typeToShow.includes(type)) {
      setTypeToShow(typeToShow.filter(item => item !== type))
    } else {
      setTypeToShow([...typeToShow, type])
    }
  }

  const numDSProjects = projects.filter(project => project.type.includes('ds')).length
  const numWebProjects = projects.filter(project => project.type.includes('web')).length
  const numOtherProjects = projects.filter(project => project.type.includes('other')).length

  const numClass = (type: ProjectType) =>
    cn(
      'bg-[#ffffffb8] text-slate-800 rounded-full text-[0.8rem] flex items-center justify-center',
      'h-5 w-6',
      {
        '!bg-slate-200': !typeToShow.includes(type)
      }
    )

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap justify-center sm:justify-start">
        <div className="text-slate-600 whitespace-nowrap">Show only?</div>
        <div className="flex gap-4">
          <button onClick={() => toggleTypeToShow('ds')} className={buttonClassName('ds')}>
            <span className="hidden md:inline whitespace-nowrap">Data Science</span>
            <span className="md:hidden">DS</span>
            <span className={numClass('ds')}>{numDSProjects}</span>
          </button>
          <button onClick={() => toggleTypeToShow('web')} className={buttonClassName('web')}>
            <span className="hidden md:inline whitespace-nowrap">Web Development</span>
            <span className="md:hidden">Web</span>
            <span className={numClass('web')}>{numWebProjects}</span>
          </button>
          <button onClick={() => toggleTypeToShow('other')} className={buttonClassName('other')}>
            Others
            <span className={numClass('other')}>{numOtherProjects}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: Project) => (
          <Suspense key={project.id} fallback={<SkeletonProjectItem />}>
            <ProjectItem
              key={project.id}
              project={project}
              className={cn({
                hidden: !typeToShow.some(type => project.type.includes(type))
              })}
            />
          </Suspense>
        ))}
      </div>
    </div>
  )
}
