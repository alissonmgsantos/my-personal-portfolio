/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { LanguageProvider } from './src/contexts/language';
import { UserProvider } from './src/contexts/user';

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    <LanguageProvider>{element}</LanguageProvider>
  </UserProvider>
);
