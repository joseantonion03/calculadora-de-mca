import "flowbite";

const SpeedDial = (props) => {
  const sharePage = (url) => {
    const data = {
      title: "Calculadora de Dimensionamento para Bomba d'Água",
      text: "Encontre a bomba d'água perfeita para o seu projeto com a nossa Calculadora de Dimensionamento. Dimensione corretamente a potência e vazão da sua bomba, levando em consideração suas necessidades específicas. Tenha a garantia de escolher a bomba mais eficiente e econômica para o seu sistema. Otimize o desempenho e a eficiência do seu projeto de bombeamento de água com nossa calculadora especializada.",
      url: url,
    };
    if (navigator.canShare && navigator.canShare(data)) {
      navigator.share(data);
    } else {
      console.log("Navegador não suporta");
    }
  };
  
  return (
    <div data-dial-init className="fixed right-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        className="flex-col items-center hidden mb-4 space-y-2"
      >
        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          onClick={() => sharePage(props.url)}
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 -ml-px"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
          </svg>
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Compartilhar
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
