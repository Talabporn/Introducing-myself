import { useState } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import MyTopic from "./Components/MyTopic";
import MyTopicPopUp from "./Components/MyTopicPopUp";
import topics from "./Data/Topics";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function onTopicOpenClick(theTopic){
    setSelectedTopic(theTopic)
  }

  function onTopicCloseClick(){
    setSelectedTopic(null);
  }

  const topicElement = topics.map((topic, index) => {
    return <MyTopic key={index} topic={topic} onTopicClick={onTopicOpenClick}/>; //แปลง array เป็น component
  });

  let mytopicpopup = null;
  if(!!selectedTopic){
    mytopicpopup = <MyTopicPopUp topic={selectedTopic} onBgClick={onTopicCloseClick}/>
  }
  return (
    <div className="App">
      <AppHeader />
      <div className="App-grid">{topicElement}</div>
      {mytopicpopup}
    </div>
  );
}

export default App;