import 'animate.css'
import './styles.css'

import React from 'react'
import styled from 'styled-components/macro'

import Group3160 from '../../assets/images/Group3160.png'
import { isMobile } from '../../utils/userAgent'
const StyledImg = styled.img`
  justify-content: 'center';
`
export default function BuybackTablenew() {
  if (isMobile)
    return (
      <>
        <h1> BuyBack Table </h1>
        <div style={{ marginTop: '30px', maxWidth: '400px' }} className={'whitetext'}>
          <div className="flexbox-container-align">
            <div style={{ marginRight: '35px' }}>Date</div>
            <div style={{ marginRight: '25px' }}> Buyback($)</div>
            <div style={{ marginRight: '25px' }}>Amount</div>
            <div style={{ marginRight: '10px' }}>Burn %</div>
            <div style={{ marginRight: '15px' }}>Tx Hash</div>
          </div>
        </div>
        <div className={'darktext'}>
          <div className="flex-container">
            <div style={{ marginLeft: '10px' }}> 2022-03-29</div>
            <div style={{ marginLeft: '10px' }}>$2,344</div>
            <div>519,722 </div>
            <div>0.05%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <div style={{ marginLeft: '10px' }}> 2022-03-29</div>
            <div style={{ marginLeft: '10px' }}>$1,147</div>
            <div>900,000</div>
            <div>0.09%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <div style={{ marginLeft: '10px' }}> 2022-03-29</div>
            <div style={{ marginLeft: '10px' }}>$1,447</div>
            <div>900,000</div>
            <div>0.09%</div>
            <div style={{ borderRight: '15px solid' }}>
              <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <div style={{ marginLeft: '10px' }}> 2022-03-29</div>
            <div style={{ marginLeft: '10px' }}>$1,692</div>
            <div>514,000</div>
            <div>0.05</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <div style={{ marginLeft: '10px' }}> 2022-03-29</div>
            <div style={{ marginLeft: '10px' }}>$1,751</div>
            <div>950,000</div>
            <div>0.095%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <div style={{ marginLeft: '10px' }}> 2022-04-03</div>
            <div style={{ marginLeft: '10px' }}>$2,686</div>
            <div>1,000,000</div>
            <div>1%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46">
                Etherscan
              </a>
            </div>
          </div>
        </div>
      </>
    )
  else
    return (
      <>
        <p></p>
        <p></p>
        <StyledImg
          style={{
            paddingBottom: 10,
            alignItems: 'right',
            float: 'left',
            width: 75,
            height: 100,
            position: 'relative',
            left: 300,
            top: 100,
            alignSelf: 'right',
          }}
          src={Group3160}
          alt="header"
        ></StyledImg>
        <h1> BuyBack Table </h1>
        <div style={{ marginTop: '30px' }} className={'whitetext'}>
          <div className="flexbox-container-align">
            <div style={{ marginRight: '120px' }}>Date</div>
            <div style={{ marginRight: '25px' }}> Buyback($)</div>
            <div style={{ marginRight: '25px' }}>Amount</div>
            <div style={{ marginRight: '10px' }}>Burn %</div>
            <div style={{ marginRight: '15px' }}>Tx Hash</div>
          </div>
        </div>
        <div className={'darktext'}>
          <div className="flex-container">
            <h3 style={{ marginLeft: '10px' }}> 2022-03-29</h3>
            <div style={{ marginLeft: '100px' }}>$2344</div>
            <div>519,722 </div>
            <div>0.05%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h3 style={{ marginLeft: '10px' }}> 2022-03-29</h3>
            <div style={{ marginLeft: '100px' }}>$1,147</div>
            <div>900,000</div>
            <div>0.09%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h3 style={{ marginLeft: '10px' }}> 2022-03-29</h3>
            <div style={{ marginLeft: '100px' }}>$1,447</div>
            <div>900,000</div>
            <div>0.09%</div>
            <div style={{ borderRight: '15px solid' }}>
              <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h3 style={{ marginLeft: '10px' }}> 2022-03-29</h3>
            <div style={{ marginLeft: '100px' }}>$1,692</div>
            <div>514,000</div>
            <div>0.05</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h3 style={{ marginLeft: '10px' }}> 2022-03-29</h3>
            <div style={{ marginLeft: '100px' }}>$1,751</div>
            <div>950,000</div>
            <div>0.095%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4">
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h3 style={{ marginLeft: '10px' }}> 2022-04-03</h3>
            <div style={{ marginLeft: '100px' }}>$2686</div>
            <div>1,000,000</div>
            <div>1%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a href="https://etherscan.io/tx/0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46">
                Etherscan
              </a>
            </div>
          </div>
        </div>
      </>
    )
}
