import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
<<<<<<< HEAD
    <ThemeProvider defaultTheme="system" attribute="class">
=======
    <ThemeProvider attribute="class">
>>>>>>> 7d8e11dc1a89c007ca6ed846cc829e46cd881115
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp