import styles from './Styles.module.css'; // Import the CSS module

function Concept(props) {
  return (
    <div class={`${styles.container} ${ props.left ? styles.containerLeft : styles.containerRight}`}>
      <img src={props.img} class={styles.image} alt="foto" />
      <div class={styles.textContainer}> {/* Use brackets for hyphenated class name */}
        {props.conceptNumber &&
          <div class={styles.conceptNumber}>{"Concept " + props.conceptNumber}</div>
        }
        <h4 class={styles.title}>{props.title}</h4>
        <p class={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default Concept;
