import ComplimentManTag from "../../stores/tags/ComplimentManTag";
import FireManTag from "../../stores/tags/FireManTag";
import GoodListenerManTag from "../../stores/tags/GoodListenerManTag";
import PlannerManTag from "../../stores/tags/PlannerManTag";
import styles from "./Resume.module.css";

const tagComponents = {
  0: ComplimentManTag,
  1: FireManTag,
  2: GoodListenerManTag,
  3: PlannerManTag,
  // 이런 식으로 필요한 만큼 추가할 수 있습니다.
};

const Resume = ({ resume }) => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.profileImgNName}>
        <img src="dummy_profile.png" alt="유저 이미지" />
        <div className={styles.nameNTemp}>
          <h1>{resume.name}</h1>
          <p>온도 : {resume.temperature}</p>
        </div>
      </div>
      <p className={styles.resumeContent}>{resume.content}</p>
      <h3 className={styles.greenColor}>Details:</h3>
      <ul>
        <li>
          <span className={styles.label}>이름:</span> <span>{resume.name}</span>
        </li>
        <li>
          <span className={styles.label}>나이:</span> <span>{resume.age}</span>
        </li>
        <li>
          <span className={styles.label}>설명:</span>{" "}
          <span>{resume.occupation}</span>
        </li>
        <li>
          <span className={styles.label}>기술:</span>{" "}
          <span>{resume.skills}</span>
        </li>
        <li>
          <span className={styles.label}>백준 티어:</span>{" "}
          <span>{resume.baekjoonTier}</span>
        </li>
        <li>
          <span className={styles.label}>Github:</span>{" "}
          <span>{resume.github}</span>
        </li>
      </ul>
      <div className={styles.tagContainer}>
        {resume.tags.length > 0 &&
          resume.tags.map((tag, index) => {
            const TagComponent = tagComponents[tag];
            return <TagComponent key={index} />;
          })}
      </div>
    </div>
  );
};

export default Resume;