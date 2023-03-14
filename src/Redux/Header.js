const authHeader = (token) => ({
    Accept: 'application/json',
    authorization: `bearer ${token}`,
    'content-type': 'application/json',
})

const header = {
    Accept: 'application/json',
    'content-type': 'application/json',
}

export {header, authHeader}