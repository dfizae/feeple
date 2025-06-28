import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>홈페이지에 오신 것을 환영합니다!</h1>
        <p>여기에 소개글이나 링크 등을 넣으시면 됩니다.</p>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
