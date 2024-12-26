"use client";
import styles from "./index.module.css";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールしたら表示
      const show = window.scrollY > 100;
      setIsVisible(show);
    };

    // スクロールイベントの登録
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("main-content")?.focus();
  }, []);
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyLight}>© Takayuki Takahashi</div>
      </footer>
      <footer className={styles.footer_sp}>
        {isVisible && (
          <div className={styles.btnWrapper}>
            <button
                onClick={() => window.location.href = '/'}
                className={styles.goToTopButton}
                aria-label="トップページへ移動"
              >
                <Image
                  src="/icon_home.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            <button
              onClick={scrollToTop}
              className={styles.goToTopButton}
              aria-label="ページトップへ戻る"
            >
              <Image 
                src="/icon_top.svg" 
                alt="" 
                width={24} 
                height={24}
              />
            </button>
          </div>
        )}
        <small className={styles.copyLight}>© Takayuki Takahashi</small>
      </footer>
    </>
  );
}
