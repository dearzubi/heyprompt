import '@styles/globals.css'
import { Metadata } from 'next'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata: Metadata = {
  title: 'HeyPrompt',
  description: 'Discover & Share Amazing AI Prompts',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
