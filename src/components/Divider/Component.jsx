import styles from './Styles.module.css'; // Import the CSS module

function Divider(props) {
  const style = props.image ? {"background-image": "url(../../../public" + props.image + ")", height: "450px", "margin-top": "-530px"} : {"margin-top": "-310px"}

  return (
    <>
      <div class={styles.spacer} style={{height: props.image ? "650px" : "400px"}}></div>
      <div class={styles.container} style={style}>
        <div class={styles.gradient}></div>
        <h2 class={styles.title}>{props.title}</h2>
      </div>
    </>
  );
}

export default Divider;
