import Loadable from 'react-loadable';
import Loading from '../utils/Loading';

const CustomLoadable = (loader) => {
  return Loadable({ ...loader, loading: Loading });
};

export default CustomLoadable;
