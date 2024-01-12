import styles from './Styles.module.css';

function Header() {
  return (
    <header class={styles.header}>
      <img src="/images/logo.svg" class={styles.logo} alt="logo" />
      <div class={styles.links}>
        <a href="#about" class={styles.link}>Team</a>
        <a href="#team" class={styles.link}>Research</a>
        <a href="#contact" class={styles.link}>Concept</a>
        <a href="#prototype" class={styles.link}>Prototype</a>
        <a href="#testen" class={styles.link}>Testen</a>
      </div>
    </header>
  );
}

export default Header;
