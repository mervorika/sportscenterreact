import React from 'react'
import trainer1 from "../Resimler/trainer1.jpg";
import trainer2 from "../Resimler/trainer2.jpg";
import trainer3 from "../Resimler/trainer3.jpg";

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
    <div className="trainersDiv">
      <div className="trainersTitle">
        OUR BEST TRAINERS
      </div>
      <span className="trainersDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.
      </span>
      <div className="trainersImgDivs">
        <div className="trainerImgDiv lineToBottom" id="trainer1">
          <img className="trainerImg lineToRight" src={trainer1} />
          <div className="trainerCard">
            <div className="trainerWindow">
              <span className="trainerWindowTitle">Jane Doe</span>
              <span className="trainerWindowDesc">Cardio Trainer</span>
            </div>
          </div>
        </div>
        <div className="trainerImgDiv lineToBottom" id="trainer2">
          <img className="trainerImg lineToRight" src={trainer2} />
          <div className="trainerCard">
            <div className="trainerWindow">
              <span className="trainerWindowTitle">Jane Doe</span>
              <span className="trainerWindowDesc">Cardio Trainer</span>
            </div>
          </div>
        </div>
        <div className="trainerImgDiv lineToBottom" id="trainer3">
          <img className="trainerImg lineToRight" src={trainer3} />
          <div className="trainerCard">
            <div className="trainerWindow">
              <span className="trainerWindowTitle">Jane Doe</span>
              <span className="trainerWindowDesc">Cardio Trainer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Trainers