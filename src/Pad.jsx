import React, { useEffect } from "react";
const Pad = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
  }, []);
  const handleKeyboard = (event) => {
    if (event.keyCode === props.keyCode) {
      document.getElementById(props.keyId).click();
    }
  };
  const playAudio = async () => {
    if (props.checkPower === true) {
      const selectAudio = document.getElementsByClassName("clip");
      for (let i = 0; i < selectAudio.length; i++) {
        if (selectAudio[i].id === props.keyId) {
          var sound = selectAudio[i];
          sound.play();
          sound.volume = props.vol;
        }
      }
    }
  };
  return (
    <>
      <button
        id={props.keyId}
        onClick={() => {
          props.onSelect(props.id);
          playAudio();
        }}
        onKeyUp={handleKeyboard}
        className="drum-pad btn btn-success"
      >
        <audio className="clip" id={props.keyId} src={props.url} />
        {props.keyId}
      </button>
    </>
  );
};
export default Pad;
