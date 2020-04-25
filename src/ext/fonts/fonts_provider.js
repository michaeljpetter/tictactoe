import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import toCapitalCase from 'to-capital-case';
import { Helmet } from 'react-helmet-async';

const createUseFonts = fonts =>
  createUseStyles({
    '@font-face': Object.entries(fonts).map(([name, url]) => ({
      fontFamily: toCapitalCase(name),
      src: `url(${url})`
    })),
  });

const useFonts = fonts => {
  useMemo(() => createUseFonts(fonts), [fonts])();
};

const FontsProvider = ({
  fonts,
  preload = false,
  children
}) => {
  useFonts(fonts);

  return (
    <>
      {preload && (
        <Helmet>
          {Object.entries(fonts).map(([name, url]) =>
            <link key={name} rel="preload" href={url} as="font" crossOrigin />
          )}
        </Helmet>
      )}
      {children}
    </>
  );
}

export default FontsProvider;
