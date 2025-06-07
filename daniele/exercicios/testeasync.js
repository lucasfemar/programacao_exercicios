const betterDeveloper = "dany";

function whoIsBetterDeveloper(callback, errorCallback) {
    if (betterDeveloper != "dany"&& betterDeveloper != "daniele") {
        errorCallback("Error: Developer not found");
    }
    
