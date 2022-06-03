import { PurpleCard } from 'components/Card'
import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import Treasurysectionnew from './NewTreasury'

export default function Treasury() {
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
      return <Treasurysectionnew></Treasurysectionnew>
    }
  }
}
