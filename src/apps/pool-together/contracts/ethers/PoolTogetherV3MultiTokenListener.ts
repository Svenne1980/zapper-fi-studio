/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface PoolTogetherV3MultiTokenListenerInterface extends utils.Interface {
  functions: {
    'addAddresses(address[])': FunctionFragment;
    'addressType()': FunctionFragment;
    'beforeTokenMint(address,uint256,address,address)': FunctionFragment;
    'beforeTokenTransfer(address,address,uint256,address)': FunctionFragment;
    'clearAll()': FunctionFragment;
    'contains(address)': FunctionFragment;
    'end()': FunctionFragment;
    'freeze()': FunctionFragment;
    'getAddresses()': FunctionFragment;
    'initialize(address)': FunctionFragment;
    'next(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'removeAddress(address,address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'start()': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addAddresses'
      | 'addressType'
      | 'beforeTokenMint'
      | 'beforeTokenTransfer'
      | 'clearAll'
      | 'contains'
      | 'end'
      | 'freeze'
      | 'getAddresses'
      | 'initialize'
      | 'next'
      | 'owner'
      | 'removeAddress'
      | 'renounceOwnership'
      | 'start'
      | 'supportsInterface'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'addAddresses', values: [string[]]): string;
  encodeFunctionData(functionFragment: 'addressType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'beforeTokenMint', values: [string, BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'beforeTokenTransfer', values: [string, string, BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'clearAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'contains', values: [string]): string;
  encodeFunctionData(functionFragment: 'end', values?: undefined): string;
  encodeFunctionData(functionFragment: 'freeze', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAddresses', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string]): string;
  encodeFunctionData(functionFragment: 'next', values: [string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'removeAddress', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'start', values?: undefined): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;

  decodeFunctionResult(functionFragment: 'addAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addressType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'beforeTokenMint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'beforeTokenTransfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'clearAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'contains', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'end', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'freeze', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'next', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'start', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'AddressAdded(address)': EventFragment;
    'AddressRemoved(address)': EventFragment;
    'AllAddressesCleared()': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddressAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AllAddressesCleared'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface AddressAddedEventObject {
  _address: string;
}
export type AddressAddedEvent = TypedEvent<[string], AddressAddedEventObject>;

export type AddressAddedEventFilter = TypedEventFilter<AddressAddedEvent>;

export interface AddressRemovedEventObject {
  _address: string;
}
export type AddressRemovedEvent = TypedEvent<[string], AddressRemovedEventObject>;

export type AddressRemovedEventFilter = TypedEventFilter<AddressRemovedEvent>;

export interface AllAddressesClearedEventObject {}
export type AllAddressesClearedEvent = TypedEvent<[], AllAddressesClearedEventObject>;

export type AllAddressesClearedEventFilter = TypedEventFilter<AllAddressesClearedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PoolTogetherV3MultiTokenListener extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoolTogetherV3MultiTokenListenerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAddresses(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    addressType(overrides?: CallOverrides): Promise<[string]>;

    beforeTokenMint(
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    beforeTokenTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    clearAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    contains(_addr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    end(overrides?: CallOverrides): Promise<[string]>;

    freeze(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    getAddresses(overrides?: CallOverrides): Promise<[string[]]>;

    initialize(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    next(current: string, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAddress(
      _previousContract: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    start(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  addAddresses(
    _addresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  addressType(overrides?: CallOverrides): Promise<string>;

  beforeTokenMint(
    to: string,
    amount: BigNumberish,
    controlledToken: string,
    referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  beforeTokenTransfer(
    from: string,
    to: string,
    amount: BigNumberish,
    controlledToken: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  clearAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  contains(_addr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  end(overrides?: CallOverrides): Promise<string>;

  freeze(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  getAddresses(overrides?: CallOverrides): Promise<string[]>;

  initialize(_owner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  next(current: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAddress(
    _previousContract: string,
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  start(overrides?: CallOverrides): Promise<string>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addAddresses(_addresses: string[], overrides?: CallOverrides): Promise<void>;

    addressType(overrides?: CallOverrides): Promise<string>;

    beforeTokenMint(
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      referrer: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    beforeTokenTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    clearAll(overrides?: CallOverrides): Promise<void>;

    contains(_addr: string, overrides?: CallOverrides): Promise<boolean>;

    end(overrides?: CallOverrides): Promise<string>;

    freeze(overrides?: CallOverrides): Promise<void>;

    getAddresses(overrides?: CallOverrides): Promise<string[]>;

    initialize(_owner: string, overrides?: CallOverrides): Promise<void>;

    next(current: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAddress(_previousContract: string, _address: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    start(overrides?: CallOverrides): Promise<string>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AddressAdded(address)'(_address?: string | null): AddressAddedEventFilter;
    AddressAdded(_address?: string | null): AddressAddedEventFilter;

    'AddressRemoved(address)'(_address?: string | null): AddressRemovedEventFilter;
    AddressRemoved(_address?: string | null): AddressRemovedEventFilter;

    'AllAddressesCleared()'(): AllAddressesClearedEventFilter;
    AllAddressesCleared(): AllAddressesClearedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addAddresses(_addresses: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    addressType(overrides?: CallOverrides): Promise<BigNumber>;

    beforeTokenMint(
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    beforeTokenTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    clearAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    contains(_addr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<BigNumber>;

    freeze(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_owner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    next(current: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAddress(
      _previousContract: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddresses(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    addressType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beforeTokenMint(
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    beforeTokenTransfer(
      from: string,
      to: string,
      amount: BigNumberish,
      controlledToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    clearAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    contains(_addr: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    end(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    freeze(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    getAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    next(current: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAddress(
      _previousContract: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}