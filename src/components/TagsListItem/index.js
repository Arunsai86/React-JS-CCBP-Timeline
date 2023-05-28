import './index.css'

const TagsListItem = props => {
  const {each} = props
  return (
    <li className="tags-list-item-container">
      <p className="item-text">{each.name}</p>
    </li>
  )
}
export default TagsListItem
