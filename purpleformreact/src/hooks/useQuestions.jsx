import axios from "axios";

const baseUrl =
  "https://api.staging.purplemetrics.com.br/backend/api/v1/list-questions/5c56a367-a16d-47c2-b369-076b7595903c/test-user2?fields=theme";

export const getQuestionToChooseRequest = async () => {

  const response = await axios.get(`${baseUrl}`);
 
  return response.data.questions;
};
