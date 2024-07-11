/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Ad: { // root type
    active: boolean; // Boolean!
    arrivalDate: string; // String!
    companyId: number; // Int!
    createdAt: string; // String!
    departureDate: string; // String!
    description: string; // String!
    documents: string; // String!
    doubleDirection: boolean; // Boolean!
    driverPointFilter: number; // Float!
    id: number; // Int!
    price: number; // Float!
    prioty: boolean; // Boolean!
    title: string; // String!
    tonage: string; // String!
    trailer: boolean; // Boolean!
    truck: boolean; // Boolean!
    updatedAt: string; // String!
  }
  AdminUser: { // root type
    createdAt: string; // String!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    resetPasswordToken?: string | null; // String
    resetPasswotdTokenExpires?: string | null; // String
    surname: string; // String!
    updatedAt: string; // String!
    verificationToken?: string | null; // String
    verificationTokenExpires?: string | null; // String
    verified: boolean; // Boolean!
  }
  AuthType: { // root type
    admin_user: NexusGenRootTypes['AdminUser']; // AdminUser!
    token: string; // String!
  }
  Company: { // root type
    address: string; // String!
    companyName: string; // String!
    createdAt: string; // String!
    id: number; // Int!
    phoneNumber: string; // String!
    point: number; // Float!
    updatedAt: string; // String!
    vkn: string; // String!
  }
  CompanyBankAccount: { // root type
    accountUserName: string; // String!
    bankAccountNumber: string; // String!
    bankName: string; // String!
    companyId: number; // Int!
    createdAt: string; // String!
    iban: string; // String!
    id: number; // Int!
    updatedAt: string; // String!
  }
  CompanyLoad: { // root type
    companyId: number; // Int!
    createdAt: string; // String!
    id: number; // Int!
    name: string; // String!
    updatedAt: string; // String!
  }
  CompanyTrailer: { // root type
    companyId: number; // Int!
    createdAt: string; // String!
    id: number; // Int!
    name: string; // String!
    updatedAt: string; // String!
  }
  CompanyTruck: { // root type
    companyId: number; // Int!
    createdAt: string; // String!
    id: number; // Int!
    name: string; // String!
    updatedAt: string; // String!
  }
  CompanyUser: { // root type
    createdAt: string; // String!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    resetPasswordToken?: string | null; // String
    resetPasswotdTokenExpires?: string | null; // String
    role: string; // String!
    surname: string; // String!
    updatedAt: string; // String!
    verificationToken?: string | null; // String
    verificationTokenExpires?: string | null; // String
    verified: boolean; // Boolean!
  }
  Mutation: {};
  Product: { // root type
    createdAt: string; // String!
    creatorId: number; // Int!
    id: number; // Int!
    name: string; // String!
    price: number; // Float!
    updatedAt: string; // String!
  }
  Query: {};
  User: { // root type
    createdAt: string; // String!
    email: string; // String!
    password: string; // String!
    updatedAt: string; // String!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Ad: { // field return type
    active: boolean; // Boolean!
    approvedUser: NexusGenRootTypes['CompanyUser'] | null; // CompanyUser
    arrivalDate: string; // String!
    company: NexusGenRootTypes['Company'] | null; // Company
    companyId: number; // Int!
    companyLoad: NexusGenRootTypes['CompanyLoad'] | null; // CompanyLoad
    companyTrailer: NexusGenRootTypes['CompanyTrailer'] | null; // CompanyTrailer
    companyTruck: NexusGenRootTypes['CompanyTruck'] | null; // CompanyTruck
    createdAt: string; // String!
    createdUser: NexusGenRootTypes['CompanyUser'] | null; // CompanyUser
    departureDate: string; // String!
    description: string; // String!
    documents: string; // String!
    doubleDirection: boolean; // Boolean!
    driverPointFilter: number; // Float!
    id: number; // Int!
    price: number; // Float!
    prioty: boolean; // Boolean!
    publishUser: NexusGenRootTypes['CompanyUser'] | null; // CompanyUser
    title: string; // String!
    tonage: string; // String!
    trailer: boolean; // Boolean!
    truck: boolean; // Boolean!
    updatedAt: string; // String!
  }
  AdminUser: { // field return type
    createdAt: string; // String!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    resetPasswordToken: string | null; // String
    resetPasswotdTokenExpires: string | null; // String
    surname: string; // String!
    updatedAt: string; // String!
    verificationToken: string | null; // String
    verificationTokenExpires: string | null; // String
    verified: boolean; // Boolean!
  }
  AuthType: { // field return type
    admin_user: NexusGenRootTypes['AdminUser']; // AdminUser!
    token: string; // String!
  }
  Company: { // field return type
    address: string; // String!
    ads: Array<NexusGenRootTypes['Ad'] | null> | null; // [Ad]
    bankAccounts: Array<NexusGenRootTypes['CompanyBankAccount'] | null> | null; // [CompanyBankAccount]
    companyLoads: Array<NexusGenRootTypes['CompanyLoad'] | null> | null; // [CompanyLoad]
    companyName: string; // String!
    companyTrailers: Array<NexusGenRootTypes['CompanyTrailer'] | null> | null; // [CompanyTrailer]
    companyTrucks: Array<NexusGenRootTypes['CompanyTruck'] | null> | null; // [CompanyTruck]
    companyUsers: Array<NexusGenRootTypes['CompanyUser'] | null> | null; // [CompanyUser]
    createdAt: string; // String!
    id: number; // Int!
    phoneNumber: string; // String!
    point: number; // Float!
    updatedAt: string; // String!
    vkn: string; // String!
  }
  CompanyBankAccount: { // field return type
    accountUserName: string; // String!
    bankAccountNumber: string; // String!
    bankName: string; // String!
    company: NexusGenRootTypes['Company'] | null; // Company
    companyId: number; // Int!
    createdAt: string; // String!
    iban: string; // String!
    id: number; // Int!
    updatedAt: string; // String!
  }
  CompanyLoad: { // field return type
    ad: NexusGenRootTypes['Ad'] | null; // Ad
    company: NexusGenRootTypes['Company'] | null; // Company
    companyId: number; // Int!
    createdAt: string; // String!
    id: number; // Int!
    name: string; // String!
    updatedAt: string; // String!
  }
  CompanyTrailer: { // field return type
    ad: NexusGenRootTypes['Ad'] | null; // Ad
    company: NexusGenRootTypes['Company'] | null; // Company
    companyId: number; // Int!
    createdAt: string; // String!
    id: number; // Int!
    name: string; // String!
    updatedAt: string; // String!
  }
  CompanyTruck: { // field return type
    ad: NexusGenRootTypes['Ad'] | null; // Ad
    company: NexusGenRootTypes['Company'] | null; // Company
    companyId: number; // Int!
    createdAt: string; // String!
    id: number; // Int!
    name: string; // String!
    updatedAt: string; // String!
  }
  CompanyUser: { // field return type
    approvedAds: Array<NexusGenRootTypes['Ad'] | null> | null; // [Ad]
    company: NexusGenRootTypes['Company']; // Company!
    createdAds: Array<NexusGenRootTypes['Ad'] | null> | null; // [Ad]
    createdAt: string; // String!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    publishAds: Array<NexusGenRootTypes['Ad'] | null> | null; // [Ad]
    resetPasswordToken: string | null; // String
    resetPasswotdTokenExpires: string | null; // String
    role: string; // String!
    surname: string; // String!
    updatedAt: string; // String!
    verificationToken: string | null; // String
    verificationTokenExpires: string | null; // String
    verified: boolean; // Boolean!
  }
  Mutation: { // field return type
    createAdminUserMutation: NexusGenRootTypes['AdminUser']; // AdminUser!
    createCompanyMutation: NexusGenRootTypes['Company']; // Company!
    createCompanyUser: NexusGenRootTypes['CompanyUser']; // CompanyUser!
    createProductMutation: NexusGenRootTypes['Product']; // Product!
    deleteCompany: NexusGenRootTypes['Company']; // Company!
    deleteCompanyUser: string; // String!
    login: NexusGenRootTypes['AuthType']; // AuthType!
    updateCompanyInfo: NexusGenRootTypes['Company']; // Company!
    updateCompanyUser: NexusGenRootTypes['CompanyUser']; // CompanyUser!
  }
  Product: { // field return type
    createdAt: string; // String!
    createdBy: NexusGenRootTypes['User'] | null; // User
    creatorId: number; // Int!
    id: number; // Int!
    name: string; // String!
    price: number; // Float!
    updatedAt: string; // String!
  }
  Query: { // field return type
    getAdminUserQuery: NexusGenRootTypes['AdminUser']; // AdminUser!
    getAllAdminUserQuery: NexusGenRootTypes['AdminUser']; // AdminUser!
    getAllCompanyUsers: Array<NexusGenRootTypes['CompanyUser'] | null>; // [CompanyUser]!
    getCompanies: Array<NexusGenRootTypes['Company'] | null>; // [Company]!
    getCompany: NexusGenRootTypes['Company']; // Company!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
  }
  User: { // field return type
    createdAt: string; // String!
    email: string; // String!
    password: string; // String!
    updatedAt: string; // String!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Ad: { // field return type name
    active: 'Boolean'
    approvedUser: 'CompanyUser'
    arrivalDate: 'String'
    company: 'Company'
    companyId: 'Int'
    companyLoad: 'CompanyLoad'
    companyTrailer: 'CompanyTrailer'
    companyTruck: 'CompanyTruck'
    createdAt: 'String'
    createdUser: 'CompanyUser'
    departureDate: 'String'
    description: 'String'
    documents: 'String'
    doubleDirection: 'Boolean'
    driverPointFilter: 'Float'
    id: 'Int'
    price: 'Float'
    prioty: 'Boolean'
    publishUser: 'CompanyUser'
    title: 'String'
    tonage: 'String'
    trailer: 'Boolean'
    truck: 'Boolean'
    updatedAt: 'String'
  }
  AdminUser: { // field return type name
    createdAt: 'String'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    resetPasswordToken: 'String'
    resetPasswotdTokenExpires: 'String'
    surname: 'String'
    updatedAt: 'String'
    verificationToken: 'String'
    verificationTokenExpires: 'String'
    verified: 'Boolean'
  }
  AuthType: { // field return type name
    admin_user: 'AdminUser'
    token: 'String'
  }
  Company: { // field return type name
    address: 'String'
    ads: 'Ad'
    bankAccounts: 'CompanyBankAccount'
    companyLoads: 'CompanyLoad'
    companyName: 'String'
    companyTrailers: 'CompanyTrailer'
    companyTrucks: 'CompanyTruck'
    companyUsers: 'CompanyUser'
    createdAt: 'String'
    id: 'Int'
    phoneNumber: 'String'
    point: 'Float'
    updatedAt: 'String'
    vkn: 'String'
  }
  CompanyBankAccount: { // field return type name
    accountUserName: 'String'
    bankAccountNumber: 'String'
    bankName: 'String'
    company: 'Company'
    companyId: 'Int'
    createdAt: 'String'
    iban: 'String'
    id: 'Int'
    updatedAt: 'String'
  }
  CompanyLoad: { // field return type name
    ad: 'Ad'
    company: 'Company'
    companyId: 'Int'
    createdAt: 'String'
    id: 'Int'
    name: 'String'
    updatedAt: 'String'
  }
  CompanyTrailer: { // field return type name
    ad: 'Ad'
    company: 'Company'
    companyId: 'Int'
    createdAt: 'String'
    id: 'Int'
    name: 'String'
    updatedAt: 'String'
  }
  CompanyTruck: { // field return type name
    ad: 'Ad'
    company: 'Company'
    companyId: 'Int'
    createdAt: 'String'
    id: 'Int'
    name: 'String'
    updatedAt: 'String'
  }
  CompanyUser: { // field return type name
    approvedAds: 'Ad'
    company: 'Company'
    createdAds: 'Ad'
    createdAt: 'String'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    publishAds: 'Ad'
    resetPasswordToken: 'String'
    resetPasswotdTokenExpires: 'String'
    role: 'String'
    surname: 'String'
    updatedAt: 'String'
    verificationToken: 'String'
    verificationTokenExpires: 'String'
    verified: 'Boolean'
  }
  Mutation: { // field return type name
    createAdminUserMutation: 'AdminUser'
    createCompanyMutation: 'Company'
    createCompanyUser: 'CompanyUser'
    createProductMutation: 'Product'
    deleteCompany: 'Company'
    deleteCompanyUser: 'String'
    login: 'AuthType'
    updateCompanyInfo: 'Company'
    updateCompanyUser: 'CompanyUser'
  }
  Product: { // field return type name
    createdAt: 'String'
    createdBy: 'User'
    creatorId: 'Int'
    id: 'Int'
    name: 'String'
    price: 'Float'
    updatedAt: 'String'
  }
  Query: { // field return type name
    getAdminUserQuery: 'AdminUser'
    getAllAdminUserQuery: 'AdminUser'
    getAllCompanyUsers: 'CompanyUser'
    getCompanies: 'Company'
    getCompany: 'Company'
    products: 'Product'
  }
  User: { // field return type name
    createdAt: 'String'
    email: 'String'
    password: 'String'
    updatedAt: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAdminUserMutation: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
      surname: string; // String!
    }
    createCompanyMutation: { // args
      address: string; // String!
      companyName: string; // String!
      phoneNumber: string; // String!
      point: string; // String!
      vkn: string; // String!
    }
    createCompanyUser: { // args
      companyId: number; // Int!
      email: string; // String!
      name: string; // String!
      password: string; // String!
      role: string; // String!
      surname: string; // String!
    }
    createProductMutation: { // args
      name: string; // String!
      price: number; // Float!
    }
    deleteCompany: { // args
      companyId: number; // Int!
    }
    deleteCompanyUser: { // args
      companyUserId: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    updateCompanyInfo: { // args
      address: string; // String!
      companyId: number; // Int!
      companyName: string; // String!
      phoneNumber: string; // String!
      point: string; // String!
      vkn: string; // String!
    }
    updateCompanyUser: { // args
      companyUserId: number; // Int!
      name: string; // String!
      surname: string; // String!
    }
  }
  Query: {
    getAdminUserQuery: { // args
      id: number; // Int!
    }
    getCompany: { // args
      getCompanyId: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}