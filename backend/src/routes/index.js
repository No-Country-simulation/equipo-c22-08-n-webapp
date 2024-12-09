import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readdirSync } from 'fs';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 
const PATH_ROUTER = __dirname;
const router = Router();

const cleanFileName = (fileName) => {
  const file = fileName.split('.').shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    import(`./${cleanName}.js`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };