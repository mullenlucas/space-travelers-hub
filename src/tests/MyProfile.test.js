import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ProfilePage from '../components/profile/profilePage';

it('Profile page rendering', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ProfilePage />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
