module.exports = {
  '*.(json|eslintrc|babelrc)': ['prettier --write', 'git add'],
  '*.js': ['prettier --write', 'git add', 'eslint'],
  '(src|test)/**/*.js': ['prettier --write', 'git add', 'eslint']
}
