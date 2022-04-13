import './styles.css'

import { PurpleCard } from 'components/Card'
import React from 'react'
import styled from 'styled-components/macro'

import Card_BubbleIcon from '../../assets/images/Card_BubbleIcon.png'
import Card_ChartIcon from '../../assets/images/Card_ChartIcon.png'
import Card_GraphIcon from '../../assets/images/Card_GraphIcon.png'
import Line_pic from '../../assets/images/Line_pic.png'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const StyledText = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  text-align: center;
  justrify-content: center;
  font-family: Montserrat, sans-serif;
  color: #ffffff;
`
const StyledHeader = styled.text`
  font-size: 36px;
  color: #ffffff;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  text-align: center;
`

const StratSection = () => {
  return (
    <div className={'contentcenter'}>
      <div className={'flexbox-vertical-container-max-width'}>
        {' '}
        <div className={'center'}>
          <StyledHeader>Treasury Strategy</StyledHeader>
          <p></p>
          <p></p>
          <StyledText>
            We plan on taking a classic model and adding a fresh spin on it. By using our treasury to invest in Small
            Caps, NFTs, and incubate new and innovative ideas. We also engage in consistent Buyback and burns and
            community events.
          </StyledText>
          <p></p>
        </div>
        <div className={'flexbox-container'}>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard style={{ marginRight: 25, maxWidth: 250, maxHeight: 250, width: 250, height: 250 }}>
              <div style={{ marginTop: 25 }}>
                <img className={'card-icon'} alt="icon" src={Card_ChartIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: '22px' }}>Incubation</h1>
                <p style={{ color: '#ffffff', fontSize: '14px' }}>
                  Offering our unique expertise to create game-changing projects
                </p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </div>
            </PurpleCard>
          </div>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard style={{ maxWidth: 250, maxHeight: 250, width: 250, height: 250 }}>
              <div style={{ marginTop: 25 }}>
                <img className={'card-icon'} alt="icon" src={Card_BubbleIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: '22px' }}>NFTS</h1>
                <p style={{ color: '#ffffff', fontSize: '14px' }}> We search for the best in quality NFTs available</p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </div>
            </PurpleCard>
          </div>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard style={{ marginLeft: 25, maxWidth: 250, maxHeight: 250, width: 250, height: 250 }}>
              <div style={{ marginTop: 25 }}>
                <img className={'card-icon'} alt="icon" src={Card_GraphIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: '22px' }}>Small Caps</h1>
                <p style={{ color: '#ffffff', fontSize: '14px' }}>
                  Investing in the Hottest early stage crypto Ventures
                </p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </div>
            </PurpleCard>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StratSection
