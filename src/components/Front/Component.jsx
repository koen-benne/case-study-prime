import styles from './Styles.module.css'; // Import the CSS module

function Front() {
  return (
    <div class={styles.container}>
      {/* <h1 class={styles.title}>Remobility</h1> */}
      <div class={styles.left}>
        <img class={styles.remobilityLogo} src="/images/logo-remobility.svg" alt="logo Remobility" />
        <p class={styles.text}>Een moment van vrijheid weer herbeleven</p>
        <img class={styles.collabLogo} src="/images/collab-logo.png" alt="logo Collab" />
      </div>
      <div class={styles.right}>
        <img class={styles.heroImage} src="/images/hero-image.png" alt="hero image" />
      </div>
    </div>
  );
}

export default Front;
