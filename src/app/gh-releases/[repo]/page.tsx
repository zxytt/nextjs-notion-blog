import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import type { RequestContext } from '@/types/request';
import { createMetadata } from '@/utils/metadata';

import { getRepoReleaseData } from './data';
import { Downloader } from './downloader';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

type ReleasePageContext = RequestContext<{ repo?: string }>;

export default async function ReleasePage(context: ReleasePageContext) {
  const { repo: repoName } = await context.params;
  const repo = releasesRepos.find(
    (it) => it.toLowerCase() === repoName?.toLowerCase(),
  );
  if (!repo) return notFound();

  const data = await getRepoReleaseData(repo);
  return (
    <Section id={'github-release'}>
      <h1>{data?.success ? '🎉' : '😮'}</h1>
      <h3>{data?.success ? 'Download started!' : 'Oh no!'}</h3>
      <p>
        {data?.success
          ? 'Feel free to close this tab 😉'
          : 'Direct download is not available right now 😕'}
      </p>
      {data?.success ? null : (
        <p>
          Please follow this link to&nbsp;
          <Link title={'GitHub releases link'} href={data?.download || '#'}>
            GitHub Releases
          </Link>{' '}
          …
        </p>
      )}
      <Downloader url={data?.success ? data.download : null} />
    </Section>
  );
}

export const generateStaticParams = () =>
  releasesRepos.map((it) => ({ repo: it.toLowerCase() }));

export async function generateMetadata(
  context: ReleasePageContext,
): Promise<Metadata | undefined> {
  const { repo: repoName } = await context.params;
  const repo = releasesRepos.find((it) => it.toLowerCase() === repoName);
  if (!repo) return undefined;

  return createMetadata({
    title: `${repo} Release Download – Jason Zhang`,
    description: `Download the latest release artifacts from the ${repo} repository on GitHub`,
    exactUrl: `https://jahir.dev/gh-releases/${repo}`,
  });
}
