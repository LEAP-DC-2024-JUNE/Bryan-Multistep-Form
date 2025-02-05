import Image from "next/image";

const FormHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={"/pinecone-logo.png"}
        alt="pinecone logo"
        width={60}
        height={60}
      />
      <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
      <p className="text-lg text-[#8E8E8E] text-nowrap">
        Please provide all current information accurately.
      </p>
    </div>
  );
};

export default FormHeader;
