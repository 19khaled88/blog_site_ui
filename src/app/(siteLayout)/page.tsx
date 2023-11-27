'use client'
import EditorPage from '@/components/editor'
import Banner from '../../components/banner'
import TechReviewPage from '@/components/techreview'
import PodcastPage from '@/components/podcast'
import MustReadPage from '@/components/mustread'
import TechnologyPage from '@/components/technology'
import Gadget_software from '@/components/gadget_software'
import GamePage from '@/components/games'
import ApplicationPage from '@/components/applicaton'

export default function Home() {
  return (
    <main className=''>
      <Banner />
      <EditorPage />
      <TechReviewPage />
      <PodcastPage />
      <MustReadPage />
      <TechnologyPage />
      <Gadget_software />
      <GamePage />
      <ApplicationPage />
    </main>
  )
}
