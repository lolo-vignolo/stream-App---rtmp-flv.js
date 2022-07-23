import { useSelector } from 'react-redux';
import '../style.css';

const Layout = ({ children }) => {
  const screenMode = useSelector((state) => state.layout.backgroundMode);

  return (
    <div className={screenMode ? 'dark-mode' : 'light-mode'}>{children}</div>
  );
};

export default Layout;
