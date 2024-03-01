import { useSelector } from 'react-redux';

const containsProperty = (object, key) => object != null && object.hasOwnProperty(key) && object[key] !== null;

export const usePreference = (key, defaultValue) => useSelector((state) => {
  if (containsProperty(state.session.user, key)) {
    return state.session.user[key];
  }
  return defaultValue;
});

export const useAttributePreference = (key, defaultValue) => useSelector((state) => {
  if (containsProperty(state.session.user.attributes, key)) {
    return state.session.user.attributes[key];
  }
  return defaultValue;
});
