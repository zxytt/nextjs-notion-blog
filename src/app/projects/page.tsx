import { ProjectsList } from '@/components/ui/projects';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Projects – Jason Zhang',
  description:
    // eslint-disable-next-line @stylistic/max-len
    "Projects by Jason Zhang. Get to know the projects I'm most proud of. Many of them are open-source.",
  exactUrl: 'https://jahir.dev/projects',
  keywords: [
    'tech',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
});

export default function ProjectsPage() {
  return <ProjectsList title={'Projects'} />;
}
