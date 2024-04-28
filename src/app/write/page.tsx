import Responsive from "@/components/common/Responsive";
import EditorContainer from "@/containers/write/EditorContainer";
import TagBoxContainer from "@/containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "@/containers/write/WriteActionButtonsContainer";

export default function WritePage() {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
}
