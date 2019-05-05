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

const ValidWordsWrapper = styled.div`
  width: 80%;
  margin: 50px auto 20px;
  display: block;
  iframe {
    width: 100%;
    height: 50vh;
  }
`;

const checkSpellingErrors = (input, setSpellingErrors) => {
  setSpellingErrors(spellChecker(input));
}

const App = () => {
  const [ spellingErrors, setSpellingErrors ] = useState([]);
  return (
    <div className="App">
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
        <ValidWordsWrapper>
          <h1>Try these valid words</h1>
          <iframe
            title="Valid Words"
            src="http://ogden.basic-english.org/words.html"
          />
        </ValidWordsWrapper>
    </div>
  );
};

export default App;
