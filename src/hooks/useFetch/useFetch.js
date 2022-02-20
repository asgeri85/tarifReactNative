import axios from 'axios';
import React, {useState, useEffect} from 'react';

const useFetch = URL => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const {data: response} = await axios.get(URL);
      setData(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Hata');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
