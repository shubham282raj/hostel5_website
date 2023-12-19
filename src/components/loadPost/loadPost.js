import { getDocs, collection } from "firebase/firestore";
import { database } from "../../config/firebase";
import { useEffect, useState } from "react";
import { FeedPost } from "../../components/feedPost/feedPost";

export const LoadPost = ({ path }) => {
  const postsRef = collection(database, path);
  const [postsList, setPostsList] = useState(null);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post) => {
        return <FeedPost post={post} />;
      })}
    </div>
  );
};
