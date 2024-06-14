"use client";

import styles from "./ui.module.scss";
import ChatCircleIcon from "../../../../../public/icons/helper/chatCircleIcon.svg";
import Image from "next/image";
import { useState } from "react";
import CaretDownIcon from "../../../../../public/icons/helper/caretDownIcon.svg";
import { HelperModal } from "@/features/helper-slice/helperModal";
export const Helper = () => {
  const [isHelperModalOpen, setIsHelperModalOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsHelperModalOpen(!isHelperModalOpen)}
        className={styles.button}
        style={{ padding: !isHelperModalOpen ? "0px" : undefined }}
      >
        <HelperModal isModalOpen={isHelperModalOpen} />
        {isHelperModalOpen ? (
          <Image src={CaretDownIcon} width={24} height={24} alt="Поддержка" />
        ) : (
          <Image src={ChatCircleIcon} width={24} height={24} alt="Поддержка" />
        )}
      </button>
    </>
  );
};
