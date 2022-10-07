import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionPage from '../components/missions/missionsPage';

it('Mission page rendering', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionPage />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
