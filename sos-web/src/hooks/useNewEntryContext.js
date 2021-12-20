import React, { useContext, useCallback, useState, useMemo } from 'react';
import { useFetch } from './useFetch';
import { useHistory } from 'react-router';
import { useDataContext } from '../utils/store';
import { baseUrl } from '../utils/apiUrl';

const NewEntryContext = React.createContext();

export function useNewEntryContext() {
  return useContext(NewEntryContext);
}

export function NewEntryContextProvider({ children }) {
  const history = useHistory();
  const [categoryData, setCategoryData] = useState();
  const [errors, setErrors] = useState([]);
  const { data, resetData } = useDataContext();

  const { sendRequest, isLoading, isError, clearError } = useFetch();

  const initialize = useCallback(
    (selectedCategory) => {
      if (!selectedCategory) return history.push('/');

      sendRequest(`${baseUrl}/api/Categories/${selectedCategory.id}`).then(
        setCategoryData,
      );
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

      const requiredQuestionsIdByPage = [null];
      if (categoryData.id) {
        categoryData.actionInfo.questions.map((question) => {
          return (
            question.isRequired && requiredQuestionsIdByPage.push(question.id)
          );
        });
        categoryData.callerInfo.questions.map((question) => {
          return (
            question.isRequired && requiredQuestionsIdByPage.push(question.id)
          );
        });
      }

      const answeredQuestionsID = [
        null,
        ...mapAnswers.map((answer) => answer.questionId),
      ];

      setErrors(
        requiredQuestionsIdByPage.filter(
          (id) => !answeredQuestionsID.includes(id),
        ),
      );

      clearError();
      if (
        requiredQuestionsIdByPage.every((question) =>
          answeredQuestionsID.includes(question),
        )
      ) {
        sendRequest(`${baseUrl}/api/entries`, {
          method: 'POST',
          body: JSON.stringify(prepareData),
        })
          .then(() => {
            resetData();
            history.push('/');
          })
          .catch((e) => {
            console.log(e.message);
          });
      }
    };

    return { send, isError, isLoading };
  }, [
    sendRequest,
    isLoading,
    isError,
    clearError,
    data,
    categoryData,
    history,
    resetData,
  ]);

  // TODO
  // const questions = categoryData?.actionInfo || { questions: [] };

  return (
    <NewEntryContext.Provider
      value={{
        submit,
        initialize,
        actionInfo: categoryData?.actionInfo || { questions: [] },
        callerInfo: categoryData?.serviceInfo || { questions: [] },
        serviceInfo: categoryData?.callerInfo || { questions: [] },
        errors: errors,
      }}
    >
      {children}
    </NewEntryContext.Provider>
  );
}
