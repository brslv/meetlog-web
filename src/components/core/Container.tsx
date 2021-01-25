import React from 'react'
import cn from '../../utils/cn'

export function Container({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={cn({ 'p-4': true }, props.className)}>
      {children}
    </div>
  )
}
