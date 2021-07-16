import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    paddingBottom: 24,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      paddingTop: 60,
      paddingBottom: 60,
    },
  },
}));

const ResponsiveSpacer = ({ children, className = {} }) => {
  const classes = useStyles();
  return <div className={classnames(classes.root, className.root)}>{children}</div>;
};

export default ResponsiveSpacer;
