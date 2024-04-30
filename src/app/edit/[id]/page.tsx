import Responsive from "@/components/common/Responsive";
import EditorContainer from "@/containers/edit/EditorContainer";
import TagBoxContainer from "@/containers/edit/TagBoxContainer";
import UpdateActionButtonsContainer from "@/containers/edit/UpdateActionButtonsContainer";

type MyProps = {
  params: { id: string };
};

export default function EditPage({ params: { id } }: MyProps) {
  const postId = Number(id);
  if (Number.isNaN(postId)) {
    throw Error("params error");
  }

  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <UpdateActionButtonsContainer />
    </Responsive>
  );
}
