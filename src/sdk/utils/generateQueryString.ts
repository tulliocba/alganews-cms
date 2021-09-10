export function generateQueryString(params: {
    [key: string]: string | number | boolean | string[] | undefined
}): string {

    const convertedParams: { [key: string]: string } = {};

    Object.keys(params)
        .forEach(key => {
            const param = params[key];
            if (param) {
                convertedParams[key] = String(param);
            }

        })

    const urlSearchParams = new URLSearchParams(convertedParams).toString();

    return urlSearchParams ? `?${urlSearchParams}` : '';
}
