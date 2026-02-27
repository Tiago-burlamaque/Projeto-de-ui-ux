import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <section>
      <Outlet />
      <hr className='text-gray-500'/>
      <footer className='w-full flex items-center justify-center p-10 '>
        <div className='w-150 grid grid-cols-4 gap-x-1 gap-y-2'>
          <h1>Português (Brasil)</h1>
          <h1>English</h1> (US)
          <h1>Español</h1>
          <h1>Français (France)</h1>
          <h1>Italiano</h1>
          <h1>Deutsch</h1>
          <h1>العربية</h1>
          <h1>Mais idiomas...</h1>
          <h1>Cadastre-se</h1>
          <h1>Entrar</h1>
          <h1>Messenger</h1>
          <h1>Facebook Lite</h1>
          <h1>Vídeo</h1>
          <h1>Meta Pay</h1>
          <h1>Meta Store</h1>
          <h1>Meta Quest</h1>
          <h1>Ray-Ban Meta</h1>
          <h1>Meta AI</h1>
          <h1>Mais conteúdo da Meta AI</h1>
          <h1>Instagram</h1>
          <h1>Threads</h1>
          <h1>Central de Informações de Votação</h1>
          <h1>Política de Privacidade</h1>
          <h1>Central de Privacidade</h1>
          <h1>Sobre</h1>
          <h1>Criar anúncio</h1>
          <h1>Criar Página</h1>
          <h1>Desenvolvedores</h1>
          <h1>Carreiras</h1>
          <h1>Cookies</h1>
          <h1>Escolhas para anúncios</h1>
          <h1>Termos</h1>
          <h1>Ajuda</h1>
          <h1>Upload</h1> de contatos e não usuários
          <h1>Meta</h1> © 2026X
        </div>
      </footer>
    </section>
  )
}

export default Main
