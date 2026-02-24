import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { toast } from 'react-toastify'

function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { login, user } = useAuth(); // <-- pega função do contexto

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.get('http://localhost:3000/usuario', {
        params: {
          email, senha
        }
      })
      if (res.data.length === 0) {
        toast.error('Usuário não encontrado. Verifique o e-mail e senha.', {
          autoClose: 2000,
          hideProgressBar: true,
        });
        return;
      }

      login(email) // <-- atualiza contexto
      toast.success("Login realizado com sucesso", {
        autoClose: 2000
      })
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <section className='h-screen bg-black flex justify-center items-center text-white'>
      <div className='w-100 h-130 bg-neutral-500 rounded-2xl p-2'>
        <header className='h-20 flex items-center justify-center'>
          <h1 className='font-mono text-2xl'>Login</h1>
        </header>
        <hr className='text-black' />
        <form onSubmit={handleLogin} className='font-mono h-70 flex flex-col items-center justify-center gap-4'>
          <label htmlFor="email">Email</label>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border p-1 rounded focus:border-blue-500 focus:outline focus:outline-blue-500'
            required />

          <label htmlFor="senha">Senha</label>
          <input type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='border p-1 rounded focus:border-blue-500 focus:outline focus:outline-blue-500'
            required />

          <button onClick={handleLogin} className='cursor-pointer border p-2 w-full hover:bg-white hover:text-black hover:border-white transition duration-500'>Entrar</button>
        </form>
        <hr className='text-black mb-10' />
        <footer className='flex justify-center'>
          <p>Não tem uma conta? <Link to="cadastro" className='text-neutral-200 hover:text-black transition duration-500'>Cadastre-se</Link></p>
        </footer>
      </div>
    </section>
  )
}

export default Login
