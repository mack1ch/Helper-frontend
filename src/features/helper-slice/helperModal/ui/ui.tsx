import styles from "./ui.module.scss";

export const HelperModal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const isDevMode = process.env.NODE_ENV !== "production";
  return (
    <>
      <div
        style={{ display: isModalOpen ? "block" : "none" }}
        className={styles.modalWrap}
      >
        <iframe
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            marginBottom: "16px",
            borderRadius: "inherit",
          }}
          allow="clipboard-read; clipboard-write; display-capture"
          id="techHelp"
          src={
            isDevMode
              ? process.env.DEV_MODAL_LINK
              : process.env.PRODUCTION_MODAL_LINK
          }
        />
      </div>
    </>
  );
};
