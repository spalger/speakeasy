import { NextRoute, makeNextHandler } from '@spalger/next-plus'

import { SITE } from '../../model/site'

export default makeNextHandler([
  new NextRoute('GET', () => {
    return {
      body: {
        name: SITE.title,
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: SITE.title,
        icons: [
          {
            src: '/static/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/static/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: '#ffffff',
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: '#ffffff',
        display: 'standalone',
      },
    }
  }),
])
