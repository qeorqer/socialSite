export const required = (value:string): string | undefined => {
    if(value){
        return undefined
    }
    else{
    return "The field is required"
    }
}