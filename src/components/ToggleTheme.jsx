// Importing PropTypes for defining the prop types of the component
import PropTypes from 'prop-types';
// Importing the useDarkMode hook for managing dark mode state
import useDarkMode from '../hooks/useDarkMode';
// Importing icons for light and dark mode from react-icons
import { MdNightlightRound } from 'react-icons/md';
import { IoMdSunny } from "react-icons/io";

/**
 * A toggle for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.open - Whether the sidebar is open or not.
 */
const ToggleTheme = ({ open }) => {
  // Using the useDarkMode hook to manage the theme state
  const [theme, setTheme] = useDarkMode();

  /**
   * Toggles the dark mode.
   */
  const handleToggle = () => {
    // Toggling between 'light' and 'dark' themes
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Rendering the ToggleTheme component
  return (
    <a onClick={handleToggle}>
      {theme === 'light' ? (
        // Displaying nightlight icon for light mode
        <>
          <MdNightlightRound size={15}/>
          <p className={!open && 'hidden'}>Dark mode</p>
        </>
      ) : (
        // Displaying sun icon for dark mode
        <>
          <IoMdSunny size={15} />
          <p className={!open && 'hidden'}>Light mode</p>
        </>
      )}
    </a>
  );
};

// Exporting the ToggleTheme component
export default ToggleTheme;

// Prop type definition for the 'ToggleTheme' component
ToggleTheme.propTypes = {
  open: PropTypes.bool,
};
