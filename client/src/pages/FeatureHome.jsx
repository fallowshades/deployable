import { QueryClient } from '@tanstack/react-query'
import Wrapper from '../assets/wrappers/FeatureHome'
import { Hero, FeaturedSigns } from '../components'

import { convenientFetch } from '../utils/corsFetch'
import customFetch from '../utils/customFetch'
const url = 'products?featured=true'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => convenientFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  const products = response.data.data
  //const test = await customFetch('/signs')
  //console.log(test)
  return { products }

  return null
}
const FeatureHome = () => {
  return (
    <Wrapper>
      <Hero />
      <FeaturedSigns />
    </Wrapper>
  )
}
export default FeatureHome
