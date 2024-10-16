/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createWine = /* GraphQL */ `
  mutation CreateWine(
    $input: CreateWineInput!
    $condition: ModelWineConditionInput
  ) {
    createWine(input: $input, condition: $condition) {
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
export const updateWine = /* GraphQL */ `
  mutation UpdateWine(
    $input: UpdateWineInput!
    $condition: ModelWineConditionInput
  ) {
    updateWine(input: $input, condition: $condition) {
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
export const deleteWine = /* GraphQL */ `
  mutation DeleteWine(
    $input: DeleteWineInput!
    $condition: ModelWineConditionInput
  ) {
    deleteWine(input: $input, condition: $condition) {
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
export const createSpirit = /* GraphQL */ `
  mutation CreateSpirit(
    $input: CreateSpiritInput!
    $condition: ModelSpiritConditionInput
  ) {
    createSpirit(input: $input, condition: $condition) {
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
export const updateSpirit = /* GraphQL */ `
  mutation UpdateSpirit(
    $input: UpdateSpiritInput!
    $condition: ModelSpiritConditionInput
  ) {
    updateSpirit(input: $input, condition: $condition) {
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
export const deleteSpirit = /* GraphQL */ `
  mutation DeleteSpirit(
    $input: DeleteSpiritInput!
    $condition: ModelSpiritConditionInput
  ) {
    deleteSpirit(input: $input, condition: $condition) {
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
export const createCellarCondition = /* GraphQL */ `
  mutation CreateCellarCondition(
    $input: CreateCellarConditionInput!
    $condition: ModelCellarConditionConditionInput
  ) {
    createCellarCondition(input: $input, condition: $condition) {
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
export const updateCellarCondition = /* GraphQL */ `
  mutation UpdateCellarCondition(
    $input: UpdateCellarConditionInput!
    $condition: ModelCellarConditionConditionInput
  ) {
    updateCellarCondition(input: $input, condition: $condition) {
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
export const deleteCellarCondition = /* GraphQL */ `
  mutation DeleteCellarCondition(
    $input: DeleteCellarConditionInput!
    $condition: ModelCellarConditionConditionInput
  ) {
    deleteCellarCondition(input: $input, condition: $condition) {
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
