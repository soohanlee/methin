import ReactGA from 'react-ga';

export const action = {
  buy: 'buy',
  create_account: 'create_account',
};

export const user = 'User';
export const purchase = 'Purchase';

export const initGa = () => {
  ReactGA.initialize('UA-114374943-1');
};

export const registerGaEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
