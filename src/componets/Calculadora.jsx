import { useEffect, useState } from "react";
import axios from "axios";

import SpeedDial from "./SpeedDial";
import LoadingPage from "./Loading";

const Calculadora = () => {
  const [mca, setMca] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState({
    tubulacao: "",
    profundidade: "",
    distancia: "",
    vazao: "",
    desnivel: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  function isEmptyData(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (obj[prop] === undefined || obj[prop] === null || obj[prop] === "") {
          return true;
        }
      }
    }
    return false;
  }

  useEffect(() => {
    setButtonDisabled(isEmptyData(dados));
  }, [dados]);

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://dimensionamento-api.vercel.app/",
        {
          tubulacao: dados.tubulacao,
          profundidade: dados.profundidade,
          distancia: dados.distancia,
          vazao: dados.vazao,
          altura: dados.desnivel,
        }
      );
      if (response.status == 200) {
        setMca(response.data.mca);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <>
      <form className="flex flex-wrap justify-between min-sm:w-full sm:max-w-screen-sm mx-auto">
        <div className="w-full">
          <h1 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Calculadora de MCA Hazen-Williams.
          </h1>
        </div>
        <div className="w-full mb-6">
          <div
            className="justify-center items-center px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            {mca ? (
              <>
                <span className="pr-2">O RESULTADO DO MCA É</span>
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700">
                  {mca}
                </span>
              </>
            ) : (
              <span className="font-medium px-3 py-2">
                INFORME OS DADOS PARA OBTER O RESULTADO
              </span>
            )}
          </div>
        </div>
        <div className="w-full mb-6">
          <label
            htmlFor="tubulacao"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            Tubulação
          </label>
          <select
            id="tubulacao"
            name="tubulacao"
            value={dados.tubulacao}
            onChange={handleInputChange}
            className="bg-gray-50 py-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Selecione a tubulação (Milímetro)
            </option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="32">32</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </div>

        <div className="w-full sm:w-w48 mb-6">
          <label
            htmlFor="profundidade"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            Profundidade da bomba (Metros)
          </label>
          <input
            type="number"
            id="profundidade"
            name="profundidade"
            value={dados.profundidade}
            onChange={handleInputChange}
            className="shadow-sm py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            //placeholder="Informe a profundidade em que a bomba será instalada no poço (Metros)"
            required={true}
          />
        </div>

        <div className="w-full sm:w-w48 mb-6">
          <label
            htmlFor="distancia"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            Distância do poço até o reservatório (Metros)
          </label>
          <input
            type="number"
            id="distancia"
            name="distancia"
            value={dados.distancia}
            onChange={handleInputChange}
            className="shadow-sm py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            //placeholder="Informe a distância do poço até o destino final (Metros)"
            required={true}
          />
        </div>

        <div className="w-full sm:w-w48 mb-6">
          <label
            htmlFor="vazao"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            Vazão pretendida (Litros por hora)
          </label>
          <input
            type="number"
            id="vazao"
            name="vazao"
            value={dados.vazao}
            onChange={handleInputChange}
            className="shadow-sm py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            //placeholder="Quantos litros de água você pretende retirar do poço por hora"
            required={true}
          />
        </div>

        <div className="w-full sm:w-w48 mb-6">
          <label
            htmlFor="desnivel"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            Desnível do poço até o reservatório (Metros)
          </label>
          <input
            type="number"
            id="desnivel"
            name="desnivel"
            value={dados.desnivel}
            onChange={handleInputChange}
            className="shadow-sm py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            //placeholder="Existe algum desnível do poço até o destino final? (Altura em metros)"
            required={true}
          />
        </div>

        <button
          type="submit"
          disabled={buttonDisabled}
          onClick={(e) => send(e)}
          className={`py-4 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
            buttonDisabled ? "opacity-80" : "hover:bg-blue-800"
          }`}
        >
          Calcular
        </button>
        <a target="_blank" className="text-center mx-auto mt-3.5" href="https://www.joseantonion.com.br/">Desenvolvido por José Antônio</a>
      </form>
      <SpeedDial url="https://dimensionamento.vercel.app" />
      {loading && <LoadingPage texto="Buscando informações" />}
    </>
  );
};

export default Calculadora;
