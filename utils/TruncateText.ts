export const truncateText = (str: string) => {

    /* str.length < 25 ? str : str.substring(0, 25) + "..."; */
    
    if (str.length < 25) 
    return str

    return str.substring(0, 25) +
        "...";
}