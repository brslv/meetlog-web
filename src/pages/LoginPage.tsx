import React from 'react'
import { Container } from '../components/core/Container'
import Page from '../components/core/Page'
import { AuthForm } from '../components/AuthForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <Page>
      <Container className="relative h-screen w-screen flex items-center justify-center">
        <div>
          <AuthForm mode="login" />
          <div className="text-center text-sm text-gray-500 mt-4">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </Container>
    </Page>
  )
}
