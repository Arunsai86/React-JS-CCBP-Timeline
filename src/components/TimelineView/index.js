import {Chrono} from 'react-chrono'
import ProjectTimeline from '../ProjectTimelineCard'
import CourseTimeline from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: 'blue',
            secondary: '#ffffff',
            cardForeColor: 'blue',
            titleColor: 'blue',
          }}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachTimelineItem =>
            eachTimelineItem.categoryId === 'PROJECT' ? (
              <ProjectTimeline
                key={eachTimelineItem.id}
                eachTimelineItem={eachTimelineItem}
              />
            ) : (
              <CourseTimeline
                key={eachTimelineItem.id}
                eachTimelineItem={eachTimelineItem}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
