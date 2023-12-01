import { toast } from 'react-toastify'
import { AchievementsContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'

import { QueryClient, useQuery } from '@tanstack/react-query'

const allAchievementsQuery = (params) => {
  const { search, status, type, sort, page } = params
  return {
    queryKey: [
      'achievements',
      search ?? 'all',
      status ?? 'all',
      type ?? 'all',
      sort ?? 'all',
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/achievements', {
        params,
      })
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ])
      await queryClient.ensureQueryData(allAchievementsQuery(params))
      return {
        searchValues: { ...params },
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg)
      return error
    }
  }
const AllAchievementsContext = createContext()

const AllAchievement = () => {
  const { searchValues } = useLoaderData()
  const { data } = useQuery(allAchievementsQuery(searchValues))

  return (
    <AllAchievementsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <AchievementsContainer />
    </AllAchievementsContext.Provider>
  )
}
export default AllAchievement

export const useAllAchievementsContext = () =>
  useContext(AllAchievementsContext)
