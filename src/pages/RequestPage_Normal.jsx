import React, {useState} from "react";
import Header from "../components/Header";
import ProfileSection from "../components/ProfileSection";
import FormSection from "../components/FormSection";
import styles from "./css/RequestPage_Normal.module.css";
import CautionSection from "../components/CautionSection";
import Footer from "../components/Footer";


function App (props) {
    
    const [isModalOpen, setModalOpen] = useState(false);
      const [linkInput, setLinkInput] = useState("");
    
      const handleSubmit = (action) => {
        // 1. 장르 선택 검사
        const selectedGenre = document.querySelector(
          "#option-menu .option-list:nth-child(2) .list-set li.on"
        );
        if (!selectedGenre) {
          alert("장르는 반드시 선택하셔야 합니다.");
          const genreSection = document.querySelector("#option-menu .option-list:nth-child(2)");
          genreSection?.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        }
    
        // 2. 제목 필수 입력 검사
        const title = document.getElementById("txt-title")?.value.trim();
        if (!title) {
          alert("기본 정보(제목)를 입력해주세요.");
          document.getElementById("txt-title")?.focus();
          return;
        }
    
        // 3. 전체동의 체크박스 검사
        const allAgreed = document.getElementById("chk")?.checked;
        if (!allAgreed) {
          alert("모든 약관에 동의하셔야 합니다.");
          document.getElementById("chk")?.scrollIntoView({ behavior: "smooth" });
          return;
        }
    
        // 통과 시 처리
        alert(`${action === "pay" ? "결제" : "임시저장"} 완료되었습니다.`);
      };

    return (
        <div className={styles.normalWrap}>
           <form className="request-form">
                <Header/>
                <ProfileSection 
                subtitle="20명의 일반인에게 피드백을 받아보세요."
                showProfile={false}
                />
                <FormSection
                onOpenModal={() => setModalOpen(true)}
                setLinkInput={setLinkInput}
                showReference={false}
                />
                <CautionSection />
                <Footer 
                onSubmit={handleSubmit} 
                feedbackText="일반인 20인 피드백" 
                price="19,000원" 
                />
           </form>
        </div>
    );

}







export default App;