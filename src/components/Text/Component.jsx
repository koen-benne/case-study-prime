import styles from './Styles.module.css'; // Import the CSS module

function Text(props) {
  return (
    <div class={styles.container}> {/* Use class without "ImageWithText-" prefix */}
      <h2 class={styles.title}>{props.title}</h2>
      <p class={styles.text}>{props.content}</p>
    </div>
  );
}

export default Text;
