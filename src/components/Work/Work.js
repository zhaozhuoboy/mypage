import React, { PropTypes } from 'react';

import freeline from '../../images/work/freeline.jpg'
import weixin from '../../images/work/weixin.jpg'
import waimai from '../../images/work/waimai.jpg'

class Work extends React.Component {
  render () {
    return(

      <div className='work'>
        <div className="container-fluid">
          <h2>我的作品</h2>
          <div className="row">
            <a href='http://freeline.coding.me/'>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className="work-card">
                  <img src={freeline} alt=""/>
                  <div className='work-desc'>
                    <h4>FreeLine 漂移板社团</h4>
                    <p>由于喜好自学HTML和CSS之后开始做这个网站，这个作品也获得了学校网页设计大赛的二等奖</p>
                  </div>
                </div>
              </div>
            </a>

            <a href='https://zhaozhuoboy.github.io/weixin-h5/'>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className="work-card">
                  <img src={weixin} alt=""/>
                  <div className='work-desc'>
                    <h4>微信场景应用</h4>
                    <p>使用swiper + zepto 制作的微信场景应用</p>
                  </div>
                </div>
              </div>
            </a>


            <a href='https://zhaozhuoboy.github.io/waimai/'>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className="work-card">
                  <img src={waimai} alt=""/>
                  <div className='work-desc'>
                    <h4>外卖网</h4>
                    <p>按照一家外卖网站，原样实现前台页面</p>
                  </div>
                </div>
              </div>
            </a>



          </div>
        </div>
      </div>
    )
  }
}

export default Work;
