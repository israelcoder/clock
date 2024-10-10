import React, { useState, useEffect } from 'react';

export default function Clock() {
  // Estado para armazenar a hora atual
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  // Função para atualizar a hora a cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime({
        hour: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    }, 1000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="  m-auto h-[20%] w-[70%] flex justify-center items-center">
      <div className=" flex justify-center items-center h-[90%] m-auto text-wrap text-[#eae5c7cb] font-bold text-[21vmax] font-Oswald">
        {String(time.hour).padStart(2, '0')}
      </div>
      <div className=" flex justify-center items-center h-[90%] m-auto text-wrap text-[#eae5c7cb] font-bold text-[21vmax] font-Oswald">
        {String(time.minutes).padStart(2, '0')}
      </div>
    </div>
  );
}
