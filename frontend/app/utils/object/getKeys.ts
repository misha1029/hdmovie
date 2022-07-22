export const getKeys = <T>(obj: T) => Object.keys(obj) as Array<keyof T> 
// функция которая получает все ключи из обьекта