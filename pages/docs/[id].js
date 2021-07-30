import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { getSession, useSession, signOut } from "next-auth/client";
import Login from "../../components/Login";
import TextEditor from "../../components/TextEditor";

function Doc() {
  const [session] = useSession();
  if (!session) return <Login />;

  const router = useRouter();
  const { id } = router.query;
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  if (!loadingSnapshot && !snapshot?.data()?.fileName) router.replace("/");

  return (
    <div>
      <header className="flex items-center justify-between p-3 pb-1">
        <span className="cursor-pointer" onClick={() => router.push("/")}>
          <Icon name="description" color="blue" size="5xl" />
        </span>
        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <span className="option">File</span>
            <span className="option">Edit</span>
            <span className="option">View</span>
            <span className="option">Insert</span>
            <span className="option">Format</span>
            <span className="option">Tools</span>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          iconOnly={false}
          rounded={false}
          block={false}
          ripple="light"
          className="hidden md:inline-flex h-10"
        >
          <Icon name="people" size="md" /> Share
        </Button>

        <img
          onClick={signOut}
          loading="lazy"
          src={session?.user?.image}
          alt=""
          className="cursor-pointer h-10 w-10 rounded-full ml-2"
        />
      </header>

      <TextEditor
        session={session}
        id={id}
        snapshotData={snapshot?.data()}
      />
    </div>
  );
}

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
