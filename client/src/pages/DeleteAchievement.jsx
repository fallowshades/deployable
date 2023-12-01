import { redirect } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const action = (queryClient) =>
  async function action({ params }) {
    try {
      await customFetch.delete(`/achievements/${params.id}`)
      queryClient.invalidateQueries(['achievements'])
      toast.success('Achievement deleted successfully')
    } catch (error) {
      toast.error(error.response.data.msg)
    }
    return redirect('/dashboard/all-achievements')
  }
