const StaticFileHandler = require('serverless-aws-static-file-handler')
const path = require('path');

const clientFilesPath = path.join(__dirname, './app/build/');
const fileHandler = new StaticFileHandler(clientFilesPath);

export async function render(event, context) {
  event.pathParameters = undefined;
  if (event.path === '/') {
    event.path = 'index.html';
  }

  return fileHandler.get(event, context);
}