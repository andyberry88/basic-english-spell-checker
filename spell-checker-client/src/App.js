import React, { useState } from 'react';
import styled from '@emotion/styled';

import spellChecker from 'spell-checker';

const H1 = styled.h1`
  text-align: center;
`;

const SpellingErrorsWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  display: block;
`;

const TextArea = styled.textarea`
  width: 80%;
  margin: 20px auto;
  display: block;
`;

const checkSpellingErrors = (input, setSpellingErrors) => {
  setSpellingErrors(spellChecker(input));
}

const App = () => {
  const [ spellingErrors, setSpellingErrors ] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        {(() => {
          if (spellingErrors && spellingErrors.length > 0) {
            return <H1>There were spelling errors :-(</H1>
          }
          return <H1>No spelling errors :-)</H1>
        })()}
        <TextArea rows="10" onChange={(e) => checkSpellingErrors(e.target.value, setSpellingErrors)} />
        <SpellingErrorsWrapper>
          {JSON.stringify(spellingErrors)}
        </SpellingErrorsWrapper>
      </header>
    </div>
  );
};

export default App;
