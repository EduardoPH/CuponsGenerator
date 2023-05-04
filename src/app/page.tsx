'use client'

import Button from '@/components/button'
import IconButton from '@/components/iconButton'
import InputText from '@/components/inputText'
import {useState} from 'react'
import { FiCopy } from 'react-icons/fi'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { notification } from '@/components/notification'
import { createNewAccount } from '@/utils/mcdonalds/createNewAccount'



export default function Home() {
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [domain, setDomain] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const generateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    try {
      const { user, password, domain } = await createNewAccount()
      notification('Conta gerada com sucesso!', 'success')
      setPassword(password!)
      setDomain(domain)
      setEmail(user)
    } catch (error) {
      notification('Erro ao gerar conta!', 'error')
      setLoading(false)

    }

    setLoading(false)
  }
  
  return (
    <SnackbarProvider>
      <main className="flex justify-center absolute top-2/4 translate-y-[-50%] w-full box-border" onSubmit={generateAccount}>
        <form className='flex flex-col max-w-md m-4 gap-3'>
          <div className='w-full flex gap-3 mb-3 mt-2'>
            <InputText
                  label='Email'
                  placeholder='user'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  additional={domain ? "@" + domain : "@domain.com"}
                  required
                  disabled
                />
              <IconButton onClick={() => { navigator.clipboard.writeText(email + '@' + domain); notification('Email copiado com sucesso!', 'success')}}>
                <FiCopy className='text-secundary text-2xl' />
              </IconButton>
          </div>
          <div className='w-full flex gap-3 mb-3 mt-2'>
            <InputText
                  label='Password'
                  placeholder=''
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  disabled
                />
              <IconButton onClick={() => { navigator.clipboard.writeText(password); notification('Senha copiada com sucesso!', 'success')}}>
                <FiCopy className='text-secundary text-2xl' />
              </IconButton>
          </div>
          <Button disabled={loading} onClick={() => createNewAccount()}> 
            Gerar nova conta
          </Button>
        </form>
      </main>
    </SnackbarProvider>
  )
}
