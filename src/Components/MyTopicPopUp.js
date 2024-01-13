// MyTopicPopUp.js

import "./MyTopicPopup.css";

function MyTopicPopUp(props) {
  const { topic, onBgClick } = props;
  return (
    <div className="topic-popup">
      <div className="topic-popup-bg" onClick={onBgClick} />
      <div className="topic-popup-content">
        <div className="topic-popup-column">
          <img src={topic.popupImageUrl} alt="Popup Image" />
        </div>
        <div className="topic-popup-column">
          <div className="topic-popup-content-text">
            <h4>{topic.personal}</h4>
            <h4>{topic.education}</h4>
            <h4>{topic.technical}</h4>
            <h4>{topic.language}</h4>
            <h4>{topic.hobbie}</h4>
            <h4>{topic.dream}</h4>
            <h4>{topic.intern}</h4>
            <h4>{topic.other}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTopicPopUp;
