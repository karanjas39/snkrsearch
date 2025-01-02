"use client";

import DashboardLoader from "@/app/loading";
import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { default as axios } from "axios";

function ProfileTab() {
  const [user, setUser] = useState(null);

  const getUserProfile = async () => {
    const { data } = await axios.get("/api/user/details");
    return data;
  };

  useEffect(() => {
    getUserProfile().then((data) => {
      setUser(data.user);
    });
  }, []);

  if (!user) {
    return <DashboardLoader />;
  }

  return <TabsContent value="profile">Profile tab</TabsContent>;
}

export default ProfileTab;
