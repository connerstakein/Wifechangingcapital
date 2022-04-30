import './styles.css'

import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import footer_background from '../../assets/images/footer_background.png'
import Path20 from '../../assets/images/Path20.png'
import Path23 from '../../assets/images/Path23.png'
import { PurpleCard, TransparentCard } from '../../components/Card'
import { isMobile } from '../../utils/userAgent'
import Companytest from './CitySection'
import Footer from './Footer'
import Headernew from './Newheader'
import StratSection from './Strategy'

export default function DashBoardComponent() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)
  const StyledText = styled.text`
    font-size: 20px;
    text-color: #ffffff;
  `
  if (isNotOnMainnet) {
    return (
      <PurpleCard
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {' '}
        <div className={'whitetext'}>
          <StyledText style={{ justifyContent: 'center', marginTop: '20px' }}>
            {' '}
            Please Connect to Ethereum Mainnet
          </StyledText>{' '}
        </div>
      </PurpleCard>
    )
  } else {
    if (showConnectAWallet) {
      return (
        <PurpleCard
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          {' '}
          <div className={'whitetext'}>
            <StyledText style={{ justifyContent: 'center', marginTop: '20px' }}>
              {' '}
              Connect a wallet to continue{' '}
            </StyledText>{' '}
          </div>
        </PurpleCard>
      )
    } else {
      if (isMobile) {
        return (
          <>
            {' '}
            <Headernew></Headernew>
            <p style={{ paddingTop: '20px', marginTop: '20px', marginBottom: '20px' }}></p>
            <StratSection></StratSection>
            <p style={{ paddingTop: '20px', marginTop: '20px', marginBottom: '20px' }}></p>
            <Companytest></Companytest>
            <p style={{ paddingTop: '20px', marginTop: '20px', marginBottom: '20px' }}></p>
          </>
        )
      } else {
        return (
          <>
            <Headernew></Headernew>
            <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
            <div className={'testimage'} style={{ backgroundImage: `url(${Path23})`, width: '100vw' }}>
              <div style={{ justifyContent: 'center' }}>
                <StratSection></StratSection>
              </div>
            </div>
            <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
            <div className={'testbottomimage'} style={{ backgroundImage: `url(${Path20})`, width: '100vw' }}>
              <Companytest></Companytest>
            </div>
            <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
            <TransparentCard></TransparentCard>
            <div
              className={'testimage'}
              style={{
                backgroundImage: `url(${footer_background})`,
                width: '100vw',
                height: '40vh',
                maxHeight: '40vh',
              }}
            >
              <Footer></Footer>
            </div>
          </>
        )
      }
    }
  }
}
