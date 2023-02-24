import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: RouterProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
