"use client";

import { useFetch } from "@client/hooks/useFetch";
import { Button, TabContent, TabList, TabTrigger, Tabs } from "@fomogram/ui";

export function ProfileTabs() {
  const { data } = useFetch({
    endpoint: "/post/myposts",
  });

  return (
    <Tabs defaultValue="posts">
      <TabList className="flex mt-6">
        <TabTrigger
          className="flex-1 py-2 border-b-2 data-[state=active]:border-blue-600"
          value="posts"
        >
          Posts
        </TabTrigger>
        <TabTrigger
          className="flex-1 py-2 border-b-2 data-[state=active]:border-blue-600"
          value="comments"
        >
          Comments
        </TabTrigger>
        <TabTrigger
          className="flex-1 py-2 border-b-2 data-[state=active]:border-blue-600"
          value="reposts"
        >
          Reposts
        </TabTrigger>
      </TabList>
      <TabContent value="posts" className="p-4">
        <div className="grid place-items-center min-h-[45vh]">
          <Button>Create a new Post</Button>
        </div>
      </TabContent>
      <TabContent value="comments" className="p-4">
        Comments tab content will be here
      </TabContent>
      <TabContent value="reposts" className="p-4">
        Reposts tab content will be here
      </TabContent>
    </Tabs>
  );
}
