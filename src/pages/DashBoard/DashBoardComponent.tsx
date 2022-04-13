import './styles.css'

import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import Path20 from '../../assets/images/Path20.png'
import Path23 from '../../assets/images/Path23.png'
import { PurpleCard } from '../../components/Card'
import { isMobile } from '../../utils/userAgent'
import Companytest from './CitySection'
import Headernew from './Newheader'
import StratSection from './Strategy'
import UserTokenBalance from './UserTokenBalance'
//import NFTtable from './NFT'
//import ClaimTransaction from './ClaimTransaction'
//import UserTokenStats from './Userstats'
//import CompanyMetrics from "../../components/CompanyMetrics"
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
          <StyledText style={{ justifyContent: 'center' }}> Please Connect to Ethereum Mainnet</StyledText>{' '}
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
            <StyledText style={{ justifyContent: 'center' }}> Connect a wallet to continue </StyledText>{' '}
          </div>
        </PurpleCard>
      )
    } else {
      if (isMobile) {
        return (
          <>
            {' '}
            <Headernew></Headernew>
            <StratSection></StratSection>
            <p style={{ marginTop: '20px', marginBottom: '20px' }}></p>
            <Companytest></Companytest>
            <UserTokenBalance></UserTokenBalance>
          </>
        )
      } else {
        return (
          <>
            <Headernew></Headernew>
            <div className={'testimage'} style={{ backgroundImage: `url(${Path23})`, width: '100vw' }}>
              <div style={{ justifyContent: 'center' }}>
                <StratSection></StratSection>
              </div>
            </div>
            <div className={'testbottomimage'} style={{ backgroundImage: `url(${Path20})`, width: '100vw' }}>
              <Companytest></Companytest>
            </div>
            <UserTokenBalance></UserTokenBalance>
          </>
        )
      }
    }
  }
}
