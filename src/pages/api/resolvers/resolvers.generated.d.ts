/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import type { GraphQLContext } from './context'
import type { UserGraphQLContext } from './authorization'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  EmailAddress: string
  NonEmptyString: string
  Password: string
  UUID: string
  Void: null
}

export interface BaseUser {
  complete: Scalars['Boolean']
  email: Scalars['EmailAddress']
  id: Scalars['UUID']
}

export type CompleteUser = BaseUser & {
  __typename?: 'CompleteUser'
  complete: Scalars['Boolean']
  email: Scalars['EmailAddress']
  id: Scalars['UUID']
  notes?: Maybe<Scalars['String']>
  parking: Parking
  playlist: Array<Scalars['NonEmptyString']>
}

export interface Mutation {
  __typename?: 'Mutation'
  login: User
  logout?: Maybe<Scalars['Void']>
  register: User
  updateProfile: CompleteUser
}

export interface MutationLoginArgs {
  email: Scalars['EmailAddress']
  password: Scalars['Password']
}

export interface MutationRegisterArgs {
  user: UserInput
}

export interface MutationUpdateProfileArgs {
  profile: ProfileInput
}

export type Parking = 'NO' | 'SLEEPING' | 'YES'

export type PendingUser = BaseUser & {
  __typename?: 'PendingUser'
  complete: Scalars['Boolean']
  email: Scalars['EmailAddress']
  id: Scalars['UUID']
}

export interface ProfileInput {
  notes?: InputMaybe<Scalars['String']>
  parking: Parking
  playlist: Array<Scalars['NonEmptyString']>
}

export interface Query {
  __typename?: 'Query'
  hello: Scalars['String']
  me?: Maybe<User>
}

export interface QueryHelloArgs {
  name: Scalars['String']
}

export type User = CompleteUser | PendingUser

export interface UserInput {
  code: Scalars['String']
  email: Scalars['EmailAddress']
  password: Scalars['Password']
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export interface ResolverWithResolve<TResult, TParent, TContext, TArgs> {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BaseUser: ResolversTypes['CompleteUser'] | ResolversTypes['PendingUser']
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CompleteUser: ResolverTypeWrapper<CompleteUser>
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>
  Mutation: ResolverTypeWrapper<{}>
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>
  Parking: Parking
  Password: ResolverTypeWrapper<Scalars['Password']>
  PendingUser: ResolverTypeWrapper<PendingUser>
  ProfileInput: ProfileInput
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  UUID: ResolverTypeWrapper<Scalars['UUID']>
  User: ResolversTypes['CompleteUser'] | ResolversTypes['PendingUser']
  UserInput: UserInput
  Void: ResolverTypeWrapper<Scalars['Void']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BaseUser:
    | ResolversParentTypes['CompleteUser']
    | ResolversParentTypes['PendingUser']
  Boolean: Scalars['Boolean']
  CompleteUser: CompleteUser
  EmailAddress: Scalars['EmailAddress']
  Mutation: {}
  NonEmptyString: Scalars['NonEmptyString']
  Password: Scalars['Password']
  PendingUser: PendingUser
  ProfileInput: ProfileInput
  Query: {}
  String: Scalars['String']
  UUID: Scalars['UUID']
  User:
    | ResolversParentTypes['CompleteUser']
    | ResolversParentTypes['PendingUser']
  UserInput: UserInput
  Void: Scalars['Void']
}>

export interface AuthDirectiveArgs {}

export type AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLContext,
  Args = AuthDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type BaseUserResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['BaseUser'] = ResolversParentTypes['BaseUser'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'CompleteUser' | 'PendingUser',
    ParentType,
    ContextType
  >
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
}>

export type CompleteUserResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['CompleteUser'] = ResolversParentTypes['CompleteUser'],
> = ResolversObject<{
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  parking?: Resolver<ResolversTypes['Parking'], ParentType, ContextType>
  playlist?: Resolver<
    Array<ResolversTypes['NonEmptyString']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export type MutationResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  login?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >
  logout?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>
  register?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'user'>
  >
  updateProfile?: Resolver<
    ResolversTypes['CompleteUser'],
    ParentType,
    UserGraphQLContext,
    RequireFields<MutationUpdateProfileArgs, 'profile'>
  >
}>

export interface NonEmptyStringScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString'
}

export interface PasswordScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Password'], any> {
  name: 'Password'
}

export type PendingUserResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['PendingUser'] = ResolversParentTypes['PendingUser'],
> = ResolversObject<{
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  hello?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<QueryHelloArgs, 'name'>
  >
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}>

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID'
}

export type UserResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'CompleteUser' | 'PendingUser',
    ParentType,
    ContextType
  >
}>

export interface VoidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void'
}

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  BaseUser?: BaseUserResolvers<ContextType>
  CompleteUser?: CompleteUserResolvers<ContextType>
  EmailAddress?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  NonEmptyString?: GraphQLScalarType
  Password?: GraphQLScalarType
  PendingUser?: PendingUserResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  UUID?: GraphQLScalarType
  User?: UserResolvers<ContextType>
  Void?: GraphQLScalarType
}>

export type DirectiveResolvers<ContextType = GraphQLContext> = ResolversObject<{
  auth?: AuthDirectiveResolver<any, any, ContextType>
}>
