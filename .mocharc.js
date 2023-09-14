module.exports = {
  require: ['@babel/register'],
  timeout: '8000',
  spec: 'specs/**/*.js',
  ignore: 'specs/example.js',
  file: 'project-config/auth-global-hook.js',
}
