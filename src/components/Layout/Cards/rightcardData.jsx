import Rightcard from "./rightcard";
const cardData = [
  {
    title: "Your Study Companion",
    heading: "Hey Alex! Ready to excel today?",
    description:
      "Your focus has improved by 23% this week. Keep up the great work!.",
  },
  {
    title: "Your Study Companion",
    heading: "Hey Alex! Ready to excel today?",
    description:
      "Your focus has improved by 23% this week. Keep up the great work!.",
  },
  {
    title: "Your Study Companion",
    heading: "Hey Alex! Ready to excel today?",
    description:
      "Your focus has improved by 23% this week. Keep up the great work!.",
  },
];

function RightcardData() {
  return (
    <div className="flex flex-col w-full gap-6 p-4">
      {cardData.map((item, index) => (
        <Rightcard key={index} {...item} />
      ))}
    </div>
  );
}

export default RightcardData;
