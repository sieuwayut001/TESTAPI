import mongoose from 'mongoose';
import { DB_HOST } from '../configs';

mongoose.connect(DB_HOST)
  .then(data => {
    console.log('Connection success');
  })
  .catch(err => {
    console.log('Connection error' + err);
  });