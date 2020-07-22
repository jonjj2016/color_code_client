import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Gallery from './Gallery/Container';
import SinglePalette from './SinglePalette/Container';
import PaletteShades from './PaletteShades/Container';
import NewPalette from './newPalett/Container';
import PaletteExtractor from './PaletteExtractor/Container';
import GradientGenerator from './GradienGenerator/Container';
import AuthModal from './Auth/Container';
import TopMenu from '../Cmponents/MainMenu/MainMenu';
import CopyModal from '../Cmponents/Copy_Modal/CopyModal';
import UserPage from '../Views/UserPage/UserPage';
import UserPaletteView from '../Cmponents/userPaletteView/container';

const Index = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <TopMenu />
      <AuthModal />
      <CopyModal />
      <UserPaletteView />
      <Switch>
        <Route path='/palette/:paletteId/:colorId' exact component={PaletteShades} />
        <Route path='/palette/:paletteId' exact component={SinglePalette} />
        <Route path='/compose_palette/:paletteId' exact component={NewPalette} />
        <Route path='/compose_palette' exact component={NewPalette} />
        <Route path='/extract_colors' exact component={PaletteExtractor} />
        <Route path='/generate_gradient/:paletteId' exact component={GradientGenerator} />
        <Route path='/generate_gradient' exact component={GradientGenerator} />
        <Route path='/my_page' exact component={UserPage} />
        <Route path='/' exact component={Gallery} />
      </Switch>
    </div>
  );
};

export default Index;
