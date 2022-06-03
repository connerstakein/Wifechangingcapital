import '../DashBoard/styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider } from '@ethersproject/providers'
import { formatUnits } from '@ethersproject/units'
//import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import TreasuryChartIcon from 'assets/images/treasury-chart-icon.png'
import { LightPurpleCard, PurpleCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'

//import { useTransition } from 'react-spring'
import Assets_icon from '../../assets/images/Assets_icon.png'
import Currency_icon from '../../assets/images/Currency_icon.png'
import Line_pic from '../../assets/images/Line_pic.png'
import Wallet_icon from '../../assets/images/Wallet_icon.png'
export default function Treasurysectionnew() {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const [EthBalance, setEthBalance] = useState(Number)
  const [UsdcBalance, setUsdcBalance] = useState(Number)
  const [SATSPrice, setSATSPrice] = useState(Number)
  const [holders, setholders] = useState(Number)
  // const [DoggerPrice, setDoggerPrice] = useState(Number)
  const [StiltPrice, setStiltPrice] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [loading, setLoading] = useState(true)

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  useEffect(() => {
    async function FetchReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve0 = await Price._reserve0
        const DisplayReserve0 = Reserve0.toString()
        console.log(DisplayReserve0)
        return DisplayReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        //const provider = new Web3Provider(library.provider)
        const provider = getDefaultProvider()
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve1 = await Price._reserve1
        const Reserve1display = Reserve1.toString()
        return Reserve1display
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }

    async function FetchSATSPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.dev.dex.guru/v1/chain/1/tokens/0xa010e37405eb57437a381daae88e5c3913d0796c/market/?api-key=0VQUJ1cmVs0-n0pj_OhrzjCPO1NDKDGzpAuh7OTQZuI'
        ) // Api Key also the pair contract

        const data = await response.json()
        const price = await data.price_usd
        const SATSPrice = price
        return SATSPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function FetchStiltPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0x06fcbf38e823efc1e609b9491AaB546334c6ee69?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract
        const data = await response.json()
        const StiltPrice = data.price.rate
        return StiltPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchEthAmount() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getAddressInfo/0x167B89bc4C2B56e963E2980d8e49D74a49E0A441?token=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const usdc = await data.ETH.balance
        return usdc
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function FetchUSDCAmount() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getAddressInfo/0x167B89bc4C2B56e963E2980d8e49D74a49E0A441?token=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const usdc = await data.tokens[0].balance
        console.log(usdc)
        return usdc
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    async function FetchHolders() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api.ethplorer.io/getTokenInfo/0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec?apiKey=EK-pHhzD-K23vfE9-d9bYq'
        ) // Api Key also the pair contract

        const data = await response.json()
        const holders = data.holdersCount
        return holders
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    FetchReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve1(result))

    FetchEthAmount()
      .then((result) => result.toString())
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setEthBalance(result))
    FetchUSDCAmount()
      .then((result) => result.toString())
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setUsdcBalance(result))

    FetchReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve0(result))

    FetchSATSPrice().then((result) => setSATSPrice(result))

    FetchHolders().then((result) => setholders(result))
    //FetchDoggerPrice().then((result) => setDoggerPrice(result))
    FetchStiltPrice().then((result) => setStiltPrice(result))
  }, [account, showConnectAWallet, library.provider])

  const WifePrice = Reserve0 / Reserve1
  const WifePriceinUsd = WifePrice / 1000000
  const StiltPriceCalc = StiltPrice / 0.000002588 - 1
  const StiltPriceInProfit = (StiltPriceCalc * 100).toFixed(2)
  console.log(StiltPriceInProfit)
  const Marketcap = WifePriceinUsd * 100000000 // essentially jpegusd price divided by total supply
  //const MarketCap = Marketcap.toLocaleString()

  const SATSPriceCalc = SATSPrice / 0.02568
  const SATSPriceInProfit = (SATSPriceCalc * 10).toFixed(2)

  const ReserveBinusd = WifePriceinUsd * Reserve1
  const reserve0value = Reserve0 / 1000000
  const Totalliquidity = reserve0value + ReserveBinusd
  const TotalLiquidity = Totalliquidity.toLocaleString()

  function formatMoney(n: any) {
    return '$ ' + (Math.round(n * 100) / 100).toLocaleString()
  }
  function numberWithCommas(num: any) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const USDCFormatting = (UsdcBalance / 10 ** 6).toFixed(2)
  const USDCdisplay = numberWithCommas(USDCFormatting)
  const n = numberWithCommas(Totalliquidity)
  const MarketCap = formatMoney(Marketcap)

  // const DoggerChartURL = 'https://www.dextools.io/app/ether/pair-explorer/0x6c8ae94331d7f9bf7a1f3e0b1480ccfd46d1a723'
  console.log(n)

  return (
    <>
      <div className={'flexbox-vertical-container'}>
        <h1> Treasury</h1>
        <div className={'flexbox-container'}>
          <div className={'center-icon'}>
            <LightPurpleCard style={{ maxWidth: '6vw', maxHeight: '12vh', width: '6vw', height: '12vh' }}>
              <img style={{ maxWidth: '4vw', maxHeight: '10vh' }} src={Assets_icon} alt="Assets"></img>
            </LightPurpleCard>
          </div>
          <div className={'MarketCap'}>
            <LightPurpleCard style={{ maxWidth: '6vw', maxHeight: '12vh', width: '6vw', height: '12vh' }}>
              <img style={{ maxWidth: '4vw', maxHeight: '10vh' }} src={Currency_icon} alt="Currency"></img>
            </LightPurpleCard>
          </div>
          <div className={'Wallet'}>
            <LightPurpleCard style={{ maxWidth: '6vw', maxHeight: '12vh', width: '6vw', height: '12vh' }}>
              <img style={{ maxWidth: '4vw', maxHeight: '10vh' }} src={Wallet_icon} alt="Walletimg"></img>
            </LightPurpleCard>
          </div>
        </div>
      </div>
      <div className="flexbox-vertical-container">
        <div className={'flexbox-container'}>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard style={{ maxWidth: '22vw', maxHeight: '30vh', width: '22vw', height: '30vh', minWidth: '5vw' }}>
              <div style={{ marginTop: 25 }}>
                <h2 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.4vw + 0.4vh))', textAlign: 'right' }}>
                  Liquidity
                </h2>
                <div hidden={loading}>
                  {' '}
                  <h2 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.4vw + 0.4vh))', textAlign: 'right' }}>
                    {TotalLiquidity}
                  </h2>
                </div>
                {loading ? (
                  <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                ) : (
                  ''
                )}
                <img className={'img-size'} src={Line_pic} alt="line"></img>
                <p></p>
              </div>
            </PurpleCard>
          </div>
          <div className={'flexbox-vertical-container'}>
            <PurpleCard
              style={{
                maxWidth: '22vw',
                maxHeight: '30vh',
                width: '22vw',
                height: '30vh',
                marginLeft: 50,
                minWidth: '5vw',
              }}
            >
              <div style={{ marginTop: 25 }}>
                <h2 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.4vw + 0.4vh))', textAlign: 'right' }}>Holders</h2>
                <div hidden={loading}>
                  <h2 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.4vw + 0.4vh))', textAlign: 'right' }}>
                    {holders}
                  </h2>
                </div>
                {loading ? (
                  <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                ) : (
                  ''
                )}
                <img className={'img-size'} src={Line_pic} alt="line"></img>
                <p></p>
              </div>
            </PurpleCard>
          </div>
          <div className={'flexibletext'}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard
                style={{
                  marginLeft: 50,
                  maxWidth: '22vw',
                  maxHeight: '30vh',
                  minWidth: '5vw',
                  width: '22vw',
                  height: '30vh',
                  fontSize: 'calc(3 * (0.35vw + 0.35vh))',
                }}
              >
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.35vw + 0.35vh))', textAlign: 'right' }}>
                    MarketCap
                  </h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.35vw + 0.35vh))', textAlign: 'right' }}>
                      {MarketCap}
                    </h2>
                  </div>
                  {loading ? (
                    <Spin style={{ position: 'relative', left: 100 }} indicator={antIcon} className="add-spinner" />
                  ) : (
                    ''
                  )}
                  <img className={'img-size'} src={Line_pic} alt="line"></img>
                  <p></p>
                </div>
              </PurpleCard>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <div style={{ overflowX: 'auto', minWidth: '400px' }}>
        <table>
          <tr>
            <th>Date</th>
            <th>Token</th>
            <th>Amount($)</th>
            <th>Entry Price</th>
            <th>Tokens</th>
            <th>Profit %</th>
          </tr>
          <tr>
            <td>2022-04-22</td>
            <td>SATS</td>
            <td>$2,800</td>
            <td>$0.0256</td>
            <td>110,056</td>
            <td>
              {' '}
              {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
              {SATSPriceInProfit}%{' '}
            </td>
            <td style={{ backgroundColor: 'purple' }}>
              {' '}
              <img
                src={TreasuryChartIcon}
                style={{ width: '30px', height: '30px', float: 'left', marginRight: '1vw' }}
                alt="icon"
              ></img>
              <a
                className={'four'}
                href="https://www.dextools.io/app/ether/pair-explorer/0xa010e37405eb57437a381daae88e5c3913d0796c"
                target="_blank"
                rel="noreferrer"
              >
                Chart
              </a>
            </td>
            <p></p>
          </tr>
          <p></p>
        </table>
        <p></p>
      </div>
      <p></p>
      <div className={'myspaceevencontainer'}>
        <div className={'InsideSpaceRightdiv'}>
          <div className={'InsideSpaceRightTextdiv'}>Total Eth</div>
          <div style={{ width: '15vw', borderRadius: '10px' }}>{EthBalance}</div>
        </div>
        <div className={'InsideSpaceRightdiv'}>
          <div className={'InsideSpaceRightTextdiv'}>Treasury</div>
          <div style={{ width: '15vw', borderRadius: '10px' }}> $76,000</div>
        </div>
      </div>
      <p></p>
      <div className={'myspaceevencontainer'}>
        <div className={'InsideSpaceRightdiv'}>
          <div className={'InsideSpaceRightTextdiv'}>Trade Balance</div>
          <div style={{ width: '15vw', borderRadius: '10px' }}> $10,564</div>
        </div>
        <div className={'InsideSpaceRightdiv'}>
          <div className={'InsideSpaceRightTextdiv'}>USDC Balance</div>
          <div style={{ width: '15vw', borderRadius: '10px', paddingRight: '1vh' }}> {USDCdisplay}</div>
        </div>
      </div>
    </>
  )
}
