import express from 'express';

import axios from 'axios';
import {USERS_BASE_URL} from '../config/api';

const router = express.Router();

const app = express();

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

// Add POST (proxy)

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    // Aquí  a la conexión con Laravel
    const {data} = await axios.post(`${USERS_BASE_URL}/users/login`);

    console.log('>> Login() >  data from LARAVEL', data);

    req.session.authUser = data;

    return res.json(data);
  }
});

router.post('/logout', (req, res) => {
  delete req.session.authUser;
  //...
  console.log('>> logout() from Express API');
  res.json({ok: true});
});

export default {
  path: '/api-express',
  handler: router,
};
