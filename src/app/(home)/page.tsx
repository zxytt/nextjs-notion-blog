import { Intro } from '@/components/ui/home';
import { ProjectsList } from '@/components/ui/projects';

import { FeaturedBlogPosts } from './featured-posts';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://jahir.dev/media/jahir/jahir-hd.jpg',
  url: 'https://jahir.dev',
  sameAs: ['https://jahir.dev/about'],
  logo: 'https://jahir.dev/media/brand/logo-full.png',
  name: 'Jason Zhang',
  description: 'Passionate and creative frontend software engineer from China',
  email: '2405476994@qq.com',
  foundingDate: new Date('1996-11-02T18:30:00-05:00').toISOString(),
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <FeaturedBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
