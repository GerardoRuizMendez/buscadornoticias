import { useState } from "react";

export default function Main() {
  const [prueba, setPrueba] = useState("Prueba");

  return (
    <>
      <div className="border-4 flex justify-center items-center">
        <div className="border p-3">
          <h3 className="text-3xl p-5">Noticieros</h3>
          <table>
            <tbody>
              <tr className="flex flex-col">
                <td className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Milenio</p>
                </td>
                <td className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>NVI Noticias</p>
                </td>
                <td className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Facebook</p>
                </td>
                <td className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Reforma</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3">
          <form className="flex flex-col items-center gap-2">
            <div>
              <div className="flex gap-4 p-1 justify-between">
                <label htmlFor="">Palabras obligatorias</label>
                <input type="text" className="border rounded border-black" />
              </div>
              <div className="flex gap-4 p-1 justify-between">
                <label htmlFor="">Palabras opcionales</label>
                <input type="text" className="border rounded border-black" />
              </div>
            </div>
            <input
              type="button"
              value="Buscar"
              className="bg-blue-700 px-5 py-2 rounded text-white"
              onClick={() => {
                setPrueba("Cambio");
              }}
            />
          </form>
        </div>
      </div>
      <p>{prueba}</p>
    </>
  );
}
