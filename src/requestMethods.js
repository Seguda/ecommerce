import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDg1OTg5NjYxODY2ODViODcyODM1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzczNDE2NiwiZXhwIjoxNjk3OTkzMzY2fQ.EPHGoUDaSYTIRLXaWNFT4zutKkptTQbPKZsaaeYaUCc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
