import React, { useState } from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeCustom?: (value: string) => void;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, id}, ref) => {

    const [input, setInput] = useState('');

    return (
      <div>
        {placeholder && placeholder.length <= 10 && input.length > 0 && input.length < 3 && id == "user" && (
          <p className="text-sm text-red-500 pb-2">O nome de usuário precisa ter no mínimo 3 caracteres</p>
        )}
        
        {placeholder && placeholder.length <= 10 && input.length > 0 && input.length < 4 && id == "password" && (
          <p className="text-sm text-red-500 pb-2">A senha precisa ter no mínimo 4 caracteres</p>
        )}

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          id={id}
      />

      </div>


    );
  }
);

Input.displayName = "Input";

export { Input };
