export const ensureDefinitionOf = (
  name: string,
  environmentValue?: string,
): string => {
  if (!environmentValue) {
    throw new Error(`Environment variable "${name}" is not defined`)
  }

  return environmentValue
}

export const getEnvironmentValue = (
  name: string,
  defaultValue?: string,
): string => {
  const value = process.env[name] ?? defaultValue
  return ensureDefinitionOf(name, value)
}
