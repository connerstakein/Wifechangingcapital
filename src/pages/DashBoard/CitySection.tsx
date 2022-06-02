import React from 'react'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import Group_6375 from '../../assets/images/Group_6375.png'

const Companytest = () => {
  return (
    <>
      <div style={{ paddingTop: '40vh' }} className={'flexbox-container'}>
        <div className={'flexbox-container'}>
          <img className={'CityImage'} src={Group_6375} alt="header"></img>
          <div className={'mobileformatting'}>
            <div style={{ marginLeft: '50px', marginTop: '100px' }} className={'vertical-align-middle'}>
              <div style={{ justifyContent: 'right' }} className={'flexbox-container'}>
                <div style={{ justifyContent: 'center' }} className={'flexbox--vertical-container'}>
                  <p style={{ textAlign: 'center' }}>
                    {' '}
                    <h1 style={{ fontFamily: 'Montserrat, Sans-serif' }}> Wife Changing Capital </h1>
                  </p>
                  <p
                    style={{
                      textAlign: 'center',
                      maxWidth: '500px',
                      fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                      fontFamily: 'Lato, Sans-serif',
                    }}
                  >
                    We are for those who seek high rewards. For those who want nudes not nodes. For fast cars, not
                    farmers on tractors. IF you think this applies to you, this is where you belong.
                    <div className={'flexbox-container'}>
                      <div className={'flexbox--vertical-container'}>
                        <div style={{ marginLeft: '75px', textAlign: 'left', justifyContent: 'left' }}>
                          <h2 style={{ justifyContent: 'left', textAlign: 'left', marginRight: '50px' }}> 100M </h2>{' '}
                          <p
                            style={{
                              textAlign: 'left',
                              marginRight: '50px',
                              fontSize: 'calc(3.5 * (0.20vw + 0.20vh))',
                            }}
                          >
                            {' '}
                            Total Supply{' '}
                          </p>
                        </div>
                      </div>

                      <div
                        style={{ textAlign: 'center', marginRight: '50px' }}
                        className={'flexbox--vertical-container'}
                      >
                        <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                          <h2 style={{ justifyContent: 'center', textAlign: 'center' }}> 7%</h2>{' '}
                          <p style={{ textAlign: 'center', fontSize: 'calc(3.5 * (0.20vw + 0.20vh))' }}>
                            {' '}
                            Treasury tax{' '}
                          </p>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }} className={'flexbox--vertical-container'}>
                        <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                          <h2 style={{ justifyContent: 'center', textAlign: 'center' }}> 7% </h2>{' '}
                          <p style={{ textAlign: 'right', fontSize: 'calc(3.5 * (0.20vw + 0.20vh))' }}>
                            {' '}
                            Supply Burned{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </p>

                  <h2 style={{ textAlign: 'left', fontFamily: 'Montserrat, Sans-serif' }}> Treasury </h2>
                  <p
                    style={{
                      maxWidth: '400px',
                      textAlign: 'left',
                      fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                      fontFamily: 'Lato , Sans-serif',
                    }}
                  >
                    {' '}
                    We will utilize our buy and sell tax to make strategic investments in projects that meet our
                    criteria for growth
                  </p>
                  <h2 style={{ textAlign: 'left', fontFamily: 'Montserrat, Sans-serif' }}> Wife Finding App</h2>
                  <p
                    style={{
                      maxWidth: '400px',
                      textAlign: 'left',
                      fontSize: 'calc(3.5 * (0.25vw + 0.25vh))',
                      fontFamily: 'Lato, Sans-serif',
                    }}
                  >
                    {' '}
                    Were developing a Gamefi Dating App involving NFTs, Matchmaking and fun that will help you find your
                    new Wife{' '}
                  </p>

                  <div
                    style={{ justifyContent: 'center', marginBottom: '40px' }}
                    className="flexbox-vertical-container"
                  >
                    <button
                      onClick={() =>
                        window.open(
                          'https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec',
                          '_blank'
                        )
                      }
                      style={{ justifyContent: 'center' }}
                      className={'styledbuybuttonbottom'}
                    >
                      {' '}
                      Buy on Uniswap{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Companytest
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
