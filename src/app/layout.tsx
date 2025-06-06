import '@/styles/globals.scss';

import Script from 'next/script';
import { type PropsWithChildren } from 'react';

import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { Providers } from '@/providers';
import { Inter, Manrope, MonoLisa } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title: 'Jason Zhang – Frontend Software Engineer',
    description:
      // eslint-disable-next-line @stylistic/max-len
      "I'm a passionate and creative frontend software engineer from China. Visit my website to learn more about me and my projects",
    keywords: [
      'jason zhang',
      'jason',
      'open-source',
      'full-stack',
      'frontend',
      'software engineer',
      'china',
      'developer',
      'development',
      'android',
      'web',
    ],
  }),
};

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '', IS_TEMPLATE = 'true' } =
  process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id={'page'}
      lang={'en'}
      className={cx(
        Inter.variable,
        Manrope.variable,
        MonoLisa.variable,
        IS_TEMPLATE === 'true' ? 'template' : '',
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          src={'https://umami-five-iota.vercel.app/script.js'}
          data-website-id={umamiWebsiteId}
          strategy={'lazyOnload'}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <Main>{props.children}</Main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
