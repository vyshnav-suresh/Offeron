import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'

export default function App({ Component, pageProps }) {
  return<MantineProvider
  withGlobalStyles
  withNormalizeCSS
  theme={{
    /** Put your mantine theme override here */
    colorScheme: 'light',
    main_dark:'#004445',
    secondary_dark:'#2C7873',
    main_light:'#FFD800',
    secondary_light:'#6FB98F',
    optional_light:'#FFED00',
    white_cream:'#FBFAE1'
  }}
> <Component {...pageProps} /></MantineProvider>
}
