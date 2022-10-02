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
  defaultValue: string,
): string => {
  const value = process.env[name] ?? defaultValue
  return ensureDefinitionOf(name, value)
}

export const getNumericEnvironmentValue = (
  name: string,
  defaultValue: number,
): number => {
  const value = Number(getEnvironmentValue(name, defaultValue.toString()))

  if (isNaN(value)) {
    throw new Error(`Environment variable "${name}" is not a number`)
  }

  return value
}
