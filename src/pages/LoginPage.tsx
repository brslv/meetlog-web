import React from 'react'
import { Container } from '../components/core/Container'
import Page from '../components/core/Page'
import { AuthForm, AuthFormMode } from '../components/AuthForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <Page>
      <Container>
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
          }}
        >
          <AuthForm mode={AuthFormMode.Login} />
          <div className="text-center text-sm text-gray-500 mt-4">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </Container>
    </Page>
  )
}
