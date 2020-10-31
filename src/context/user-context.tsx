import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import SignUp from "../components/SignUp";
import { useAuth } from "./auth-context";

interface UserData {
  displayName: string;
  email: string;
  photoURL: string;
}

interface UserContextType {
  user: firebase.User;
  userData?: UserData;
  addUserData: (d: []) => void;
  idToken?: string;
}

const UserContext = React.createContext<UserContextType>({
  user: null,
  addUserData: () => {},
  idToken: "",
});

function UserProvider(props) {
  const [idToken, setIdToken] = useState("");
  const [userData, setUserData] = useState();
  const [checkedData, setCheckedData] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    user.getIdToken().then(setIdToken).catch(console.error);
    getUserData(user.uid).then((newData) => {
      setCheckedData(true);
      setUserData(newData);
    });
  }, [user]);

  const addUserData = (data: object[] | object) => {
    setUserData((currentData) =>
      Array.isArray(data) ? [currentData, ...data] : [currentData, data]
    );
  };

  if (!checkedData) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!userData) {
    return <SignUp idToken={idToken} user={user} setUserData={setUserData} />;
  }

  const userContextValue = { user, userData, addUserData, idToken };

  return <UserContext.Provider value={userContextValue} {...props} />;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
