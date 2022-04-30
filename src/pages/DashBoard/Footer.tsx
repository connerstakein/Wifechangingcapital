import './styles.css'

import WifeChangingCapital_Logo from '../../assets/images/WifeChangingCapital_Logo.png'

export default function FooterMenu() {
  return (
    <div className={'flexbox-container'}>
      <img
        src={WifeChangingCapital_Logo}
        alt="logo"
        style={{ paddingLeft: '8vw', marginLeft: '5vw', marginRight: '12vw', maxHeight: '18vw', height: '18vw' }}
      ></img>
      <div style={{ textAlign: 'center', maxWidth: '12vw', width: '12vw', marginRight: '20vw' }}>
        <h3 style={{ color: '#ffffff', fontFamily: 'montserrat, sans-serif' }}>Wife Changing Capital</h3>
        <p style={{ color: '#ffffff', fontSize: '16px', lineHeight: 1.3, fontFamily: 'montserrat, sans-serif' }}>
          We offer a breath of fresh air and plan to outcompete all other capital projects
        </p>
        <div
          className={'flexbox-vertical-container'}
          style={{ lineHeight: 2.5, textAlign: 'center', justifyContent: 'center', display: 'flex' }}
        >
          <a
            className={'four'}
            href="https://twitter.com/WifeChangingcap"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'montserrat, sans-serif' }}
          >
            Twitter
          </a>
          <a
            className={'four'}
            href="https://www.facebook.com/WifeChangingCapital"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'montserrat, sans-serif' }}
          >
            Facebook
          </a>
        </div>
      </div>
      <div>
        <h3 style={{ color: '#ffffff', fontFamily: 'montserrat, sans-serif' }}>Company Links</h3>
        <div
          className={'flexbox-vertical-container'}
          style={{ textAlign: 'left', maxWidth: '5vw', width: '5vw', marginRight: '18vw', lineHeight: 3.5 }}
        >
          <a
            className={'four'}
            href="https://www.wifechanging.capital/"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'montserrat, sans-serif' }}
          >
            Website
          </a>
          <a
            className={'four'}
            href="https://t.me/WCCPortal"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'montserrat, sans-serif' }}
          >
            Telegram
          </a>
          <a
            className={'four'}
            href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'montserrat, sans-serif' }}
          >
            Uniswap
          </a>
          <a
            className={'four'}
            href="https://etherscan.io/token/0xc6ef330d0cf66fdfb61c2eb904e90e4e67e401ec#readContract"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'montserrat, sans-serif' }}
          >
            Contract
          </a>
        </div>
      </div>
    </div>
  )
}
