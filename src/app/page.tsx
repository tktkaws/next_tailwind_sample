"use client";
import Image from "next/image";
import styles from './styles.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <p className={styles.titleText}>front <br />dispatch</p>
          </div>
        </div>
        {/* <div className='flex justify-center items-center'>
                  <motion.div
            initial={{ x: -100 }}
            animate={{ x: 200 }}
            transition={{ duration: 2 }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
          </motion.div>
                    <motion.div
                      initial={{ x: -100 }}
                      className='w-[170px] h-[170px] rounded-full bg-sky-500'>
                    </motion.div>
                    <motion.div
            whileHover={{ opacity: 0 }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
          </motion.div>
          <motion.div
            whileTap={{ scale: 2 }}
            className='w-[170px] h-[170px] rounded-full bg-sky-500'>
          </motion.div>
        </div> */}
        <p>
          アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。
        </p>
        <p>
          自身の知識を整理することを第一の目的としています。
        </p>
        <ul className={styles.blogList}>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトルブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>A11Y</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>Java Script</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>HTML</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>CSS</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <div className={styles.blogListItemTagWrapper}>
              <p className={styles.blogListItemTag}>A11Y</p>
              <p className={styles.blogListItemTag}>Java Script</p>
            </div>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>A11Y</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>A11Y</p>
          </li>
          <li className={styles.blogListItem}>
            <p className={styles.blogListItemDate}>2024.10.12</p>
            <p className={styles.blogListItemTitle}>ブログタイトルブログタイトル</p>
            <p className={styles.blogListItemTag}>A11Y</p>
          </li>
        </ul>
      </main>
    </div>
  );
}
