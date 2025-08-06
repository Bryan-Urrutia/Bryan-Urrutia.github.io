import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Github, Link } from "lucide-react";
import {
  RiArrowLeftSFill,
  RiArrowRightSFill,
  RiGhost2Fill,
} from "react-icons/ri";
import { BsFillChatRightFill } from "react-icons/bs";

const LibroInteractivo = ({ paginas = [], color }) => {
  const btnNextRef = useRef(null);
  const btnPrevRef = useRef(null);
  const cardRefs = useRef([]);
  const containerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    containerRefs.current.forEach((container, index) => {
      if (container)
        container.style.zIndex = containerRefs.current.length - index;
    });
  }, [paginas]);

  const handleNext = () => {
    if (currentIndex < cardRefs.current.length) {
      const btnNext = btnNextRef.current;
      const btnPrev = btnPrevRef.current;
      const cards = cardRefs.current;
      const containers = containerRefs.current;

      btnNext.disabled = true;
      btnPrev.disabled = true;

      cards[currentIndex].classList.add("flipped");

      const thisIndex = currentIndex;

      setTimeout(() => {
        if (containers[thisIndex])
          containers[thisIndex].style.zIndex = containers.length + thisIndex;

        const newIndex = thisIndex + 1;
        setCurrentIndex(newIndex);

        btnPrev.disabled = newIndex === 0;
        btnNext.disabled = newIndex === cards.length;
      }, 200);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const btnNext = btnNextRef.current;
      const btnPrev = btnPrevRef.current;
      const cards = cardRefs.current;
      const containers = containerRefs.current;

      btnNext.disabled = true;
      btnPrev.disabled = true;

      const thisIndex = currentIndex - 1;
      cards[thisIndex].classList.remove("flipped");

      setTimeout(() => {
        if (containers[thisIndex])
          containers[thisIndex].style.zIndex = containers.length - thisIndex;

        setCurrentIndex(thisIndex);

        btnPrev.disabled = thisIndex === 0;
        btnNext.disabled = thisIndex === cards.length;
      }, 200);
    }
  };

  console.log(color.value);

  return (
    <article className="">
      <div className="libro relative">
        {paginas.map(([front, back], i) => (
          <div
            className="maincontainer absolute"
            key={`libro-pagina-${i}`}
            ref={(el) => (containerRefs.current[i] = el)}
          >
            <div className="thecard" ref={(el) => (cardRefs.current[i] = el)}>
              <div
                className="thefront"
                style={{
                  "--portada_color": i === 0 ? color : "#fff",
                }}
              >
                {i === 0 ? (
                  <>
                    <h2>{front}</h2>
                    <br />
                    <img
                      src={"cuentos/portada2.jpg"}
                      alt="Recuerdo"
                      width={300}
                      height="auto"
                    />
                  </>
                ) : (
                  <p className="text-base font-semibold px-4 py-2">{front}</p>
                )}
                <Button
                  onClick={handleNext}
                  ref={btnNextRef}
                  className="absolute right-0 p-2 mr-4 rounded-lg opacity-0 transition-all hover:bg-black hover:opacity-100"
                >
                  <RiArrowLeftSFill color="white" />
                </Button>
              </div>
              <div
                className="theback"
                style={{
                  "--portada_color": i === paginas.length - 1 ? color : "#fff",
                }}
              >
                <Button
                  onClick={handlePrev}
                  ref={btnPrevRef}
                  className="absolute left-0 p-2 ml-4 rounded-lg opacity-0 transition-all hover:bg-black hover:opacity-100 "
                >
                  <RiArrowRightSFill color="white" />
                </Button>
                {i === paginas.length - 1 ? (
                  <h2>{back}</h2>
                ) : (
                  <p className="text-base font-semibold px-4 py-2">{back}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default LibroInteractivo;
