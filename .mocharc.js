module.exports = {
  require: ['@babel/register'],
  timeout: '10000',
  ignore: 'specs/example.js',
  file: 'project-config/auth-global-hook.js',
  reporter: 'mochawesome',
  reporterOption: [
    'json=false',
    'quiet=true',
    'reportFilename=UpdatedReport',
    'reportDir=MyReports',
    'overwrite=false',
    // 'reportFilename=[status]_[datetime]_ReportName',
  ],
}
