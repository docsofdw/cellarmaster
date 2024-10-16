import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly cellarLocation?: string | null;
  readonly wines?: (Wine | null)[] | null;
  readonly spirits?: (Spirit | null)[] | null;
  readonly cellarConditions?: (CellarCondition | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly cellarLocation?: string | null;
  readonly wines: AsyncCollection<Wine>;
  readonly spirits: AsyncCollection<Spirit>;
  readonly cellarConditions: AsyncCollection<CellarCondition>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerWine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly producer: string;
  readonly vintage: number;
  readonly region: string;
  readonly variety?: string | null;
  readonly quantity: number;
  readonly storageLocation?: string | null;
  readonly clientID: string;
  readonly client?: Client | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientWinesId?: string | null;
}

type LazyWine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly producer: string;
  readonly vintage: number;
  readonly region: string;
  readonly variety?: string | null;
  readonly quantity: number;
  readonly storageLocation?: string | null;
  readonly clientID: string;
  readonly client: AsyncItem<Client | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientWinesId?: string | null;
}

export declare type Wine = LazyLoading extends LazyLoadingDisabled ? EagerWine : LazyWine

export declare const Wine: (new (init: ModelInit<Wine>) => Wine) & {
  copyOf(source: Wine, mutator: (draft: MutableModel<Wine>) => MutableModel<Wine> | void): Wine;
}

type EagerSpirit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Spirit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly producer: string;
  readonly vintage: number;
  readonly quantity: number;
  readonly storageLocation?: string | null;
  readonly clientID: string;
  readonly client?: Client | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientSpiritsId?: string | null;
}

type LazySpirit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Spirit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly producer: string;
  readonly vintage: number;
  readonly quantity: number;
  readonly storageLocation?: string | null;
  readonly clientID: string;
  readonly client: AsyncItem<Client | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientSpiritsId?: string | null;
}

export declare type Spirit = LazyLoading extends LazyLoadingDisabled ? EagerSpirit : LazySpirit

export declare const Spirit: (new (init: ModelInit<Spirit>) => Spirit) & {
  copyOf(source: Spirit, mutator: (draft: MutableModel<Spirit>) => MutableModel<Spirit> | void): Spirit;
}

type EagerCellarCondition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CellarCondition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly temperature: number;
  readonly humidity: number;
  readonly clientID: string;
  readonly client?: Client | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientCellarConditionsId?: string | null;
}

type LazyCellarCondition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CellarCondition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly temperature: number;
  readonly humidity: number;
  readonly clientID: string;
  readonly client: AsyncItem<Client | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientCellarConditionsId?: string | null;
}

export declare type CellarCondition = LazyLoading extends LazyLoadingDisabled ? EagerCellarCondition : LazyCellarCondition

export declare const CellarCondition: (new (init: ModelInit<CellarCondition>) => CellarCondition) & {
  copyOf(source: CellarCondition, mutator: (draft: MutableModel<CellarCondition>) => MutableModel<CellarCondition> | void): CellarCondition;
}