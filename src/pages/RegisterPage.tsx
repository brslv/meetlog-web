import Page from '../components/core/Page'
import { Container } from '../components/core/Container'
import { AuthForm, AuthFormMode } from '../components/AuthForm'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <Page>
      <Container>
        <div
          className="absolute"
          style={{
            top: '50%',
            right: '50%',
            transform: `translate(-50%, -50%)`,
          }}
        >
          <AuthForm mode={AuthFormMode.Register} />
          <div className="text-center text-sm text-gray-500 mt-4">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Container>
    </Page>
  )
}
