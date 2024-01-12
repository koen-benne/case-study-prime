import styles from './Styles.module.css'; // Import the CSS module

function Quote(props) {

  return (
    <div class={styles.container}> {/* Use class without "ImageWithText-" prefix */}
      <h2 class={styles.title}>{props.title}</h2>
      <p class={styles.quote}>{props.content}</p>
    </div>
  );
}

export default Quote;
