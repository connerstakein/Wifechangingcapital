import './styles.css'
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import 'animate.css'

import useScrollPosition from '@react-hook/window-scroll'
import { PurpleCard } from 'components/Card'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
import styled from 'styled-components/macro'

import Card_BubbleIcon from '../../assets/images/Card_BubbleIcon.png'
import Card_ChartIcon from '../../assets/images/Card_ChartIcon.png'
import Card_GraphIcon from '../../assets/images/Card_GraphIcon.png'
import Line_pic from '../../assets/images/Line_pic.png'

const StyledHeader = styled.text`
  font-size: calc(3.5 * (0.45vw + 0.45vh));
  color: #ffffff;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  text-align: center;
`

const StratSection = () => {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 10) {
        return sethidden(true)
      } else {
        try {
          return sethidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
  }, [ScrollY])
  return (
    <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
      <div style={{ paddingTop: '15vh' }} className={'flexbox-vertical-container-max-width'}>
        <div className={'contentcenter'}>
          {' '}
          <StyledHeader>Treasury Strategy</StyledHeader>
          <p></p>
          <p></p>
          <p
            style={{
              textAlign: 'center',
              maxWidth: '70vw',
              fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
              textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
              justifyContent: 'center',
            }}
          >
            We plan on taking a classic model and adding a fresh spin on it. By using our treasury to invest in Small
            Caps, NFTs, and incubate new and innovative ideas. We also engage in consistent Buyback and burns and
            community events.
          </p>
          <p></p>
          <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                style={{
                  maxWidth: '20vw',
                  maxHeight: '30vh',
                  width: '20vw',
                  minWidth: '10vw',
                  marginRight: '2vw',
                  height: '30vh',
                  marginTop: 20,
                }}
              >
                <img className={'card-icon'} alt="icon" src={Card_ChartIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.35vw + 0.35vh))' }}> Incubation</h1>
                <p style={{ color: '#ffffff', fontSize: 'calc(3 * (0.25vw + 0.25vh))' }}>
                  Offering our unique experience to create game-changing projects{' '}
                </p>
                <img style={{ paddingBottom: '2.5vh' }} className={'img-size'} src={Line_pic} alt="line"></img>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                style={{
                  maxWidth: '20vw',
                  maxHeight: '30vh',
                  minWidth: '10vw',
                  minHeight: '5vw',
                  width: '20vw',
                  height: '30vh',
                  marginTop: 20,
                  marginRight: '2vw',
                }}
              >
                <img className={'card-icon'} alt="icon" src={Card_BubbleIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.35vw + 0.35vh))' }}>NFTS</h1>
                <p style={{ color: '#ffffff', fontSize: 'calc(3 * (0.25vw + 0.25vh))' }}>
                  {' '}
                  We search for the best in quality NFTS available
                </p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </PurpleCard>
            </div>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                style={{
                  maxWidth: '20vw',
                  maxHeight: '30vh',
                  minWidth: '10vw',
                  width: '20vw',
                  marginRight: '1vw',
                  height: '30vh',
                  marginTop: 20,
                }}
              >
                <img className={'card-icon'} alt="icon" src={Card_GraphIcon}></img>
                <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.35vw + 0.35vh))' }}>Small-Caps</h1>
                <p style={{ color: '#ffffff', fontSize: 'calc(3 * (0.25vw + 0.25vh))' }}>
                  Investing in the hottest early stage crypto ventures
                </p>
                <img className={'img-size'} src={Line_pic} alt="line"></img>
              </PurpleCard>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}
export default StratSection
