import './styles.css'

import { PurpleCard } from 'components/Card'
import React from 'react'
import styled from 'styled-components/macro'

import Card_BubbleIcon from '../../assets/images/Card_BubbleIcon.png'
import Card_ChartIcon from '../../assets/images/Card_ChartIcon.png'
import Card_GraphIcon from '../../assets/images/Card_GraphIcon.png'
import Line_pic from '../../assets/images/Line_pic.png'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import { isMobile } from '../../utils/userAgent'
const StyledText = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  text-align: center;
  justrify-content: center;
  font-family: 'Lato', Sans-serif;
  margin-bottom: 20px;
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
  if (isMobile)
    return (
      <>
        <div style={{ marginTop: '50px', marginBottom: '150px' }} className={'flexbox-vertical-container'}>
          <StyledHeader>Treasury Strategy</StyledHeader>
          <p></p>
          <p></p>
          <StyledText>
            We plan on taking a classic model and adding a fresh spin on it. By using our treasury to invest in Small
            Caps, NFTs, and incubate new and innovative ideas. We also engage in consistent Buyback and burns and
            community events.
          </StyledText>
        </div>
        <div style={{ position: 'relative', bottom: 75 }} className={'flexbox-container'}>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard
              style={{ marginRight: 15, maxWidth: 100, maxHeight: 150, width: 100, height: 100, marginTop: 20 }}
            >
              <div style={{ marginTop: 15 }}>
                <img className={'card-icon'} alt="icon" src={Card_ChartIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: '18px', position: 'relative', right: 10, top: 15 }}>
                  Incubation
                </h1>
                <p style={{ color: '#ffffff', fontSize: '14px' }}>
                  Offering our unique expertise to create game-changing projects
                </p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </div>
            </PurpleCard>
          </div>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard style={{ maxWidth: 100, maxHeight: 100, width: 100, height: 100 }}>
              <div style={{ marginTop: 15 }}>
                <img className={'card-icon'} alt="icon" src={Card_BubbleIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: '18px', top: 15, position: 'relative' }}>NFTS</h1>
                <p style={{ color: '#ffffff', fontSize: '14px' }}> We search for the best in quality NFTs available</p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </div>
            </PurpleCard>
          </div>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard style={{ marginLeft: 15, maxWidth: 100, maxHeight: 100, width: 100, height: 250 }}>
              <div style={{ marginTop: 15 }}>
                <img className={'card-icon'} alt="icon" src={Card_GraphIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: '18px', top: 15, position: 'relative' }}>Small Caps</h1>
                <p style={{ color: '#ffffff', fontSize: '14px' }}>
                  Investing in the Hottest early stage crypto Ventures
                </p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </div>
            </PurpleCard>
          </div>
        </div>
      </>
    )
  else
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
              <PurpleCard
                style={{ marginRight: 25, maxWidth: 250, maxHeight: 250, width: 250, height: 250, marginTop: 20 }}
              >
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
              <PurpleCard style={{ maxWidth: 250, maxHeight: 250, width: 250, height: 250, marginTop: 20 }}>
                <div style={{ marginTop: 25 }}>
                  <img className={'card-icon'} alt="icon" src={Card_BubbleIcon}></img>
                  <h1 style={{ color: '#ffffff', fontSize: '22px' }}>NFTS</h1>
                  <p style={{ color: '#ffffff', fontSize: '14px' }}>
                    {' '}
                    We search for the best in quality NFTs available
                  </p>
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                </div>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                style={{ marginLeft: 25, maxWidth: 250, maxHeight: 250, width: 250, height: 250, marginTop: 20 }}
              >
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
