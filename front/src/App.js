import { AuthContext } from './helpers/authContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Routes from './components/Routes';

function App() {
  const [authState, setAuthState] = useState({
    id: 0,
    username: '',
    email: '',
    biography: '',
    image: '',
    status: false,
  });

  // Execute this function immediately when the page is opened //
  // If there are an error changes the authState to false      //
  // Else changes the authState to true                        //

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/sign/auth`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('JWToken')}`,
      },
    }).then((res) => {
      if (res.data.error) {
        setAuthState({ ...authState, status: false });
      } else {
        setAuthState({
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
          biography: res.data.biography,
          image: res.data.image,
          status: true,
        });
        console.log(res);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Virtual DOM //

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Routes />
      </AuthContext.Provider>
    </div>
  );
}

// Export the App function //

export default App;
