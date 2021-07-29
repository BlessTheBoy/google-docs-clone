import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 bg-white shadow-md">
      <Button
        color="gray"
        buttonType="outline"
        size="regular"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 focus-within:text-gray-600 focus-within:shadow-md rounded-lg">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent outline-none text-base px-5"
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        size="regular"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="apps" color="gray" size="3xl" />
      </Button>

      <img
        loading="lazy"
        src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg"
        alt=""
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
      />
    </header>
  );
}

export default Header;
