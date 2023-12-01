import Wrapper from '../assets/wrappers/AchievementInfo'

const AchievementInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="achievement-icon">{icon}</span>
      <span className="achievement-text">{text}</span>
    </Wrapper>
  )
}

export default AchievementInfo
