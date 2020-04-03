import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import toCapitalCase from 'to-capital-case';
import { Helmet } from 'react-helmet-async';
import { map } from '#/ext/lodash/fp/uncapped';

const createUseFonts = fonts =>
  createUseStyles({
    '@font-face': map((url, name) => ({
      fontFamily: toCapitalCase(name),
      src: `url(${url})`
    }), fonts),
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
          {map((url, name) => (
            <link key={name} rel="preload" href={url} as="font" crossOrigin />
          ), fonts)}
        </Helmet>
      )}
      {children}
    </>
  );
}

export default FontsProvider;
