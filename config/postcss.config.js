import autoprefixer from 'autoprefixer';
import combineMediaQuery from 'postcss-combine-media-query';

export default {
  plugins: [
    autoprefixer(),
    combineMediaQuery()
  ]
};
