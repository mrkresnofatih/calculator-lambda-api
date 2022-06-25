export const wrapFailResponse = (status: number = 4000) => {
    return {
        body: JSON.stringify({ data: null, status }),
        statusCode: 400,
    };
}

export const wrapSuccessResponse = (data: any) => {
    return {
        body: JSON.stringify(data),
        statusCode: 200
    }
}