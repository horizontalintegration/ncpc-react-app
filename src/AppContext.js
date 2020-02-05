import { createContext } from 'react';

const AppContext = createContext({
  bu: 'US',
  lang: 'EN',
  setBu: () => {},
  setLang: () => {}
});

export default AppContext;