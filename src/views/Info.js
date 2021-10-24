const InfoPage = () => (
    <div className=" flex items-center ">
        <div className="h-3/5 w-1/4  m-auto">
            <div className="shadow-md p-5">
                <p className="mb-5">
                    This dead simple website has been done to learn how to create a website with React from scratch.
                    It uses the PokeAPI (https://pokeapi.co/) in order to get data. 😊
                </p>
                <h3 className="font-bold text-lg">
                    Tools used:
                </h3>
                <ul className="list-disc list-inside">
                    <li>
                        React JS
                    </li>
                    <li>
                        React router
                    </li>
                    <li>
                        Tailwind CSS
                    </li>
                    <li>
                        Craco
                    </li>
                </ul>

                <p>
                    The whole project is available on github.
                </p>
            </div>
        </div>
    </div>
);

export default InfoPage;