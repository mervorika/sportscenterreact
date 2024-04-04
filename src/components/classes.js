import React from "react";
import yoga from "../Resimler/yoga.jpg";
import group from "../Resimler/group.webp";
import solo from "../Resimler/solo.jpg";
import street from "../Resimler/stret.webp";

const Classes = () => {
  return (
    <section className="classes" id="classes">
      <div className="classesDiv">
        <div className="clTitle">OUR CLASSES</div>
        <div className="clDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquam sem at urna consequat tincidunt.
        </div>
        <div className="clTabDiv">
          <div className="clTabButtons">
            <a id="clTab1Button" className="clTabButton tabActive">
              Yoga
            </a>
            <a id="clTab2Button" className="clTabButton">
              Group
            </a>
            <a id="clTab3Button" className="clTabButton">
              Solo
            </a>
            <a id="clTab4Button" className="clTabButton">
              Stretching
            </a>
          </div>
          <div className="clTab activeDiv" id="clTab1">
            <div className="clTabTextDiv">
              <div className="clTabText">
                <span className="clTabTitleSpan">Why are your Yoga?</span>
                <span className="clTabDescSpan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent aliquam sem at urna consequat tincidunt.
                </span>
              </div>
              <div className="clTabText">
                <span className="clTabTitleSpan">
                  When comes Yoga Your Time.
                </span>
                <span className="clTabDescSpan">
                  Saturday-Sunday: 8:00am - 10:00am
                  <br />
                  Monday-Tuesday: 10:00am - 12:00pm
                  <br />
                  Wednesday-Friday: 3:00pm - 6:00pm
                </span>
              </div>
            </div>
            <div className="clTabImgDiv">
              <img src={yoga} />
            </div>
          </div>
          <div className="clTab" id="clTab2">
            <div className="clTabTextDiv">
              <div className="clTabText">
                <span className="clTabTitleSpan">Why are your Group?</span>
                <span className="clTabDescSpan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent aliquam sem at urna consequat tincidunt.
                </span>
              </div>
              <div className="clTabText">
                <span className="clTabTitleSpan">
                  When comes Group Your Time.
                </span>
                <span className="clTabDescSpan">
                  Saturday-Sunday: 8:00am - 10:00am
                  <br />
                  Monday-Tuesday: 10:00am - 12:00pm
                  <br />
                  Wednesday-Friday: 3:00pm - 6:00pm
                </span>
              </div>
            </div>
            <div className="clTabImgDiv">
              <img src={group} />
            </div>
          </div>
          <div className="clTab" id="clTab3">
            <div className="clTabTextDiv">
              <div className="clTabText">
                <span className="clTabTitleSpan">Why are your Solo?</span>
                <span className="clTabDescSpan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent aliquam sem at urna consequat tincidunt.
                </span>
              </div>
              <div className="clTabText">
                <span className="clTabTitleSpan">
                  When comes Solo Your Time.
                </span>
                <span className="clTabDescSpan">
                  Saturday-Sunday: 8:00am - 10:00am
                  <br />
                  Monday-Tuesday: 10:00am - 12:00pm
                  <br />
                  Wednesday-Friday: 3:00pm - 6:00pm
                </span>
              </div>
            </div>
            <div className="clTabImgDiv">
              <img src={solo} />
            </div>
          </div>
          <div className="clTab" id="clTab4">
            <div className="clTabTextDiv">
              <div className="clTabText">
                <span className="clTabTitleSpan">Why are your Stretch?</span>
                <span className="clTabDescSpan">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent aliquam sem at urna consequat tincidunt.
                </span>
              </div>
              <div className="clTabText">
                <span className="clTabTitleSpan">
                  When comes Stretch Your Time.
                </span>
                <span className="clTabDescSpan">
                  Saturday-Sunday: 8:00am - 10:00am
                  <br />
                  Monday-Tuesday: 10:00am - 12:00pm
                  <br />
                  Wednesday-Friday: 3:00pm - 6:00pm
                </span>
              </div>
            </div>
            <div className="clTabImgDiv">
              <img src={street} />
            </div>
          </div>
        </div>
      </div>
    </section>      
  );
};

export default Classes;
