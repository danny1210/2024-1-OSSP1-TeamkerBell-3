import React, { useEffect, useState } from "react";
import ResumeSummary from "../components/matchingComponents/ResumeSummary";
import styles from "./leaderresume.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getLeaderResume } from "../api/comp";
import {
  getTeamRecruitedResumeDetail,
  setTeamRecruitedResumeEnd,
} from "../api/user";

const ApproveResumeDetailPage = () => {
  const { tid, resumeId } = useParams();
  const [resumeDetail, setResumeDetail] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const DUMMY_MEMBERSUMMARY = {
    img: "/memImg.png",
    name: "김동국",
    age: "10",
    gender: "남",
    role: {
      team: "팀장",
      department: "프론트엔드",
    },
    stack: "React",
    email: "dongguk.dongguk.edu",
    tier: "Gold",
  };

  const DUMMY_RESUME_INFO = {
    title: "교보생명 대학생 디자인 공모전 팀원 구합니다!",
    introduce:
      "안녕하세요, 저는 웹 프론트엔드 개발자 김동국이라고 합니다. 30세의 나이로 새로운 기술을 배우고 응용하는 것에 열정적이며, 특히 최신 웹 기술을 활용한 사용자 경험 개선에 관심이 많습니다. React를 주력으로 사용하여 다양한 웹 애플리케이션과 인터랙티브한 UI를 개발해왔습니다. 협업과 팀워크를 중시하는 저는 함께 성장할 수 있는 기회를 항상 찾고 있습니다.",
    stack:
      "저의 주요 기술 스택은 React입니다. 최신 React 기능들인 Hooks와 Context API를 통해 상태 관리를 하며, 효율적인 컴포넌트 설계에 능합니다. 또한, 현대적인 프론트엔드 개발 방법론에 익숙하며, RESTful API와의 통신을 위해 Axios나 Fetch API를 자주 사용합니다. 모던 자바스크립트(ES6 이상)를 활용한 경험도 풍부합니다. 더불어 버전 관리 도구인 Git에 능숙하며, GitHub를 통한 협업에 익숙합니다.",
    history:
      "프로젝트에 있어서 저는 'Gold' 티어 레이팅을 보유하고 있습니다. 이는 제가 참여한 프로젝트들에서 높은 품질과 성과를 달성했다는 것을 의미합니다. 대표적인 프로젝트로는, 사용자 친화적인 온라인 쇼핑 플랫폼을 구축한 경험이 있습니다. 이 프로젝트에서 저는 React를 이용하여 사용자의 구매 경험을 최적화하는 인터페이스를 개발하는 주도적인 역할을 맡았습니다. 또한, 대학 커뮤니티 웹사이트 개발에 참여하여, 학생과 교수 간의 원활한 소통을 가능하게 하는 포럼과 게시판 기능을 구현했습니다. 이 외에도 여러 팀 프로젝트에서 중요한 기여를 해왔으며, 항상 최선의 결과를 도출하기 위해 끊임없이 노력하고 있습니다.",
    git: "https://github.com/CSID-DGU/2024-1-OSSP1-TeamkerBell-3",
    sns: "https://github.com/CSID-DGU/2024-1-OSSP1-TeamkerBell-3",
  };

  // INTERNAL SERVER ERROR
  useEffect(() => {
    const fetchResumeDetail = async () => {
      try {
        const response = await getTeamRecruitedResumeDetail(
          userId,
          tid,
          resumeId
        );
        setResumeDetail(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setIsError(true);
          setErrorMessage("404 Error");
        } else {
          setIsError(true);
          setErrorMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
      }
    };

    fetchResumeDetail();
  }, [resumeId]);

  const RecruitedResumeEndHandler = async (isAccept) => {
    const action = isAccept ? "승인" : "거절";
    if (window.confirm(`정말로 이력서를 ${action}하시겠습니까?`)) {
      try {
        const response = await setTeamRecruitedResumeEnd(
          userId,
          tid,
          resumeDetail.id,
          isAccept
        );
        if (response.status === 200) {
          alert(`${action}되었습니다.`);
          navigate(`/user/${userId}/mypage/team/${tid}`); // 뒤로 가기
        } else {
          alert(`${action}에 실패했습니다.`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backBtn}>
        <img src={"/backarrow.svg"} alt="back" className={styles.back} />
        <Link
          to={`/user/${userId}/mypage/team/${tid}`}
          className={styles.backwords}
        >
          뒤로 가기
        </Link>
      </div>

      <div className={styles.title}>{DUMMY_RESUME_INFO.title}</div>

      <ResumeSummary content={DUMMY_MEMBERSUMMARY} />

      <div className={styles.box}>
        <div className={styles.introduction}>
          <div className={styles.text}>자기 소개</div>
          <div className={styles.content}>{DUMMY_RESUME_INFO.introduce}</div>
        </div>
        <br />
        <div className={styles.stack}>
          <div className={styles.text}>기술 스택</div>
          <div className={styles.content}>{DUMMY_RESUME_INFO.stack}</div>
        </div>
        <br />
        <div className={styles.history}>
          <div className={styles.text}>프로젝트 경험</div>
          <div className={styles.content}>{DUMMY_RESUME_INFO.history}</div>
        </div>
        <br />
        <div className={styles.github}>
          <div className={styles.text}>Github</div>
          <div className={styles.content}>{DUMMY_RESUME_INFO.git}</div>
        </div>

        <div className={styles.sns}>
          <br />
          <div className={styles.text}>
            기타 SNS(Instagram, Facebook, T-story 등)
          </div>

          <div className={styles.content}>{DUMMY_RESUME_INFO.sns}</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            RecruitedResumeEndHandler(false);
          }}
        >
          거절
        </button>
        <button
          onClick={() => {
            RecruitedResumeEndHandler(true);
          }}
        >
          승인
        </button>
      </div>
    </div>
  );
};

export default ApproveResumeDetailPage;
