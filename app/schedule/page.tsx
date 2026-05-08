import Header from '@/components/header'
import Footer from '@/components/footer'
import ScheduleHero from '@/components/schedule-hero'
import RecoveryProcess from '@/components/recovery-process'
import ScheduleForm from '@/components/schedule-form'

export const metadata = {
  title: 'Schedule Recovery - Cursory Fund Recovery',
  description: 'Start your fund recovery process with Cursory. Free consultation and transparent recovery timeline.',
}

export default function SchedulePage() {
  return (
    <main className="bg-background">
      <Header />
      <ScheduleHero />
      <RecoveryProcess />
      <ScheduleForm />
      <Footer />
    </main>
  )
}
