import React, { useEffect, useState } from 'react';
import './_styled.scss';
import { actions } from '../../Modules/Auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions as paletteActions, add_palette_mode } from '../../Modules/Pallete/actions';
import UserSlider from '../../Cmponents/User_Slider/User_Slider';

const UserPage = () => {
  const [state, setState] = useState({
    liked_palettes: [],
    own_palettes: [],
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.logs);

  useEffect(() => {
    if (!loading && user) {
      setState({ ...state, liked_palettes: [...user.liked_palettes], own_palettes: user.own_palettes });
    }
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state.liked_palettes.length]);

  const onDeleteFromUser = (id) => {
    const liked_palettes = [...user.liked_palettes.filter((item) => item._id !== id)];
    dispatch(actions.patch_start({ id: user._id, data: liked_palettes }));
  };
  // console.log('trtrrrtrt', user);

  const renderer = () => {
    if (!loading && user) {
      return (
        <div className='userInfo'>
          <div className='field name'>
            Name: <br />
            <span>{user.name}</span>
          </div>
          <div className='email field'>
            Email: <br /> <span>{user.email}</span>
          </div>
          <div className='myPalettes field'>
            MyPalettes:
            <br /> <span> {user.own_palettes.length}</span>
          </div>
          <div className='copiedPaletted field'>
            Liked Palettes:
            <br />
            <span> {user.liked_palettes.length}</span>
          </div>
        </div>
      );
    }
  };

  const onDelete = (id) => {
    dispatch(paletteActions.remove_start(id));
  };
  const onEdit = (id) => {
    dispatch(add_palette_mode('edit'));
    history.push(`/compose_palette/${id}`);
  };
  const onViewPalette = (id) => {
    // alert('view ' + id);
  };

  const renderLikedPalettes = () => {
    return <UserSlider palettesType='copied' palettes={user.liked_palettes} onDeleteFromUser={onDeleteFromUser} onViewPalette={onViewPalette} />;
  };
  const renderOwndPalettes = () => {
    return <UserSlider palettesType='own' onEdit={onEdit} onDelete={onDelete} palettes={user.own_palettes} onDeleteFromUser={onDeleteFromUser} onViewPalette={onViewPalette} />;
  };
  return (
    <div className='user_container'>
      {/* <UserPalette /> */}
      <div>{renderer()}</div>
      {user && !loading && (
        <React.Fragment>
          <div>
            <h2>Created Palettes</h2>
            {renderOwndPalettes()}
          </div>
          <div>
            <h2>Copied Palettes</h2>

            {renderLikedPalettes()}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
//palettes, onDeleteFromUser, onViewPalette, onEdit, onDelete, palettesType
export default UserPage;
