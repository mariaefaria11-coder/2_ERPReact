
function Button({ label, onClick, variant = 'primary', active = false }) {
  const styles = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    danger: 'btn btn-danger',
    success: 'btn btn-success',
    nav: active ? 'btn btn-nav active' : 'btn btn-nav'
  };

  const buttonClass = styles[variant] || styles.primary;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
