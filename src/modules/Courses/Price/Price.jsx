import React from 'react'
import "./Price.css"
import PriceElement from '../PriceElement/PriceElement'

function Price() {
    return (
        <div>
            <div className='RO-price'>
                <h2>Price</h2>

                {/* container contain 3 cards  */}
                <div className='RO-PriceCard'>

                    <div className="ROPriceMargin">
                        <PriceElement bgColordiv="#FBFBFC" colorbase="#19191C" title="Base" li1="Et dolorum fuga " li2="Mentors and " li3="Necessitatibus " li4="lorem" li5="lorem" colorprice1="#6D6D77" price1="12 000$" price2="3 000$" bgbtn="#19191C" colorbtn="#FBFBFC" />
                    </div>

                    <div >
                        <PriceElement bgColordiv="#504DEE" colorbase="#FBFBFC" title="Optimal" li1="Et dolorum fuga " li2="Mentors and " li3="Necessitatibus " li4="lorem" li5="lorem" colorprice1="#EFEFF2" price1="24 000$" price2="6 000$" bgbtn="#FBFBFC" colorbtn="#504DEEC" />
                    </div>

                    <div className="ROPriceMargin">
                        <PriceElement bgColordiv="#DEEFE4" colorbase="#19191C" title="Premium" li1="Et dolorum fuga " li2="Mentors and " li3="Necessitatibus " li4="lorem" li5="lorem" colorprice1="#6D6D77" price1="64 000$" price2="18 000$" bgbtn="#19191C" colorbtn="#FBFBFC" />
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Price