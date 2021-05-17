/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($companyID: String!) {
    onCreateCustomer(companyID: $companyID) {
      id
      name
      surname
      email
      phone
      mobile
      address1
      companyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($companyID: String!) {
    onUpdateCustomer(companyID: $companyID) {
      id
      name
      surname
      email
      phone
      mobile
      address1
      companyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($companyID: String!) {
    onDeleteCustomer(companyID: $companyID) {
      id
      name
      surname
      email
      phone
      mobile
      address1
      companyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
