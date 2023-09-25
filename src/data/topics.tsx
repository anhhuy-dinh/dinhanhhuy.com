import EleventyIcon from '@/public/topics/11ty.svg'
import AlgorithmsIcon from '@/public/topics/algo.svg'
import AngularIcon from '@/public/topics/angular.svg'
import APIServiceIcon from '@/public/topics/api.svg'
import BackendIcon from '@/public/topics/backend.svg'
import CMSIcon from '@/public/topics/cms.svg'
import DLIcon from '@/public/topics/dl.svg'
import DockerIcon from '@/public/topics/docker.svg'
import DSIcon from '@/public/topics/ds.svg'
import FreshInstallIcon from '@/public/topics/fresh-install.svg'
import JSIcon from '@/public/topics/js.svg'
import LinuxIcon from '@/public/topics/linux.svg'
import MathsIcon from '@/public/topics/math.svg'
import MLIcon from '@/public/topics/ml.svg'
import MLOpsIcon from '@/public/topics/mlops.svg'
import MOOCIcon from '@/public/topics/mooc.svg'
import NextJSIcon from '@/public/topics/nextjs.svg'
import NLPIcon from '@/public/topics/nlp.svg'
import PythonIcon from '@/public/topics/python.svg'
import SSGIcon from '@/public/topics/ssg.svg'
import WebDevIcon from '@/public/topics/web-dev.svg'
import WindowsIcon from '@/public/topics/windows.svg'
import { Tag } from '@notion-x/interface'

const topics: Tag[] = [
  {
    name: '11ty',
    icon: EleventyIcon,
    className: 'invert'
  },
  {
    name: 'Algorithms',
    icon: AlgorithmsIcon,
    pinned: true
  },
  {
    name: 'Angular',
    icon: AngularIcon,
    pinned: true
  },
  {
    name: 'API & Services',
    icon: APIServiceIcon,
    pinned: true
  },
  {
    name: 'Backend',
    icon: BackendIcon
  },
  {
    name: 'CMS',
    icon: CMSIcon,
    description: 'Content Management System'
  },
  {
    name: 'Data Science',
    icon: DSIcon,
    pinned: true
  },
  {
    name: 'Deep Learning',
    icon: DLIcon,
    pinned: true
  },
  {
    name: 'Docker',
    icon: DockerIcon
  },
  {
    name: 'Fresh Installation',
    description: 'What you need to do after a fresh installation of a new OS.',
    icon: FreshInstallIcon
  },
  {
    name: 'JavaScript',
    icon: JSIcon,
    pinned: true
  },
  {
    name: 'Linux',
    icon: LinuxIcon
  },
  {
    name: 'Machine Learning',
    icon: MLIcon,
    pinned: true
  },
  {
    name: 'Maths',
    icon: MathsIcon,
    pinned: true
  },
  {
    name: 'MLOps',
    icon: MLOpsIcon,
    pinned: true
  },
  {
    name: 'MOOC',
    icon: MOOCIcon,
    pinned: true
  },
  {
    name: 'Next.js',
    icon: NextJSIcon,
    className: 'invert'
  },
  {
    name: 'NLP',
    icon: NLPIcon,
    description: 'Natural Language Processing',
    pinned: true
  },
  {
    name: 'Python',
    icon: PythonIcon,
    pinned: true
  },
  {
    name: 'SSG',
    icon: SSGIcon,
    description: 'Static Site Generator'
  },
  {
    name: 'Web Dev',
    icon: WebDevIcon,
    pinned: true
  },
  {
    name: 'Windows',
    icon: WindowsIcon
  }
]

export default topics
