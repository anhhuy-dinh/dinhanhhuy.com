import ProjectIcon from '@root/public/project.svg'
import cn from 'classnames'

import Container from '../../components/Container'
import Footer from '../../components/Footer'
import HeaderPage from '../../components/HeaderPage'
import { bodyPadding, containerWide } from '../../lib/config'
import { getMetadata } from '../../lib/helpers'
import ProjectPage from './ProjectPage'

export const revalidate = 60

export const metadata = getMetadata({
  title: 'Projects',
  description: 'A list of projects I have done so far.'
})

export default function ProjectsPage() {
  return (
    <div className="thi-bg-stone flex flex-col">
      <HeaderPage
        headerType="gray"
        title="Projects"
        headerWidth="wide"
        icon={{ staticImageData: ProjectIcon }}
        iconClassName="h-12 w-12"
      />
      <Container className={cn('basis-auto grow shrink-0', bodyPadding, containerWide)}>
        <ProjectPage />
      </Container>
      <Footer footerType="gray" />
    </div>
  )
}
