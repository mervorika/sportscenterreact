import React from 'react'
import purchase1 from "../Resimler/purchase1.jpg";
import purchase2 from "../Resimler/purchase2.jpg";
import purchase3 from "../Resimler/purchase3.jpg";
import purchase4 from "../Resimler/purchase4.jpg";

const Purchase = () => {
  return (
    <section className="purchase" id="purchase">
    <div className="purchaseDiv">
      <div className="purchaseTitle">
        PURCHASE FROM US
      </div>
      <span className="purchaseDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.
      </span>
      <div className="purchaseImgDivs">
        <div className="purchaseImgDiv" id="purchase1">
          <img className="purchaseImg" src={purchase1}/>
          <div className="purchaseCard">
            <div className="purchaseWindow">
              <span className="purchaseProductName">Kettlebell / 5kg</span>
              <span className="purchasePrice"><span style={{textDecoration: 'line-through'}}>89,99$</span> / 59,99$</span>
              <div className="purchaseButtonDiv">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
                <a className="purchaseButton" href>Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div className="purchaseImgDiv" id="purchase2">
          <img className="purchaseImg" src={purchase2} />
          <div className="purchaseCard">
            <div className="purchaseWindow">
              <span className="purchaseProductName">Treadmill</span>
              <span className="purchasePrice"><span style={{textDecoration: 'line-through'}}>899,99$</span> / 599,99$</span>
              <div className="purchaseButtonDiv">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
                <a className="purchaseButton" href>Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div className="purchaseImgDiv" id="purchase3">
          <img className="purchaseImg " src={purchase3}/>
          <div className="purchaseCard">
            <div className="purchaseWindow">
              <span className="purchaseProductName">Adjustable Dumbbell</span>
              <span className="purchasePrice"><span style={{textDecoration: 'line-through'}}>89,99$</span> / 59,99$</span>
              <div className="purchaseButtonDiv">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
                <a className="purchaseButton" href>Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div className="purchaseImgDiv " id="purchase4">
          <img className="purchaseImg " src={purchase4} />
          <div className="purchaseCard">
            <div className="purchaseWindow">
              <span className="purchaseProductName">Kettlebell / 3kg</span>
              <span className="purchasePrice"><span style={{textDecoration: 'line-through'}}>89,99$</span> / 59,99$</span>
              <div className="purchaseButtonDiv">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
                <a className="purchaseButton" href>Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Purchase