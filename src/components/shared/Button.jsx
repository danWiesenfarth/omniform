import classes from './Button.module.css';
import { ArrowRight } from 'lucide-react';

export default function Button({ icon, children, ...props }) {
  return (
    <button className={classes['button-primary']} {...props}>
      {children}
      {icon && <ArrowRight />}
    </button>
  );
}
