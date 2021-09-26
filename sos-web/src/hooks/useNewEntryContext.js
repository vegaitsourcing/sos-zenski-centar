import React, { useContext, useCallback, useState, useMemo } from 'react';
import { useFetch } from './useFetch';
import { useHistory } from 'react-router';
import { useDataContext } from '../utils/store';

const NewEntryContext = React.createContext();

export function useNewEntryContext() {
  return useContext(NewEntryContext);
}

export function NewEntryContextProvider({ children }) {
  const history = useHistory();
  const [categoryData, setCategoryData] = useState();
  const { data } = useDataContext();

  const { sendRequest, isLoading, isError, clearError } = useFetch();

  const initialize = useCallback(
    (selectedCategory) => {
      if (!selectedCategory) return history.push('/');

      sendRequest(
        `https://api.sos.sitesstage.com/api/Categories/${selectedCategory.id}`,
      ).then(setCategoryData);
    },
    [history, sendRequest],
  );

  const submit = useMemo(() => {
    const send = () => {
      const mapAnswers = [];

      for (let obj in data) {
        if (obj !== 'description') {
          mapAnswers.push({
            questionId: obj,
            answerId: data[obj],
          });
        }
      }

      const prepareData = {
        categoryId: categoryData?.id,
        ...(data.description ? { description: data.description } : {}),
        submittedAnswers: mapAnswers,
      };

      clearError();
      sendRequest(`https://api.sos.sitesstage.com/api/entries`, {
        method: 'POST',
        body: JSON.stringify(prepareData),
      });
    };

    return { send, isError, isLoading };
  }, [sendRequest, isLoading, isError, clearError, data, categoryData?.id]);

  // TODO
  // const questions = categoryData?.actionInfo || { questions: [] };

  return (
    <NewEntryContext.Provider
      value={{
        submit,
        initialize,
        actionInfo: categoryData?.actionInfo || { questions: [] },
        callerInfo: categoryData?.callerInfo || { questions: [] },
        serviceInfo: categoryData?.serviceInfo || { questions: [] },
      }}
    >
      {children}
    </NewEntryContext.Provider>
  );
}
