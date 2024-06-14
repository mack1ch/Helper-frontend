import Image from "next/image";
import InverseAndRosatom from "../../../../../../public/assets/logos/inverserosatom.svg";
export const ProductLogo = ({
  isWithPartner,
  size,
}: {
  isWithPartner?: boolean;
  size?: { width: number; height: number };
}) => {
  return (
    <>
      <Image
        layout={size ? undefined : "responsive"}
        src={InverseAndRosatom}
        width={size?.width}
        height={size?.height}
        alt="Inverse | Росатом"
      />
    </>
  );
};
