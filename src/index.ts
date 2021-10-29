import express, {Request, Response} from 'express';
import { a } from './test';

function main () {
  const app = express();
  app.get('/', (req: Request, res: Response) => {
    res.send(a);
  });

  app.listen(3000, () => {
    console.log('server is listening on port 3000');
  })
}

main();