import { Filters, SignsContainer, PaginationContainer } from '../components'
import { convenientFetch } from '../utils/corsFetch'

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } = queryParams

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      convenientFetch(url, {
        params: queryParams,
      }),
  }
}

const url = '/products'
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    const response = await queryClient.ensureQueryData(allProductsQuery(params))
    console.log(response)
    const products = response.data.data
    const meta = response.data.meta
    return { products, meta, params }
  }

const AllSigns = () => {
  return (
    <>
      <Filters />
      <SignsContainer />
      <PaginationContainer />
    </>
  )
}
export default AllSigns
