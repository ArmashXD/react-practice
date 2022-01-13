import {Link} from 'react-router-dom';

function MainNav()
{
    return <header>
        <div>
            Nav
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Counter</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Page 2</Link>
                </li>
                <li>
                    <Link to='/favorites'>Page 3</Link>
                </li>

            </ul>
        </nav>
    </header>
}

export default MainNav;