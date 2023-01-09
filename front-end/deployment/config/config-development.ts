/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '62o4g70e1e6ek0apdojmdj03hp',
  USER_POOL_ID: 'eu-west-1_cokBqFjPp',
  IDENTITY_POOL_ID: 'eu-west-1:16c45e93-c26e-4d20-bb5b-4e99ea35562b',
  GRAPHQL_ENDPOINT: 'https://ofpcavtdlzajhkycrychibf7r4.appsync-api.eu-west-1.amazonaws.com/graphql'
   

};

export default configDevelopment;


/*
appSyncID       : "tyeiexbig5doxchzbvdjz2rqam"
    dynamoID        : "users-6a51dfd"
    graphQLEndpoint : {
        GRAPHQL : "https://ofpcavtdlzajhkycrychibf7r4.appsync-api.eu-west-1.amazonaws.com/graphql"
        REALTIME: "wss://ofpcavtdlzajhkycrychibf7r4.appsync-realtime-api.eu-west-1.amazonaws.com/graphql"
    }
    identityPoolID  : "eu-west-1:16c45e93-c26e-4d20-bb5b-4e99ea35562b"
    userpoolClientID: "62o4g70e1e6ek0apdojmdj03hp"
    userpoolID      : "eu-west-1_cokBqFjPp"

    */
