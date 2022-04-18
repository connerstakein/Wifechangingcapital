import './styles.css'
import 'animate.css'

import { PurpleCard } from 'components/Card'
import React from 'react'
import styled from 'styled-components/macro'

import coin from '../../assets/images/coin.png'
import { isMobile } from '../../utils/userAgent'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const BuyButton = styled.button`
  border-style: solid;
  border-width: 1px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  color: #ffffff;
  margin-top: 15px;
  margin-right: 40px;
  background-color: #330a63;
  border-color: rgba(255, 255, 255, 0.582);
  border-radius: 10px;
  min-width: 45%;
  max-width: 45%;
  padding: 8px 35px;
  :hover {
    border-style: solid;
    border-width: 2px;
    border-radius: 12px;
  }
`

const TelegramButton = styled.button`
  border-style: solid;
  border-width: 1px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  color: #ffffff;
  margin-top: 15px;
  justify-content: 'right';
  background-color: #330a63;
  border-color: rgba(255, 255, 255, 0.582);
  border-radius: 10px;
  min-width: 45%;
  max-width: 45%;
  padding: 8px 35px;
  :hover {
    border-style: solid;
    border-width: 2px;
    border-radius: 12px;
  }
`
const StyledCardText = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-family: 'Lato', Sans-serif;
  color: #ffffff;
  font-weight: bold;
`
const StyledHeaderText1 = styled.text`
  font-size: 48px;
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
`
const StyledHeaderText2 = styled.text`
  font-size: 48px;
  color: #f821ff;
  font-weight: bold;
  position: relative;
  left: 15px;
  font-family: 'Montserrat', Sans-serif;
`
const StyledImg = styled.img`
  justify-content: 'center';
  mergin-right: '50px';
`
const Headernew = () => {
  if (isMobile)
    return (
      <>
        <div className={'animate__animated animate__backInRight'}>
          <div className={'flexbox-vertical-container'}>
            <div style={{ justifyContent: 'center' }}>
              <StyledImg
                style={{
                  paddingBottom: 10,
                  alignItems: 'center',
                  float: 'left',
                  width: 300,
                  position: 'relative',
                  left: 50,
                  height: 300,
                  alignSelf: 'center',
                }}
                src={coin}
                alt="header"
              ></StyledImg>
            </div>
            <div style={{ marginTop: '80px' }} className="flexbox-vertical-container">
              <div className="flexbox-vertical-container">
                <div className="flexbox-container">
                  <StyledHeaderText1> Change your</StyledHeaderText1> <StyledHeaderText2>wife</StyledHeaderText2>
                </div>
                <div className="flexbox-container">
                  <StyledHeaderText1> Change your</StyledHeaderText1> <StyledHeaderText2>life</StyledHeaderText2>
                </div>
              </div>
              <p style={{ fontFamily: 'Lato, Sans-serif' }}>
                {' '}
                Come with us on a journey to change your life, and if you need to along the way you could just change
                your wife
              </p>
              <PurpleCard>
                <div className="flexbox-container">
                  <div className="flexbox-vertical-container" style={{ marginRight: 30, marginLeft: 30 }}>
                    <StyledCardText>100M</StyledCardText>
                    <StyledCardText>Token Supply</StyledCardText>
                  </div>
                  <div className="flexbox-vertical-container" style={{ marginRight: 30 }}>
                    <StyledCardText>6%</StyledCardText>
                    <StyledCardText>Total Supply Burned</StyledCardText>
                  </div>
                  <div className="flexbox-vertical-container" style={{ marginRight: 45 }}>
                    <StyledCardText>14%</StyledCardText>
                    <StyledCardText> Total Tax</StyledCardText>
                  </div>
                </div>
              </PurpleCard>
              <div className="flexbox-container">
                <BuyButton
                  onClick={() =>
                    window.open(
                      'https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec',
                      '_blank'
                    )
                  }
                >
                  {' '}
                  Buy On Uniswap
                </BuyButton>
                <TelegramButton onClick={() => window.open('https://t.me/WCCPortal', '_blank')}>
                  {' '}
                  Telegram
                </TelegramButton>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  else
    return (
      <>
        <div className={'animate__animated animate__backInRight'}>
          <div className={'flexbox-container'}>
            <div style={{ justifyContent: 'right', marginRight: '50px' }}>
              <StyledImg
                style={{
                  paddingBottom: 10,
                  alignItems: 'right',
                  float: 'left',
                  width: '40vw',
                  height: '80vh',
                  alignSelf: 'right',
                }}
                src={coin}
                alt="header"
              ></StyledImg>
            </div>
            <div style={{ marginTop: '80px' }} className="flexbox-vertical-container-left">
              <div className="flexbox-container-left">
                <div className="flexbox-container">
                  <StyledHeaderText1> Change your</StyledHeaderText1> <StyledHeaderText2>wife</StyledHeaderText2>
                </div>
                <div className="flexbox-container">
                  <StyledHeaderText1> Change your</StyledHeaderText1> <StyledHeaderText2>life</StyledHeaderText2>
                </div>
              </div>
              <p>
                {' '}
                Come with us on a journey to change your life, and if you need to along the way you could just change
                your wife
              </p>
              <PurpleCard>
                <div className="flexbox-container">
                  <div className="flexbox-vertical-container" style={{ marginRight: 30, marginLeft: 30 }}>
                    <StyledCardText>100M</StyledCardText>
                    <StyledCardText>Token Supply</StyledCardText>
                  </div>
                  <div className="flexbox-vertical-container" style={{ marginRight: 30 }}>
                    <StyledCardText>6%</StyledCardText>
                    <StyledCardText>Total Supply Burned</StyledCardText>
                  </div>
                  <div className="flexbox-vertical-container" style={{ marginRight: 45 }}>
                    <StyledCardText>14%</StyledCardText>
                    <StyledCardText> Total Tax</StyledCardText>
                  </div>
                </div>
              </PurpleCard>
              <div className="flexbox-container">
                <BuyButton
                  onClick={() =>
                    window.open(
                      'https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec',
                      '_blank'
                    )
                  }
                >
                  {' '}
                  Buy On Uniswap
                </BuyButton>
                <TelegramButton onClick={() => window.open('https://t.me/WCCPortal', '_blank')}>
                  {' '}
                  Telegram
                </TelegramButton>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
export default Headernew
