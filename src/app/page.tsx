import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-screen bg-main h-[801px] mt-10">
        <div className="pt-28 px-40 gap-8 flex flex-col justify-start">
          <h1 className="text-[5rem] font-bold leading-[5.5rem]">Монетизируйте клиентскую базу, не снижая NPS</h1>
          <h2 className="text-2xl font-normal w-[626px]">Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</h2>
        </div>
      </div>
    </>
  );
}
