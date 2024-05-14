const Tabs = () => {
  return (
    <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
      {" "}
      <li>
        {" "}
        <a
          href="#page1"
          className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
        >
          Pilot Training
        </a>{" "}
      </li>{" "}
      <li>
        {" "}
        <a
          href="#page2"
          className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
        >
          Titan maintenance
        </a>{" "}
      </li>{" "}
      <li>
        {" "}
        <a
          href="#page3"
          className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
        >
          Loadout
        </a>{" "}
      </li>{" "}
      <li>
        {" "}
        <a
          href="#page4"
          className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
        >
          Server Browser
        </a>{" "}
      </li>{" "}
      <li>
        {" "}
        <a
          href="#page5"
          className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
        >
          Settings
        </a>{" "}
      </li>{" "}
    </ul>
  );
};

export default Tabs;
