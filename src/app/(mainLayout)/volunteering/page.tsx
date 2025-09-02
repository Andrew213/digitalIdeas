import { ArrowRightSVG } from "@/assets/icons";

const mockData = [
  {
    id: 1,
    title: "Разработчик Python / Django",
    description: "Помощь в организации мероприятий, работа с участниками и спикерами.",
  },
  {
    id: 2,
    title: "дизайнер мобильного приложения",
  },
  {
    id: 3,
    title: "таргетолог",
  },
  {
    id: 4,
    title: "Разработчик Python / Django",
    description: "Помощь в организации мероприятий, работа с участниками и спикерами.",
  },
  {
    id: 5,
    title: "Разработчик Python / Django",
    description: "Помощь в организации мероприятий, работа с участниками и спикерами.",
  },
  {
    id: 6,
    title: "Разработчик Python / Django",
    description: "Помощь в организации мероприятий, работа с участниками и спикерами.",
  },
];

const Page: React.FC = () => {
  return (
    <div className="flex size-full flex-col">
      <div className="border-grey-800 flex size-full flex-col border-b-[2px] p-20 max-md:p-10">
        <h2 className="font-h1 text-h1 max-md:font-h1-mobile max-md:text-h1-mobile max-md:leading-h1-mobile text-grey-800 mb-10 uppercase max-md:mb-4">
          Стать волонтёром
        </h2>
        <p className="text-text max-md:text-text-mobile text-grey-800 max-w-[606px]">
          Вы можете посмотреть вакансии для наших проектов или заполнить анкету, чтобы мы могли с Вами связаться, когда
          понадобится помощь.
        </p>
      </div>
      <ul className="grid w-full grid-cols-3 px-20 max-md:flex max-md:flex-col max-md:p-10 max-md:pt-0">
        {mockData.map((item) => (
          // ТУТ ОСТАНОВИЛСЯ. АНИМИРОВАТЬ ЭЛЕМЕНТЫ ИЗ МАССИВА
          <li key={item.id} className="mt-10 flex w-1/3 items-center gap-2.5 py-10 max-md:py-0">
            <h3 className="font-h4 text-h4 max-md:font-h4-mobile max-md:text-h4-mobile text-grey-800">{item.title}</h3>
            <ArrowRightSVG className="w-[37px] shrink-0 fill-[#504C4A] max-md:w-[27px]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
