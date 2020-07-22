import React from 'react';
import './_styled.scss';
import { Card, Button, Icon, Label } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { actions } from '../../Modules/AuxModals/actions';
import { useDispatch, useSelector } from 'react-redux';

const UserPage = ({ onDeleteFromUser, palettes, onEdit, onDelete, palettesType }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.logs);
  // const { liked_palettes, own_palettes } = user;
  // let palettes;
  // if (palettesType === 'own') {
  //   palettes = own_palettes;
  // } else {
  //   palettes = liked_palettes;
  // }
  console.log(5454545454545454545, palettes);

  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const onDeleteClicked = (id) => {
    if (palettesType === 'own') {
      return onDelete(id);
    } else {
      return onDeleteFromUser(id);
    }
  };

  const opoenModal = (data) => {
    dispatch(actions.userPalett_modal_open(data));
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '300px', width: '100%', marginBottom: '4rem' }}>
      <Slider {...settings}>
        {palettes.map((palette, index) => {
          if (!palette) return;
          return (
            <div key={index} style={{ width: '100%' }}>
              <Card style={{ margin: '2rem auto', height: '250px', width: '80%', boxSizing: 'border-box', overflow: 'hidden' }}>
                <div className='overlay'>
                  {palettesType === 'own' && (
                    <Label onClick={() => onEdit(palette._id)} className='ui left corner label '>
                      <Icon name='pencil alternate' />
                    </Label>
                  )}
                  <Label onClick={() => onDeleteClicked(palette._id)} className='ui right corner label'>
                    <Icon name='trash' />
                  </Label>
                  <Button onClick={() => opoenModal(palette)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }} icon secondary>
                    <Icon size='big' name='th' />
                  </Button>
                </div>
                <div className='box'>
                  {!loading &&
                    palette.colors.map((color, index) => {
                      return <div key={index} style={{ backgroundColor: color.color, width: '100%', height: '20rem' }}></div>;
                    })}
                </div>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default UserPage;
