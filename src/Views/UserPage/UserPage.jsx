import React, { useEffect } from 'react';
import './_styled.scss';
import { actions } from '../../Modules/Auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid, Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { actions as editModalActions, add_palette_mode } from '../../Modules/Pallete/actions';

const UserPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.reauthenticate_start());
  }, []);
  const { user, loading } = useSelector((state) => state.logs);
  console.log('huhuhu');
  const renderer = () => {
    if (!loading && user) {
      return (
        <div>
          <div>Name:{user.name}</div>
          <div>Email: {user.email}</div>
          <div>MyPalettes: {user.own_palettes.length}</div>
          <div>Liked Palettes: {user.liked_palettes.length}</div>
        </div>
      );
    }
  };
  //   const controllers = {
  //     onDelete: () => {
  //       dispatch(actions.remove_start());
  //     },
  //     onModify: () => {
  //       dispatch(add_palette_mode('modify'));
  //       history.push(`/compose_palette/${}`);
  //     },
  //     onEdit: () => {
  //       dispatch(add_palette_mode('edit'));
  //       history.push(`/compose_palette/${}`);
  //     },
  //   };
  const onDelete = (id) => {
    // dispatch(actions.remove_start());
  };
  const onEdit = (id) => {
    dispatch(add_palette_mode('edit'));
    history.push(`/compose_palette/${id}`);
  };
  const onViewPalette = (id) => {
    alert('view ' + id);
  };

  const renderPalettes = () => {
    if (!loading && user) {
      const palettes = [...user.own_palettes, ...user.liked_palettes];
      console.log(palettes);

      return (
        <Card.Group style={{ width: '100%', margin: '1rem' }} itemsPerRow={3}>
          {palettes.map((item, index) => {
            return (
              <Card style={{ margin: '2rem auto', height: '250px', boxSizing: 'border-box', overflow: 'hidden' }} key={index}>
                <div className='overlay'>
                  <span onClick={() => onEdit(item._id)} class='ui left corner label '>
                    <Icon secondary name='pencil alternate' />
                  </span>
                  <span onClick={() => onDelete(item._id)} class='ui right corner label'>
                    <Icon name='trash' />
                  </span>
                  <Button onClick={() => onViewPalette(item._id)} secondary>
                    More
                  </Button>
                </div>
                <div className='box'>
                  {item.colors.map((color, index) => {
                    return <div key={index} style={{ backgroundColor: color.color, width: '100%', height: '100%' }}></div>;
                  })}
                </div>
              </Card>
            );
          })}
        </Card.Group>
      );
    }
  };
  return (
    <div className='user_container'>
      <div className='userInfo'>{renderer()}</div>

      {renderPalettes()}
    </div>
  );
};

export default UserPage;
