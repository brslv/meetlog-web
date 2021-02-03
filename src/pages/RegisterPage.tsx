import Page from '../components/core/Page'
import { Container } from '../components/core/Container'
import { AuthForm } from '../components/AuthForm'
import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <Page>
      <Container className="relative h-screen w-screen flex items-center justify-center">
        <div>
          <AuthForm mode="register" />
          <div className="text-center text-sm text-gray-500 mt-4">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Container>
    </Page>
  )
}
