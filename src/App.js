import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { RegistrationForm } from "./components/registrationForm/RegistrationForm";

const App = () => {
  return (
    <Theme>
      <GlobalCSS />
      <RegistrationForm />
    </Theme>
  );
};

export default App;
