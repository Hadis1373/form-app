import { ChangeEvent, useState } from 'react';

const useInput = (initialValue: any, name:string) => {
    const [value, setValue] = useState("");

    const reset = () => setValue(initialValue);
    
    const bind : any = {
        value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        placeholder: `Enter ${name}`,
        name
        
    };

    return [value, bind, reset];
};
export default useInput