import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Achievement'
import AchievementInfo from './AchievementInfo'
import { Form } from 'react-router-dom'
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)

const Achievement = ({
  _id,
  description,
  status,
  points,
  type,
  dateOfCompletion,
  createdAt,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY')

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{description?.charAt(0)}</div>
        <div className="info">
          <h5>{description}</h5>
          <p>{_id}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <AchievementInfo icon={<FaLocationArrow />} text={type} />
          <AchievementInfo icon={<FaCalendarAlt />} text={date} />
          <AchievementInfo icon={<FaBriefcase />} text={type} />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-achievement/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-achievement/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Achievement
