import styles from './Styles.module.css'; // Import the CSS module

function Images(props) {
  return (
    <div class={styles.container}> {/* Use class without "ImageWithText-" prefix */}
      {props.images?.map((item) => {
        return (
          <div class={styles.imageContainer}>
            <img src={item.image} class={styles.image} alt={item.alt} />
          </div>
        )
      }
      )}
    </div>
  );
}

export default Images;
