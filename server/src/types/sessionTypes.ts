interface verifyAccessTokenTypes {
    token: string,
    email: string
}

interface userUpdateTypes {
    token: string,
    save(): VoidFunction
}

export {
    verifyAccessTokenTypes,
    userUpdateTypes
}