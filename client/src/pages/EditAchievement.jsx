import { FormRow, FormRowSelect } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useLoaderData } from 'react-router-dom'
import { ACHIEVEMENT_STATUS, ACHIEVEMENT_TYPE } from '../../../utils/constants'
import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { SubmitBtn } from '../components'

import { useQuery } from '@tanstack/react-query'

const singleAchievementQuery = (id) => {
  return {
    queryKey: ['achievement', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/achievements/${id}`)
      return data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleAchievementQuery(params.id))
      return params.id
    } catch (error) {
      toast.error(error?.response?.data?.msg)
      return redirect('/dashboard/all-achievements')
    }
  }
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      await customFetch.patch(`/achievements/${params.id}`, data)
      queryClient.invalidateQueries(['achievements'])
      toast.success('Achievement edited successfully')
      return redirect('/dashboard/all-achievements')
    } catch (error) {
      toast.error(error.response.data.msg)
      return error
    }
  }

const EditAchievement = () => {
  const id = useLoaderData()

  const {
    data: { achievement },
  } = useQuery(singleAchievementQuery(id))

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit achievement</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="description"
            defaultValue={achievement.description}
          />
          <FormRow
            type="text"
            name="points"
            defaultValue={achievement.points}
          />
          <FormRow
            type="text"
            labelText="achievement type"
            name="type"
            defaultValue={achievement.type}
          />

          <FormRowSelect
            name="status"
            labelText="achievement status"
            defaultValue={achievement.status}
            list={Object.values(ACHIEVEMENT_STATUS)}
          />
          <FormRowSelect
            name="achievementType"
            labelText="achievement type"
            defaultValue={achievement.type}
            list={Object.values(ACHIEVEMENT_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default EditAchievement
