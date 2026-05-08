import Header from '@/components/header'
import Footer from '@/components/footer'
import StoriesHero from '@/components/stories-hero'
import ClientStories from '@/components/client-stories'

export const metadata = {
  title: 'Success Stories - Cursory Fund Recovery',
  description: 'Read real stories from clients who successfully recovered their funds with Cursory',
}

export default function StoriesPage() {
  return (
    <main className="bg-background">
      <Header />
      <StoriesHero />
      <ClientStories />
      <Footer />
    </main>
  )
}
