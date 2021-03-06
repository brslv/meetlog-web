export default function cn(
  o: {
    [key: string]: boolean | undefined | null
  },
  other?: string
): string {
  return (
    Object.keys(o)
      .reduce((acc, name) => {
        if (o[name]) {
          acc.push(name)
        }
        return acc
      }, [] as string[])
      .join(' ') + ` ${other || ''}`
  )
}
