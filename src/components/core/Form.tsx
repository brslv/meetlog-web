import React from 'react'

export default function Form({
  children,
  onSubmit,
  ...props
}: {
  children: React.ReactNode
  onSubmit: (e: React.FormEvent) => void
} & React.ComponentPropsWithoutRef<'form'>) {
  const _onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form {...props} onSubmit={_onSubmit}>
      {children}
    </form>
  )
}
