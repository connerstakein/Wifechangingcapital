import './styles.css'
import 'animate.css'

import { PurpleCard } from 'components/Card'
import React from 'react'
import styled from 'styled-components/macro'

import coin from '../../assets/images/coin.png'

const StyledCardText = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  fontSize: 'calc(3 * (0.325vw + 0.325vh))',
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

const Headernew = () => {
  return (
    <>
      <div className={'animate__animated animate__backInRight'}>
        <div className={'flexbox-container'}>
          <img className={'headerimage'} src={coin} alt="header"></img>
          <div className={'headermobile'}>
            <div style={{ marginTop: '80px' }} className="flexbox-vertical-container-left">
              <div className="flexbox-container-left" style={{ minWidth: '300px' }}>
                <div className="flexbox-container">
                  <StyledHeaderText1> Change your</StyledHeaderText1> <StyledHeaderText2>wife</StyledHeaderText2>
                </div>
                <div className="flexbox-container">
                  <StyledHeaderText1> Change your</StyledHeaderText1> <StyledHeaderText2>life</StyledHeaderText2>
                </div>
              </div>
              <p style={{ textAlign: 'left', maxWidth: '600px' }}>
                {' '}
                Come with us on a journey to change your life, and if you need to along the way you could just change
                your wife
              </p>
              <PurpleCard style={{ width: 'fit-content', maxWidth: '500px' }}>
                <div className="flexbox-container">
                  <div className="flexbox-vertical-container" style={{ marginRight: '2vw', marginLeft: '2vw' }}>
                    <StyledCardText>100M</StyledCardText>
                    <StyledCardText>Token Supply</StyledCardText>
                  </div>
                  <div className="flexbox-vertical-container" style={{ marginRight: '2vw' }}>
                    <StyledCardText>7%</StyledCardText>
                    <StyledCardText>Total Supply Burned</StyledCardText>
                  </div>
                  <div className="flexbox-vertical-container" style={{ marginRight: '2vw' }}>
                    <StyledCardText>14%</StyledCardText>
                    <StyledCardText> Total Tax</StyledCardText>
                  </div>
                </div>
              </PurpleCard>
              <div className="flexbox-container" style={{ justifyContent: 'space-between', maxWidth: '500px' }}>
                <button
                  style={{
                    fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                    fontFamily: 'Montserrat, sans-serif',
                    borderRadius: '10px',
                    marginTop: '30px',
                    width: '15vw',
                    paddingTop: '1vh',
                    paddingBottom: '1vh',
                    backgroundColor: '#330a63',
                    borderColor: 'rgba(255, 255, 255, 0.582)',
                    maxHeight: '5vh',
                  }}
                >
                  <a
                    className={'four'}
                    href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec',
                    '_blank"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Uniswap
                  </a>
                </button>
                <button
                  style={{
                    fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                    fontFamily: 'Montserrat, sans-serif',
                    backgroundColor: '#330a63',
                    borderColor: 'rgba(255, 255, 255, 0.582)',
                    maxHeight: '5vh',
                    width: '15vw',
                    paddingTop: '1vh',
                    paddingBottom: '1vh',
                    borderRadius: '10px',
                    marginTop: '30px',
                  }}
                >
                  <a
                    className={'four'}
                    href="https://t.me/WCCPortal"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 'calc(3 * (0.25vw + 0.25vh))',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    Telegram
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Headernew
