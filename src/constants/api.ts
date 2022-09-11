import { APIJson } from '../types';

export const api: APIJson = [
	{
		heading: 'Auth',
		description: '',
		services: [
			{
				title: 'AuthNew',
				description: '',
				permissions: 'admin',
				method: { request: [['write']], response: 'Ynl0ZSBhcnJheQ==' },
			},
			{
				title: 'AuthVerify',
				description: '',
				permissions: 'read',
				method: { request: ['string value'], response: ['write'] },
			},
		],
	},
	{
		heading: 'Beacon',
		description:
			'The Beacon method group contains methods for interacting with the random beacon (DRAND)',
		services: [
			{
				title: 'BeaconGetEntry',
				description:
					'BeaconGetEntry returns the beacon entry for the given filecoin epoch. If the entry has not yet been produced, the call will block until the entry becomes available',
				permissions: 'read',
				method: {
					request: [10101],
					response: {
						Round: 42,
						Data: 'Ynl0ZSBhcnJheQ==',
					},
				},
			},
		],
	},
	{
		heading: 'Chain',
		description:
			'The Chain method group contains methods for interacting with the blockchain, but that do not require any form of state computation.',
		services: [
			{
				title: 'ChainDeleteObj',
				description: 'ChainDeleteObj deletes node referenced by the given CID',
				permissions: 'admin',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {},
				},
			},
			{
				title: 'ChainExport',
				description:
					'ChainExport returns a stream of bytes with CAR dump of chain data. The exported chain data includes the header chain from the given tipset back to genesis, the entire genesis state, and the most recent ‘nroots’ state trees. If oldmsgskip is set, messages from before the requested roots are also not included.',
				permissions: 'read',
				method: {
					request: [
						10101,
						true,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: 'Ynl0ZSBhcnJheQ==',
				},
			},
			{
				title: 'ChainGetBlock',
				description:
					'ChainGetBlock returns the block specified by the given CID.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						Miner: 'f01234',
						Ticket: {
							VRFProof: 'Ynl0ZSBhcnJheQ==',
						},
						ElectionProof: {
							WinCount: 9,
							VRFProof: 'Ynl0ZSBhcnJheQ==',
						},
						BeaconEntries: [
							{
								Round: 42,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						],
						WinPoStProof: [
							{
								PoStProof: 8,
								ProofBytes: 'Ynl0ZSBhcnJheQ==',
							},
						],
						Parents: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
						],
						ParentWeight: '0',
						Height: 10101,
						ParentStateRoot: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						ParentMessageReceipts: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Messages: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						BLSAggregate: {
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						Timestamp: 42,
						BlockSig: {
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						ForkSignaling: 42,
						ParentBaseFee: '0',
					},
				},
			},
			{
				title: 'ChainGetBlockMessages',
				description:
					'ChainGetBlockMessages returns messages stored in the specified block. Note: If there are multiple blocks in a tipset, it’s likely that some messages will be duplicated. It’s also possible for blocks in a tipset to have different messages from the same sender at the same nonce. When that happens, only the first message (in a block with lowest ticket) will be considered for execution NOTE: THIS METHOD SHOULD ONLY BE USED FOR GETTING MESSAGES IN A SPECIFIC BLOCK DO NOT USE THIS METHOD TO GET MESSAGES INCLUDED IN A TIPSET Use ChainGetParentMessages, which will perform correct message deduplication',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						BlsMessages: [
							{
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
						],
						SecpkMessages: [
							{
								Message: {
									Version: 42,
									To: 'f01234',
									From: 'f01234',
									Nonce: 42,
									Value: '0',
									GasLimit: 9,
									GasFeeCap: '0',
									GasPremium: '0',
									Method: 1,
									Params: 'Ynl0ZSBhcnJheQ==',
									CID: {
										'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
									},
								},
								Signature: {
									Type: 2,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
						],
						Cids: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
						],
					},
				},
			},
			{
				title: 'ChainGetGenesis',
				description: 'ChainGetGenesis returns the genesis tipset.',
				permissions: 'read',
				method: {
					request: [],
					response: {
						Cids: null,
						Blocks: null,
						Height: 0,
					},
				},
			},
			{
				title: 'ChainGetMessage',
				description:
					'ChainGetMessage reads a message referenced by the specified CID from the chain blockstore.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						Version: 42,
						To: 'f01234',
						From: 'f01234',
						Nonce: 42,
						Value: '0',
						GasLimit: 9,
						GasFeeCap: '0',
						GasPremium: '0',
						Method: 1,
						Params: 'Ynl0ZSBhcnJheQ==',
						CID: {
							'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
						},
					},
				},
			},
			{
				title: 'ChainGetMessagesInTipset',
				description:
					'ChainGetMessagesInTipset returns message stores in current tipset',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						{
							'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
						},
					],
					response: [
						{
							Cid: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
						},
					],
				},
			},
			{
				title: 'ChainGetNode',
				description: '',
				permissions: 'read',
				method: {
					request: ['string value'],

					response: {
						Cid: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Obj: {},
					},
				},
			},
			{
				title: 'ChainGetParentMessages',
				description:
					'ChainGetParentMessages returns messages stored in parent tipset of the specified block.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: [
						{
							Cid: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
						},
					],
				},
			},
			{
				title: 'ChainGetParentReceipts',
				description:
					'ChainGetParentReceipts returns receipts for messages in parent tipset of the specified block. The receipts in the list returned is one-to-one with the messages returned by a call to ChainGetParentMessages with the same blockCid.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: [
						{
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
					],
				},
			},
			{
				title: 'ChainGetPath',
				description:
					'ChainGetPath returns a set of revert/apply operations needed to get from one tipset to another.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [
						{
							Type: 'string value',
							Val: {
								Cids: null,
								Blocks: null,
								Height: 0,
							},
						},
					],
				},
			},
			{
				title: 'ChainGetRandomnessFromBeacon',
				description:
					'ChainGetRandomnessFromBeacon is used to sample the beacon for randomness.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						2,
						10101,
						'Ynl0ZSBhcnJheQ==',
					],

					response: 'Bw==',
				},
			},
			{
				title: 'ChainGetRandomnessFromTickets',
				description:
					'ChainGetRandomnessFromTickets is used to sample the chain for randomness.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						2,
						10101,
						'Ynl0ZSBhcnJheQ==',
					],

					response: 'Bw==',
				},
			},
			{
				title: 'ChainGetTipSet',
				description:
					'ChainGetTipSet returns the tipset specified by the given TipSetKey.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Cids: null,
						Blocks: null,
						Height: 0,
					},
				},
			},
			{
				title: 'ChainGetTipSetByHeight',
				description:
					'ChainGetTipSetByHeight looks back for a tipset at the specified epoch. If there are no blocks at the specified epoch, a tipset at an earlier epoch will be returned.',
				permissions: 'read',
				method: {
					request: [
						10101,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Cids: null,
						Blocks: null,
						Height: 0,
					},
				},
			},
			{
				title: 'ChainHasObj',
				description:
					'ChainHasObj checks if a given CID exists in the chain blockstore.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: true,
				},
			},
			{
				title: 'ChainHead',
				description: 'ChainHead returns the current head of the chain.',
				permissions: 'read',
				method: {
					request: [],

					response: {
						Cids: null,
						Blocks: null,
						Height: 0,
					},
				},
			},
			{
				title: 'ChainNotify',
				description:
					'ChainNotify returns channel with chain head updates. First message is guaranteed to be of len == 1, and type == ‘current’.',
				permissions: 'read',
				method: {
					request: [],

					response: [
						{
							Type: 'string value',
							Val: {
								Cids: null,
								Blocks: null,
								Height: 0,
							},
						},
					],
				},
			},
			{
				title: 'ChainPutObj',
				description: 'ChainPutObj puts and object into the blockstore',
				permissions: '',
				method: {
					request: [{}],

					response: {},
				},
			},
			{
				title: 'ChainReadObj',
				description:
					'ChainReadObj reads ipld nodes referenced by the specified CID from chain blockstore and returns raw bytes.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: 'Ynl0ZSBhcnJheQ==',
				},
			},
			{
				title: 'ChainSetHead',
				description:
					'ChainSetHead forcefully sets current chain head. Use with caution.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {},
				},
			},
			{
				title: 'ChainStatObj',
				description:
					'ChainStatObj returns statistics about the graph referenced by ‘obj’. If ‘base’ is also specified, then the returned stat will be a diff between the two objects.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: {
						Size: 42,
						Links: 42,
					},
				},
			},
			{
				title: 'ChainTipSetWeight',
				description:
					'ChainTipSetWeight computes weight for the specified tipset.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: '0',
				},
			},
		],
	},
	{
		heading: 'Client',
		description:
			'The Client methods all have to do with interacting with the storage and retrieval markets as a client',
		services: [
			{
				title: 'ClientCalcCommP',
				description:
					'ClientCalcCommP calculates the CommP for a specified file',
				permissions: 'write',
				method: {
					request: ['string value'],
					response: {
						Root: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Size: 1024,
					},
				},
			},
			{
				title: 'ClientCancelDataTransfer',
				description:
					'ClientCancelDataTransfer cancels a data transfer with the given transfer ID and other peer',
				permissions: 'write',
				method: {
					request: [
						3,
						'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						true,
					],
					response: {},
				},
			},
			{
				title: 'ClientCancelRetrievalDeal',
				description:
					'ClientCancelRetrievalDeal cancels an ongoing retrieval deal based on DealID',
				permissions: 'write',
				method: {
					request: [5],
					response: {},
				},
			},
			{
				title: 'ClientDataTransferUpdates',
				description: '',
				permissions: 'write',
				method: {
					request: [],
					response: {
						TransferID: 3,
						Status: 1,
						BaseCID: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						IsInitiator: true,
						IsSender: true,
						Voucher: 'string value',
						Message: 'string value',
						OtherPeer: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						Transferred: 42,
						Stages: {
							Stages: [
								{
									Name: 'string value',
									Description: 'string value',
									CreatedTime: '0001-01-01T00:00:00Z',
									UpdatedTime: '0001-01-01T00:00:00Z',
									Logs: [
										{
											Log: 'string value',
											UpdatedTime: '0001-01-01T00:00:00Z',
										},
									],
								},
							],
						},
					},
				},
			},
			{
				title: 'ClientDealPieceCID',
				description:
					'ClientCalcCommP calculates the CommP and data size of the specified CID',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						PayloadSize: 9,
						PieceSize: 1032,
						PieceCID: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					},
				},
			},
			{
				title: 'ClientDealSize',
				description: 'ClientDealSize calculates real deal data size',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						PayloadSize: 9,
						PieceSize: 1032,
					},
				},
			},
			{
				title: 'ClientFindData',
				description:
					'ClientFindData identifies peers that have a certain file, and returns QueryOffers (one per peer).',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						null,
					],
					response: [
						{
							Err: 'string value',
							Root: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Piece: null,
							Size: 42,
							MinPrice: '0',
							UnsealPrice: '0',
							PricePerByte: '0',
							PaymentInterval: 42,
							PaymentIntervalIncrease: 42,
							Miner: 'f01234',
							MinerPeer: {
								Address: 'f01234',
								ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								PieceCID: null,
							},
						},
					],
				},
			},
			{
				title: 'ClientGenCar',
				description:
					'ClientGenCar generates a CAR file for the specified file.',
				permissions: 'write',
				method: {
					request: [
						{
							Path: 'string value',
							IsCAR: true,
						},
						'string value',
					],
					response: {},
				},
			},
			{
				title: 'ClientGetDealInfo',
				description:
					'ClientGetDealInfo returns the latest information about a given deal.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						ProposalCid: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						State: 42,
						Message: 'string value',
						DealStages: {
							Stages: [
								{
									Name: 'string value',
									Description: 'string value',
									ExpectedDuration: 'string value',
									CreatedTime: '0001-01-01T00:00:00Z',
									UpdatedTime: '0001-01-01T00:00:00Z',
									Logs: [
										{
											Log: 'string value',
											UpdatedTime: '0001-01-01T00:00:00Z',
										},
									],
								},
							],
						},
						Provider: 'f01234',
						DataRef: {
							TransferType: 'string value',
							Root: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							PieceCid: null,
							PieceSize: 1024,
							RawBlockSize: 42,
						},
						PieceCID: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Size: 42,
						PricePerEpoch: '0',
						Duration: 42,
						DealID: 5432,
						CreationTime: '0001-01-01T00:00:00Z',
						Verified: true,
						TransferChannelID: {
							Initiator: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Responder: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							ID: 3,
						},
						DataTransfer: {
							TransferID: 3,
							Status: 1,
							BaseCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							IsInitiator: true,
							IsSender: true,
							Voucher: 'string value',
							Message: 'string value',
							OtherPeer: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Transferred: 42,
							Stages: {
								Stages: [
									{
										Name: 'string value',
										Description: 'string value',
										CreatedTime: '0001-01-01T00:00:00Z',
										UpdatedTime: '0001-01-01T00:00:00Z',
										Logs: [
											{
												Log: 'string value',
												UpdatedTime: '0001-01-01T00:00:00Z',
											},
										],
									},
								],
							},
						},
					},
				},
			},
			{
				title: 'ClientGetDealStatus',
				description: 'ClientGetDealStatus returns status given a code',
				permissions: 'read',
				method: {
					request: [42],
					response: 'string value',
				},
			},
			{
				title: 'ClientGetDealUpdates',
				description: 'ClientGetDealUpdates returns the status of updated deals',
				permissions: 'write',
				method: {
					request: [],
					response: {
						ProposalCid: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						State: 42,
						Message: 'string value',
						DealStages: {
							Stages: [
								{
									Name: 'string value',
									Description: 'string value',
									ExpectedDuration: 'string value',
									CreatedTime: '0001-01-01T00:00:00Z',
									UpdatedTime: '0001-01-01T00:00:00Z',
									Logs: [
										{
											Log: 'string value',
											UpdatedTime: '0001-01-01T00:00:00Z',
										},
									],
								},
							],
						},
						Provider: 'f01234',
						DataRef: {
							TransferType: 'string value',
							Root: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							PieceCid: null,
							PieceSize: 1024,
							RawBlockSize: 42,
						},
						PieceCID: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Size: 42,
						PricePerEpoch: '0',
						Duration: 42,
						DealID: 5432,
						CreationTime: '0001-01-01T00:00:00Z',
						Verified: true,
						TransferChannelID: {
							Initiator: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Responder: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							ID: 3,
						},
						DataTransfer: {
							TransferID: 3,
							Status: 1,
							BaseCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							IsInitiator: true,
							IsSender: true,
							Voucher: 'string value',
							Message: 'string value',
							OtherPeer: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Transferred: 42,
							Stages: {
								Stages: [
									{
										Name: 'string value',
										Description: 'string value',
										CreatedTime: '0001-01-01T00:00:00Z',
										UpdatedTime: '0001-01-01T00:00:00Z',
										Logs: [
											{
												Log: 'string value',
												UpdatedTime: '0001-01-01T00:00:00Z',
											},
										],
									},
								],
							},
						},
					},
				},
			},
			{
				title: 'ClientGetRetrievalUpdates',
				description:
					'ClientGetRetrievalUpdates returns status of updated retrieval deals',
				permissions: 'write',
				method: {
					request: [],
					response: {
						PayloadCID: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						ID: 5,
						PieceCID: null,
						PricePerByte: '0',
						UnsealPrice: '0',
						Status: 0,
						Message: 'string value',
						Provider: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						BytesReceived: 42,
						BytesPaidFor: 42,
						TotalPaid: '0',
						TransferChannelID: {
							Initiator: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Responder: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							ID: 3,
						},
						DataTransfer: {
							TransferID: 3,
							Status: 1,
							BaseCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							IsInitiator: true,
							IsSender: true,
							Voucher: 'string value',
							Message: 'string value',
							OtherPeer: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Transferred: 42,
							Stages: {
								Stages: [
									{
										Name: 'string value',
										Description: 'string value',
										CreatedTime: '0001-01-01T00:00:00Z',
										UpdatedTime: '0001-01-01T00:00:00Z',
										Logs: [
											{
												Log: 'string value',
												UpdatedTime: '0001-01-01T00:00:00Z',
											},
										],
									},
								],
							},
						},
						Event: 5,
					},
				},
			},
			{
				title: 'ClientHasLocal',
				description:
					'ClientHasLocal indicates whether a certain CID is locally stored.',
				permissions: 'write',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: true,
				},
			},
			{
				title: 'ClientImport',
				description:
					'ClientImport imports file under the specified path into filestore.',
				permissions: 'admin',
				method: {
					request: [
						{
							Path: 'string value',
							IsCAR: true,
						},
					],
					response: {
						Root: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						ImportID: 50,
					},
				},
			},
			{
				title: 'ClientListDataTransfers',
				description:
					'ClientListTransfers returns the status of all ongoing transfers of data',
				permissions: 'write',
				method: {
					request: [],
					response: [
						{
							TransferID: 3,
							Status: 1,
							BaseCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							IsInitiator: true,
							IsSender: true,
							Voucher: 'string value',
							Message: 'string value',
							OtherPeer: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Transferred: 42,
							Stages: {
								Stages: [
									{
										Name: 'string value',
										Description: 'string value',
										CreatedTime: '0001-01-01T00:00:00Z',
										UpdatedTime: '0001-01-01T00:00:00Z',
										Logs: [
											{
												Log: 'string value',
												UpdatedTime: '0001-01-01T00:00:00Z',
											},
										],
									},
								],
							},
						},
					],
				},
			},
			{
				title: 'ClientListDeals',
				description:
					'ClientListDeals returns information about the deals made by the local client.',
				permissions: 'write',
				method: {
					request: [],
					response: [
						{
							ProposalCid: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							State: 42,
							Message: 'string value',
							DealStages: {
								Stages: [
									{
										Name: 'string value',
										Description: 'string value',
										ExpectedDuration: 'string value',
										CreatedTime: '0001-01-01T00:00:00Z',
										UpdatedTime: '0001-01-01T00:00:00Z',
										Logs: [
											{
												Log: 'string value',
												UpdatedTime: '0001-01-01T00:00:00Z',
											},
										],
									},
								],
							},
							Provider: 'f01234',
							DataRef: {
								TransferType: 'string value',
								Root: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								PieceCid: null,
								PieceSize: 1024,
								RawBlockSize: 42,
							},
							PieceCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Size: 42,
							PricePerEpoch: '0',
							Duration: 42,
							DealID: 5432,
							CreationTime: '0001-01-01T00:00:00Z',
							Verified: true,
							TransferChannelID: {
								Initiator:
									'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								Responder:
									'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								ID: 3,
							},
							DataTransfer: {
								TransferID: 3,
								Status: 1,
								BaseCID: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								IsInitiator: true,
								IsSender: true,
								Voucher: 'string value',
								Message: 'string value',
								OtherPeer:
									'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								Transferred: 42,
								Stages: {
									Stages: [
										{
											Name: 'string value',
											Description: 'string value',
											CreatedTime: '0001-01-01T00:00:00Z',
											UpdatedTime: '0001-01-01T00:00:00Z',
											Logs: [
												{
													Log: 'string value',
													UpdatedTime: '0001-01-01T00:00:00Z',
												},
											],
										},
									],
								},
							},
						},
					],
				},
			},
			{
				title: 'ClientListImports',
				description:
					'ClientListImports lists imported files and their root CIDs',
				permissions: 'write',
				method: {
					request: [],
					response: [
						{
							Key: 50,
							Err: 'string value',
							Root: null,
							Source: 'string value',
							FilePath: 'string value',
							CARPath: 'string value',
						},
					],
				},
			},
			{
				title: 'ClientListRetrievals',
				description:
					'ClientQueryAsk returns a signed StorageAsk from the specified miner. ClientListRetrievals returns information about retrievals made by the local client',
				permissions: 'write',
				method: {
					request: [],
					response: [
						{
							PayloadCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							ID: 5,
							PieceCID: null,
							PricePerByte: '0',
							UnsealPrice: '0',
							Status: 0,
							Message: 'string value',
							Provider: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							BytesReceived: 42,
							BytesPaidFor: 42,
							TotalPaid: '0',
							TransferChannelID: {
								Initiator:
									'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								Responder:
									'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								ID: 3,
							},
							DataTransfer: {
								TransferID: 3,
								Status: 1,
								BaseCID: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								IsInitiator: true,
								IsSender: true,
								Voucher: 'string value',
								Message: 'string value',
								OtherPeer:
									'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								Transferred: 42,
								Stages: {
									Stages: [
										{
											Name: 'string value',
											Description: 'string value',
											CreatedTime: '0001-01-01T00:00:00Z',
											UpdatedTime: '0001-01-01T00:00:00Z',
											Logs: [
												{
													Log: 'string value',
													UpdatedTime: '0001-01-01T00:00:00Z',
												},
											],
										},
									],
								},
							},
							Event: 5,
						},
					],
				},
			},
			{
				title: 'ClientMinerQueryOffer',
				description:
					'ClientMinerQueryOffer returns a QueryOffer for the specific miner and file.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						null,
					],
					response: {
						Err: 'string value',
						Root: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Piece: null,
						Size: 42,
						MinPrice: '0',
						UnsealPrice: '0',
						PricePerByte: '0',
						PaymentInterval: 42,
						PaymentIntervalIncrease: 42,
						Miner: 'f01234',
						MinerPeer: {
							Address: 'f01234',
							ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							PieceCID: null,
						},
					},
				},
			},
			{
				title: 'ClientQueryAsk',
				description: '',
				permissions: 'read',
				method: {
					request: [
						'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						'f01234',
					],
					response: {
						Price: '0',
						VerifiedPrice: '0',
						MinPieceSize: 1032,
						MaxPieceSize: 1032,
						Miner: 'f01234',
						Timestamp: 10101,
						Expiry: 10101,
						SeqNo: 42,
					},
				},
			},
			{
				title: 'ClientRemoveImport',
				description: 'ClientRemoveImport removes file import',
				permissions: 'admin',
				method: {
					request: [50],
					response: {},
				},
			},
			{
				title: 'ClientRestartDataTransfer',
				description:
					'ClientRestartDataTransfer attempts to restart a data transfer with the given transfer ID and other peer',
				permissions: 'write',
				method: {
					request: [
						3,
						'12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						true,
					],
					response: {},
				},
			},
			{
				title: 'ClientRetrieve',
				description:
					'ClientRetrieve initiates the retrieval of a file, as specified in the order.',
				permissions: 'admin',
				method: {
					request: [
						{
							Root: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Piece: null,
							DatamodelPathSelector: 'Links/21/Hash/Links/42/Hash',
							Size: 42,
							FromLocalCAR: 'string value',
							Total: '0',
							UnsealPrice: '0',
							PaymentInterval: 42,
							PaymentIntervalIncrease: 42,
							Client: 'f01234',
							Miner: 'f01234',
							MinerPeer: {
								Address: 'f01234',
								ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								PieceCID: null,
							},
						},
						{
							Path: 'string value',
							IsCAR: true,
						},
					],
					response: {},
				},
			},
			{
				title: 'ClientRetrieveTryRestartInsufficientFunds',
				description:
					'ClientRetrieveTryRestartInsufficientFunds attempts to restart stalled retrievals on a given payment channel which are stuck due to insufficient funds',
				permissions: 'write',
				method: {
					request: ['f01234'],
					response: {},
				},
			},
			{
				title: 'ClientRetrieveWithEvents',
				description:
					'ClientRetrieveWithEvents initiates the retrieval of a file, as specified in the order, and provides a channel of status updates.',
				permissions: 'admin',
				method: {
					request: [
						{
							Root: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Piece: null,
							DatamodelPathSelector: 'Links/21/Hash/Links/42/Hash',
							Size: 42,
							FromLocalCAR: 'string value',
							Total: '0',
							UnsealPrice: '0',
							PaymentInterval: 42,
							PaymentIntervalIncrease: 42,
							Client: 'f01234',
							Miner: 'f01234',
							MinerPeer: {
								Address: 'f01234',
								ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
								PieceCID: null,
							},
						},
						{
							Path: 'string value',
							IsCAR: true,
						},
					],
					response: {
						Event: 5,
						Status: 0,
						BytesReceived: 42,
						FundsSpent: '0',
						Err: 'string value',
					},
				},
			},
			{
				title: 'ClientStartDeal',
				description: 'ClientStartDeal proposes a deal with a miner.',
				permissions: 'admin',
				method: {
					request: [
						{
							Data: {
								TransferType: 'string value',
								Root: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								PieceCid: null,
								PieceSize: 1024,
								RawBlockSize: 42,
							},
							Wallet: 'f01234',
							Miner: 'f01234',
							EpochPrice: '0',
							MinBlocksDuration: 42,
							ProviderCollateral: '0',
							DealStartEpoch: 10101,
							FastRetrieval: true,
							VerifiedDeal: true,
						},
					],
					response: null,
				},
			},
			{
				title: 'ClientStatelessDeal',
				description:
					'ClientStatelessDeal fire-and-forget-proposes an offline deal to a miner without subsequent tracking.',
				permissions: 'write',
				method: {
					request: [
						{
							Data: {
								TransferType: 'string value',
								Root: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								PieceCid: null,
								PieceSize: 1024,
								RawBlockSize: 42,
							},
							Wallet: 'f01234',
							Miner: 'f01234',
							EpochPrice: '0',
							MinBlocksDuration: 42,
							ProviderCollateral: '0',
							DealStartEpoch: 10101,
							FastRetrieval: true,
							VerifiedDeal: true,
						},
					],
					response: null,
				},
			},
		],
	},
	{
		heading: 'Create',
		description: '',
		services: [
			{
				title: 'CreateBackup',
				description:
					'CreateBackup creates node backup onder the specified file name. The method requires that the lotus daemon is running with the LOTUS_BACKUP_BASE_PATH environment variable set to some path, and that the path specified when calling CreateBackup is within the base path',
				permissions: 'admin',
				method: {
					request: ['string value'],
					response: {},
				},
			},
		],
	},
	{
		heading: 'Gas',
		description: '',
		services: [
			{
				title: 'GasEstimateFeeCap',
				description: 'GasEstimateFeeCap estimates gas fee cap',
				permissions: 'read',
				method: {
					request: [
						{
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: '0',
				},
			},
			{
				title: 'GasEstimateGasLimit',
				description:
					'GasEstimateGasLimit estimates gas used by the message and returns it. It fails if message fails to execute.',
				permissions: 'read',
				method: {
					request: [
						{
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: 9,
				},
			},
			{
				title: 'GasEstimateGasPremium',
				description:
					'GasEstimateGasPremium estimates what gas price should be used for a message to have high likelihood of inclusion in nblocksincl epochs.',
				permissions: 'read',
				method: {
					request: [
						42,
						'f01234',
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: '0',
				},
			},
			{
				title: 'GasEstimateMessageGas',
				description:
					'GasEstimateMessageGas estimates gas values for unset message gas fields',
				permissions: 'read',
				method: {
					request: [
						{
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						{
							MaxFee: '0',
							MsgUuid: '07070707-0707-0707-0707-070707070707',
						},
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: {
						Version: 42,
						To: 'f01234',
						From: 'f01234',
						Nonce: 42,
						Value: '0',
						GasLimit: 9,
						GasFeeCap: '0',
						GasPremium: '0',
						Method: 1,
						Params: 'Ynl0ZSBhcnJheQ==',
						CID: {
							'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
						},
					},
				},
			},
		],
	},
	{
		heading: 'ID',
		description: '',
		services: [
			{
				title: 'ID',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
				},
			},
		],
	},
	{
		heading: 'Log',
		description: '',
		services: [
			{
				title: 'LogAlerts',
				description: '',
				permissions: 'admin',
				method: {
					request: [],
					response: [
						{
							Type: {
								System: 'string value',
								Subsystem: 'string value',
							},
							Active: true,
							LastActive: {
								Type: 'string value',
								Message: 'json raw message',
								Time: '0001-01-01T00:00:00Z',
							},
							LastResolved: {
								Type: 'string value',
								Message: 'json raw message',
								Time: '0001-01-01T00:00:00Z',
							},
						},
					],
				},
			},
			{
				title: 'LogList',
				description: '',
				permissions: 'write',
				method: {
					request: [],
					response: ['string value'],
				},
			},
			{
				title: 'LogSetLevel',
				description: '',
				permissions: 'write',
				method: {
					request: ['string value', 'string value'],
					response: {},
				},
			},
		],
	},
	{
		heading: 'Market',
		description: '',
		services: [
			{
				title: 'MarketAddBalance',
				description: 'MarketAddBalance adds funds to the market actor',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', '0'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MarketGetReserved',
				description:
					'MarketGetReserved gets the amount of funds that are currently reserved for the address',
				permissions: 'sign',
				method: {
					request: ['f01234'],
					response: '0',
				},
			},
			{
				title: 'MarketReleaseFunds',
				description:
					'MarketReleaseFunds releases funds reserved by MarketReserveFunds',
				permissions: 'sign',
				method: {
					request: ['f01234', '0'],
					response: {},
				},
			},
			{
				title: 'MarketReserveFunds',
				description: 'MarketReserveFunds reserves funds for a deal',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', '0'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MarketWithdraw',
				description:
					'MarketWithdraw withdraws unlocked funds from the market actor',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', '0'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
		],
	},
	{
		heading: 'Miner',
		description: '',
		services: [
			{
				title: 'MinerCreateBlock',
				description: '',
				permissions: 'write',
				method: {
					request: [
						{
							Miner: 'f01234',
							Parents: [
								{
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								{
									'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
								},
							],
							Ticket: {
								VRFProof: 'Ynl0ZSBhcnJheQ==',
							},
							Eproof: {
								WinCount: 9,
								VRFProof: 'Ynl0ZSBhcnJheQ==',
							},
							BeaconValues: [
								{
									Round: 42,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
							],
							Messages: [
								{
									Message: {
										Version: 42,
										To: 'f01234',
										From: 'f01234',
										Nonce: 42,
										Value: '0',
										GasLimit: 9,
										GasFeeCap: '0',
										GasPremium: '0',
										Method: 1,
										Params: 'Ynl0ZSBhcnJheQ==',
										CID: {
											'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
										},
									},
									Signature: {
										Type: 2,
										Data: 'Ynl0ZSBhcnJheQ==',
									},
									CID: {
										'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
									},
								},
							],
							Epoch: 10101,
							Timestamp: 42,
							WinningPoStProof: [
								{
									PoStProof: 8,
									ProofBytes: 'Ynl0ZSBhcnJheQ==',
								},
							],
						},
					],
					response: {
						Header: {
							Miner: 'f01234',
							Ticket: {
								VRFProof: 'Ynl0ZSBhcnJheQ==',
							},
							ElectionProof: {
								WinCount: 9,
								VRFProof: 'Ynl0ZSBhcnJheQ==',
							},
							BeaconEntries: [
								{
									Round: 42,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
							],
							WinPoStProof: [
								{
									PoStProof: 8,
									ProofBytes: 'Ynl0ZSBhcnJheQ==',
								},
							],
							Parents: [
								{
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
							],
							ParentWeight: '0',
							Height: 10101,
							ParentStateRoot: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							ParentMessageReceipts: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Messages: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							BLSAggregate: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Timestamp: 42,
							BlockSig: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							ForkSignaling: 42,
							ParentBaseFee: '0',
						},
						BlsMessages: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
						],
						SecpkMessages: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
						],
					},
				},
			},
			{
				title: 'MinerGetBaseInfo',
				description: 'There are not yet any comments for this method.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						10101,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: {
						MinerPower: '0',
						NetworkPower: '0',
						Sectors: [
							{
								SealProof: 8,
								SectorNumber: 9,
								SectorKey: null,
								SealedCID: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
							},
						],
						WorkerKey: 'f01234',
						SectorSize: 34359738368,
						PrevBeaconEntry: {
							Round: 42,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						BeaconEntries: [
							{
								Round: 42,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						],
						EligibleForMining: true,
					},
				},
			},
		],
	},
	{
		heading: 'Mpool',
		description:
			'The Mpool methods are for interacting with the message pool. The message pool manages all incoming and outgoing ‘messages’ going over the network.',
		services: [
			{
				title: 'MpoolBatchPush',
				description: 'MpoolBatchPush batch pushes a signed message to mempool.',
				permissions: 'write',
				method: {
					request: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],

					response: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
				},
			},
			{
				title: 'MpoolBatchPushMessage',
				description:
					'MpoolBatchPushMessage batch pushes a unsigned message to mempool.',
				permissions: 'sign',
				method: {
					request: [
						[
							{
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
						],
						{
							MaxFee: '0',
							MsgUuid: '07070707-0707-0707-0707-070707070707',
						},
					],
					response: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],
				},
			},
			{
				title: 'MpoolBatchPushUntrusted',
				description:
					'MpoolBatchPushUntrusted batch pushes a signed message to mempool from untrusted sources.',
				permissions: 'write',
				method: {
					request: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],

					response: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
				},
			},
			{
				title: 'MpoolClear',
				description: 'MpoolClear clears pending messages from the mpool',
				permissions: 'write',
				method: {
					request: [true],
					response: {},
				},
			},
			{
				title: 'MpoolGetConfig',
				description:
					'MpoolGetConfig returns (a copy of) the current mpool config',
				permissions: 'read',
				method: {
					request: [],
					response: {
						PriorityAddrs: ['f01234'],
						SizeLimitHigh: 123,
						SizeLimitLow: 123,
						ReplaceByFeeRatio: 12.3,
						PruneCooldown: 60000000000,
						GasLimitOverestimation: 12.3,
					},
				},
			},
			{
				title: 'MpoolGetNonce',
				description:
					'MpoolGetNonce gets next nonce for the specified sender. Note that this method may not be atomic. Use MpoolPushMessage instead.',
				permissions: 'read',
				method: {
					request: ['f01234'],
					response: 42,
				},
			},
			{
				title: 'MpoolPending',
				description: 'MpoolPending returns pending mempool messages.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						{
							'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
						},
					],

					response: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],
				},
			},
			{
				title: 'MpoolPush',
				description: 'MpoolPush pushes a signed message to mempool',
				permissions: 'write',
				method: {
					request: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MpoolPushMessage',
				description:
					'MpoolPushMessage atomically assigns a nonce, signs, and pushes a message to mempool. maxFee is only used when GasFeeCap/GasPremium fields aren’t specified When maxFee is set to 0, MpoolPushMessage will guess appropriate fee based on current chain conditions',
				permissions: 'sign',
				method: {
					request: [
						{
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						{
							MaxFee: '0',
							MsgUuid: '07070707-0707-0707-0707-070707070707',
						},
					],
					response: {
						Message: {
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						Signature: {
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						CID: {
							'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
						},
					},
				},
			},
			{
				title: 'MpoolPushUntrusted',
				description:
					'MpoolPushUntrusted pushes a signed message to mempool from untrusted sources.',
				permissions: 'sign',
				method: {
					request: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MpoolSelect',
				description:
					'MpoolSelect returns a list of pending messages for inclusion in the next block',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						12.3,
					],
					response: [
						{
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],
				},
			},
			{
				title: 'MpoolSetConfig',
				description:
					'MpoolSetConfig sets the mpool config to (a copy of) the supplied config',
				permissions: 'admin',
				method: {
					request: [
						{
							PriorityAddrs: ['f01234'],
							SizeLimitHigh: 123,
							SizeLimitLow: 123,
							ReplaceByFeeRatio: 12.3,
							PruneCooldown: 60000000000,
							GasLimitOverestimation: 12.3,
						},
					],
					response: {},
				},
			},
			{
				title: 'MpoolSub',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						Type: 0,
						Message: {
							Message: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					},
				},
			},
		],
	},
	{
		heading: 'Msig',
		description:
			'The Msig methods are used to interact with multisig wallets on the filecoin network',
		services: [
			{
				title: 'MsigAddApprove',
				description:
					'MsigAddApprove approves a previously proposed AddSigner message It takes the following params: , , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 42, 'f01234', 'f01234', true],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigAddCancel',
				description:
					'MsigAddCancel cancels a previously proposed AddSigner message It takes the following params: , , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 42, 'f01234', true],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigAddPropose',
				description:
					'MsigAddPropose proposes adding a signer in the multisig It takes the following params: , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 'f01234', true],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigApprove',
				description:
					'MsigApprove approves a previously-proposed multisig message by transaction ID It takes the following params: ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 42, 'f01234'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigApproveTxnHash',
				description:
					'MsigApproveTxnHash approves a previously-proposed multisig message, specified using both transaction ID and a hash of the parameters used in the proposal. This method of approval can be used to ensure you only approve exactly the transaction you think you are. It takes the following params: , , , , ,',
				permissions: 'sign',
				method: {
					request: [
						'f01234',
						42,
						'f01234',
						'f01234',
						'0',
						'f01234',
						42,
						'Ynl0ZSBhcnJheQ==',
					],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigCancel',
				description:
					'MsigCancel cancels a previously-proposed multisig message It takes the following params: , , , ,',
				permissions: 'sign',
				method: {
					request: [
						'f01234',
						42,
						'f01234',
						'0',
						'f01234',
						42,
						'Ynl0ZSBhcnJheQ==',
					],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigCreate',
				description:
					'MsigCreate creates a multisig wallet It takes the following params: , ,',
				permissions: 'sign',
				method: {
					request: [42, ['f01234'], 10101, '0', 'f01234', '0'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigGetAvailableBalance',
				description:
					'MsigGetAvailableBalance returns the portion of a multisig’s balance that can be withdrawn or spent',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: '0',
				},
			},
			{
				title: 'MsigGetPending',
				description:
					'MsigGetPending returns pending transactions for the given multisig wallet. Once pending transactions are fully approved, they will no longer appear here.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: [
						{
							ID: 9,
							To: 'f01234',
							Value: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							Approved: ['f01234'],
						},
					],
				},
			},
			{
				title: 'MsigGetVested',
				description:
					'MsigGetVested returns the amount of FIL that vested in a multisig in a certain period. It takes the following params: , ,',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: '0',
				},
			},
			{
				title: 'MsigGetVestingSchedule',
				description:
					'MsigGetVestingSchedule returns the vesting details of a given multisig.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: {
						InitialBalance: '0',
						StartEpoch: 10101,
						UnlockDuration: 10101,
					},
				},
			},
			{
				title: 'MsigPropose',
				description:
					'MsigPropose proposes a multisig message It takes the following params: , , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', '0', 'f01234', 42, 'Ynl0ZSBhcnJheQ=='],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigRemoveSigner',
				description:
					'MsigRemoveSigner proposes the removal of a signer from the multisig. It accepts the multisig to make the change on, the proposer address to send the message from, the address to be removed, and a boolean indicating whether or not the signing threshold should be lowered by one along with the address removal.',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 'f01234', true],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigSwapApprove',
				description:
					'MsigSwapApprove approves a previously proposed SwapSigner It takes the following params: , , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 42, 'f01234', 'f01234', 'f01234'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigSwapCancel',
				description:
					'MsigSwapCancel cancels a previously proposed SwapSigner message It takes the following params: , , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 42, 'f01234', 'f01234'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'MsigSwapPropose',
				description:
					'MsigSwapPropose proposes swapping 2 signers in the multisig It takes the following params: , ,',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', 'f01234', 'f01234'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
		],
	},
	{
		heading: 'Net',
		description: '',
		services: [
			{
				title: 'NetAddrsListen',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						Addrs: [
							'/ip4/52.36.61.156/tcp/1347/p2p/12D3KooWFETiESTf1v4PGUvtnxMAcEFMzLZbJGg4tjWfGEimYior',
						],
					},
				},
			},
			{
				title: 'NetAgentVersion',
				description: '',
				permissions: 'read',
				method: {
					request: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
					response: 'string value',
				},
			},
			{
				title: 'NetAutoNatStatus',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						Reachability: 1,
						PublicAddr: 'string value',
					},
				},
			},
			{
				title: 'NetBandwidthStats',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						TotalIn: 9,
						TotalOut: 9,
						RateIn: 12.3,
						RateOut: 12.3,
					},
				},
			},
			{
				title: 'NetBandwidthStatsByPeer',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						'12D3KooWSXmXLJmBR1M7i9RW9GQPNUhZSzXKzxDHWtAgNuJAbyEJ': {
							TotalIn: 174000,
							TotalOut: 12500,
							RateIn: 100,
							RateOut: 50,
						},
					},
				},
			},
			{
				title: 'NetBandwidthStatsByProtocol',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						'/fil/hello/1.0.0': {
							TotalIn: 174000,
							TotalOut: 12500,
							RateIn: 100,
							RateOut: 50,
						},
					},
				},
			},
			{
				title: 'NetBlockAdd',
				description: '',
				permissions: 'admin',
				method: {
					request: [
						{
							Peers: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
							IPAddrs: ['string value'],
							IPSubnets: ['string value'],
						},
					],
					response: {},
				},
			},
			{
				title: 'NetBlockList',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						Peers: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
						IPAddrs: ['string value'],
						IPSubnets: ['string value'],
					},
				},
			},
			{
				title: 'NetBlockRemove',
				description: '',
				permissions: 'admin',
				method: {
					request: [
						{
							Peers: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
							IPAddrs: ['string value'],
							IPSubnets: ['string value'],
						},
					],
					response: {},
				},
			},
			{
				title: 'NetConnect',
				description: '',
				permissions: 'write',
				method: {
					request: [
						{
							ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Addrs: [
								'/ip4/52.36.61.156/tcp/1347/p2p/12D3KooWFETiESTf1v4PGUvtnxMAcEFMzLZbJGg4tjWfGEimYior',
							],
						},
					],
					response: {},
				},
			},
			{
				title: 'NetConnectedness',
				description: '',
				permissions: 'read',
				method: {
					request: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
					response: 1,
				},
			},
			{
				title: 'NetDisconnect',
				description: '',
				permissions: 'write',
				method: {
					request: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
					response: {},
				},
			},
			{
				title: 'NetFindPeer',
				description: '',
				permissions: 'read',
				method: {
					request: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
					response: {
						ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						Addrs: [
							'/ip4/52.36.61.156/tcp/1347/p2p/12D3KooWFETiESTf1v4PGUvtnxMAcEFMzLZbJGg4tjWfGEimYior',
						],
					},
				},
			},
			{
				title: 'NetLimit',
				description: '',
				permissions: 'read',
				method: {
					request: ['string value'],
					response: {
						Memory: 123,
						Streams: 3,
						StreamsInbound: 1,
						StreamsOutbound: 2,
						Conns: 4,
						ConnsInbound: 3,
						ConnsOutbound: 4,
						FD: 5,
					},
				},
			},
			{
				title: 'NetPeerInfo',
				description: '',
				permissions: 'read',
				method: {
					request: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
					response: {
						ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						Agent: 'string value',
						Addrs: ['string value'],
						Protocols: ['string value'],
						ConnMgrMeta: {
							FirstSeen: '0001-01-01T00:00:00Z',
							Value: 123,
							Tags: {
								name: 42,
							},
							Conns: {
								name: '2021-03-08T22:52:18Z',
							},
						},
					},
				},
			},
			{
				title: 'NetPeers',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: [
						{
							ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Addrs: [
								'/ip4/52.36.61.156/tcp/1347/p2p/12D3KooWFETiESTf1v4PGUvtnxMAcEFMzLZbJGg4tjWfGEimYior',
							],
						},
					],
				},
			},
			{
				title: 'NetPing',
				description: '',
				permissions: 'read',
				method: {
					request: ['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf'],
					response: 60000000000,
				},
			},
			{
				title: 'NetProtectAdd',
				description: '',
				permissions: 'admin',
				method: {
					request: [['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf']],
					response: {},
				},
			},
			{
				title: 'NetProtectRemove',
				description: '',
				permissions: 'admin',
				method: {
					request: [['12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf']],
					response: {},
				},
			},
			{
				title: 'NetPubsubScores',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: [
						{
							ID: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
							Score: {
								Score: 12.3,
								Topics: {
									'/blocks': {
										TimeInMesh: 60000000000,
										FirstMessageDeliveries: 122,
										MeshMessageDeliveries: 1234,
										InvalidMessageDeliveries: 3,
									},
								},
								AppSpecificScore: 12.3,
								IPColocationFactor: 12.3,
								BehaviourPenalty: 12.3,
							},
						},
					],
				},
			},
			{
				title: 'NetSetLimit',
				description: '',
				permissions: 'admin',
				method: {
					request: [
						'string value',
						{
							Memory: 123,
							Streams: 3,
							StreamsInbound: 1,
							StreamsOutbound: 2,
							Conns: 4,
							ConnsInbound: 3,
							ConnsOutbound: 4,
							FD: 5,
						},
					],
					response: {},
				},
			},
			{
				title: 'NetStat',
				description: '',
				permissions: 'read',
				method: {
					request: ['string value'],
					response: {
						System: {
							NumStreamsInbound: 123,
							NumStreamsOutbound: 123,
							NumConnsInbound: 123,
							NumConnsOutbound: 123,
							NumFD: 123,
							Memory: 9,
						},
						Transient: {
							NumStreamsInbound: 123,
							NumStreamsOutbound: 123,
							NumConnsInbound: 123,
							NumConnsOutbound: 123,
							NumFD: 123,
							Memory: 9,
						},
						Services: {
							abc: {
								NumStreamsInbound: 1,
								NumStreamsOutbound: 2,
								NumConnsInbound: 3,
								NumConnsOutbound: 4,
								NumFD: 5,
								Memory: 123,
							},
						},
						Protocols: {
							abc: {
								NumStreamsInbound: 1,
								NumStreamsOutbound: 2,
								NumConnsInbound: 3,
								NumConnsOutbound: 4,
								NumFD: 5,
								Memory: 123,
							},
						},
						Peers: {
							abc: {
								NumStreamsInbound: 1,
								NumStreamsOutbound: 2,
								NumConnsInbound: 3,
								NumConnsOutbound: 4,
								NumFD: 5,
								Memory: 123,
							},
						},
					},
				},
			},
		],
	},
	{
		heading: 'Paych',
		description:
			'The Paych methods are for interacting with and managing payment channels',
		services: [
			{
				title: 'PaychAllocateLane',
				description: '',
				permissions: 'sign',
				method: {
					request: ['f01234'],
					response: 42,
				},
			},
			{
				title: 'PaychAvailableFunds',
				description: '',
				permissions: 'sign',
				method: {
					request: ['f01234'],
					response: {
						Channel: '\u003cempty\u003e',
						From: 'f01234',
						To: 'f01234',
						ConfirmedAmt: '0',
						PendingAmt: '0',
						NonReservedAmt: '0',
						PendingAvailableAmt: '0',
						PendingWaitSentinel: null,
						QueuedAmt: '0',
						VoucherReedeemedAmt: '0',
					},
				},
			},
			{
				title: 'PaychAvailableFundsByFromTo',
				description: '',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234'],
					response: {
						Channel: '\u003cempty\u003e',
						From: 'f01234',
						To: 'f01234',
						ConfirmedAmt: '0',
						PendingAmt: '0',
						NonReservedAmt: '0',
						PendingAvailableAmt: '0',
						PendingWaitSentinel: null,
						QueuedAmt: '0',
						VoucherReedeemedAmt: '0',
					},
				},
			},
			{
				title: 'PaychCollect',
				description: '',
				permissions: 'sign',
				method: {
					request: ['f01234'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'PaychGet',
				description: 'There are not yet any comments for this method.',
				permissions: 'sign',
				method: {
					request: ['f01234', 'f01234', '0'],
					response: {
						Channel: 'f01234',
						WaitSentinel: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					},
				},
			},
			{
				title: 'PaychGetWaitReady',
				description: '',
				permissions: 'sign',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: 'f01234',
				},
			},
			{
				title: 'PaychNewPayment',
				description: '',
				permissions: 'sign',
				method: {
					request: [
						'f01234',
						'f01234',
						[
							{
								Amount: '0',
								TimeLockMin: 10101,
								TimeLockMax: 10101,
								MinSettle: 10101,
								Extra: {
									Actor: 'f01234',
									Method: 1,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
							},
						],
					],
					response: {
						Channel: 'f01234',
						WaitSentinel: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Vouchers: [
							{
								ChannelAddr: 'f01234',
								TimeLockMin: 10101,
								TimeLockMax: 10101,
								SecretHash: 'Ynl0ZSBhcnJheQ==',
								Extra: {
									Actor: 'f01234',
									Method: 1,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
								Lane: 42,
								Nonce: 42,
								Amount: '0',
								MinSettleHeight: 10101,
								Merges: [
									{
										Lane: 42,
										Nonce: 42,
									},
								],
								Signature: {
									Type: 2,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
							},
						],
					},
				},
			},
			{
				title: 'PaychSettle',
				description: '',
				permissions: 'sign',
				method: {
					request: ['f01234'],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'PaychStatus',
				description: '',
				permissions: 'read',
				method: {
					request: ['f01234'],
					response: {
						ControlAddr: 'f01234',
						Direction: 1,
					},
				},
			},
			{
				title: 'PaychVoucherAdd',
				description: '',
				permissions: 'write',
				method: {
					request: [
						'f01234',
						{
							ChannelAddr: 'f01234',
							TimeLockMin: 10101,
							TimeLockMax: 10101,
							SecretHash: 'Ynl0ZSBhcnJheQ==',
							Extra: {
								Actor: 'f01234',
								Method: 1,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Lane: 42,
							Nonce: 42,
							Amount: '0',
							MinSettleHeight: 10101,
							Merges: [
								{
									Lane: 42,
									Nonce: 42,
								},
							],
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						},
						'Ynl0ZSBhcnJheQ==',
						'0',
					],
					response: '0',
				},
			},
			{
				title: 'PaychVoucherCheckSpendable',
				description: '',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						{
							ChannelAddr: 'f01234',
							TimeLockMin: 10101,
							TimeLockMax: 10101,
							SecretHash: 'Ynl0ZSBhcnJheQ==',
							Extra: {
								Actor: 'f01234',
								Method: 1,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Lane: 42,
							Nonce: 42,
							Amount: '0',
							MinSettleHeight: 10101,
							Merges: [
								{
									Lane: 42,
									Nonce: 42,
								},
							],
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						},
						'Ynl0ZSBhcnJheQ==',
						'Ynl0ZSBhcnJheQ==',
					],
					response: true,
				},
			},
			{
				title: 'PaychVoucherCheckValid',
				description: '',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						{
							ChannelAddr: 'f01234',
							TimeLockMin: 10101,
							TimeLockMax: 10101,
							SecretHash: 'Ynl0ZSBhcnJheQ==',
							Extra: {
								Actor: 'f01234',
								Method: 1,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Lane: 42,
							Nonce: 42,
							Amount: '0',
							MinSettleHeight: 10101,
							Merges: [
								{
									Lane: 42,
									Nonce: 42,
								},
							],
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						},
					],
					response: '0',
				},
			},
			{
				title: 'PaychVoucherCreate',
				description: '',
				permissions: 'sign',
				method: {
					request: ['f01234', '0', 42],
					response: {
						Voucher: {
							ChannelAddr: 'f01234',
							TimeLockMin: 10101,
							TimeLockMax: 10101,
							SecretHash: 'Ynl0ZSBhcnJheQ==',
							Extra: {
								Actor: 'f01234',
								Method: 1,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Lane: 42,
							Nonce: 42,
							Amount: '0',
							MinSettleHeight: 10101,
							Merges: [
								{
									Lane: 42,
									Nonce: 42,
								},
							],
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						},
						Shortfall: '0',
					},
				},
			},
			{
				title: 'PaychVoucherList',
				description: '',
				permissions: 'write',
				method: {
					request: ['f01234'],
					response: [
						{
							ChannelAddr: 'f01234',
							TimeLockMin: 10101,
							TimeLockMax: 10101,
							SecretHash: 'Ynl0ZSBhcnJheQ==',
							Extra: {
								Actor: 'f01234',
								Method: 1,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Lane: 42,
							Nonce: 42,
							Amount: '0',
							MinSettleHeight: 10101,
							Merges: [
								{
									Lane: 42,
									Nonce: 42,
								},
							],
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						},
					],
				},
			},
			{
				title: 'PaychVoucherSubmit',
				description: '',
				permissions: 'sign',
				method: {
					request: [
						'f01234',
						{
							ChannelAddr: 'f01234',
							TimeLockMin: 10101,
							TimeLockMax: 10101,
							SecretHash: 'Ynl0ZSBhcnJheQ==',
							Extra: {
								Actor: 'f01234',
								Method: 1,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
							Lane: 42,
							Nonce: 42,
							Amount: '0',
							MinSettleHeight: 10101,
							Merges: [
								{
									Lane: 42,
									Nonce: 42,
								},
							],
							Signature: {
								Type: 2,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						},
						'Ynl0ZSBhcnJheQ==',
						'Ynl0ZSBhcnJheQ==',
					],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
		],
	},
	{
		heading: 'State',
		description:
			'The State methods are used to query, inspect, and interact with chain state. Most methods take a TipSetKey as a parameter. The state looked up is the parent state of the tipset. A nil TipSetKey can be provided as a param, this will cause the heaviest tipset in the chain to be used.',
		services: [
			{
				title: 'StateAccountKey',
				description:
					'StateAccountKey returns the public key address of the given ID address',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: 'f01234',
				},
			},
			{
				title: 'StateActorCodeCIDs',
				description:
					'StateActorCodeCIDs returns the CIDs of all the builtin actors for the given network version',
				permissions: 'read',
				method: {
					request: [16],
					response: {},
				},
			},
			{
				title: 'StateActorManifestCID',
				description:
					'StateActorManifestCID returns the CID of the builtin actors manifest for the given network version',
				permissions: 'read',
				method: {
					request: [16],
					response: {
						'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
					},
				},
			},
			{
				title: 'StateAllMinerFaults',
				description:
					'StateAllMinerFaults returns all non-expired Faults that occur within lookback epochs of the given tipset',
				permissions: 'read',
				method: {
					request: [
						10101,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: [
						{
							Miner: 'f01234',
							Epoch: 10101,
						},
					],
				},
			},
			{
				title: 'StateCall',
				description:
					'StateCall runs the given message and returns its result without any persisted changes. StateCall applies the message to the tipset’s parent state. The message is not applied on-top-of the messages in the passed-in tipset.',
				permissions: 'read',
				method: {
					request: [
						{
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: {
						MsgCid: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Msg: {
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						MsgRct: {
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
						GasCost: {
							Message: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							GasUsed: '0',
							BaseFeeBurn: '0',
							OverEstimationBurn: '0',
							MinerPenalty: '0',
							MinerTip: '0',
							Refund: '0',
							TotalCost: '0',
						},
						ExecutionTrace: {
							Msg: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							MsgRct: {
								ExitCode: 0,
								Return: 'Ynl0ZSBhcnJheQ==',
								GasUsed: 9,
							},
							Error: 'string value',
							Duration: 60000000000,
							GasCharges: [
								{
									Name: 'string value',
									loc: [
										{
											File: 'string value',
											Line: 123,
											Function: 'string value',
										},
									],
									tg: 9,
									cg: 9,
									sg: 9,
									vtg: 9,
									vcg: 9,
									vsg: 9,
									tt: 60000000000,
									ex: {},
								},
							],
							Subcalls: [
								{
									Msg: {
										Version: 42,
										To: 'f01234',
										From: 'f01234',
										Nonce: 42,
										Value: '0',
										GasLimit: 9,
										GasFeeCap: '0',
										GasPremium: '0',
										Method: 1,
										Params: 'Ynl0ZSBhcnJheQ==',
										CID: {
											'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
										},
									},
									MsgRct: {
										ExitCode: 0,
										Return: 'Ynl0ZSBhcnJheQ==',
										GasUsed: 9,
									},
									Error: 'string value',
									Duration: 60000000000,
									GasCharges: [
										{
											Name: 'string value',
											loc: [
												{
													File: 'string value',
													Line: 123,
													Function: 'string value',
												},
											],
											tg: 9,
											cg: 9,
											sg: 9,
											vtg: 9,
											vcg: 9,
											vsg: 9,
											tt: 60000000000,
											ex: {},
										},
									],
									Subcalls: null,
								},
							],
						},
						Error: 'string value',
						Duration: 60000000000,
					},
				},
			},
			{
				title: 'StateChangedActors',
				description:
					'StateChangedActors returns all the actors whose states change between the two given state CIDs TODO: Should this take tipset keys instead?',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {
						t01236: {
							Code: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Head: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							Nonce: 42,
							Balance: '0',
						},
					},
				},
			},
			{
				title: 'StateCirculatingSupply',
				description:
					'StateCirculatingSupply returns the exact circulating supply of Filecoin at the given tipset. This is not used anywhere in the protocol itself, and is only for external consumption.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						{
							'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
						},
					],

					response: '0',
				},
			},
			{
				title: 'StateCompute',
				description:
					'StateCompute is a flexible command that applies the given messages on the given tipset. The messages are run as though the VM were at the provided height.',
				permissions: 'read',
				method: {
					request: [
						10101,
						[
							{
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
						],
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: {
						Root: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Trace: [
							{
								MsgCid: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								Msg: {
									Version: 42,
									To: 'f01234',
									From: 'f01234',
									Nonce: 42,
									Value: '0',
									GasLimit: 9,
									GasFeeCap: '0',
									GasPremium: '0',
									Method: 1,
									Params: 'Ynl0ZSBhcnJheQ==',
									CID: {
										'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
									},
								},
								MsgRct: {
									ExitCode: 0,
									Return: 'Ynl0ZSBhcnJheQ==',
									GasUsed: 9,
								},
								GasCost: {
									Message: {
										'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
									},
									GasUsed: '0',
									BaseFeeBurn: '0',
									OverEstimationBurn: '0',
									MinerPenalty: '0',
									MinerTip: '0',
									Refund: '0',
									TotalCost: '0',
								},
								ExecutionTrace: {
									Msg: {
										Version: 42,
										To: 'f01234',
										From: 'f01234',
										Nonce: 42,
										Value: '0',
										GasLimit: 9,
										GasFeeCap: '0',
										GasPremium: '0',
										Method: 1,
										Params: 'Ynl0ZSBhcnJheQ==',
										CID: {
											'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
										},
									},
									MsgRct: {
										ExitCode: 0,
										Return: 'Ynl0ZSBhcnJheQ==',
										GasUsed: 9,
									},
									Error: 'string value',
									Duration: 60000000000,
									GasCharges: [
										{
											Name: 'string value',
											loc: [
												{
													File: 'string value',
													Line: 123,
													Function: 'string value',
												},
											],
											tg: 9,
											cg: 9,
											sg: 9,
											vtg: 9,
											vcg: 9,
											vsg: 9,
											tt: 60000000000,
											ex: {},
										},
									],
									Subcalls: [
										{
											Msg: {
												Version: 42,
												To: 'f01234',
												From: 'f01234',
												Nonce: 42,
												Value: '0',
												GasLimit: 9,
												GasFeeCap: '0',
												GasPremium: '0',
												Method: 1,
												Params: 'Ynl0ZSBhcnJheQ==',
												CID: {
													'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
												},
											},
											MsgRct: {
												ExitCode: 0,
												Return: 'Ynl0ZSBhcnJheQ==',
												GasUsed: 9,
											},
											Error: 'string value',
											Duration: 60000000000,
											GasCharges: [
												{
													Name: 'string value',
													loc: [
														{
															File: 'string value',
															Line: 123,
															Function: 'string value',
														},
													],
													tg: 9,
													cg: 9,
													sg: 9,
													vtg: 9,
													vcg: 9,
													vsg: 9,
													tt: 60000000000,
													ex: {},
												},
											],
											Subcalls: null,
										},
									],
								},
								Error: 'string value',
								Duration: 60000000000,
							},
						],
					},
				},
			},
			{
				title: 'StateDealProviderCollateralBounds',
				description:
					'StateDealProviderCollateralBounds returns the min and max collateral a storage provider can issue. It takes the deal size and verified status as parameters.',
				permissions: 'read',
				method: {
					request: [
						1032,
						true,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Min: '0',
						Max: '0',
					},
				},
			},
			{
				title: 'StateDecodeParams',
				description:
					'StateDecodeParams attempts to decode the provided params, based on the recipient actor address and method number.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						1,
						'Ynl0ZSBhcnJheQ==',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {},
				},
			},
			{
				title: 'StateGetActor',
				description:
					'StateGetActor returns the indicated actor’s nonce and balance.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Code: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Head: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Nonce: 42,
						Balance: '0',
					},
				},
			},
			{
				title: 'StateGetNetworkParams',
				description: 'StateGetNetworkParams return current network params',
				permissions: 'read',
				method: {
					request: [],

					response: {
						NetworkName: 'lotus',
						BlockDelaySecs: 42,
						ConsensusMinerMinPower: '0',
						SupportedProofTypes: [8],
						PreCommitChallengeDelay: 10101,
						ForkUpgradeParams: {
							UpgradeSmokeHeight: 10101,
							UpgradeBreezeHeight: 10101,
							UpgradeIgnitionHeight: 10101,
							UpgradeLiftoffHeight: 10101,
							UpgradeAssemblyHeight: 10101,
							UpgradeRefuelHeight: 10101,
							UpgradeTapeHeight: 10101,
							UpgradeKumquatHeight: 10101,
							UpgradePriceListOopsHeight: 10101,
							BreezeGasTampingDuration: 10101,
							UpgradeCalicoHeight: 10101,
							UpgradePersianHeight: 10101,
							UpgradeOrangeHeight: 10101,
							UpgradeClausHeight: 10101,
							UpgradeTrustHeight: 10101,
							UpgradeNorwegianHeight: 10101,
							UpgradeTurboHeight: 10101,
							UpgradeHyperdriveHeight: 10101,
							UpgradeChocolateHeight: 10101,
							UpgradeOhSnapHeight: 10101,
						},
					},
				},
			},
			{
				title: 'StateGetRandomnessFromBeacon',
				description:
					'StateGetRandomnessFromBeacon is used to sample the beacon for randomness.',
				permissions: 'read',
				method: {
					request: [
						2,
						10101,
						'Ynl0ZSBhcnJheQ==',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: 'Bw==',
				},
			},
			{
				title: 'StateGetRandomnessFromTickets',
				description:
					'StateGetRandomnessFromTickets is used to sample the chain for randomness.',
				permissions: 'read',
				method: {
					request: [
						2,
						10101,
						'Ynl0ZSBhcnJheQ==',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: 'Bw==',
				},
			},
			{
				title: 'StateGetReceipt',
				description:
					'StateGetReceipt returns the message receipt for the given message or for a matching gas-repriced replacing message. NOTE: If the requested message was replaced, this method will return the receipt for the replacing message - if the caller needs the receipt for exactly the requested message, use StateSearchMsg().Receipt, and check that MsgLookup.Message is matching the requested CID DEPRECATED: Use StateSearchMsg, this method won’t be supported in v1 API',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						ExitCode: 0,
						Return: 'Ynl0ZSBhcnJheQ==',
						GasUsed: 9,
					},
				},
			},
			{
				title: 'StateListActors',
				description:
					'StateListActors returns the addresses of every actor in the state',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: ['f01234'],
				},
			},
			{
				title: 'StateListMessages',
				description:
					'StateListMessages looks back and returns all messages with a matching to or from address, stopping at the given height.',
				permissions: 'read',
				method: {
					request: [
						{
							To: 'f01234',
							From: 'f01234',
						},
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						10101,
					],

					response: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
				},
			},
			{
				title: 'StateListMiners',
				description:
					'StateListMiners returns the addresses of every miner that has claimed power in the Power Actor',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: ['f01234'],
				},
			},
			{
				title: 'StateLookupID',
				description:
					'StateLookupID retrieves the ID address of the given address',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: 'f01234',
				},
			},
			{
				title: 'StateMarketBalance',
				description:
					'StateMarketBalance looks up the Escrow and Locked balances of the given address in the Storage Market',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Escrow: '0',
						Locked: '0',
					},
				},
			},
			{
				title: 'StateMarketDeals',
				description:
					'StateMarketDeals returns information about every deal in the Storage Market',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						t026363: {
							Proposal: {
								PieceCID: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								PieceSize: 1032,
								VerifiedDeal: true,
								Client: 'f01234',
								Provider: 'f01234',
								Label: '',
								StartEpoch: 10101,
								EndEpoch: 10101,
								StoragePricePerEpoch: '0',
								ProviderCollateral: '0',
								ClientCollateral: '0',
							},
							State: {
								SectorStartEpoch: 10101,
								LastUpdatedEpoch: 10101,
								SlashEpoch: 10101,
							},
						},
					},
				},
			},
			{
				title: 'StateMarketParticipants',
				description:
					'StateMarketParticipants returns the Escrow and Locked balances of every participant in the Storage Market',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						t026363: {
							Escrow: '0',
							Locked: '0',
						},
					},
				},
			},
			{
				title: 'StateMarketStorageDeal',
				description:
					'StateMarketStorageDeal returns information about the indicated deal',
				permissions: 'read',
				method: {
					request: [
						5432,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Proposal: {
							PieceCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							PieceSize: 1032,
							VerifiedDeal: true,
							Client: 'f01234',
							Provider: 'f01234',
							Label: '',
							StartEpoch: 10101,
							EndEpoch: 10101,
							StoragePricePerEpoch: '0',
							ProviderCollateral: '0',
							ClientCollateral: '0',
						},
						State: {
							SectorStartEpoch: 10101,
							LastUpdatedEpoch: 10101,
							SlashEpoch: 10101,
						},
					},
				},
			},
			{
				title: 'StateMinerActiveSectors',
				description:
					'StateMinerActiveSectors returns info about sectors that a given miner is actively proving.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [
						{
							SectorNumber: 9,
							SealProof: 8,
							SealedCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							DealIDs: [5432],
							Activation: 10101,
							Expiration: 10101,
							DealWeight: '0',
							VerifiedDealWeight: '0',
							InitialPledge: '0',
							ExpectedDayReward: '0',
							ExpectedStoragePledge: '0',
							ReplacedSectorAge: 10101,
							ReplacedDayReward: '0',
							SectorKeyCID: null,
						},
					],
				},
			},
			{
				title: 'StateMinerAvailableBalance',
				description:
					'StateMinerAvailableBalance returns the portion of a miner’s balance that can be withdrawn or spent',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: '0',
				},
			},
			{
				title: 'StateMinerDeadlines',
				description:
					'StateMinerDeadlines returns all the proving deadlines for the given miner',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [
						{
							PostSubmissions: [5, 1],
							DisputableProofCount: 42,
						},
					],
				},
			},
			{
				title: 'StateMinerFaults',
				description:
					'StateMinerFaults returns a bitfield indicating the faulty sectors of the given miner',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [5, 1],
				},
			},
			{
				title: 'StateMinerInfo',
				description: 'StateMinerInfo returns info about the indicated miner',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Owner: 'f01234',
						Worker: 'f01234',
						NewWorker: 'f01234',
						ControlAddresses: ['f01234'],
						WorkerChangeEpoch: 10101,
						PeerId: '12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf',
						Multiaddrs: ['Ynl0ZSBhcnJheQ=='],
						WindowPoStProofType: 8,
						SectorSize: 34359738368,
						WindowPoStPartitionSectors: 42,
						ConsensusFaultElapsed: 10101,
					},
				},
			},
			{
				title: 'StateMinerInitialPledgeCollateral',
				description:
					'StateMinerInitialPledgeCollateral returns the initial pledge collateral for the specified miner’s sector',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						{
							SealProof: 8,
							SectorNumber: 9,
							SealedCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							SealRandEpoch: 10101,
							DealIDs: [5432],
							Expiration: 10101,
							ReplaceCapacity: true,
							ReplaceSectorDeadline: 42,
							ReplaceSectorPartition: 42,
							ReplaceSectorNumber: 9,
						},
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: '0',
				},
			},
			{
				title: 'StateMinerPartitions',
				description:
					'StateMinerPartitions returns all partitions in the specified deadline',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						42,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [
						{
							AllSectors: [5, 1],
							FaultySectors: [5, 1],
							RecoveringSectors: [5, 1],
							LiveSectors: [5, 1],
							ActiveSectors: [5, 1],
						},
					],
				},
			},
			{
				title: 'StateMinerPower',
				description: 'StateMinerPower returns the power of the indicated miner',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						MinerPower: {
							RawBytePower: '0',
							QualityAdjPower: '0',
						},
						TotalPower: {
							RawBytePower: '0',
							QualityAdjPower: '0',
						},
						HasMinPower: true,
					},
				},
			},
			// {
			// 	title: 'StateMinerInitialPledgeCollateral',
			// 	description:
			// 		'StateMinerInitialPledgeCollateral returns the precommit deposit for the specified miner’s sector',
			// 	permissions: 'read',
			// 	method: {
			// 		request: [
			// 			'f01234',
			// 			{
			// 				SealProof: 8,
			// 				SectorNumber: 9,
			// 				SealedCID: {
			// 					'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
			// 				},
			// 				SealRandEpoch: 10101,
			// 				DealIDs: [5432],
			// 				Expiration: 10101,
			// 				ReplaceCapacity: true,
			// 				ReplaceSectorDeadline: 42,
			// 				ReplaceSectorPartition: 42,
			// 				ReplaceSectorNumber: 9,
			// 			},
			// 			[
			// 				{
			// 					'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
			// 				},
			// 				{
			// 					'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
			// 				},
			// 			],
			// 		],

			// 		response: '0',
			// 	},
			// },
			{
				title: 'StateMinerProvingDeadline',
				description:
					'StateMinerProvingDeadline calculates the deadline at some epoch for a proving period and returns the deadline-related calculations.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						CurrentEpoch: 10101,
						PeriodStart: 10101,
						Index: 42,
						Open: 10101,
						Close: 10101,
						Challenge: 10101,
						FaultCutoff: 10101,
						WPoStPeriodDeadlines: 42,
						WPoStProvingPeriod: 10101,
						WPoStChallengeWindow: 10101,
						WPoStChallengeLookback: 10101,
						FaultDeclarationCutoff: 10101,
					},
				},
			},
			{
				title: 'StateMinerRecoveries',
				description:
					'StateMinerRecoveries returns a bitfield indicating the recovering sectors of the given miner',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [5, 1],
				},
			},
			{
				title: 'StateMinerSectorAllocated',
				description:
					'StateMinerSectorAllocated checks if a sector is allocated',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: true,
				},
			},
			{
				title: 'StateMinerSectorCount',
				description:
					'StateMinerSectorCount returns the number of sectors in a miner’s sector set and proving set',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Live: 42,
						Active: 42,
						Faulty: 42,
					},
				},
			},
			{
				title: 'StateMinerSectors',
				description:
					'StateMinerSectors returns info about the given miner’s sectors. If the filter bitfield is nil, all sectors are included.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[0],
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: [
						{
							SectorNumber: 9,
							SealProof: 8,
							SealedCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							DealIDs: [5432],
							Activation: 10101,
							Expiration: 10101,
							DealWeight: '0',
							VerifiedDealWeight: '0',
							InitialPledge: '0',
							ExpectedDayReward: '0',
							ExpectedStoragePledge: '0',
							ReplacedSectorAge: 10101,
							ReplacedDayReward: '0',
							SectorKeyCID: null,
						},
					],
				},
			},
			{
				title: 'StateNetworkName',
				description:
					'StateNetworkName returns the name of the network the node is synced to',
				permissions: 'read',
				method: {
					request: [],

					response: 'lotus',
				},
			},
			{
				title: 'StateNetworkVersion',
				description:
					'StateNetworkVersion returns the network version at the given tipset',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: 16,
				},
			},
			{
				title: 'StateReadState',
				description: 'StateReadState returns the indicated actor’s state.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Balance: '0',
						Code: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						State: {},
					},
				},
			},
			{
				title: 'StateReplay',
				description:
					'StateReplay replays a given message, assuming it was included in a block in the specified tipset. If a tipset key is provided, and a replacing message is not found on chain, the method will return an error saying that the message wasn’t found If no tipset key is provided, the appropriate tipset is looked up, and if the message was gas-repriced, the on-chain message will be replayed - in that case the returned InvocResult.MsgCid will not match the Cid param If the caller wants to ensure that exactly the requested message was executed, they MUST check that InvocResult.MsgCid is equal to the provided Cid. Without this check both the requested and original message may appear as successfully executed on-chain, which may look like a double-spend. A replacing message is a message with a different CID, any of Gas values, and different signature, but with all other parameters matching (source/destination, nonce, params, etc.)',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: {
						MsgCid: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Msg: {
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						MsgRct: {
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
						GasCost: {
							Message: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							GasUsed: '0',
							BaseFeeBurn: '0',
							OverEstimationBurn: '0',
							MinerPenalty: '0',
							MinerTip: '0',
							Refund: '0',
							TotalCost: '0',
						},
						ExecutionTrace: {
							Msg: {
								Version: 42,
								To: 'f01234',
								From: 'f01234',
								Nonce: 42,
								Value: '0',
								GasLimit: 9,
								GasFeeCap: '0',
								GasPremium: '0',
								Method: 1,
								Params: 'Ynl0ZSBhcnJheQ==',
								CID: {
									'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
								},
							},
							MsgRct: {
								ExitCode: 0,
								Return: 'Ynl0ZSBhcnJheQ==',
								GasUsed: 9,
							},
							Error: 'string value',
							Duration: 60000000000,
							GasCharges: [
								{
									Name: 'string value',
									loc: [
										{
											File: 'string value',
											Line: 123,
											Function: 'string value',
										},
									],
									tg: 9,
									cg: 9,
									sg: 9,
									vtg: 9,
									vcg: 9,
									vsg: 9,
									tt: 60000000000,
									ex: {},
								},
							],
							Subcalls: [
								{
									Msg: {
										Version: 42,
										To: 'f01234',
										From: 'f01234',
										Nonce: 42,
										Value: '0',
										GasLimit: 9,
										GasFeeCap: '0',
										GasPremium: '0',
										Method: 1,
										Params: 'Ynl0ZSBhcnJheQ==',
										CID: {
											'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
										},
									},
									MsgRct: {
										ExitCode: 0,
										Return: 'Ynl0ZSBhcnJheQ==',
										GasUsed: 9,
									},
									Error: 'string value',
									Duration: 60000000000,
									GasCharges: [
										{
											Name: 'string value',
											loc: [
												{
													File: 'string value',
													Line: 123,
													Function: 'string value',
												},
											],
											tg: 9,
											cg: 9,
											sg: 9,
											vtg: 9,
											vcg: 9,
											vsg: 9,
											tt: 60000000000,
											ex: {},
										},
									],
									Subcalls: null,
								},
							],
						},
						Error: 'string value',
						Duration: 60000000000,
					},
				},
			},
			{
				title: 'StateSearchMsg',
				description:
					'StateSearchMsg searches for a message in the chain, and returns its receipt and the tipset where it was executed',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],

					response: {
						Message: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Receipt: {
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
						ReturnDec: {},
						TipSet: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						Height: 10101,
					},
				},
			},
			{
				title: 'StateSearchMsgLimited',
				description:
					'StateSearchMsgLimited looks back up to limit epochs in the chain for a message, and returns its receipt and the tipset where it was executed',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						10101,
					],

					response: {
						Message: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Receipt: {
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
						ReturnDec: {},
						TipSet: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						Height: 10101,
					},
				},
			},
			{
				title: 'StateSectorExpiration',
				description:
					'StateSectorExpiration returns epoch at which given sector will expire',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						OnTime: 10101,
						Early: 10101,
					},
				},
			},
			{
				title: 'StateSectorGetInfo',
				description:
					'StateSectorGetInfo returns the on-chain info for the specified miner’s sector. Returns null in case the sector info isn’t found NOTE: returned info.Expiration may not be accurate in some cases, use StateSectorExpiration to get accurate expiration epoch',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						SectorNumber: 9,
						SealProof: 8,
						SealedCID: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						DealIDs: [5432],
						Activation: 10101,
						Expiration: 10101,
						DealWeight: '0',
						VerifiedDealWeight: '0',
						InitialPledge: '0',
						ExpectedDayReward: '0',
						ExpectedStoragePledge: '0',
						ReplacedSectorAge: 10101,
						ReplacedDayReward: '0',
						SectorKeyCID: null,
					},
				},
			},
			{
				title: 'StateSectorPartition',
				description:
					'StateSectorPartition finds deadline/partition with the specified sector',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Deadline: 42,
						Partition: 42,
					},
				},
			},
			{
				title: 'StateSectorPreCommitInfo',
				description:
					'StateSectorPreCommitInfo returns the PreCommit info for the specified miner’s sector',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						9,
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						Info: {
							SealProof: 8,
							SectorNumber: 9,
							SealedCID: {
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							SealRandEpoch: 10101,
							DealIDs: [5432],
							Expiration: 10101,
							ReplaceCapacity: true,
							ReplaceSectorDeadline: 42,
							ReplaceSectorPartition: 42,
							ReplaceSectorNumber: 9,
						},
						PreCommitDeposit: '0',
						PreCommitEpoch: 10101,
						DealWeight: '0',
						VerifiedDealWeight: '0',
					},
				},
			},
			{
				title: 'StateVMCirculatingSupplyInternal',
				description:
					'StateVMCirculatingSupplyInternal returns an approximation of the circulating supply of Filecoin at the given tipset. This is the value reported by the runtime interface to actors code.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: {
						FilVested: '0',
						FilMined: '0',
						FilBurnt: '0',
						FilLocked: '0',
						FilCirculating: '0',
						FilReserveDisbursed: '0',
					},
				},
			},
			{
				title: 'StateVerifiedClientStatus',
				description:
					'StateVerifiedClientStatus returns the data cap for the given address. Returns nil if there is no entry in the data cap table for the address.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: '0',
				},
			},
			{
				title: 'StateVerifiedRegistryRootKey',
				description:
					'StateVerifiedRegistryRootKey returns the address of the Verified Registry’s root key',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: 'f01234',
				},
			},
			// {
			// 	title: 'StateVerifiedRegistryRootKey',
			// 	description:
			// 		'StateVerifiedRegistryRootKey returns the address of the Verified Registry’s root key',
			// 	permissions: 'read',
			// 	method: {
			// 		request: [
			// 			[
			// 				{
			// 					'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
			// 				},
			// 				{
			// 					'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
			// 				},
			// 			],
			// 		],

			// 		response: 'f01234',
			// 	},
			// },
			{
				title: 'StateVerifierStatus',
				description:
					'StateVerifierStatus returns the data cap for the given address. Returns nil if there is no entry in the data cap table for the address.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],

					response: '0',
				},
			},
			{
				title: 'StateWaitMsg',
				description:
					'StateWaitMsg looks back in the chain for a message. If not found, it blocks until the message arrives on chain, and gets to the indicated confidence depth',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						42,
					],

					response: {
						Message: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Receipt: {
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
						ReturnDec: {},
						TipSet: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						Height: 10101,
					},
				},
			},
			{
				title: 'StateWaitMsgLimited',
				description:
					'StateWaitMsgLimited looks back up to limit epochs in the chain for a message. If not found, it blocks until the message arrives on chain, and gets to the indicated confidence depth.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						42,
						10101,
					],

					response: {
						Message: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Receipt: {
							ExitCode: 0,
							Return: 'Ynl0ZSBhcnJheQ==',
							GasUsed: 9,
						},
						ReturnDec: {},
						TipSet: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
						Height: 10101,
					},
				},
			},
		],
	},
	{
		heading: 'Sync',
		description:
			'The Sync method group contains methods for interacting with and observing the lotus sync service.',
		services: [
			{
				title: 'SyncCheckBad',
				description:
					'SyncCheckBad checks if a block was marked as bad, and if it was, returns the reason.',
				permissions: 'read',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: 'string value',
				},
			},
			{
				title: 'SyncCheckpoint',
				description:
					'SyncCheckpoint marks a blocks as checkpointed, meaning that it won’t ever fork away from it.',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: {},
				},
			},
			{
				title: 'SyncIncomingBlocks',
				description:
					'SyncIncomingBlocks returns a channel streaming incoming, potentially not yet synced block headers.',
				permissions: 'read',
				method: {
					request: [],
					response: {
						Miner: 'f01234',
						Ticket: {
							VRFProof: 'Ynl0ZSBhcnJheQ==',
						},
						ElectionProof: {
							WinCount: 9,
							VRFProof: 'Ynl0ZSBhcnJheQ==',
						},
						BeaconEntries: [
							{
								Round: 42,
								Data: 'Ynl0ZSBhcnJheQ==',
							},
						],
						WinPoStProof: [
							{
								PoStProof: 8,
								ProofBytes: 'Ynl0ZSBhcnJheQ==',
							},
						],
						Parents: [
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
						],
						ParentWeight: '0',
						Height: 10101,
						ParentStateRoot: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						ParentMessageReceipts: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						Messages: {
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
						BLSAggregate: {
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						Timestamp: 42,
						BlockSig: {
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						ForkSignaling: 42,
						ParentBaseFee: '0',
					},
				},
			},
			{
				title: 'SyncMarkBad',
				description:
					'SyncMarkBad marks a blocks as bad, meaning that it won’t ever by synced. Use with extreme caution.',
				permissions: 'admin',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {},
				},
			},
			{
				title: 'SyncState',
				description:
					'SyncState returns the current status of the lotus sync system.',
				permissions: 'read',
				method: {
					request: [],
					response: {
						ActiveSyncs: [
							{
								WorkerID: 42,
								Base: {
									Cids: null,
									Blocks: null,
									Height: 0,
								},
								Target: {
									Cids: null,
									Blocks: null,
									Height: 0,
								},
								Stage: 1,
								Height: 10101,
								Start: '0001-01-01T00:00:00Z',
								End: '0001-01-01T00:00:00Z',
								Message: 'string value',
							},
						],
						VMApplied: 42,
					},
				},
			},
			{
				title: 'SyncSubmitBlock',
				description:
					'SyncSubmitBlock can be used to submit a newly created block to the. network through this node',
				permissions: 'write',
				method: {
					request: [
						{
							Header: {
								Miner: 'f01234',
								Ticket: {
									VRFProof: 'Ynl0ZSBhcnJheQ==',
								},
								ElectionProof: {
									WinCount: 9,
									VRFProof: 'Ynl0ZSBhcnJheQ==',
								},
								BeaconEntries: [
									{
										Round: 42,
										Data: 'Ynl0ZSBhcnJheQ==',
									},
								],
								WinPoStProof: [
									{
										PoStProof: 8,
										ProofBytes: 'Ynl0ZSBhcnJheQ==',
									},
								],
								Parents: [
									{
										'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
									},
								],
								ParentWeight: '0',
								Height: 10101,
								ParentStateRoot: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								ParentMessageReceipts: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								Messages: {
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
								BLSAggregate: {
									Type: 2,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
								Timestamp: 42,
								BlockSig: {
									Type: 2,
									Data: 'Ynl0ZSBhcnJheQ==',
								},
								ForkSignaling: 42,
								ParentBaseFee: '0',
							},
							BlsMessages: [
								{
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
							],
							SecpkMessages: [
								{
									'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
								},
							],
						},
					],
					response: {},
				},
			},
			{
				title: 'SyncUnmarkAllBad',
				description:
					'SyncUnmarkAllBad purges bad block cache, making it possible to sync to chains previously marked as bad',
				permissions: 'admin',
				method: {
					request: [],
					response: {},
				},
			},
			{
				title: 'SyncUnmarkBad',
				description:
					'SyncUnmarkBad unmarks a blocks as bad, making it possible to be validated and synced again.',
				permissions: 'admin',
				method: {
					request: [
						{
							'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
						},
					],
					response: {},
				},
			},
			{
				title: 'SyncValidateTipset',
				description:
					'SyncValidateTipset indicates whether the provided tipset is valid or not',
				permissions: 'read',
				method: {
					request: [
						[
							{
								'/': 'bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4',
							},
							{
								'/': 'bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve',
							},
						],
					],
					response: true,
				},
			},
		],
	},
	{
		heading: 'Wallet',
		description: '',
		services: [
			{
				title: 'WalletBalance',
				description:
					'WalletBalance returns the balance of the given address at the current head of the chain.',
				permissions: 'read',
				method: {
					request: ['f01234'],
					response: '0',
				},
			},
			{
				title: 'WalletDefaultAddress',
				description:
					'WalletDefaultAddress returns the address marked as default in the wallet.',
				permissions: 'write',
				method: {
					request: [],
					response: 'f01234',
				},
			},
			{
				title: 'WalletDelete',
				description: 'WalletDelete deletes an address from the wallet.',
				permissions: 'admin',
				method: {
					request: ['f01234'],
					response: {},
				},
			},
			{
				title: 'WalletExport',
				description:
					'WalletExport returns the private key of an address in the wallet.',
				permissions: 'admin',
				method: {
					request: ['f01234'],
					response: {
						Type: 'bls',
						PrivateKey: 'Ynl0ZSBhcnJheQ==',
					},
				},
			},
			{
				title: 'WalletHas',
				description:
					'WalletHas indicates whether the given address is in the wallet.',
				permissions: 'write',
				method: {
					request: ['f01234'],
					response: true,
				},
			},
			{
				title: 'WalletImport',
				description:
					'WalletImport receives a KeyInfo, which includes a private key, and imports it into the wallet.',
				permissions: 'write',
				method: {
					request: [
						{
							Type: 'bls',
							PrivateKey: 'Ynl0ZSBhcnJheQ==',
						},
					],
					response: 'f01234',
				},
			},
			{
				title: 'WalletList',
				description: 'WalletList lists all the addresses in the wallet.',
				permissions: 'write',
				method: {
					request: [],
					response: ['f01234'],
				},
			},
			{
				title: 'WalletNew',
				description:
					'WalletNew creates a new address in the wallet with the given sigType. Available key types: bls, secp256k1, secp256k1-ledger Support for numerical types: 1 - secp256k1, 2 - BLS is deprecated',
				permissions: 'write',
				method: {
					request: ['bls'],
					response: 'f01234',
				},
			},
			{
				title: 'WalletSetDefault',
				description:
					'WalletSetDefault marks the given address as as the default one.',
				permissions: 'write',
				method: {
					request: ['f01234'],
					response: {},
				},
			},
			{
				title: 'WalletSign',
				description:
					'WalletSign signs the given bytes using the given address.',
				permissions: 'sign',
				method: {
					request: ['f01234', 'Ynl0ZSBhcnJheQ=='],
					response: {
						Type: 2,
						Data: 'Ynl0ZSBhcnJheQ==',
					},
				},
			},
			{
				title: 'WalletSignMessage',
				description:
					'WalletSignMessage signs the given message using the given address.',
				permissions: 'sign',
				method: {
					request: [
						'f01234',
						{
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
					],
					response: {
						Message: {
							Version: 42,
							To: 'f01234',
							From: 'f01234',
							Nonce: 42,
							Value: '0',
							GasLimit: 9,
							GasFeeCap: '0',
							GasPremium: '0',
							Method: 1,
							Params: 'Ynl0ZSBhcnJheQ==',
							CID: {
								'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
							},
						},
						Signature: {
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
						CID: {
							'/': 'bafy2bzacebbpdegvr3i4cosewthysg5xkxpqfn2wfcz6mv2hmoktwbdxkax4s',
						},
					},
				},
			},
			{
				title: 'WalletValidateAddress',
				description:
					'WalletValidateAddress validates whether a given string can be decoded as a well-formed address',
				permissions: 'read',
				method: {
					request: ['string value'],
					response: 'f01234',
				},
			},
			{
				title: 'WalletVerify',
				description:
					'WalletVerify takes an address, a signature, and some bytes, and indicates whether the signature is valid. The address does not have to be in the wallet.',
				permissions: 'read',
				method: {
					request: [
						'f01234',
						'Ynl0ZSBhcnJheQ==',
						{
							Type: 2,
							Data: 'Ynl0ZSBhcnJheQ==',
						},
					],
					response: true,
				},
			},
		],
	},
	{
		heading: 'Others',
		description: '',
		services: [
			{
				title: 'Closing',
				description: '',
				permissions: 'read',
				method: { request: [], response: {} },
			},
			{
				title: 'Discover',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						info: {
							title: 'Lotus RPC API',
							version: '1.2.1/generated=2020-11-22T08:22:42-06:00',
						},
						methods: [],
						openrpc: '1.2.6',
					},
				},
			},
			{
				title: 'Session',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: '07070707-0707-0707-0707-070707070707',
				},
			},
			{
				title: 'Shutdown',
				description: '',
				permissions: 'admin',
				method: { request: [], response: {} },
			},
			{
				title: 'Version',
				description: '',
				permissions: 'read',
				method: {
					request: [],
					response: {
						Version: 'string value',
						APIVersion: 131840,
						BlockDelay: 42,
					},
				},
			},
		],
	},
];
