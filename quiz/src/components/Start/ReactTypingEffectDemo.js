import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Gamer Quiz"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        eraseDelay={100000}
        typingDelay={1000}
        displayTextRenderer={(text) => {
          return (
            <h1>
              {text.split('').map((char) => {
                return (
                  <span
                    style={{ color: 'white', fontFamily: 'OCR A', fontSize: '7vh'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default ReactTypingEffectDemo;