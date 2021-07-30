import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/docs/${id}`)}
      className="flex items-center rounded-lg text-sm p-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
    >
      <Icon name="article" color="blue" size="3xl" />
      <p className="flex-grow truncate pl-5 pr-10 w-10">{fileName}</p>
      <p className="pr-5 text-sm">{date.toDate().toLocaleDateString()}</p>
      <Button
        color="gray"
        buttonType="outline"
        iconOnly={true}
        rounded={true}
        ripple="dark"
        className="border-0"
      >
        <Icon name="more_vert" color="gray" size="3xl" />
      </Button>
    </div>
  );
}

export default DocumentRow;
