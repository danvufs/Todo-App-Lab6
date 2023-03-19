import './Help.scss';
import { Link, useLocation } from 'react-router-dom';

function Help() {
  const location = useLocation();
  const isDefaultHelp = location.pathname === '/help';
  const isAddHelp = location.pathname === '/help/add';
  const isRemoveHelp = location.pathname === '/help/remove';
  const isChangeHelp = location.pathname === '/help/change';

  return (
    <main className="help">
      <div className="help-left">
        <h1>Help</h1>
        {isDefaultHelp && (
          <>
            <h4 className="help-title">Introduction</h4>
            <h4>This app will help you to keep track of your tasks.</h4>
            <p className="help-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </>
        )}
        {isAddHelp && (
          <>
            <h4 className="help-title">Adding Tasks</h4>
            <p className="help-description">
              To add a new task, Aenean hendrerit magna sit amet augue tincidunt rutrum. Nulla varius diam et laoreet placerat. Nulla lobortis elementum tincidunt. </p><p>
              Sed sodales elit libero, ut aliquam justo venenatis quis. Nulla ornare tellus imperdiet dignissim fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere interdum vehicula. Aenean a nunc purus.
            </p>
          </>
        )}
        {isRemoveHelp && (
          <>
            <h4 className="help-title">Removing Tasks</h4>
            <p className="help-description">
              <strong>Warning:</strong> Removing tasks will maecenas luctus augue nec massa vehicula faucibus. Vestibulum pretium elementum eros, pretium aliquam mi euismod eget.
            </p><p>
              Integer varius enim tortor, non viverra mi efficitur ac. Donec volutpat interdum massa, vel tempor felis commodo varius. Sed et eros neque.
            </p>
          </>
        )}
        {isChangeHelp && (
          <>
            <h4 className="help-title">Changing Status</h4>
            <p className="help-description">
              Changing status requires you to sollicitudin orci vel orci semper posuere. Etiam a mi ut orci egestas euismod. Sed fringilla, mauris sit amet ultricies pulvinar, orci neque efficitur felis, eget congue mauris quam at quam. Sed in tellus eros. </p><p>
              Aliquam pretium lorem ut vulputate rhoncus. Sed ut urna vel tortor blandit molestie. <strong>Nunc pretium pretium nisi</strong>, quis imperdiet urna tempor id.
            </p>
          </>
        )}
      </div>
      <div className="help-right">
        <nav>
          <ul>
            <li className={isDefaultHelp ? 'active' : ''}><Link to="/help">Introduction</Link></li>
            <li className={isAddHelp ? 'active' : ''}><Link to="/help/add">Adding Tasks</Link></li>
            <li className={isRemoveHelp ? 'active' : ''}><Link to="/help/remove">Removing Tasks</Link></li>
            <li className={isChangeHelp ? 'active' : ''}><Link to="/help/change">Changing Status</Link></li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Help;
