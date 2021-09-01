import React, { useEffect, useRef } from "react";

function EventComponent() {
  const formRef = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  const eventBubbling = (e: MouseEvent) => {
    console.log(`bubbling`);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
  };

  const eventCapturing = (e: MouseEvent) => {
    console.log(`capturing`);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
  };

  useEffect(() => {
    formRef.current?.addEventListener("click", eventCapturing, true);
    formRef.current?.addEventListener("click", eventBubbling);
    return () => {
      formRef.current?.removeEventListener("click", eventCapturing, true);
      formRef.current?.removeEventListener("click", eventBubbling);
    };
  }, [formRef]);

  useEffect(() => {
    divRef.current?.addEventListener("click", eventCapturing, true);
    divRef.current?.addEventListener("click", eventBubbling);
    return () => {
      divRef.current?.removeEventListener("click", eventCapturing, true);
      divRef.current?.removeEventListener("click", eventBubbling);
    };
  }, [divRef]);

  useEffect(() => {
    pRef.current?.addEventListener("click", eventCapturing, true);
    pRef.current?.addEventListener("click", eventBubbling);
    return () => {
      pRef.current?.removeEventListener("click", eventCapturing, true);
      pRef.current?.removeEventListener("click", eventBubbling);
    };
  }, [pRef]);

  return (
    // <>
    //   <button id='wasm-onclick' />
    //   <div id='message' />
    //   <button id='closure-button' />
    //   <div id='mouse-move' />
    //   <input id='input'/>
    //   <div id='output-key-event' />
    // </>
    <form ref={formRef}>
      form
      <div ref={divRef}>
        div
        <p ref={pRef}>p</p>
      </div>
    </form>
  );
}

export default EventComponent;
