import styles from "./ui.module.scss";

export const HelperModal = ({ isModalOpen }: { isModalOpen: boolean }) => {
  return (
    <>
      <div
        style={{ opacity: isModalOpen ? 1 : 0 }}
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
          src="http://localhost:3000/"
        />
      </div>
    </>
  );
};
