import { useState } from 'react';
export const useForm = (initState) => {
  let [state, setState] = useState(initState);
  return [
    state,
    (e) => {
      const { name, value } = e.target;

      setState({
        ...state,
        [name]: value,
      });
    },
  ];
};
