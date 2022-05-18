const Downloader = require('nodejs-file-downloader');
const { Command } = require('commander');
const program = new Command();

const baseURL = 'https://relaxout.ru/swagger/?format=openapi';

program.option('--base-url <value>', 'Set base url', baseURL);

program.parse(process.argv);
const opts = program.opts();

console.log('Opts: ', opts);

(async () => {
  const downloader = new Downloader({
    url: opts.baseUrl,
    directory: './src/services/api',
    fileName: 'api-docs.json',
    cloneFiles: false,
    maxAttempts: 3,
    onProgress: function (percentage, chunk, remainingSize) {
      console.log('% ', percentage);
      console.log('Current chunk of data: ', chunk);
      console.log('Remaining bytes: ', remainingSize);
    }
  });

  try {
    await downloader.download();
  } catch (error) {
    console.log(error);
  }
})();