import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>이 곳은 홈이 될 성지순례 예정지 입니다.</h1>
      </main>
    </>
  );
}

export default HomePage;
