import React, { useState, useRef, useEffect } from 'react';
import { Form, Input } from 'semantic-ui-react';
import Gallery from './Gallery';

const SearchBar = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  const [state, setState] = useState({
    searchFild: '',
    final: '',
  });

  const onSubmit = () => {
    setState({ ...state, final: state.searchFild, searchFild: '' });
  };

  const onChange = (e) => setState({ ...state, searchFild: e.target.value });

  return (
    <>
      <div style={{ borderRadius: 0, margin: ' 0 auto 1rem' }}>
        <Form onSubmit={onSubmit}>
          <Input ref={ref} value={state.searchFild} onChange={onChange} fluid style={{ height: '4rem', fontSize: '1.5rem', margin: '0 1rem' }} icon='search' loading={false} placeholder='Search...' />
        </Form>
      </div>
      <Gallery />
    </>
  );
};

export default SearchBar;
