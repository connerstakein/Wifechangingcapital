<div className={'flexbox-vertical-container'}>
<TreasuryCard style={{ marginTop: '30px' }}>
  <div style={{ marginTop: '30px' }} className={'whitetext'}>
    <div className="flexbox-container-align">
      <div style={{ marginRight: '3vw' }}>Date</div>
      <div style={{ marginRight: '0px' }}>Token</div>
      <div style={{ marginRight: '5px' }}>Amount($)</div>
      <div style={{ marginRight: '10px' }}>Entry Price</div>
      <div style={{ marginRight: '10px' }}>Tokens</div>
      <div style={{ marginRight: '65px' }}>Profit %</div>
    </div>
  </div>
  <div className={'darktext'}>
    <div className="flex-container">
      <h4 style={{ marginLeft: '10px' }}> 2022-04-22 </h4>
      <div style={{ marginLeft: '3vw' }}>SATS</div>
      <div>$2,800 </div>
      <div>$0.0256</div>
      <div>110,056</div>
      <div>
        {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
        {SATSPrice}%
      </div>
      <StyledExternalLink className={'six'} href={SATSChartURL}>
        <p
          style={{
            backgroundColor: '#a675c8',
            height: '35px',
            width: '100px',
            boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
            border: '1px solid',
            fontWeight: 'bold',
            fontSize: '18px',
            textAlign: 'center',
            alignItems: 'center',
            borderColor: '#000000',
            lineHeight: '35px',
            borderRadius: '5px',
            margin: '10px',
          }}
        >
          Chart
          <img
            src={TreasuryChartIcon}
            style={{ width: '30px', height: '30px', float: 'right' }}
            alt="icon"
          ></img>
        </p>
      </StyledExternalLink>
    </div>
    <p></p>
    <div className="flex-container">
      <h4 style={{ marginLeft: '10px' }}> 2022-04-02</h4>
      <div style={{ marginLeft: '3vw' }}>MRI</div>
      <div>$4,622.99</div>
      <div>$0.063</div>
      <div>89,465</div>
      <div>
        {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
        {MRIPriceInProfit}%
      </div>
      <StyledExternalLink id={'charts-nav-link'} href={MRIChartURL}>
        <p
          style={{
            backgroundColor: '#a675c8',
            height: '35px',
            width: '100px',
            boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
            border: '1px solid',
            fontWeight: 'bold',
            fontSize: '18px',
            textAlign: 'center',
            alignItems: 'center',
            borderColor: '#000000',
            lineHeight: '35px',
            borderRadius: '5px',
            margin: '10px',
          }}
        >
          Chart
          <img
            src={TreasuryChartIcon}
            style={{ width: '30px', height: '30px', float: 'right' }}
            alt="icon"
          ></img>
        </p>
      </StyledExternalLink>
    </div>
    <p></p>
    <div className="flex-container">
      <h4 style={{ marginLeft: '10px' }}> 2022-04-05</h4>
      <div style={{ marginLeft: '3vw' }}>Stilton</div>
      <div>$3,448.00 </div>
      <div>$0.000002588</div>
      <div> 1.33 billion</div>
      <div>
        {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
        {StiltPriceInProfit}%
      </div>
      <StyledExternalLink id={'charts- nav-link'} href={StiltonChartURL}>
        <p
          style={{
            backgroundColor: '#a675c8',
            height: '35px',
            width: '100px',
            boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.3)',
            border: '1px solid',
            fontWeight: 'bold',
            fontSize: '18px',
            textAlign: 'center',
            alignItems: 'center',
            borderColor: '#000000',
            lineHeight: '35px',
            borderRadius: '5px',
            margin: '10px',
          }}
        >
          Chart
          <img
            src={TreasuryChartIcon}
            style={{ width: '30px', height: '30px', float: 'right' }}
            alt="icon"
          ></img>
        </p>
      </StyledExternalLink>
    </div>
    <p></p>
    <p></p>
    <TransparentCard></TransparentCard>
    <div className={'flexbox-container'}>
      <div className={'treasury-card'}>
        <h4 style={{ paddingLeft: '1vw' }}>Trade Balance</h4>
        <div style={{ marginLeft: '12vw' }}>$8,652</div>
      </div>
      <div className={'treasury-card'} style={{ marginLeft: '5vw' }}>
        <h4 style={{ paddingLeft: '1vw' }}>USDC Balance</h4>
        <div style={{ marginLeft: '12vw' }}>$66,642</div>
      </div>
    </div>
    <p></p>
    <div className={'flexbox-container'}>
      <div className={'treasury-card'}>
        <p style={{ paddingLeft: '1vw' }}>ETH Balance</p>
        <div style={{ marginLeft: '12vw' }}>$1,653</div>
      </div>
      <div className={'treasury-card'} style={{ marginLeft: '5vw' }}>
        <h4 style={{ paddingLeft: '1vw' }}>Total Balance</h4>
        <div style={{ marginLeft: '12vw' }}>$76,947</div>
      </div>
    </div>