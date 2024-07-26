let common = [
  'features/**/*.feature',
  '--require features/step_definitions/**/*.js',
  '--format @cucumber/pretty-formatter',
  '--format json:output.json',
  `--format-options '{"snippetInterface": "synchronous"}'`
].join(' ');

module.exports = {
  default: common
};