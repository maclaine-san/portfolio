export const USER_INFO = `
query{
  userinfos {
    name
    socialAccounts
    email
    address
    aboutMe
    info {
      html
      text
    }
    image {
      id
      url
    }
  }
}
`

export const PROJECTS = `
query {
  projects {
    name
    description
    feature
    image {
      url
    }
  }
}`