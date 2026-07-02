import micromatch from 'micromatch'

export default (allStagedFiles) => {
  const eslintFiles = micromatch(allStagedFiles, ['**/*.js', '**/*.jsx'])
  const stylelintFiles = micromatch(allStagedFiles, ['**/*.css'])
  const prettierFiles = micromatch(allStagedFiles, ['**/*.**', '!**/*.svg'])

  const commandList = {
    'eslint --fix': eslintFiles,
    'stylelint --fix': stylelintFiles,
    'prettier --ignore-path .gitignore --write': prettierFiles,
  }

  const createExecuteCommand = (commandObj) => {
    return Object.entries(commandObj)
      .map(([key, value]) => {
        if (!value.length) return
        return `${key} ${value.join(' ')}`
      })
      .filter((e) => e)
  }

  return createExecuteCommand(commandList)
}
