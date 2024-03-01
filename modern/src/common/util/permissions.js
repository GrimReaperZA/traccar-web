import { useSelector } from 'react-redux';

export const useAdministrator = () => useSelector((state) => {
  // const admin = state.session.user.administrator;
  // return admin;
  return true;
});

export const useManager = () => useSelector((state) => {
  // const admin = state.session.user.administrator;
  // const manager = (state.session.user.userLimit || 0) !== 0;
  // return admin || manager;
  return true;
});

export const useDeviceReadonly = () => useSelector((state) => {
  // const admin = state.session.user.administrator;
  // const serverReadonly = state.session.server.readonly;
  // const userReadonly = state.session.user.readonly;
  // const serverDeviceReadonly = state.session.server.deviceReadonly;
  // const userDeviceReadonly = state.session.user.deviceReadonly;
  // return !admin && (userReadonly || userDeviceReadonly);
  return false;
});

export const useRestriction = (key) => useSelector((state) => {
  // const admin = state.session.user.administrator;
  // const serverValue = state.session.server[key];
  // const userValue = state.session.user[key];
  // return !admin && (serverValue || userValue);
  return false;
});
