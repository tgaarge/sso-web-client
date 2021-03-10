export const handleServiceResult = (_serviceResult) => {
    let serviceResult = {
        success: _serviceResult.success,
        data: _serviceResult.data,
        messages: _serviceResult.messages
    };
    return serviceResult;
}

export const getServiceErrorMessage = (errorResponse) => {
    let message = "Undefined Service Error. Please Contact Us.";
    if (!errorResponse)
        return message;
    if (errorResponse.data) {
        let errorResponseData = errorResponse.data;
        if (errorResponseData.messages && errorResponseData.messages.length > 0){
            message = errorResponseData.messages[0].description;
        }
    } else
        message = errorResponse.status + " - " + errorResponse.statusText;

    return message;
}

export const PaginationModel = (response, page, limit, totalDataCount) => {
    var result = {
        loading: false,
        data: response.data,
        pagination: {
            currentPage: page,
            limit: limit,
            totalDataCount: totalDataCount,
            totalPageCount: (totalDataCount > limit ? Math.ceil(totalDataCount / limit) : 1)
        }
    }
    return result;
}