import { Post as PostType } from "@client/app/feeds/page";
import { useFetch } from "@client/hooks/useFetch";
import {
  Button,
  Spinner,
  TabContent,
  TabList,
  TabTrigger,
  Tabs,
} from "@fomogram/ui";
import { Post } from "./Post";

export function ProfileTabs() {
  const { data, isLoading } = useFetch<PostType[]>({
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
        <div
          className={`min-h-[45vh] ${!data ? "grid place-items-center" : ""}`}
        >
          {isLoading ? (
            <div className="text-indigo-700">
              <Spinner size={40} />
            </div>
          ) : !data ? (
            <Button>Create a new Post</Button>
          ) : (
            data.map((post) => <Post key={post.id} post={post} />)
          )}
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
