module.exports = {
  require: ['@babel/register'],
  timeout: '10000',
  spec: 'specs/**/*.js',
  ignore: 'specs/example.js',
  file: 'project-config/auth-global-hook.js',
}
