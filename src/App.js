import React, { useEffect, useState } from "react";
import { SignInSingUp } from "./pages";
import { UserContext } from "./util/context";
import { isUserLoggedApi } from "./api/auth";
import Routing from "./routes/Routing";

function App() {
  const [user, setUser] = useState(null);
  const [reloadUser, setReloadUser] = useState(false);
  const [refreshCheck, setRefreshCheck] = useState(false);

  useEffect(() => {
    setUser(isUserLoggedApi());
    setReloadUser(false);
    setRefreshCheck(true);
  }, [refreshCheck]);

  if (reloadUser) {
    setUser(isUserLoggedApi());
    setReloadUser(false);
  }

  return (
    <UserContext.Provider value={user}>
      <div>
        {user ? (
          <Routing setRefreshCheck={setRefreshCheck} />
        ) : (
          <SignInSingUp setRefreshCheck={setRefreshCheck} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
