'use client';

import { Popover } from '@headlessui/react';
import React from 'react';
import NavigationComponent from './NavigationComponent';
import NavigationTransitionFragment from './NavigationTransitionComponent';

const Navbar: React.FC<{}> = () => {
  return (
    <Popover>
      <NavigationComponent />
      <NavigationTransitionFragment />
    </Popover>
  );
};

export default Navbar;