"use client";

import DashboardLoader from "@/app/loading";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";
import { userApi } from "@/store/api/user-api";
import { formatDate } from "date-fns";

function ProfileTab() {
  const { data, isFetching } = userApi.endpoints.userDetails.useQuery();

  if (!data || isFetching) {
    return <DashboardLoader />;
  }

  return (
    <TabsContent value="profile">
      {data && !!data?.user ? (
        <div className="flex flex-col gap-1">
          <CardContentDiv title="Name" data={data.user.name} />
          <CardContentDiv title="Email" data={data.user.email} />
          <CardContentDiv
            title="DOB"
            data={formatDate(data.user.dob, "dd MMMM yyyy")}
          />
          <CardContentDiv
            title="Gender"
            data={data.user.gender}
            styles="capitalize"
          />
          <CardContentDiv title="Email Verified" data={data.user.verified} />
          <CardContentDiv
            title="Joined Us On"
            data={formatDate(data.user.createdAt, "dd MMMM yyyy")}
          />
        </div>
      ) : (
        <p className="text-center text-sm text-muted-foreground">
          No user details found.
        </p>
      )}
    </TabsContent>
  );
}

function CardContentDiv({
  title,
  data,
  styles,
}: {
  title: string;
  data: string | boolean;
  styles?: string;
}) {
  return (
    <div className="flex items-center md:justify-between gap-2 text-sm sm:hover:bg-slate-100 sm:p-[3px] sm:rounded">
      <p className="font-bold text-muted-foreground">{title}</p>
      {title !== "Email Verified" ? (
        <p className={styles ?? ""}>{data}</p>
      ) : (
        <Badge variant={data ? "secondary" : "destructive"}>
          {data ? "Yes" : "No"}
        </Badge>
      )}
    </div>
  );
}

export default ProfileTab;
