import Responsive from "@/components/common/Responsive";
import WriteActionButtonsContainer from "@/containers/edit/WriteActionButtonsContainer";
import EditorContainer from "@/containers/write/EditorContainer";
import TagBoxContainer from "@/containers/write/TagBoxContainer";

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
      <WriteActionButtonsContainer />
    </Responsive>
  );
}
