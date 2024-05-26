import styles from "./tags.module.css";
const FastManTag = ({ isBorderBlack }) => {
  return (
    <div
      style={{
        borderColor: isBorderBlack ? "#7a7a7a" : "#006322",
        color: isBorderBlack ? "#7a7a7a" : "#006322",
      }}
      className={styles.tags}
    >
      <p># 일 처리가 빨라요 👣</p>
    </div>
  );
};

export default FastManTag;
