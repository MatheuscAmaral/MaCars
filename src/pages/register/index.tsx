import { Input } from "@/components/ui/input"
import { Container } from "../../components/container"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const Register = () => {
    return(
        <Container>
          <div className="w-full min-h-svh flex flex-col gap-10 justify-center items-center">
            
            <Link to={'/'}>
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" className="w-20" />
            </Link>
            
            <div className="w-full max-w-xl flex flex-col gap-2 bg-gray-50 p-7 rounded-lg">
                <Input placeholder="Nome"/>
                <Input placeholder="Sobrenome"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                
                <Button value={'Entrar'}/>

                <p className="text-center text-sm pt-3">Já possui cadastro? <Link to={'/login'}>Cadastrar</Link></p>
            </div>
          </div>
        </Container>
    )
}
