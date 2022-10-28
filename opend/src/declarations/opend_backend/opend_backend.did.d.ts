import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'addToOwnershipMap' : ActorMethod<[Principal, Principal], undefined>,
  'completePurchase' : ActorMethod<[Principal, Principal, Principal], string>,
  'getListedNFTs' : ActorMethod<[], Array<Principal>>,
  'getListedNftPrice' : ActorMethod<[Principal], bigint>,
  'getOpenDCanisterId' : ActorMethod<[], Principal>,
  'getOriginalOwner' : ActorMethod<[Principal], Principal>,
  'getOwnedNFTs' : ActorMethod<[Principal], Array<Principal>>,
  'isListed' : ActorMethod<[Principal], boolean>,
  'listItem' : ActorMethod<[Principal, bigint], string>,
  'mint' : ActorMethod<[string, Array<number>], Principal>,
}
