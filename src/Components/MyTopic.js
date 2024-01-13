import "./MyTopic.css";
function MyTopic(props) {
  const {topic, onTopicClick} = props;
  return (
    <div className="My-topic">
      <img src={topic.thumbnailUrl} onClick={()=>{onTopicClick(topic)}} />
      <h4>{topic.title}</h4>
    </div>
  );
}
export default MyTopic;
