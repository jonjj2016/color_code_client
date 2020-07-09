import React, { useEffect } from 'react';
import './_styled.scss';
import { actions } from '../../Modules/Auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions as editModalActions, add_palette_mode } from '../../Modules/Pallete/actions';
import UserSlider from '../../Cmponents/User_Slider/User_Slider';

const UserPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.reauthenticate_start());
  }, []);
  const { user, loading } = useSelector((state) => state.logs);
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
    // dispatch(actions.remove_start(id));
  };
  const onEdit = (id) => {
    // dispatch(add_palette_mode('edit'));
    // history.push(`/compose_palette/${id}`);
  };
  const onViewPalette = (id) => {
    // alert('view ' + id);
  };
  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const onDeleteFromUser = (id) => {};

  const renderLikedPalettes = () => {
    console.log(user);

    if (!loading && user) {
      return <UserSlider palettesType='copied' palettes={user.liked_palettes} onDeleteFromUser={onDeleteFromUser} onViewPalette={onViewPalette} />;
    }
  };
  const renderOwndPalettes = () => {
    if (!loading && user) {
      return <UserSlider palettesType='own' onEdit={onEdit} onDelete={onDelete} palettes={user.own_palettes} onDeleteFromUser={onDeleteFromUser} onViewPalette={onViewPalette} />;
    }
  };
  return (
    <div className='user_container'>
      <div>{renderer()}</div>
      <div>
        <h2>Created Palettes</h2>
        {renderOwndPalettes()}
      </div>
      <div>
        <h2>Copied Palettes</h2>

        {renderLikedPalettes()}
      </div>
    </div>
  );
};
//palettes, onDeleteFromUser, onViewPalette, onEdit, onDelete, palettesType
export default UserPage;
