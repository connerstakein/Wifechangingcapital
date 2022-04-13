import './styles.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatUnits } from '@ethersproject/units'
//import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { LightPurpleCard, PurpleCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'

//import { useTransition } from 'react-spring'
import Assets_icon from '../../assets/images/Assets_icon.png'
import Currency_icon from '../../assets/images/Currency_icon.png'
import Line_pic from '../../assets/images/Line_pic.png'
import Wallet_icon from '../../assets/images/Wallet_icon.png'
import { isMobile } from '../../utils/userAgent'
export default function Treasurysectionnew() {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const [userBalance, setuserBalance] = useState(Number)
  //const [claimableBalance, setclaimableBalance] = useState(Number)
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const [holders, setholders] = useState(Number)
  //const [hidden, sethidden] = useState(Boolean)
  //const ScrollY = useScrollPosition()

  //const [MriPrice, setMriPrice] = useState(Number)
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
        const provider = new Web3Provider(library.provider)
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
        const provider = new Web3Provider(library.provider)
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

    FetchReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve0(result))

    FetchHolders().then((result) => setholders(result))
  }, [account, showConnectAWallet, library.provider])

  const WifePrice = Reserve0 / Reserve1
  const WifePriceinUsd = WifePrice / 1000000

  //const wifeprice = WifePriceinUsd.toFixed(5)
  //const Reserve2price = Reserve2math * 1000000
  //const YourBalanceValue = (WifePriceinUsd * userBalance).toFixed(2)
  //const SHIinvestmentValue = SHIPriceinUSD * 2292061013
  //const wifeprice = WifePriceinUsd.toFixed(5)
  const Marketcap = WifePriceinUsd * 100000000 // essentially jpegusd price divided by total supply
  //const MarketCap = Marketcap.toLocaleString()
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

  const n = numberWithCommas(Totalliquidity)
  const MarketCap = formatMoney(Marketcap)

  console.log(n)
  if (isMobile)
    return (
      <>
        <div className={'flexbox-vertical-container'}>
          <div className={'flexbox-vertical-container'}>
            <div className={'center-icon'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Assets_icon} alt="Assets"></img>
              </LightPurpleCard>
            </div>
            <div className={'MarketCap'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Currency_icon} alt="Currency"></img>
              </LightPurpleCard>
            </div>
            <div className={'Wallet'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Wallet_icon} alt="Walletimg"></img>
              </LightPurpleCard>
            </div>
          </div>
        </div>
        <div className="flexbox-vertical-container">
          <div className={'flexbox-vertical-container'}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginRight: 50, maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Liquidity</h2>
                  <div hidden={loading}>
                    {' '}
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{TotalLiquidity}</h2>
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
              <PurpleCard style={{ maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Holders</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{holders}</h2>
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
              <PurpleCard style={{ marginLeft: 50, maxWidth: 300, maxHeight: 200, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>MarketCap</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{MarketCap}</h2>
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
      </>
    )
  else
    return (
      <>
        <div className={'flexbox-vertical-container'}>
          <div className={'flexbox-container'}>
            <div className={'center-icon'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Assets_icon} alt="Assets"></img>
              </LightPurpleCard>
            </div>
            <div className={'MarketCap'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Currency_icon} alt="Currency"></img>
              </LightPurpleCard>
            </div>
            <div className={'Wallet'}>
              <LightPurpleCard style={{ maxWidth: 75, maxHeight: 75, width: 75, height: 75 }}>
                <img className={'card-icon'} src={Wallet_icon} alt="Walletimg"></img>
              </LightPurpleCard>
            </div>
          </div>
        </div>
        <div className="flexbox-vertical-container">
          <div className={'flexbox-container'}>
            <div className={'flexbox-vertical-container'}>
              <PurpleCard style={{ marginRight: 50, maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Liquidity</h2>
                  <div hidden={loading}>
                    {' '}
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{TotalLiquidity}</h2>
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
              <PurpleCard style={{ maxWidth: 400, maxHeight: 250, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>Holders</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{holders}</h2>
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
              <PurpleCard style={{ marginLeft: 50, maxWidth: 300, maxHeight: 200, width: 250, height: 175 }}>
                <div style={{ marginTop: 25 }}>
                  <h2 style={{ color: '#ffffff', fontSize: '18px', textAlign: 'right' }}>MarketCap</h2>
                  <div hidden={loading}>
                    <h2 style={{ color: '#ffffff', fontSize: '22px', textAlign: 'right' }}>{MarketCap}</h2>
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
      </>
    )
}
