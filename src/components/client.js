import React from 'react'
import client1 from "../Resimler/client1.jpg";
import client2 from "../Resimler/client2.jpg";
const Client = () => {
  return (
    <section className="client" id="client">
    <div className="clientDiv">
      <div className="clientTitle">
        REVIEW CLIENT
      </div>
      <span className="clientDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.
      </span>
      <div className="clientCartDivs">
        <div className="clientCartDiv">
          <div className="clientInfo">
            <div className="clientImgDiv">
              <img src={client1} className="clientImg" />
            </div>
            <div className="clientJobDiv">
              <span className="clientJobText">
                Diet Expert 
              </span>
              <span className="clientJobTitle">
                CFO
              </span>
            </div>
          </div>
          <div className="clientCartDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.
          </div>
          <div className="clientCartBottomEffect">
            <div className="clientCartBottomEffect2" />
          </div>
        </div>
        <div className="clientCartDiv">
          <div className="clientInfo">
            <div className="clientImgDiv">
              <img src={client2} className="clientImg" />
            </div>
            <div className="clientJobDiv">
              <span className="clientJobText">
                Cardio Trainer
              </span>
              <span className="clientJobTitle">
                CEO
              </span>
            </div>
          </div>
          <div className="clientCartDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.
          </div>
          <div className="clientCartBottomEffect">
            <div className="clientCartBottomEffect2" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Client