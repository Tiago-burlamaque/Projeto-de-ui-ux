import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setCofirmarSenha] = useState('')

  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()

    if (senha !== confirmarSenha) {
      toast.warning("As senhas não coincidem")
      return
    }
    try {
      await axios.post('http://localhost:3000/usuario', {
        nome, email, senha
      })
      toast.success(`${nome} foi cadastrado`, {
        autoClose: 2000,
        hideProgressBar: true,
      })
      navigate('login')
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      toast.error('Erro ao criar o usuário!', {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }


  return (
    <section className='h-screen flex'>
      <div className='w-1/2 bg-neutral-700 text-white flex flex-col justify-center p-10'>
        <header className='w-full flex items-center justify-center'>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDBhMTI4IDEyOCAwIDEgMS0yNTYgME0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0aDkxLjRjOTguNSAwIDE3OC4zIDc5LjggMTc4LjMgMTc4LjNjMCAxNi40LTEzLjMgMjkuNy0yOS43IDI5LjdIMjkuN0MxMy4zIDUxMiAwIDQ5OC43IDAgNDgyLjNNNTA0IDMxMnYtNjRoLTY0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0aDY0di02NGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0djY0aDY0YzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0aC02NHY2NGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNCIvPjwvc3ZnPg==" alt="" width="50px" />
        </header>
        <main>
          <header className='w-full flex items-center justify-center'>
            <h1 className='font-mono text-3xl m-10'>Cadastro rápido</h1>
          </header>
          <main className='flex flex-col gap-5 items-start w-full'>
            <div className='flex'>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bWFzayBpZD0ibGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iNjQiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NCIgZD0iTTMgMTJjMCAtNC45NyA0LjAzIC05IDkgLTljNC45NyAwIDkgNC4wMyA5IDljMCA0Ljk3IC00LjAzIDkgLTkgOWMtNC45NyAwIC05IC00LjAzIC05IC05WiI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwLjZzIiBkdXI9IjAuNXMiIHZhbHVlcz0iMDsxIi8+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIwLjZzIiB2YWx1ZXM9IjY0OzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtZGFzaGFycmF5PSIxNCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE0IiBkPSJNOCAxMmwzIDNsNSAtNSI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgYmVnaW49IjEuMXMiIGR1cj0iMC4ycyIgdmFsdWVzPSIxNDswIi8+PC9wYXRoPjwvZz48L21hc2s+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIG1hc2s9InVybCgjbGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDApIi8+PC9zdmc+" alt="" width="20px" />
              <p className="font-mono text-sm ml-2">Envios ilimitados de produtos</p>
            </div>
            <div className='flex '>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bWFzayBpZD0ibGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iNjQiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NCIgZD0iTTMgMTJjMCAtNC45NyA0LjAzIC05IDkgLTljNC45NyAwIDkgNC4wMyA5IDljMCA0Ljk3IC00LjAzIDkgLTkgOWMtNC45NyAwIC05IC00LjAzIC05IC05WiI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwLjZzIiBkdXI9IjAuNXMiIHZhbHVlcz0iMDsxIi8+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIwLjZzIiB2YWx1ZXM9IjY0OzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtZGFzaGFycmF5PSIxNCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE0IiBkPSJNOCAxMmwzIDNsNSAtNSI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgYmVnaW49IjEuMXMiIGR1cj0iMC4ycyIgdmFsdWVzPSIxNDswIi8+PC9wYXRoPjwvZz48L21hc2s+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIG1hc2s9InVybCgjbGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDApIi8+PC9zdmc+" alt="" width="20px" />
              <p className="font-mono text-sm ml-2">Gratuito para sempre</p>
            </div>
            <div className='flex '>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bWFzayBpZD0ibGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iNjQiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NCIgZD0iTTMgMTJjMCAtNC45NyA0LjAzIC05IDkgLTljNC45NyAwIDkgNC4wMyA5IDljMCA0Ljk3IC00LjAzIDkgLTkgOWMtNC45NyAwIC05IC00LjAzIC05IC05WiI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwLjZzIiBkdXI9IjAuNXMiIHZhbHVlcz0iMDsxIi8+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIwLjZzIiB2YWx1ZXM9IjY0OzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtZGFzaGFycmF5PSIxNCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE0IiBkPSJNOCAxMmwzIDNsNSAtNSI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgYmVnaW49IjEuMXMiIGR1cj0iMC4ycyIgdmFsdWVzPSIxNDswIi8+PC9wYXRoPjwvZz48L21hc2s+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIG1hc2s9InVybCgjbGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDApIi8+PC9zdmc+" alt="" width="20px" />
              <p className="font-mono text-sm ml-2">Permissões totais de autor</p>
            </div>
            <div className='flex '>

              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bWFzayBpZD0ibGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlLWRhc2hhcnJheT0iNjQiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NCIgZD0iTTMgMTJjMCAtNC45NyA0LjAzIC05IDkgLTljNC45NyAwIDkgNC4wMyA5IDljMCA0Ljk3IC00LjAzIDkgLTkgOWMtNC45NyAwIC05IC00LjAzIC05IC05WiI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwLjZzIiBkdXI9IjAuNXMiIHZhbHVlcz0iMDsxIi8+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIwLjZzIiB2YWx1ZXM9IjY0OzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtZGFzaGFycmF5PSIxNCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE0IiBkPSJNOCAxMmwzIDNsNSAtNSI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgYmVnaW49IjEuMXMiIGR1cj0iMC4ycyIgdmFsdWVzPSIxNDswIi8+PC9wYXRoPjwvZz48L21hc2s+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIG1hc2s9InVybCgjbGluZU1kQ29uZmlybUNpcmNsZUZpbGxlZDApIi8+PC9zdmc+" alt="" width="20px" />
              <p className="font-mono text-sm ml-2">Dicas exclusivas</p>
            </div>
          </main>
        </main>
      </div>
      <div className='flex flex-col  w-1/2  justify-center items-center'>
        <header className='flex justify-center w-full'>
          <h1 className='text-3xl font-mono mb-10'>Registrar-se</h1>
        </header>
        <main className='w-full h-100 mt-2 items-center justify-center flex'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center w-100 bg-black text-white rounded p-5 shadow-2xl'>
            <label htmlFor="nome">Nome</label>
            <input required type="text" className='border w-70 rounded focus:outline-2 focus:outline-blue-500 p-1 font-mono focus:border-blue-500 focus:transition '
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input required type="email" className='border w-70 rounded focus:outline-2 focus:outline-blue-500 p-1 font-mono focus:border-blue-500 focus:transition '
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <input required type="password" className='border w-70 rounded focus:outline-2 focus:outline-blue-500 p-1 font-mono focus:border-blue-500 focus:transition '
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input required type="password" className='border w-70 rounded focus:outline-2 focus:outline-blue-500 p-1 font-mono focus:border-blue-500 focus:transition '
              value={confirmarSenha}
              onChange={(e) => setCofirmarSenha(e.target.value)}
            />

            <button
              className='border w-full mt-5 cursor-pointer rounded p-2 bg-white text-black font-mono hover:bg-black hover:border-black hover:text-white hover:shadow-2xl hover:shadow-white transition duration-300'
              onSubmit={handleSubmit}
              type='submit'>
              Registrar
            </button>
          <p>Já tem uma conta? <Link to='/' className='text-neutral-200 hover:text-neutral-400 transition duration-300'>Entre</Link></p>
          </form>
        </main>
        <footer>
        </footer>
      </div>
    </section>
  )
}

export default App

