export const pizzaSizeSelected = (type, data) => {
    
    if (type === "small" || type === "child") {
        console.log(type, data);
        return {
            type: "SMALL_SIZE",
            payload: {
                small: data.small,
                child: data.child
            }
        }
    }

    else if (type === "medium" || type === "adult") {
        return {
            type: "MEDIUM_SIZE",
            payload: {
                medium: data.medium,
                adult: data.adult,
                child: data.child
            }
        }
    }

    else if (type === "large") {
        return {
            type: "LARGE_SIZE",
            payload: {
                large: data.large,
                adult: data.adult,
                child: data.child
            }
        }
    }   

    else if (type === "mediumOverSmall") {
        return {
            type: "MEDIUM_OVER_SMALL",
            payload: {
                medium: data.numberOfMedium,
                small: -data.numberOfSmall,
                child: data.numberOfChild
            }
        }
    }

    else if (type === "largeOverMedium") {
        return {
            type: "LARGE_OVER_MEDIUM",
            payload: {
                large: data.numberOfLarge,
                medium: -data.numberOfMedium,
                adult: data.numberOfAdult
            }
        }
    }

}