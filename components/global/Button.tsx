import router, { useRouter } from 'next/router';

interface IProps {
  type: 'button' | 'submit';
  content: string;
  color: 'primary' | 'secondary' | 'lightBlue';
  cursor?: 'default' | 'pointer';
  size: 'small';
  clickAction?: 'addFeedback';
}

interface IOptions {
  [key: string]: () => void;
}

const styles = {
  colors: {
    primary: 'bg-button-primary',
    secondary: 'bg-text-secondary',
    lightBlue: 'bg-text-blue',
  },
  cursor: {
    pointer: 'cursor-pointer',
    default: 'cursor-default',
  },
  size: {
    small: 'text-sm h-10 px-4',
  },
};

const options: IOptions = {
  addFeedback: function () {
    router.push('/add-feedback');
  },
};

const Button = ({
  type,
  content,
  color,
  cursor,
  size,
  clickAction,
}: IProps) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.colors[color]} ${
        cursor ? styles.cursor[cursor] : 'cursor-default'
      } ${styles.size[size]} text-text-grey rounded-xl font-bold`}
      type={type}
      onClick={options[`${clickAction}`]}
    >
      {content}
    </button>
  );
};

export default Button;
