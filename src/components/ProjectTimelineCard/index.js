import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeline = props => {
  const {eachTimelineItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = eachTimelineItem
  return (
    <div>
      <img src={imageUrl} alt="project" className="image-size" />
      <div className="project-header">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="container">
          <AiFillCalendar />
          <p className="time-text">{duration}</p>
        </div>
      </div>
      <p className="card-description">{description}</p>

      <a href={projectUrl}>visit</a>
    </div>
  )
}

export default ProjectTimeline
