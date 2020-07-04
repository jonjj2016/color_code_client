import { autoTypeGen } from '../../Hooks/myTypes';
export const [types, actions] = autoTypeGen('user', 'Login', 'Register', 'reauthenticate', 'logout', true);
// export const [types, actions] = autoTypeGen('palette', 'REGISTER', 'LOGIN', true);
