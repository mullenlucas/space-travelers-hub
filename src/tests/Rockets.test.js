import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketsPage from '../components/rockets/rocketsPage';

it('Rockets Page rendering', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsPage />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
