/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      email
      phone
      cellarLocation
      wines {
        nextToken
        __typename
      }
      spirits {
        nextToken
        __typename
      }
      cellarConditions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        cellarLocation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWine = /* GraphQL */ `
  query GetWine($id: ID!) {
    getWine(id: $id) {
      id
      name
      producer
      vintage
      region
      variety
      quantity
      storageLocation
      clientID
      client {
        id
        name
        email
        phone
        cellarLocation
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      clientWinesId
      __typename
    }
  }
`;
export const listWines = /* GraphQL */ `
  query ListWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        producer
        vintage
        region
        variety
        quantity
        storageLocation
        clientID
        createdAt
        updatedAt
        clientWinesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpirit = /* GraphQL */ `
  query GetSpirit($id: ID!) {
    getSpirit(id: $id) {
      id
      name
      type
      producer
      vintage
      quantity
      storageLocation
      clientID
      client {
        id
        name
        email
        phone
        cellarLocation
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      clientSpiritsId
      __typename
    }
  }
`;
export const listSpirits = /* GraphQL */ `
  query ListSpirits(
    $filter: ModelSpiritFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpirits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        producer
        vintage
        quantity
        storageLocation
        clientID
        createdAt
        updatedAt
        clientSpiritsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCellarCondition = /* GraphQL */ `
  query GetCellarCondition($id: ID!) {
    getCellarCondition(id: $id) {
      id
      date
      temperature
      humidity
      clientID
      client {
        id
        name
        email
        phone
        cellarLocation
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      clientCellarConditionsId
      __typename
    }
  }
`;
export const listCellarConditions = /* GraphQL */ `
  query ListCellarConditions(
    $filter: ModelCellarConditionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCellarConditions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        temperature
        humidity
        clientID
        createdAt
        updatedAt
        clientCellarConditionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const winesByClientID = /* GraphQL */ `
  query WinesByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    winesByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        producer
        vintage
        region
        variety
        quantity
        storageLocation
        clientID
        createdAt
        updatedAt
        clientWinesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const spiritsByClientID = /* GraphQL */ `
  query SpiritsByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSpiritFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spiritsByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        producer
        vintage
        quantity
        storageLocation
        clientID
        createdAt
        updatedAt
        clientSpiritsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cellarConditionsByClientID = /* GraphQL */ `
  query CellarConditionsByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCellarConditionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cellarConditionsByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        temperature
        humidity
        clientID
        createdAt
        updatedAt
        clientCellarConditionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
