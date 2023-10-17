function getSecret(username: string) {
	return {username, secret: 'this is my secret!'};
}

type getSecretResult = ReturnType<typeof getSecret>;


async function AsyncGetSecret(username: string) {
	return {username, secret: 'this is my secret!'};
}

type AsyncGetSecretResult = ReturnType<typeof getSecret>;

// previous versions of TypeScript
// type AsyncGetSecretResult = Awaited<ReturnType<typeof getSecret>>;