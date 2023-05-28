import {AiFillClockCircle} from 'react-icons/ai'

import TagsListItem from '../TagsListItem'

import './index.css'

const CourseTimeline = props => {
  const {eachTimelineItem} = props
  const {courseTitle, duration, description, tagsList} = eachTimelineItem
  return (
    <div>
      <div className="course-header">
        <h1 className="card-title">{courseTitle}</h1>
        <div className="container">
          <AiFillClockCircle />
          <p className="time-text">{duration}</p>
        </div>
      </div>
      <p className="card-description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(each => (
          <TagsListItem key={each.name} each={each} />
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeline
