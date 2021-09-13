interface IProps {
  type: 'button' | 'submit';
  content: string;
  color: 'primary';
  cursor?: 'default' | 'pointer';
  size: 'small';
}

const styles = {
  colors: {
    primary: 'bg-button-primary',
  },
  cursor: {
    pointer: 'cursor-pointer',
    default: 'cursor-default',
  },
  size: {
    small: 'text-sm h-10 px-4',
  },
};

const Button = ({ type, content, color, cursor, size }: IProps) => {
  return (
    <button
      className={`${styles.colors[color]} ${
        cursor ? styles.cursor[cursor] : 'cursor-default'
      } ${styles.size[size]} text-text-grey rounded-xl font-bold`}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
