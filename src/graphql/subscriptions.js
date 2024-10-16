/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
export const onCreateWine = /* GraphQL */ `
  subscription OnCreateWine($filter: ModelSubscriptionWineFilterInput) {
    onCreateWine(filter: $filter) {
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
export const onUpdateWine = /* GraphQL */ `
  subscription OnUpdateWine($filter: ModelSubscriptionWineFilterInput) {
    onUpdateWine(filter: $filter) {
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
export const onDeleteWine = /* GraphQL */ `
  subscription OnDeleteWine($filter: ModelSubscriptionWineFilterInput) {
    onDeleteWine(filter: $filter) {
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
export const onCreateSpirit = /* GraphQL */ `
  subscription OnCreateSpirit($filter: ModelSubscriptionSpiritFilterInput) {
    onCreateSpirit(filter: $filter) {
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
export const onUpdateSpirit = /* GraphQL */ `
  subscription OnUpdateSpirit($filter: ModelSubscriptionSpiritFilterInput) {
    onUpdateSpirit(filter: $filter) {
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
export const onDeleteSpirit = /* GraphQL */ `
  subscription OnDeleteSpirit($filter: ModelSubscriptionSpiritFilterInput) {
    onDeleteSpirit(filter: $filter) {
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
export const onCreateCellarCondition = /* GraphQL */ `
  subscription OnCreateCellarCondition(
    $filter: ModelSubscriptionCellarConditionFilterInput
  ) {
    onCreateCellarCondition(filter: $filter) {
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
export const onUpdateCellarCondition = /* GraphQL */ `
  subscription OnUpdateCellarCondition(
    $filter: ModelSubscriptionCellarConditionFilterInput
  ) {
    onUpdateCellarCondition(filter: $filter) {
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
export const onDeleteCellarCondition = /* GraphQL */ `
  subscription OnDeleteCellarCondition(
    $filter: ModelSubscriptionCellarConditionFilterInput
  ) {
    onDeleteCellarCondition(filter: $filter) {
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
