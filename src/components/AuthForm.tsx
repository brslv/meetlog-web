import Input from './core/Input'
import Label from './core/Label'
import Button from './core/Button'
import Title from './core/Title'
import Form from './core/Form'

export type AuthFormMode = 'login' | 'register';

export function AuthForm({ mode }: { mode: AuthFormMode }) {
  return (
    <div id="auth-form">
      <Title bg>{mode === 'register' ? 'Register' : 'Login'}</Title>
      <div
        className="bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 p-4 rounded"
        style={{ minWidth: 300, maxWidth: 350 }}
      >
        <Form onSubmit={() => console.log('auth form submit')}>
          <Label pushBottom text="Email">
            <Input type="email" placeholder="Email" />
          </Label>
          <Label pushBottom text="Password">
            <Input type="password" placeholder="Password" />
          </Label>
          {mode === 'register' ? (
            <Label pushBottom text="Repeat password">
              <Input
                type="password"
                name="repeat-password"
                placeholder="Repeat password"
              />
            </Label>
          ) : null}
          <Button type="submit" className="w-full mt-4">
            {mode === 'login' ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  )
}
