import 'animate.css'
import '../DashBoard/styles.css'

import { BuyBackCard } from 'components/Card'
import React from 'react'
import Chart from 'react-google-charts'
import styled from 'styled-components/macro'

import Group3160 from '../../assets/images/Group3160.png'
//import { isMobile } from '../../utils/userAgent'
const StyledImg = styled.img`
  justify-content: 'center';
`
export default function BuybackTablenew() {
  const pieOptions = {
    title: '',
    pieHole: 0.6,
    slices: [
      {
        color: '#2BB673',
      },
      {
        color: '#d91e48',
      },
      {
        color: '#007fad',
      },
      {
        color: '#e9a227',
      },
    ],
    legend: {
      position: 'bottom',
      alignment: 'center',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      backgroundColor: 'transparent',
      width: '100%',
      height: '80%',
    },
    fontName: 'Roboto',
    backgroundColor: 'transparent',
  }
  return (
    <>
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
          top: 120,
          alignSelf: 'right',
        }}
        src={Group3160}
        alt="header"
      ></StyledImg>
      <BuyBackCard>
        <h1> BuyBack Table </h1>
        <div style={{ marginTop: '30px' }} className={'whitetext'}>
          <div className="flexbox-container-align">
            <div style={{ marginRight: '7vw' }}>Date</div>
            <div style={{ marginRight: '30px' }}> Buyback($)</div>
            <div style={{ marginRight: '25px' }}>Amount</div>
            <div style={{ marginRight: '10px' }}>Burn %</div>
            <div style={{ marginRight: '15px' }}>Tx Hash</div>
          </div>
        </div>
        <div className={'darktext'}>
          <div className="flex-container">
            <h4 style={{ marginLeft: '10px' }}>2022-04-03</h4>
            <div style={{ marginLeft: '7vw' }}> $2,686</div>
            <div> 1,000,000 </div>
            <div>1%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a
                className={'five'}
                href="https://etherscan.io/tx/0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46"
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h4 style={{ marginLeft: '10px' }}> 2022-03-29</h4>
            <div style={{ marginLeft: '7vw' }}>$1,147</div>
            <div>900,000</div>
            <div>0.9%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a
                className={'five'}
                href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751"
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h4 style={{ marginLeft: '10px' }}> 2022-03-29</h4>
            <div style={{ marginLeft: '7vw' }}>$1,447</div>
            <div>900,000</div>
            <div>0.9%</div>
            <div style={{ borderRight: '15px solid' }}>
              <a
                className={'five'}
                href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751"
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h4 style={{ marginLeft: '10px' }}> 2022-03-29</h4>
            <div style={{ marginLeft: '7vw' }}>$1,692</div>
            <div>514,000</div>
            <div>0.5%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a
                className={'five'}
                href="https://etherscan.io/tx/0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b"
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h4 style={{ marginLeft: '10px' }}> 2022-03-29</h4>
            <div style={{ marginLeft: '7vw' }}>$1,751</div>
            <div>950,000</div>
            <div>0.95%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a
                className={'five'}
                href="https://etherscan.io/tx/0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4"
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </div>
          </div>
          <p></p>
          <div className="flex-container">
            <h4 style={{ marginLeft: '10px' }}> 2022-03-29</h4>
            <div style={{ marginLeft: '7vw' }}>$2,344</div>
            <div> 519,722</div>
            <div>0.5%</div>
            <div style={{ borderRight: '15px solid' }}>
              {' '}
              <a
                className={'five'}
                href="https://etherscan.io/tx/0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16 "
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </div>
          </div>
        </div>
      </BuyBackCard>
      <div className="piechart" style={{ marginTop: '20px' }}>
        <Chart
          chartType="PieChart"
          data={[
            ['Age', 'Weight'],
            ['Total Supply', 100],
            ['Total Supply Burned', 7],
          ]}
          options={pieOptions}
          graph_id="PieChart"
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
      </div>
    </>
  )
}
