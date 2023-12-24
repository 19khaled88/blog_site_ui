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
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'


const get_categories = gql`
  query GetCategory{
    categories {
      id,name,user {
        id,name,email
      },posts {
        id,title,content,cate_id,avatar,short_name,createdAt
      }
    }
  }
`;
export default function Home() {
  const [categories, setCategories] = useState([])
  const { data, loading, error } = useQuery(get_categories)
  useEffect(() => {
    if (data) {
      setCategories(data.categories)
    }
  }, [data, loading]);
  type filteredDataType = {
    id: string,
    name: string,
    posts: Array<Record<string, unknown>>
  }
  return (
    <main className=''>
      <Banner />
      <EditorPage post={categories != null ? categories.filter((items: filteredDataType) => items.id === '20') : ''} />
      <TechReviewPage post={categories != null ? categories.filter((items: filteredDataType) => items.id === '21') : ''} />
      <PodcastPage posts={categories != null ? categories.filter((items: filteredDataType) => items.id === '18') : ''} />
      <MustReadPage post={categories != null ? categories.filter((items: filteredDataType) => items.id === '23') : ''} />
      <TechnologyPage post={categories != null ? categories.filter((items: filteredDataType) => items.id === '15') : ''} />
      <Gadget_software
        gadgets={categories != null ? categories.filter((items: filteredDataType) => items.id === '19') : ''}
        softwares={categories != null ? categories.filter((items: filteredDataType) => items.id === '22') : ''}
      />
      <GamePage post={categories != null ? categories.filter((items: filteredDataType) => items.id === '17') : ''} />
      <ApplicationPage post={categories != null ? categories.filter((items: filteredDataType) => items.id === '16') : ''} />
    </main>
  )
}
