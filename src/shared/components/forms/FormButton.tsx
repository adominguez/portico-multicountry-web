import styles from '@/shared/styles/ContactForm.module.css';

interface FormButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  props?: any;
}

export default function FormButton({type = 'submit', text, props}: FormButtonProps) {
  return (
    <button
      {...props}
      type={type}
      class={`w-fit text-lg font-medium no-underline px-5 py-3 border border-solid border-white rounded-full uppercase ${styles['form-button']}`}
    >
      {text}
    </button>
  );
}