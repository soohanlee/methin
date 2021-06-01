import 'notyf/notyf.min.css';
import { Notyf } from 'notyf';

export const notification = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
});
