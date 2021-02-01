import React, { createContext, useContext, useState } from 'react'
import id from '../../utils/id'

export type EntityOutputType = 'NOTE' | 'NEXT_STEP'

export interface IEntity {
  id: number
  text: string
  author: {
    name: string
    avatar: {
      src: string
    }
  }
  output: INextStepOutput | INoteOutput | null
}

export interface INextStepOutput {
  type: 'NEXT_STEP'
  checked: boolean
}
export interface INoteOutput {
  type: 'NOTE'
}

interface IConvert {
  toNote(id: number): void
  toNextStep(id: number): void
}

export interface IContext {
  items: IEntity[]
  convert: IConvert
  addItem: (text: string) => void
  removeItem: (id: number) => void
  removeFromOutput: (id: number) => void
  setChecked: (id: number, checked: boolean) => void
}
const Context = createContext<IContext | null>(null)

export default function EntitiesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [items, setItems] = useState<IEntity[]>([
    {
      id: 1,
      author: {
        name: 'Samuel',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/1.jpg',
        },
      },
      text: 'Lorem ipsum dolor sit amet',
      output: null,
    },
    {
      id: 2,
      author: {
        name: 'Johan',
        avatar: {
          src: 'https://randomuser.me/api/portraits/lego/2.jpg',
        },
      },
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      output: null,
    },
  ])
  const addItem = (text: string) => {
    setItems((prev) => [
      {
        id: id(),
        text: text as string,
        author: {
          avatar: {
            src: 'https://randomuser.me/api/portraits/lego/8.jpg',
          },
          name: 'Stamat',
        },
        output: null,
      },
      ...prev,
    ])
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const convertTo = (type: EntityOutputType, id: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let output = null
          switch (type) {
            case 'NOTE': {
              output = {
                type: 'NOTE' as const,
              }
              break
            }
            case 'NEXT_STEP': {
              output = {
                type: 'NEXT_STEP' as const,
                checked: false,
              }
              break
            }
          }
          item.output = output
        }
        return item
      })
    )
  }

  const convert = {
    toNote(id: number) {
      convertTo('NOTE', id)
    },
    toNextStep(id: number) {
      convertTo('NEXT_STEP', id)
    },
  }

  const removeFromOutput = (id: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) item.output = null
        return item
      })
    )
  }

  const setChecked = (id: number, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.output?.type === 'NEXT_STEP') {
          item.output.checked = checked
        }
        return item
      })
    )
  }

  const value = {
    items,
    convert,
    addItem,
    removeItem,
    removeFromOutput,
    setChecked,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useEntities = () => {
  const context = useContext(Context)
  if (context === null) throw Error('Improper use of context')
  return context
}
