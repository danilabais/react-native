export interface TProps{
    placeholder?: string,
    type: "name" | "email" | "password",
    errorMsg: string,
    value: string,
    dirty: boolean,
    onChangeText:(string)=>void,

} 