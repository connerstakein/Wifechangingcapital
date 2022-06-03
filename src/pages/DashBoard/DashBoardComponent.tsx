import './styles.css'

import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import Path20 from '../../assets/images/Path20.png'
import Path23 from '../../assets/images/Path23.png'
import { PurpleCard } from '../../components/Card'
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
      return (
        <>
          <Headernew></Headernew>
          <p style={{ paddingTop: '5vh', marginTop: '5vh', marginBottom: '2vh' }}></p>

          <div style={{ justifyContent: 'center' }}>
            <img className={'testimage'} alt="header" src={Path23}></img>
            <StratSection></StratSection>
          </div>

          <Companytest></Companytest>

          <img className={'testbottomimage'} alt="header" src={Path20}></img>
          <p style={{ paddingTop: '10vh', marginTop: '10vh' }}></p>

          <Footer></Footer>
        </>
      )
    }
  }
}
