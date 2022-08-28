import React, { useEffect, useState } from "react";
import { firstSoundsGroup, secondSoundsGroup } from "./SData";
import Pad from "./Pad";
const App = () => {
  const [chkSecGroup, setSecGroup] = useState(false); //to handle Group
  const [groups, setGroups] = useState("First Group"); //to handle Group Text
  const [power, setPower] = useState(true); //to handle power
  const [powerText, setPowerText] = useState("Powered On"); //to handle power label
  const [volume, setVolume] = useState(1); //to Check Volume
  const [powerClass, setPowerClass] = useState("btn btn-success mt-3"); //to change power button class
  const [instrument, setInstrument] = useState("None");
  const chngGroup = () => {
    if (chkSecGroup === false) {
      setSecGroup(true);
      setGroups("Second Group");
    } else {
      setSecGroup(false);
      setGroups("First Group");
    }
  };
  const getVolume = (event) => {
    setVolume(event.target.value);
  };
  const changePower = () => {
    if (power === true) {
      setPower(false);
      setPowerText("Powered Off");
      setPowerClass("btn btn-danger mt-3");
    } else {
      setPower(true);
      setPowerText("Powered On");
      setPowerClass("btn btn-success mt-3");
    }
  };
  const setDisplayText = (display) => {
    setInstrument(display);
  };

  return (
    <>
      <div
        id="drum-machine"
        className="container container-fluid text-center row"
      >
        <div id="display" className="container col-md-5 mt-3 container-fluid">
          <p>Change Group:</p>
          <button onClick={chngGroup} className="btn btn-success">
            {groups}
          </button>
          <div className="container container-fluid show-Instrument mt-4">
            <p>{instrument}</p>
          </div>
          <b>
            <p>Volume is {volume * 100}</p>
          </b>
          <input
            className="form-range container set-width-range"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={getVolume}
          />
          <button onClick={changePower} className={powerClass}>
            {powerText}
          </button>
        </div>
        <div className="pads container container-fluid col-md-7">
          {chkSecGroup === false
            ? firstSoundsGroup.map((val, index) => {
                return (
                  <Pad
                    key={index}
                    keyCode={val.keyCode}
                    keyId={val.key}
                    id={val.id}
                    url={val.url}
                    checkPower={power}
                    vol={volume}
                    onSelect={setDisplayText}
                  />
                );
              })
            : secondSoundsGroup.map((val, index) => {
                return (
                  <>
                    <Pad
                      key={index}
                      keyCode={val.keyCode}
                      keyId={val.key}
                      id={val.id}
                      url={val.url}
                      checkPower={power}
                      vol={volume}
                      onSelect={setDisplayText}
                    />
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
};
export default App;
