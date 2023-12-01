import Achievement from './Achievement'
import Wrapper from '../assets/wrappers/AchievementsContainer'
import PageBtnContainer from './PageBtnContainer'
import { useAllAchievementsContext } from '../pages/AllAchievements'

const AchievementsContainer = () => {
  const { data } = useAllAchievementsContext()
  console.log(data)
  const { achievements, totalAchievements, numOfPages } = data
  if (achievements.length === 0) {
    return (
      <Wrapper>
        <h2>No Achievements to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {totalAchievements} achievement{achievements.length > 1 && 's'}found
      </h5>
      <div className="achievements">
        {achievements.map((achievement) => {
          return <Achievement key={achievement._id} {...achievement} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}
export default AchievementsContainer
