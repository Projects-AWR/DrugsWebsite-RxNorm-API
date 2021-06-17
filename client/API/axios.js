
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://rxnav.nlm.nih.gov/REST",
});

export default instance;