import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { setContext } from "apollo-link-context";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

const makeApolloClient = token => {
	// create an apollo link instance, a network interface for apollo client
	const httpLink = new HttpLink({
		uri: `https://hasura.tracker.dxform.ph/v1/graphql`,
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	const wsLink = new WebSocketLink({
		uri: "wss://hasura.tracker.dxform.ph/v1/graphql",
		options: {
			reconnect: true,
			connectionParams: {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		}
	});

	const authLink = setContext(async (_, { headers }) => {
		const gettoken = token;
		let baseHeaders = {
			...headers
		};

		// Check if there is a token
		if (token) {
			baseHeaders.authorization = `Bearer ${token}`;
		}
		return { headers: baseHeaders };
	});

	const link = split(
		// split based on operation type
		({ query }) => {
			const { kind, operation } = getMainDefinition(query);
			return kind === "OperationDefinition" && operation === "subscription";
		},
		wsLink,
		httpLink
	);

	// create an inmemory cache instance for caching graphql data
	const cache = new InMemoryCache();

	// instantiate apollo client with apollo link instance and cache instance
	const client = new ApolloClient({
		link,
		cache,
		// request: operation => {
		// 	operation.setContext({
		// 		headers: {
		// 			authorization: token ? `Bearer ${token}` : ""
		// 		}
		// 	});
		// },
		onError: e => {
			console.log("graphQLErrors", e);
		}
	});

	return client;
};
export default makeApolloClient;
