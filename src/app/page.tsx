import React from 'react';

import { Button, Inputs, Label } from '@/components/ui';

function HomePage() {
  return (


    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <Label htmlFor='email'>Dirección de mail </Label>
        <Inputs
          id='email'
          name='email'
          type='email'
          required
          placeholder='correo@gmail.com' />
        <Label htmlFor='password'>Contraseña</Label>
        <Inputs
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
          placeholder='password' />
        <Button type='submit'>
          Ingresar
        </Button>
      </form>


    </div>

  )
}

export default HomePage