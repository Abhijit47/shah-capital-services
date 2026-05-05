import { TanStackDevtools } from '@tanstack/react-devtools'
import type { ErrorComponentProps } from '@tanstack/react-router'
import {
  ErrorComponent,
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import globalCss from '../global.css?url'

import '@fontsource-variable/archivo/wdth-italic.css'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource-variable/archivo/wght.css'

import '@fontsource/titillium-web/200.css'
import '@fontsource/titillium-web/300.css'
import '@fontsource/titillium-web/400.css'
import '@fontsource/titillium-web/600.css'
import '@fontsource/titillium-web/700.css'
import '@fontsource/titillium-web/900.css'

import '@fontsource/titillium-web/200-italic.css'
import '@fontsource/titillium-web/300-italic.css'
import '@fontsource/titillium-web/400-italic.css'
import '@fontsource/titillium-web/600-italic.css'
import '@fontsource/titillium-web/700-italic.css'
// import '@fontsource/titillium-web/900-italic.css'

import 'swiper/swiper-bundle.css'
import 'yet-another-react-lightbox/styles.css'

import CustomCursor from '#/components/elements/CustomCursor'
import FooterOne from '#/components/footers/FooterOne'
import HeaderOne from '#/components/headers/HeaderOne'
import FixproLayout from '#/components/layout/FixproLayout'
import NotFound from '#/components/not-found'

// const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title:
          'Shah Capital Services - Your Trusted Partner in Financial Growth and Wealth Management',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: globalCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
})

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <>
      <ErrorComponent error={error} />
      <button onClick={() => reset()}>Try Again</button>
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /> */}
        <HeadContent />
      </head>
      <body className={'smoothed'}>
        <HeaderOne />
        <FixproLayout>
          {/* <HeaderOne /> */}
          {children}
        </FixproLayout>
        <FooterOne />

        <CustomCursor enabled />

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
